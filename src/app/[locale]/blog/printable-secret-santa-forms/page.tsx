import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardList, Clock, FileText, Printer, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Printable Secret Santa Forms & Lists: Free Templates (2025)',
  description: 'Free printable Secret Santa forms and lists you can use right away. Includes organizer checklist, participant info cards, wishlists, and tracking sheets.',
  keywords: 'printable secret santa, secret santa printable, secret santa list, secret santa form, secret santa template',
  openGraph: {
    title: 'Printable Secret Santa Forms & Lists: Free Templates',
    description: 'Ready-to-print Secret Santa forms: organizer checklist, wishlists, and tracking sheets',
    type: 'article',
  },
};

export default function PrintableSecretSantaForms() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <FileText className="w-4 h-4" />
            Templates
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Printer className="w-4 h-4" />
            Printable
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Printable Secret Santa Forms & Lists: Free Templates
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            10 min read
          </span>
          <span className="flex items-center gap-1.5">
            <ClipboardList className="w-4 h-4" />
            6 printable templates
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Office, family, and friends
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Need printable Secret Santa forms that are simple, clear, and actually useful? These free templates are ready to copy and print. They help you collect preferences, confirm budgets, keep track of pairings, and make your exchange feel organized and fair.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Everything below is designed for real-world use. Each form focuses on clarity, privacy, and fast setup. You can print the templates straight from this page, or copy them into a doc if you want to customize.
        </p>
      </div>

      {/* What You Get */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Organizer checklist and timeline',
              'Participant info cards (quick preferences)',
              'Full wishlist form (detailed)',
              'Gift exchange rules sheet',
              'Pairing tracker (organizer only)',
              'Gift tracking log (optional)'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Use */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use These Templates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Print or Copy',
              desc: 'Print directly from this page or copy sections into a document to customize your logo or details.'
            },
            {
              title: 'Collect Preferences',
              desc: 'Use the short card for quick exchanges or the full wishlist for more detail and better gifting.'
            },
            {
              title: 'Keep Pairings Private',
              desc: 'Only the organizer should keep the pairing tracker. Do not share it with participants.'
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Printable Secret Santa Templates</h2>
        <p className="text-gray-700 text-lg mb-8">
          These sections are designed to print cleanly. Keep margins to 0.5-1 inch for best results.
        </p>

        <div className="space-y-8">
          {/* Organizer Checklist */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">1) Organizer Checklist and Timeline</h3>
            <ul className="space-y-2 text-gray-700">
              <li>[ ] Confirm participant list and minimum of 3 people</li>
              <li>[ ] Set budget: $__________</li>
              <li>[ ] Choose exchange date: ____ / ____ / ________</li>
              <li>[ ] Set rules (see rules sheet)</li>
              <li>[ ] Collect preferences (short card or wishlist)</li>
              <li>[ ] Create pairings and keep them private</li>
              <li>[ ] Send reminders 1 week and 2 days before exchange</li>
            </ul>
          </div>

          {/* Participant Info Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2) Participant Info Card (Quick Preferences)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>Full name: ___________________________</div>
              <div>Budget limit: $__________</div>
              <div>Favorite snacks: _______________________</div>
              <div>Favorite drink: ________________________</div>
              <div>Hobbies or interests: __________________</div>
              <div>One small item I would love: ___________</div>
              <div>Allergies or dislikes: __________________</div>
              <div>Shirt size (optional): _________________</div>
            </div>
          </div>

          {/* Full Wishlist */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">3) Full Wishlist Form</h3>
            <div className="space-y-3 text-gray-700">
              <div>1) A practical gift I would use: ____________________________________________</div>
              <div>2) A fun or quirky gift: _________________________________________________</div>
              <div>3) Something for my desk or home: _______________________________________</div>
              <div>4) Food or drink preferences: ___________________________________________</div>
              <div>5) Favorite colors/themes: ______________________________________________</div>
              <div>6) Clothing sizes (optional): ____________________________________________</div>
              <div>7) Avoid buying me: _________________________________________________</div>
            </div>
          </div>

          {/* Rules Sheet */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">4) Secret Santa Rules Sheet</h3>
            <ul className="space-y-2 text-gray-700">
              <li>[ ] Budget: $__________ (do not exceed)</li>
              <li>[ ] Exchange date and time: ______________________________</li>
              <li>[ ] Keep your assigned person secret</li>
              <li>[ ] Be thoughtful and respectful</li>
              <li>[ ] Gift should fit the group setting (office, family, friends)</li>
              <li>[ ] If you cannot participate, notify organizer immediately</li>
            </ul>
          </div>

          {/* Pairing Tracker */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">5) Pairing Tracker (Organizer Only)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200">Giver</th>
                    <th className="text-left p-3 border-b border-gray-200">Recipient</th>
                    <th className="text-left p-3 border-b border-gray-200">Wishlist received</th>
                    <th className="text-left p-3 border-b border-gray-200">Gift delivered</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[...Array(6)].map((_, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="p-3">______________________</td>
                      <td className="p-3">______________________</td>
                      <td className="p-3">[ ] Yes / [ ] No</td>
                      <td className="p-3">[ ] Yes / [ ] No</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">Tip: Keep this sheet private to preserve the surprise.</p>
          </div>

          {/* Gift Tracking Log */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">6) Gift Tracking Log (Optional)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200">Participant</th>
                    <th className="text-left p-3 border-b border-gray-200">Gift idea</th>
                    <th className="text-left p-3 border-b border-gray-200">Budget range</th>
                    <th className="text-left p-3 border-b border-gray-200">Purchased</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[...Array(6)].map((_, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="p-3">______________________</td>
                      <td className="p-3">______________________</td>
                      <td className="p-3">$____ - $____</td>
                      <td className="p-3">[ ] Yes / [ ] No</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Privacy */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy and Fairness Notes</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Only collect what you need',
                desc: 'Use the quick info card if your group prefers minimal personal details.'
              },
              {
                title: 'Keep pairings private',
                desc: 'The pairing tracker is for the organizer only. Do not share it with participants.'
              },
              {
                title: 'Avoid sensitive data',
                desc: 'Do not request addresses, phone numbers, or personal financial details on paper forms.'
              }
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{tip.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Can I print these templates directly from the page?',
              a: 'Yes. Use your browser print option and set margins to 0.5-1 inch for best results.'
            },
            {
              q: 'Which form should I use for a quick exchange?',
              a: 'Use the Participant Info Card. It is short, clear, and works well for office exchanges.'
            },
            {
              q: 'How do I keep the exchange fair?',
              a: 'Set a clear budget, keep pairings private, and send reminders before the exchange date.'
            },
            {
              q: 'Should I include sizes on the forms?',
              a: 'Only if your group is comfortable sharing sizes. Mark it as optional to avoid awkwardness.'
            },
            {
              q: 'Do these work for virtual groups?',
              a: 'Yes. You can print, scan, or copy these into a document and share digitally.'
            },
            {
              q: 'What is the minimum number of participants?',
              a: 'Secret Santa works best with at least three participants.'
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
            href="/en/blog/secret-santa-questionnaire"
            className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-indigo-600 transition-colors">
              Secret Santa Questionnaire: 30+ Questions
            </h3>
            <p className="text-gray-700 mb-4">
              Share preferences and make gifting easier
            </p>
            <span className="text-indigo-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/how-to-organize-secret-santa"
            className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-emerald-600 transition-colors">
              How to Organize a Secret Santa Gift Exchange
            </h3>
            <p className="text-gray-700 mb-4">
              Step-by-step guide for smooth planning
            </p>
            <span className="text-emerald-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <ClipboardList className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Run a Smooth Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
          Use our free Secret Santa generator to create pairings, share links, and keep everything organized. No email required.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}


