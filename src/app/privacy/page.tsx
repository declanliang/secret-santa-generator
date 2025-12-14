import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy - Secret Santa Generator",
  description: "Privacy policy for Secret Santa Generator. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: December 14, 2025</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to Secret Santa Generator ("we," "our," or "us"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at secret-santa-generator.net (the "Service").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.1 Information You Provide</h3>
            <p className="mb-2">When you use our Service, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Participant Names:</strong> Names of people participating in your Secret Santa event</li>
              <li><strong>Event Details:</strong> Event type, organizer name, group name, exchange date, budget information, and custom messages</li>
              <li><strong>Email Address (Optional):</strong> Your email address if you choose to receive event links via email</li>
              <li><strong>Exclusion Rules:</strong> Information about which participants should not be paired together</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Automatically Collected Information</h3>
            <p className="mb-2">We automatically collect certain information when you visit our Service:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Usage Data:</strong> Browser type, device information, IP address, pages visited, time spent on pages</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies (see Section 5)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-2">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and maintain the Secret Santa generator Service</li>
              <li>To create Secret Santa events and randomly assign participants</li>
              <li>To send event invitation links via email (only if you provide your email)</li>
              <li>To prevent participants from being paired with excluded individuals</li>
              <li>To improve and optimize our Service</li>
              <li>To analyze usage patterns and trends</li>
              <li>To comply with legal obligations</li>
              <li>To display advertisements through Google AdSense</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
            <p className="mb-2">We use the following third-party services that may collect information:</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.1 Supabase (Database)</h3>
            <p>We use Supabase to store event data, participant information, and exclusion rules. Supabase complies with GDPR and industry-standard security practices. Learn more at <a href="https://supabase.com/privacy" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a>.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.2 Resend (Email Service)</h3>
            <p>We use Resend to send optional emails containing event links. Your email address is only used for this purpose if you choose to provide it. Learn more at <a href="https://resend.com/legal/privacy-policy" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">Resend Privacy Policy</a>.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.3 Vercel (Hosting)</h3>
            <p>Our Service is hosted on Vercel, which may collect usage logs and analytics data. Learn more at <a href="https://vercel.com/legal/privacy-policy" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.4 Google AdSense (Advertising)</h3>
            <p>We use Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Cookies and Tracking Technologies</h2>
            <p className="mb-2">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for the Service to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Service</li>
              <li><strong>Advertising Cookies:</strong> Used by Google AdSense to serve relevant ads</li>
              <li><strong>Preference Cookies:</strong> Remember your cookie consent preferences</li>
            </ul>
            <p className="mt-3">You can control cookie preferences through our cookie consent banner or your browser settings. Note that disabling certain cookies may limit Service functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
            <p>
              We retain your event data and participant information for as long as necessary to provide the Service. You can request deletion of your event data at any time by contacting us. We will delete data within 30 days of your request unless legal obligations require longer retention.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Your Privacy Rights</h2>
            <p className="mb-2">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at service@secret-santa-generator.net.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p><strong>Email:</strong> service@secret-santa-generator.net</p>
              <p><strong>Phone:</strong> +1 (213) 210-1344</p>
              <p><strong>Address:</strong> 131 Continental Dr, Suite 305, Newark, Delaware 19713, United States</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">GDPR Compliance (EU Users)</h2>
            <p>
              If you are located in the European Economic Area (EEA), we process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Consent:</strong> You have given consent for specific purposes</li>
              <li><strong>Contract Performance:</strong> Processing is necessary to provide the Service</li>
              <li><strong>Legal Obligations:</strong> Processing is required by law</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
            </ul>
          </section>

          <section className="border-t pt-6 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">CCPA Compliance (California Users)</h2>
            <p className="mb-2">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to say no to the sale of personal information</li>
              <li>Right to access your personal information</li>
              <li>Right to equal service and price</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>
        </div>

          <div className="mt-12 pt-6 border-t text-center">
            <Link href="/" className="text-violet-600 hover:text-violet-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
