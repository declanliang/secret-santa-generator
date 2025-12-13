import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Resend lazily to avoid build errors if env var is missing
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY');
  }
  return new Resend(apiKey);
};
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { eventId, email } = await request.json();

    if (!eventId || !email) {
      return NextResponse.json(
        { error: 'Event ID and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Simple rate limiting: Check if organizer email was already sent recently
    // Get the event to check if organizer_email is already set and when it was updated
    const { data: existingEvent } = await supabase
      .from('events')
      .select('organizer_email, updated_at')
      .eq('id', eventId)
      .single();

    if (existingEvent?.organizer_email) {
      // If email already exists, check if it was updated recently (within last 5 minutes)
      const updatedAt = new Date(existingEvent.updated_at);
      const now = new Date();
      const minutesSinceUpdate = (now.getTime() - updatedAt.getTime()) / 1000 / 60;

      if (minutesSinceUpdate < 5) {
        return NextResponse.json(
          { error: 'Email was already sent recently. Please wait a few minutes before sending again.' },
          { status: 429 } // 429 Too Many Requests
        );
      }
    }

    // Get event details
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('*')
      .eq('id', eventId)
      .single();

    if (eventError || !event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    // Get all participants for this event
    const { data: participants, error: participantsError } = await supabase
      .from('participants')
      .select('id, name, token')
      .eq('event_id', eventId)
      .order('order_index');

    if (participantsError) {
      return NextResponse.json(
        { error: 'Failed to fetch participants' },
        { status: 500 }
      );
    }

    // Build email content
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const universalLink = `${baseUrl}/event/${eventId}/join`;
    const organizerViewLink = `${baseUrl}/event/${eventId}/organizer`;

    // Build personalized links
    const personalizedLinks = participants
      .map((p) => `${p.name}: ${baseUrl}/event/${eventId}/join?token=${p.token}`)
      .join('\n');

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">🎁 Your Secret Santa Event is Ready!</h1>
  </div>

  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
    <h2 style="color: #667eea; margin-top: 0;">Hi ${event.organizer_name}!</h2>

    <p>Your Secret Santa event "<strong>${event.group_name}</strong>" has been created successfully! Here are your important links:</p>

    <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
      <h3 style="margin-top: 0; color: #667eea;">📋 Organizer View</h3>
      <p style="margin: 10px 0;">View all participants and manage your event:</p>
      <a href="${organizerViewLink}" style="display: inline-block; padding: 12px 24px; background: #667eea; color: white; text-decoration: none; border-radius: 6px; margin: 10px 0;">View Event Dashboard</a>
      <p style="font-size: 12px; color: #666; word-break: break-all;">${organizerViewLink}</p>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #764ba2;">
      <h3 style="margin-top: 0; color: #764ba2;">🔗 Universal Join Link</h3>
      <p style="margin: 10px 0;">Share this link with all participants:</p>
      <a href="${universalLink}" style="display: inline-block; padding: 12px 24px; background: #764ba2; color: white; text-decoration: none; border-radius: 6px; margin: 10px 0;">Join Event</a>
      <p style="font-size: 12px; color: #666; word-break: break-all;">${universalLink}</p>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
      <h3 style="margin-top: 0; color: #f59e0b;">👥 Personalized Links</h3>
      <p style="margin: 10px 0;">Send these direct links to each participant:</p>
      <div style="font-family: monospace; font-size: 13px; background: #f5f5f5; padding: 15px; border-radius: 6px; margin: 10px 0; white-space: pre-wrap; word-break: break-all;">${personalizedLinks}</div>
    </div>

    <div style="background: #fff3cd; padding: 15px; border-radius: 6px; margin: 20px 0; border: 1px solid #ffc107;">
      <p style="margin: 0; color: #856404;"><strong>💡 Tip:</strong> Save this email! You'll need these links to manage your event and share with participants.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

    <div style="font-size: 14px; color: #666;">
      <p><strong>Event Details:</strong></p>
      <ul style="padding-left: 20px;">
        <li>Exchange Date: ${new Date(event.exchange_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
        <li>Budget: $${event.budget_amount}</li>
        <li>Participants: ${participants.length}</li>
      </ul>
    </div>

    <p style="font-size: 14px; color: #666; margin-top: 30px;">Happy gifting! 🎄</p>
  </div>

  <div style="text-align: center; padding: 20px; font-size: 12px; color: #999;">
    <p>Generated by <a href="${baseUrl}" style="color: #667eea; text-decoration: none;">Secret Santa Generator</a></p>
  </div>
</body>
</html>
`;

    // Send email using Resend
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: 'Secret Santa <noreply@secret-santa-generator.net>',
      to: [email],
      subject: `Your ${event.group_name} Event is Ready!`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Update organizer email in database
    await supabase
      .from('events')
      .update({ organizer_email: email })
      .eq('id', eventId);

    return NextResponse.json({
      success: true,
      emailId: data?.id
    });

  } catch (error) {
    console.error('Error sending organizer email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
