import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, Users, ArrowRight, CheckCircle2, Laptop, Globe, Video, Mail, MessageSquare, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Virtual Secret Santa: How to Organize Remote Gift Exchange (2025 Guide)',
  description: 'Complete guide to organizing virtual Secret Santa for remote teams. Learn how to run online gift exchanges, ship gifts, and stay connected with distributed teams.',
  keywords: 'virtual secret santa, online secret santa, remote secret santa, secret santa online, virtual gift exchange, remote team secret santa',
  openGraph: {
    title: 'Virtual Secret Santa: Complete Guide for Remote Teams',
    description: 'Organize perfect virtual Secret Santa exchanges for distributed teams - step-by-step guide',
    type: 'article',
  },
};

export default function VirtualSecretSanta() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Laptop className="w-4 h-4" />
            Virtual/Remote
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Users className="w-4 h-4" />
            Remote Teams
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Globe className="w-4 h-4" />
            Complete Guide
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Virtual Secret Santa: How to Organize Remote Gift Exchange
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            16 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            For remote teams
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Updated 2025
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          The shift to remote work doesn't mean giving up beloved holiday traditions like Secret Santa. In fact, virtual Secret Santa gift exchanges have become one of the most popular ways for distributed teams to celebrate together, build connections, and maintain company culture across time zones and continents.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Organizing an online Secret Santa is easier than you might think—and in many ways, it's actually more convenient than traditional in-person exchanges. No need to coordinate a single meeting time, no awkward gift reveals in conference rooms, and participants can join from anywhere in the world. With the right tools and planning, your remote team can have a memorable gift exchange that brings everyone together.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This comprehensive guide covers everything you need to know about running a successful virtual Secret Santa: from choosing the right online tools and setting budgets to shipping logistics and creative reveal ideas. Whether your team is fully remote, hybrid, or temporarily distributed, you'll learn how to create a seamless and enjoyable experience for everyone.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#what-is" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            What is Virtual Secret Santa?
          </a>
          <a href="#step-by-step" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Step-by-Step Setup Guide
          </a>
          <a href="#tools" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Best Online Tools
          </a>
          <a href="#shipping" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Shipping & Logistics
          </a>
          <a href="#reveal-ideas" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Virtual Reveal Ideas
          </a>
          <a href="#tips" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Expert Tips
          </a>
        </div>
      </div>

      {/* What is Virtual Secret Santa */}
      <section id="what-is" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Virtual Secret Santa?</h2>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Virtual Secret Santa is an online version of the traditional holiday gift exchange designed for remote teams, distributed groups, or anyone unable to meet in person. Instead of drawing names from a hat, participants use online tools to randomly assign gift recipients. Gifts are either shipped directly to recipients' homes or exchanged during virtual meetups.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The core concept remains the same—anonymous gift-giving with a budget limit—but the logistics adapt to remote work realities. This makes it perfect for companies with distributed teams, international friend groups, or families spread across different locations.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Virtual Secret Santa</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Location Independent",
              desc: "Team members can participate from anywhere in the world. No need to be in the same office or city."
            },
            {
              title: "More Flexible Timing",
              desc: "No scheduling conflicts. People can shop and ship gifts on their own schedule across time zones."
            },
            {
              title: "Easier Organization",
              desc: "Online tools automate name drawing, send reminders, and track participation—no manual coordination needed."
            },
            {
              title: "Better Gift Selection",
              desc: "More time to research and find the perfect gift. Access to worldwide shipping options and online retailers."
            },
            {
              title: "Inclusive for Remote Workers",
              desc: "Remote employees don't feel left out of office traditions. Everyone participates equally."
            },
            {
              title: "Digital Paper Trail",
              desc: "Email confirmations and tracking numbers ensure accountability. Less chance of lost assignments."
            }
          ].map((benefit, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="step-by-step" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Guide to Organizing Virtual Secret Santa</h2>

        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Choose Your Online Tool",
              content: "Select a Secret Santa generator that works for remote teams. Look for features like email notifications, no registration requirements, and mobile compatibility. Our free Secret Santa generator is specifically designed for virtual exchanges with WhatsApp, email, and direct link sharing options.",
              icon: Laptop
            },
            {
              step: "2",
              title: "Set Clear Rules and Budget",
              content: "Establish a budget that's reasonable for all participants (typically $20-30). Decide if gifts must be physical or if digital gifts (gift cards, subscriptions) are acceptable. Set a firm deadline for gift delivery, accounting for shipping times.",
              icon: CheckCircle2
            },
            {
              step: "3",
              title: "Collect Participant Information",
              content: "Gather names, email addresses or phone numbers, and shipping addresses. Create a preference survey asking about likes, dislikes, hobbies, and allergies. Use Google Forms or the built-in questionnaire feature in your Secret Santa tool.",
              icon: Mail
            },
            {
              step: "4",
              title: "Run the Drawing",
              content: "Use your online Secret Santa generator to randomly assign gift recipients. The tool should automatically send each participant their match via email or messaging app. Ensure everyone receives their assignment before the deadline.",
              icon: Users
            },
            {
              step: "5",
              title: "Set Shopping Deadline",
              content: "Give participants 2-3 weeks to purchase and ship gifts. Account for international shipping if your team spans multiple countries. Send reminder emails one week before the deadline.",
              icon: Calendar
            },
            {
              step: "6",
              title: "Coordinate Shipping",
              content: "Participants ship gifts directly to their match's home address. Encourage tracking numbers and delivery confirmation. Consider providing a company PO Box for those uncomfortable sharing home addresses.",
              icon: Globe
            },
            {
              step: "7",
              title: "Plan the Virtual Reveal",
              content: "Schedule a video call for the gift opening ceremony. This can be during a regular team meeting or a dedicated holiday party. Allow 30-45 minutes for everyone to open gifts and share reactions.",
              icon: Video
            },
            {
              step: "8",
              title: "Host the Reveal Event",
              content: "Have participants open gifts on camera one at a time. After opening, the gift recipient guesses who their Secret Santa is. The giver reveals themselves and explains why they chose that gift. This builds connection and storytelling.",
              icon: Gift
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Online Tools */}
      <section id="tools" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Online Tools for Virtual Secret Santa</h2>

        <div className="grid gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Secret Santa Generator (Our Tool) - Best Overall</h3>
                <p className="text-green-700 font-semibold mb-3">100% Free • No Email Required • Privacy Protected</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700"><strong>No registration needed:</strong> Create exchanges instantly without accounts</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700"><strong>Multiple sharing options:</strong> WhatsApp, email, or direct links</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700"><strong>Anti-cheat system:</strong> Participants can't see other matches</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700"><strong>Exclusion rules:</strong> Prevent couples or close friends from matching</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700"><strong>Mobile friendly:</strong> Works perfectly on phones and tablets</p>
              </div>
            </div>

            <Link
              href="/en"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              Try Free Generator
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features to Look For</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Email/messaging notifications:</strong> Automatic assignment delivery</li>
              <li>• <strong>No registration required:</strong> Lower barrier to participation</li>
              <li>• <strong>Exclusion rules:</strong> Prevent specific pairings</li>
              <li>• <strong>Wishlist or preferences:</strong> Help gift-givers choose better gifts</li>
              <li>• <strong>Mobile compatibility:</strong> Access from any device</li>
              <li>• <strong>Privacy protection:</strong> Matches stay anonymous until reveal</li>
              <li>• <strong>Reminder emails:</strong> Keep participants on track with deadlines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section id="shipping" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping & Logistics for Virtual Secret Santa</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-600" />
              Shipping Options
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Option 1: Direct Home Delivery (Most Popular)</h4>
                <p className="text-gray-700 mb-2">Gift-giver ships directly to recipient's home address using:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Amazon with gift messaging (hides price, includes personal note)</li>
                  <li>Local retailers with online ordering</li>
                  <li>USPS, UPS, or FedEx for wrapped gifts</li>
                  <li>International couriers for overseas team members</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Option 2: Company Office Delivery</h4>
                <p className="text-gray-700 mb-2">Ship to company headquarters or regional offices for:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Hybrid teams with some office access</li>
                  <li>Those uncomfortable sharing home addresses</li>
                  <li>Centralized distribution if some employees meet in person</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Option 3: Digital Gifts Only</h4>
                <p className="text-gray-700 mb-2">Eliminate shipping entirely with:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Gift cards (Amazon, coffee shops, streaming services)</li>
                  <li>Subscription services (Spotify, Netflix, meal kits)</li>
                  <li>Online courses or learning platforms</li>
                  <li>Charitable donations in their name</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Shipping Best Practices</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Set Early Deadlines",
                  desc: "Give 2-3 weeks for shopping and shipping. Account for international delivery times (7-14 days) and potential delays."
                },
                {
                  title: "Provide Tracking Numbers",
                  desc: "Require givers to share tracking info with organizer. This ensures accountability and lets you follow up on delays."
                },
                {
                  title: "Budget for Shipping",
                  desc: "If the gift budget is $25, clarify whether shipping costs are separate or included. Consider $30 total ($20 gift + $10 shipping)."
                },
                {
                  title: "Address Privacy Concerns",
                  desc: "Offer alternatives for those uncomfortable sharing home addresses: PO boxes, office delivery, or digital gifts only."
                },
                {
                  title: "Consider Time Zones",
                  desc: "For reveal parties, schedule at a time that works across time zones. 3pm EST = 12pm PST = 8pm GMT. Rotate meeting times for fairness."
                }
              ].map((practice, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">{practice.title}</h4>
                    <p className="text-gray-600 text-sm">{practice.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Reveal Ideas */}
      <section id="reveal-ideas" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Creative Virtual Gift Reveal Ideas</h2>

        <p className="text-gray-700 text-lg mb-8">
          The gift reveal is the most fun part of Secret Santa. Here are creative ways to make your virtual reveal memorable:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Live Video Unboxing Party",
              desc: "Schedule a Zoom/Teams call where everyone opens gifts together. Go around the room, with each person opening their gift on camera while others watch. After opening, they guess who their Secret Santa is before the reveal.",
              icon: Video
            },
            {
              title: "Recorded Video Messages",
              desc: "For teams across time zones, have givers record a short video explaining their gift choice. Recipients open gifts privately, then watch the video message. Share reactions in a Slack channel.",
              icon: MessageSquare
            },
            {
              title: "Social Media Reveal",
              desc: "Create a private Instagram or Facebook group. Participants post photos/videos of their gifts with thank-you messages. Givers respond in comments to reveal themselves. Creates an ongoing celebration over several days.",
              icon: Globe
            },
            {
              title: "Mystery Scavenger Hunt",
              desc: "Giver sends a series of clues via email or messaging app. Each clue reveals something about the gift or the giver's identity. Final clue leads to the gift reveal. Adds extra entertainment value.",
              icon: Gift
            },
            {
              title: "Virtual Holiday Party Game",
              desc: "Combine gift opening with online games (trivia, Pictionary, etc.). Open one gift between each game round. Stretches the fun over 60-90 minutes instead of rushing through.",
              icon: Users
            },
            {
              title: "Themed Background Contest",
              desc: "Everyone decorates their video background with holiday themes. Award prizes for creativity. Creates festive atmosphere and makes the video call feel more like a party than a meeting.",
              icon: Laptop
            }
          ].map((idea, idx) => {
            const Icon = idea.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl">{idea.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{idea.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expert Tips */}
      <section id="tips" className="mb-16">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Tips for Successful Virtual Secret Santa</h2>

          <div className="space-y-4">
            {[
              {
                title: "Survey Gift Preferences Early",
                desc: "Send a questionnaire asking about hobbies, favorite snacks, colors, allergies, and interests. Include questions like 'What's something under $25 you'd love to receive?' This helps gift-givers tremendously, especially for people they don't know well."
              },
              {
                title: "Appoint a Backup Organizer",
                desc: "Have a co-organizer who knows all the assignments. If someone drops out last minute, the backup can quickly arrange a replacement gift. This prevents anyone from being left without a gift."
              },
              {
                title: "Set Communication Expectations",
                desc: "Clarify how participants should communicate: Can they email their match anonymously with questions? Should all questions go through the organizer? Clear guidelines prevent confusion and protect anonymity."
              },
              {
                title: "Account for International Participants",
                desc: "If your team spans countries, consider regional groups (Europe, Americas, Asia) to reduce shipping costs and complexity. Or specify digital gifts only for international exchanges."
              },
              {
                title: "Make Participation Optional",
                desc: "Not everyone celebrates Christmas or can afford gifts. Make participation voluntary and don't pressure anyone. Those who opt out shouldn't feel excluded from other holiday activities."
              },
              {
                title: "Create a Shared Wishlist Channel",
                desc: "Use a Slack channel or shared document where people casually mention things they like throughout the year. When Secret Santa time comes, gift-givers have a ready-made reference."
              },
              {
                title: "Send Multiple Reminders",
                desc: "Send reminders at 2 weeks, 1 week, and 3 days before the shipping deadline. Include the recipient's name, shipping address, and preferences in each reminder. People are busy and forget easily."
              },
              {
                title: "Plan for Technical Issues",
                desc: "Have a backup plan if video calls fail. Create a shared folder where people can upload unboxing videos. This ensures everyone can participate even with internet problems."
              }
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{tip.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Timeline for Virtual Secret Santa</h2>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {[
              { time: "4 weeks before", task: "Announce Secret Santa and gauge interest", details: "Send email explaining the exchange, budget, and deadlines. Collect RSVPs." },
              { time: "3 weeks before", task: "Collect addresses and preferences", details: "Send preference survey via Google Forms. Gather shipping addresses and dietary restrictions/allergies." },
              { time: "2.5 weeks before", task: "Run the drawing and send assignments", details: "Use Secret Santa generator to assign matches. Participants receive their assignments via email/WhatsApp." },
              { time: "2 weeks before", task: "Shopping period begins", details: "Participants start shopping for gifts. Send reminder with recipient's preferences and shipping address." },
              { time: "1 week before", task: "Shopping deadline reminder", details: "Email reminder that gifts should be purchased and shipped by this date." },
              { time: "3 days before reveal", task: "Final shipping reminder", details: "Last chance to ship gifts. Remind participants to send tracking numbers to organizer." },
              { time: "Reveal day", task: "Virtual gift opening party", details: "Schedule 45-60 minute video call. Everyone opens gifts, guesses givers, and shares reactions." },
              { time: "Day after", task: "Follow-up and thank yous", details: "Send thank-you message to all participants. Share photos from the video call." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-32">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.task}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: "How does virtual Secret Santa work for remote teams?",
              a: "Virtual Secret Santa uses online tools to randomly assign gift recipients instead of drawing names from a hat. Participants receive their match via email or messaging app. Gifts are shipped directly to recipients' homes or exchanged during video calls. The reveal happens on a scheduled video meeting where everyone opens gifts together."
            },
            {
              q: "What's the best budget for virtual Secret Santa?",
              a: "Most virtual Secret Santa exchanges set a budget of $20-30, which is enough for a thoughtful gift plus shipping costs. For international teams with high shipping costs, consider $15-20 with digital gifts allowed, or separate the gift budget from shipping costs (e.g., $25 total: $20 for gift + $5 for shipping)."
            },
            {
              q: "How do you ship Secret Santa gifts to remote employees?",
              a: "The most common method is direct home delivery—the gift-giver ships directly to their match's home address using Amazon, local retailers, or postal services. Alternatively, gifts can be sent to a company office for those with access, or you can opt for digital gifts only (gift cards, subscriptions) to eliminate shipping entirely."
            },
            {
              q: "Can you do Secret Santa online without emails?",
              a: "Yes! Modern Secret Santa generators like ours support multiple sharing methods beyond email. You can share assignments via WhatsApp, direct messaging apps, or unique personal links that participants access directly. This is especially useful for teams that primarily communicate through chat platforms."
            },
            {
              q: "What are good virtual Secret Santa gift ideas?",
              a: "Great virtual Secret Santa gifts include: items available on Amazon for easy shipping, coffee or tea samplers, cozy items (blankets, socks), desk accessories for home offices, self-care products (candles, bath bombs), gourmet snacks, books, or digital gifts like streaming subscriptions and gift cards. Focus on items that ship easily and don't require knowing exact sizes."
            },
            {
              q: "How do you reveal Secret Santa gifts virtually?",
              a: "The most popular method is a live video call where everyone opens gifts together, going around one at a time. After opening, the recipient guesses their Secret Santa before they reveal themselves. Alternative methods include pre-recorded video messages, social media reveals in a private group, or creating an unboxing video to share asynchronously for teams across time zones."
            },
            {
              q: "What if someone's gift doesn't arrive on time for virtual Secret Santa?",
              a: "Build buffer time into your schedule—set the shipping deadline 3-5 days before the reveal party. If a gift is delayed, the giver can share a photo or description during the reveal, with the physical gift arriving later. Always require tracking numbers so you can follow up on delays and keep recipients informed."
            },
            {
              q: "How do you handle different time zones for virtual Secret Santa?",
              a: "For live reveal parties, choose a time that's reasonable for most participants (even if not perfect for everyone) and rotate meeting times if you do this annually. Alternatively, use asynchronous reveals where people record unboxing videos to share in a group chat or private social media group, allowing everyone to participate on their own schedule."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 text-xl mb-3">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/en/blog/how-to-organize-secret-santa"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              How to Organize a Secret Santa Gift Exchange
            </h3>
            <p className="text-gray-700 mb-4">
              Complete guide for both in-person and virtual exchanges
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-for-coworkers"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              Secret Santa Gifts for Coworkers
            </h3>
            <p className="text-gray-700 mb-4">
              Professional gift ideas perfect for remote teams
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-under-20"
            className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-purple-600 transition-colors">
              Secret Santa Gifts Under $20
            </h3>
            <p className="text-gray-700 mb-4">
              Budget-friendly gifts perfect for virtual exchanges
            </p>
            <span className="text-purple-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/how-does-secret-santa-work"
            className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-orange-600 transition-colors">
              How Does Secret Santa Work?
            </h3>
            <p className="text-gray-700 mb-4">
              Complete beginner's guide to Secret Santa basics
            </p>
            <span className="text-orange-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Laptop className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Virtual Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
          Use our free Secret Santa generator designed specifically for remote teams. No email required, instant setup, and perfect for distributed groups across any distance!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          Start Virtual Secret Santa Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
