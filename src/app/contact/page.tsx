import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us - Secret Santa Generator",
  description: "Get in touch with Secret Santa Generator. We're here to help with any questions or support needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mb-8">Have questions? We're here to help!</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Whether you have a question about features, need technical support, or just want to provide feedback, our team is ready to answer all your questions.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="bg-violet-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-600 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:service@secret-santa-generator.net"
                  className="text-violet-600 hover:text-violet-700 break-all"
                >
                  service@secret-santa-generator.net
                </a>
                <p className="text-sm text-gray-600 mt-2">We typically respond within 24 hours</p>
              </div>

              {/* Phone */}
              <div className="bg-violet-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-600 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a
                  href="tel:+12132101344"
                  className="text-violet-600 hover:text-violet-700"
                >
                  +1 (213) 210-1344
                </a>
                <p className="text-sm text-gray-600 mt-2">Monday - Friday, 9am - 5pm EST</p>
              </div>

              {/* Address */}
              <div className="bg-violet-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-600 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700 text-sm">
                  131 Continental Dr<br />
                  Suite 305<br />
                  Newark, Delaware 19713<br />
                  United States
                </p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 mb-4">
              Before reaching out, you might find your answer in our <Link href="/#faq" className="text-violet-600 hover:underline">FAQ section</Link> on the homepage. We've compiled answers to the most common questions about our Secret Santa generator.
            </p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Support Topics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-sm text-gray-600">
                  Issues with creating events, sharing links, or accessing participant assignments
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Feature Requests</h3>
                <p className="text-sm text-gray-600">
                  Suggestions for new features or improvements to existing functionality
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Privacy & Data</h3>
                <p className="text-sm text-gray-600">
                  Questions about data handling, privacy policy, or deletion requests
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                <p className="text-sm text-gray-600">
                  Partnership opportunities, media inquiries, or other questions
                </p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Inquiries</h2>
            <p className="text-gray-700">
              For business partnerships, advertising opportunities, or media inquiries, please contact us via email with "Business Inquiry" in the subject line. We'll get back to you as soon as possible.
            </p>
          </section>

          <section className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-lg border border-violet-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Tips for Contacting Us</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Include your event ID if you're reporting an issue with a specific Secret Santa event</li>
              <li>✓ Provide screenshots if you're experiencing a technical problem</li>
              <li>✓ Be specific about what you need help with so we can assist you faster</li>
              <li>✓ Check your spam folder if you don't receive a response within 48 hours</li>
            </ul>
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
