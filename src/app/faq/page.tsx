import { Metadata } from 'next';
import Link from 'next/link';
import { FAQ } from '@/components/seo/FAQ';

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Secret Santa Generator",
  description: "Find answers to common questions about using Secret Santa Generator. Learn how to create events, share invitations, and more.",
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home Button */}
        <div className="mb-6">
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

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">Everything you need to know about Secret Santa Generator</p>

          <FAQ />

          <div className="mt-12 pt-6 border-t">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Still Have Questions?</h2>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? We're here to help!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
