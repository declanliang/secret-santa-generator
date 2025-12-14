import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us - Secret Santa Generator",
  description: "Learn about Secret Santa Generator - the free, easy-to-use platform for organizing gift exchanges.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">About Us</h1>
        <p className="text-sm text-gray-500 mb-8">Making gift exchanges simple and fun</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p>
              Secret Santa Generator was created to make organizing gift exchanges effortless and enjoyable for everyone. We believe that the holiday spirit should be about bringing people together, not stressing over complicated logistics.
            </p>
            <p className="mt-3">
              Our platform eliminates the hassle of manual name drawing, tracking exclusions, and coordinating participants. Whether you're organizing a Secret Santa for your office, family, friends, or community group, we've got you covered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Do</h2>
            <p className="mb-3">
              We provide a free, no-registration Secret Santa generator that helps you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create unlimited Secret Santa events in minutes</li>
              <li>Randomly assign participants with complete anonymity</li>
              <li>Set exclusion rules to prevent specific pairings</li>
              <li>Share invitations via WhatsApp, email, or direct links</li>
              <li>Ensure fairness with our anti-cheat system</li>
              <li>Organize events without requiring email addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-semibold text-violet-900 mb-2">100% Free</h3>
                <p className="text-sm">No hidden fees, no premium plans. Everyone deserves easy access to great tools.</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-semibold text-violet-900 mb-2">Privacy First</h3>
                <p className="text-sm">We protect your data and ensure complete anonymity in Secret Santa assignments.</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-semibold text-violet-900 mb-2">No Registration</h3>
                <p className="text-sm">Start creating events immediately without signing up or providing personal information.</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-semibold text-violet-900 mb-2">Mobile Friendly</h3>
                <p className="text-sm">Works perfectly on any device - phones, tablets, and computers.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Values</h2>
            <ul className="space-y-3">
              <li>
                <strong className="text-gray-900">Simplicity:</strong> We believe great tools should be easy to use, without complicated instructions or learning curves.
              </li>
              <li>
                <strong className="text-gray-900">Accessibility:</strong> Everyone should have access to quality tools, regardless of budget or technical expertise.
              </li>
              <li>
                <strong className="text-gray-900">Privacy:</strong> We respect your privacy and only collect the minimum data necessary to provide our service.
              </li>
              <li>
                <strong className="text-gray-900">Reliability:</strong> Our platform is built to work flawlessly when you need it most.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Story</h2>
            <p>
              Secret Santa Generator was born out of a simple need: organizing a fair and fun gift exchange without the usual headaches. After years of managing Secret Santa events manually with paper slips and spreadsheets, we knew there had to be a better way.
            </p>
            <p className="mt-3">
              We built this platform to solve real problems we experienced ourselves. Today, thousands of users trust us to organize their Secret Santa events, from small family gatherings to large corporate parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Perfect for Every Occasion</h2>
            <p className="mb-3">
              While we started with Christmas Secret Santa, our platform works for any gift exchange occasion:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Office holiday parties and team building events</li>
              <li>Family Christmas gatherings and reunions</li>
              <li>Friend group celebrations and parties</li>
              <li>School classrooms and club activities</li>
              <li>Virtual Secret Santa for remote teams</li>
              <li>Hanukkah, New Year, birthday exchanges, and more</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-3">Have questions, feedback, or need support? We'd love to hear from you!</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:service@secret-santa-generator.net" className="text-violet-600 hover:underline">service@secret-santa-generator.net</a></p>
                <p><strong>Phone:</strong> +1 (213) 210-1344</p>
                <p><strong>Business Address:</strong><br />
                131 Continental Dr, Suite 305<br />
                Newark, Delaware 19713<br />
                United States</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Join Thousands of Happy Organizers</h2>
            <p>
              Whether you're organizing your first Secret Santa or your fiftieth, we're here to make it smooth and stress-free. Join the thousands of organizers who trust Secret Santa Generator to create memorable gift exchanges.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-colors"
              >
                Create Your Secret Santa Now
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t text-center">
          <Link href="/" className="text-violet-600 hover:text-violet-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
