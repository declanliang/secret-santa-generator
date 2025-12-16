import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Users, Gift, Share2, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "How to Organize a Secret Santa Gift Exchange in 2025 - Complete Guide",
  description: "Learn how to organize a perfect Secret Santa gift exchange in 5 easy steps. Includes video tutorial, tips, and a free online generator tool.",
  keywords: "how to organize secret santa, secret santa organizer, secret santa planning, gift exchange guide, secret santa tips",
  alternates: {
    canonical: '/blog/how-to-organize-secret-santa',
  },
  openGraph: {
    title: "How to Organize a Secret Santa Gift Exchange - Complete Guide",
    description: "Step-by-step guide to organizing the perfect Secret Santa. Watch our video tutorial and use our free generator tool.",
    type: "article",
    url: "https://secret-santa-generator.net/blog/how-to-organize-secret-santa",
  },
};

export default function HowToOrganizeSecretSantaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full font-medium">Guide</span>
              <span>•</span>
              <time dateTime="2024-12-15">December 15, 2024</time>
              <span>•</span>
              <span>8 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How to Organize a Secret Santa Gift Exchange: Complete Guide for 2025
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Planning a Secret Santa gift exchange doesn't have to be stressful. Follow this comprehensive
              guide to organize a perfect gift exchange for your office, family, or friend group in just 5 easy steps.
            </p>
          </header>

          {/* Video Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                📹
              </span>
              Watch the Complete Tutorial
            </h2>

            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/16_im20XCyM"
                title="How to Organize Secret Santa Gift Exchange"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-sm text-gray-600 mt-4 text-center">
              ⏱️ 5-minute video tutorial showing you exactly how to set up your Secret Santa
            </p>
          </section>

          {/* Main Content */}
          <section className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-violet-50 border-l-4 border-violet-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 mb-0">
                <strong>Quick Summary:</strong> This guide will teach you how to organize a Secret Santa
                gift exchange from start to finish. Whether you're planning for 5 people or 50, you'll learn
                the best practices, common mistakes to avoid, and how to use free tools to make the process
                effortless.
              </p>
            </div>

            {/* What is Secret Santa */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What is Secret Santa?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Secret Santa is a popular gift exchange tradition where each participant is randomly assigned
              another person to give a gift to. The catch? The identity of the gift giver remains secret
              until the gift is opened, adding an element of surprise and fun to the exchange.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Each person buys ONE gift for ONE person</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Budget-friendly (typically $20-$50)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Perfect for groups of 5-50 people</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Gift giver stays anonymous until reveal</span>
                </li>
              </ul>
            </div>

            {/* Step-by-Step Guide */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              5 Steps to Organize Secret Santa
            </h2>

            {/* Step 1 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Gather Your Participants
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Start by creating a list of everyone who wants to participate. You need at least
                    3 people for Secret Santa to work, but it's most fun with 5-20 participants.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg ml-16">
                <h4 className="font-semibold text-gray-900 mb-3">💡 Pro Tips:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Send out invitations 2-3 weeks before the gift exchange</li>
                  <li>• Use a group chat (WhatsApp, Slack, Teams) to coordinate</li>
                  <li>• Collect participant names and email addresses (optional)</li>
                  <li>• Ask about gift preferences or restrictions upfront</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Set the Rules & Budget
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Establish clear guidelines so everyone is on the same page. This prevents confusion
                    and ensures a fair exchange.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg ml-16">
                <h4 className="font-semibold text-gray-900 mb-3">📋 Essential Rules:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Budget:</strong> $20, $30, $50 (choose one)</li>
                  <li>• <strong>Deadline:</strong> Set a gift purchase deadline</li>
                  <li>• <strong>Exchange Date:</strong> When and where to exchange gifts</li>
                  <li>• <strong>Restrictions:</strong> No couples drawing each other, no duplicate gifts, etc.</li>
                  <li>• <strong>Theme:</strong> Funny gifts, practical items, homemade, etc. (optional)</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Draw Names (The Easy Way!)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Forget the hat method! Use a free online Secret Santa generator to randomly assign
                    gift recipients. It's faster, more secure, and prevents cheating.
                  </p>
                </div>
              </div>

              <div className="bg-violet-50 border-2 border-violet-200 p-6 rounded-lg ml-16">
                <h4 className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Use Our Free Secret Santa Generator
                </h4>
                <p className="text-gray-700 mb-4 text-sm">
                  Our tool makes organizing Secret Santa effortless:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>100% Free & No Registration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Anonymous Drawing - No One Can Cheat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Share Via WhatsApp, Email, or Link</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Set Exclusion Rules (couples, siblings, etc.)</span>
                  </li>
                </ul>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
                >
                  Try Free Generator Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Share Assignments with Participants
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once names are drawn, each participant needs to privately find out who they're buying for.
                    Our generator creates unique links for each person.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg ml-16">
                <h4 className="font-semibold text-gray-900 mb-3">📤 Distribution Methods:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>WhatsApp/Telegram:</strong> Send personal links via chat</li>
                  <li>• <strong>Email:</strong> Automated emails with recipient info</li>
                  <li>• <strong>Direct Link:</strong> Share unique URLs individually</li>
                  <li>• <strong>QR Code:</strong> Print and let participants scan (for in-person events)</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Buy Gifts & Plan the Exchange
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Give participants 1-2 weeks to shop for gifts. Plan a fun gift exchange party where
                    everyone reveals their Secret Santa identity!
                  </p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg ml-16">
                <h4 className="font-semibold text-gray-900 mb-3">🎁 Gift Exchange Ideas:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Traditional:</strong> Everyone opens gifts one by one, guessing the giver</li>
                  <li>• <strong>White Elephant:</strong> Add stealing/swapping rules for more fun</li>
                  <li>• <strong>Virtual:</strong> Ship gifts and open via video call (for remote teams)</li>
                  <li>• <strong>Themed:</strong> Ugly sweater party, holiday potluck, etc.</li>
                </ul>
              </div>
            </div>

            {/* Common Mistakes */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              5 Common Mistakes to Avoid
            </h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>❌ Not Setting a Budget:</strong> Leads to awkward situations when gifts vary wildly in value.
                </li>
                <li>
                  <strong>❌ Using the "Hat Method":</strong> Someone always peeks or draws themselves.
                </li>
                <li>
                  <strong>❌ Forgetting Exclusions:</strong> Couples, siblings, or roommates drawing each other defeats the fun.
                </li>
                <li>
                  <strong>❌ Last-Minute Planning:</strong> Give people at least 2 weeks to prepare.
                </li>
                <li>
                  <strong>❌ No Gift Preferences:</strong> Ask about allergies, hobbies, or wish lists to avoid unsuitable gifts.
                </li>
              </ul>
            </div>

            {/* Tips for Different Groups */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Secret Santa for Different Groups
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-violet-600" />
                  Office/Corporate
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Budget: $20-$30</li>
                  <li>• Professional gifts (desk items, coffee, books)</li>
                  <li>• Avoid controversial themes</li>
                  <li>• Coordinate with HR for timing</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-violet-600" />
                  Family
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Budget: $30-$50</li>
                  <li>• Personalized gifts</li>
                  <li>• Include kids with separate drawing</li>
                  <li>• Plan during holiday gatherings</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Share2 className="w-6 h-6 text-violet-600" />
                  Friends
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Budget: $15-$25</li>
                  <li>• Funny or inside joke gifts</li>
                  <li>• Flexible rules</li>
                  <li>• Consider themed exchanges</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-violet-600" />
                  Virtual/Remote
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Budget: $20-$30 + shipping</li>
                  <li>• Ship gifts or use gift cards</li>
                  <li>• Video call for reveal</li>
                  <li>• Use our generator for easy coordination</li>
                </ul>
              </div>
            </div>

            {/* Conclusion & CTA */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-lg mt-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Organize Your Secret Santa?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Use our free Secret Santa generator to create your gift exchange in less than 5 minutes.
                No email required, completely anonymous, and perfect for any group size.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-violet-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Secret Santa Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How many people do you need for Secret Santa?
                </h3>
                <p className="text-gray-700">
                  You need a minimum of 3 people, but Secret Santa works best with 5-20 participants.
                  For larger groups (20+), consider splitting into multiple exchanges.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's a good Secret Santa budget?
                </h3>
                <p className="text-gray-700">
                  The most common budgets are $20 (casual), $30 (standard), or $50 (generous).
                  Choose based on your group's financial situation and relationship.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I prevent certain people from drawing each other?
                </h3>
                <p className="text-gray-700">
                  Yes! Our Secret Santa generator lets you set exclusion rules so couples, siblings,
                  or roommates won't draw each other.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  When should I organize Secret Santa?
                </h3>
                <p className="text-gray-700">
                  Start 2-3 weeks before your gift exchange date. This gives participants enough time
                  to shop without feeling rushed.
                </p>
              </div>
            </div>
          </section>

          {/* Author & Date */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-900">Secret Santa Generator Team</p>
                <p>Last updated: December 15, 2024</p>
              </div>
              <Link
                href="/"
                className="text-violet-600 hover:text-violet-700 font-medium"
              >
                Try Our Free Generator →
              </Link>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/faq"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Secret Santa FAQ
            </h3>
            <p className="text-gray-600 text-sm">
              Get answers to all your Secret Santa questions
            </p>
          </Link>

          <Link
            href="/contact"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Need Help?
            </h3>
            <p className="text-gray-600 text-sm">
              Contact us for support organizing your gift exchange
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
