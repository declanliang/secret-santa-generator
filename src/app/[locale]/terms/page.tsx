import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms of Service - Secret Santa Generator",
  description: "Terms of Service for Secret Santa Generator. Please read these terms carefully before using our service.",
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: December 14, 2025</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              Welcome to Secret Santa Generator. By accessing or using our website at secret-santa-generator.net (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="mt-3">
              We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
            <p>
              Secret Santa Generator is a free online platform that allows users to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Create Secret Santa gift exchange events</li>
              <li>Add participants and set exclusion rules</li>
              <li>Randomly assign Secret Santa pairings</li>
              <li>Share invitation links with participants</li>
              <li>Organize and manage gift exchange events</li>
            </ul>
            <p className="mt-3">
              The Service is provided free of charge and does not require user registration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.1 Eligibility</h3>
            <p>
              You must be at least 13 years old to use this Service. If you are under 18, you must have permission from a parent or guardian.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.2 Accurate Information</h3>
            <p>
              You agree to provide accurate information when creating Secret Santa events. You are responsible for the accuracy of participant names and event details you enter.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.3 Prohibited Uses</h3>
            <p className="mb-2">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Spam or send unsolicited communications</li>
              <li>Attempt to gain unauthorized access to the Service or related systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use automated tools (bots, scrapers) without permission</li>
              <li>Collect personal information of other users without consent</li>
              <li>Impersonate any person or entity</li>
              <li>Upload viruses or malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Privacy and Data</h2>
            <p>
              Your use of the Service is also governed by our <a href="/privacy" className="text-violet-600 hover:underline">Privacy Policy</a>. Please review it to understand how we collect, use, and protect your information.
            </p>
            <p className="mt-3">
              By using the Service, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p>
              The Service, including all content, features, functionality, and design, is owned by Secret Santa Generator and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-3">
              You may not copy, modify, distribute, sell, or lease any part of the Service without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. User-Generated Content</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.1 Your Content</h3>
            <p>
              You retain ownership of any content you create through the Service (participant names, event details, messages). By using the Service, you grant us a license to store and process this content to provide the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.2 Content Responsibility</h3>
            <p>
              You are solely responsible for the content you create. We do not monitor or control user-generated content and are not responsible for its accuracy, appropriateness, or legality.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.3 Content Removal</h3>
            <p>
              We reserve the right to remove any content that violates these Terms or is otherwise objectionable, without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">7.1 "As Is" Service</h3>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">7.2 No Guarantee of Availability</h3>
            <p>
              We do not guarantee that the Service will be available at all times, error-free, or free from viruses or other harmful components. We may suspend or discontinue the Service at any time without notice.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">7.3 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SECRET SANTA GENERATOR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the Service</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Secret Santa Generator, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your access to or use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you create or share through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Third-Party Services</h2>
            <p>
              The Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="mt-3">
              You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party content, goods, or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="mt-3">
              Upon termination, your right to use the Service will cease immediately. You may also terminate your use of the Service at any time by ceasing to access it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
            <p className="mt-3">
              Any disputes arising from these Terms or the Service shall be resolved in the courts of Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Dispute Resolution</h2>
            <p>
              If you have any dispute with us, you agree to first contact us at service@secret-santa-generator.net and attempt to resolve the dispute informally.
            </p>
            <p className="mt-3">
              If we cannot resolve the dispute informally, any legal action must be brought in the courts of Delaware, and both parties consent to the exclusive jurisdiction of those courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">13. Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. The invalid or unenforceable provision will be replaced with a valid provision that most closely matches the intent of the original provision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Secret Santa Generator regarding the use of the Service and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">15. Changes to the Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">16. Contact Information</h2>
            <p className="mb-2">If you have any questions about these Terms, please contact us:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p><strong>Email:</strong> service@secret-santa-generator.net</p>
              <p><strong>Phone:</strong> +1 (213) 210-1344</p>
              <p><strong>Address:</strong> 131 Continental Dr, Suite 305, Newark, Delaware 19713, United States</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Acknowledgment</h2>
            <p>
              BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
            </p>
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
