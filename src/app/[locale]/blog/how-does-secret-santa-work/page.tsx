import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, Users, ArrowRight, CheckCircle2, HelpCircle, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Does Secret Santa Work? Complete Beginner\'s Guide (2025)',
  description: 'Learn how Secret Santa works with our complete step-by-step guide. Discover the rules, traditions, and best practices for organizing the perfect gift exchange.',
  keywords: 'how does secret santa work, how secret santa works, what is secret santa, secret santa rules, secret santa explained, secret santa meaning',
  openGraph: {
    title: 'How Does Secret Santa Work? Complete Beginner\'s Guide',
    description: 'Everything you need to know about Secret Santa - from basic rules to advanced tips',
    type: 'article',
  },
};

export default function HowDoesSecretSantaWork() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            Complete Guide
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <HelpCircle className="w-4 h-4" />
            Beginner Friendly
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How Does Secret Santa Work? Complete Beginner's Guide
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            15 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            For everyone
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Step by step
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Secret Santa is one of the most beloved holiday gift exchange traditions worldwide. Whether you're participating in an office party, family gathering, or friend group celebration, understanding how Secret Santa works ensures everyone has a memorable and enjoyable experience.
        </p>

        <p className="text-gray-700 leading-relaxed">
          At its core, Secret Santa is simple: participants draw names randomly and give gifts anonymously. However, there's more strategy, etiquette, and fun involved than you might think. This comprehensive guide covers everything from basic rules to advanced organization tips, ensuring your Secret Santa exchange runs smoothly.
        </p>

        <p className="text-gray-700 leading-relaxed">
          By the end of this guide, you'll understand exactly how Secret Santa works, be able to organize your own exchange confidently, and know all the unwritten rules that make the tradition special. Let's dive into the wonderful world of Secret Santa!
        </p>
      </div>

      {/* What is Secret Santa */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-8 border border-red-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Gift className="w-8 h-8 text-red-600" />
            What is Secret Santa?
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Secret Santa</strong> (also known as Kris Kringle in some regions) is a gift exchange tradition where participants are randomly assigned another person to give a gift to. The key element: the gift-giver's identity remains anonymous until the gift is opened or revealed.
            </p>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 text-xl mb-3">The Core Principles:</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Random Assignment:</strong> Names are drawn randomly to ensure fairness</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Anonymity:</strong> Gift-givers remain secret until the reveal</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Budget Limit:</strong> Everyone spends approximately the same amount</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Single Gift:</strong> Each person gives one gift and receives one gift</p>
                </div>
              </div>
            </div>

            <p>
              The tradition originated in Scandinavia and has spread globally, becoming particularly popular in workplaces, schools, and social groups. It solves the problem of buying gifts for large groups—instead of everyone buying for everyone, each person only needs to find one thoughtful gift.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How Secret Santa Works: Step-by-Step Process</h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Gather Participants</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The first step is assembling your Secret Santa group. You need a minimum of 3 people, though 5-15 participants is the sweet spot for most exchanges.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Best Practices:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Create a participant list with names and contact information</li>
                    <li>Confirm everyone can attend the gift exchange event</li>
                    <li>Ensure all participants understand the commitment</li>
                    <li>Set a deadline for confirming participation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Establish the Rules</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Before drawing names, agree on the key parameters. Clear rules prevent confusion and disappointment.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Essential Rules to Define:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li><strong>Budget:</strong> Typical range is $20-30, but adjust for your group</li>
                    <li><strong>Gift Type:</strong> Serious gifts, funny gifts, or a mix?</li>
                    <li><strong>Exchange Date:</strong> When and where will gifts be revealed?</li>
                    <li><strong>Gift Restrictions:</strong> Any items to avoid? (alcohol, food allergies)</li>
                    <li><strong>Exclusions:</strong> Can couples/family members be paired together?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Draw Names</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This is where the "secret" begins. Each participant is randomly assigned someone to buy a gift for.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Traditional Methods:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2 mb-4">
                    <li><strong>Hat Method:</strong> Write names on paper, fold, put in hat, each person draws</li>
                    <li><strong>Problem:</strong> Can draw yourself or violate exclusion rules</li>
                  </ul>
                  <p className="text-gray-700"><strong>Modern Solution:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li><strong>Online Generator:</strong> Use tools like our <Link href="/en" className="text-purple-600 hover:underline font-semibold">free Secret Santa generator</Link></li>
                    <li>Automatic randomization with exclusion rules</li>
                    <li>Email or link distribution to each participant</li>
                    <li>No possibility of drawing yourself</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-orange-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Share Gift Preferences (Optional)</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  While not mandatory, sharing wishlists or preferences makes gift-giving easier and more successful.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>What to Share:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Hobbies and interests (coffee lover, reader, tech enthusiast)</li>
                    <li>Favorite colors or styles</li>
                    <li>Things to avoid (allergies, dislikes)</li>
                    <li>General preferences (practical vs. funny gifts)</li>
                  </ul>
                  <p className="text-gray-700 mt-3"><strong>Pro Tip:</strong> Our Secret Santa generator includes a built-in questionnaire feature where participants can share their preferences anonymously.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Purchase and Wrap Gifts</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Now comes the fun part—finding the perfect gift! Stay within budget and keep it secret.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Shopping Guidelines:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Shop early to avoid last-minute stress</li>
                    <li>Consider their preferences and personality</li>
                    <li>Wrap the gift nicely—presentation matters!</li>
                    <li>Don't include any identifiable information (receipts, personal notes)</li>
                    <li>Add a gift tag that says "To: [Name]" but no "From:"</li>
                  </ul>
                  <p className="text-gray-700 mt-3"><strong>Need Ideas?</strong> Check our comprehensive gift guides for <Link href="/en/blog/secret-santa-gifts-for-coworkers" className="text-red-600 hover:underline font-semibold">coworkers</Link>, <Link href="/en/blog/secret-santa-gifts-for-men" className="text-red-600 hover:underline font-semibold">men</Link>, or <Link href="/en/blog/secret-santa-gifts-under-20" className="text-red-600 hover:underline font-semibold">budget-friendly options</Link>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-bold text-xl">6</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Gift Exchange Event</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The big day! This is when all the gifts are revealed and the fun truly begins.
                </p>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Common Exchange Formats:</strong></p>
                  <div className="space-y-3 mt-3">
                    <div>
                      <p className="font-semibold text-gray-900">Option 1: All Gifts at Once</p>
                      <p className="text-gray-700 text-sm">Place all wrapped gifts in a central location. Each person finds their gift (look for their name on the tag) and opens simultaneously. Chaotic but exciting!</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Option 2: One by One</p>
                      <p className="text-gray-700 text-sm">Go around the circle. Each person opens their gift individually while everyone watches. Builds suspense and allows for appreciation.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Option 3: Guessing Game</p>
                      <p className="text-gray-700 text-sm">After opening, recipients try to guess who their Secret Santa was before the reveal. Adds an extra layer of fun!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-pink-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold text-xl">7</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Big Reveal</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The moment everyone's been waiting for—revealing who bought what for whom!
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Reveal Methods:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li><strong>Immediate:</strong> Secret Santas identify themselves right after each gift is opened</li>
                    <li><strong>All at Once:</strong> After all gifts are opened, everyone reveals simultaneously</li>
                    <li><strong>Stay Secret:</strong> Some groups keep identities secret forever—adds mystery!</li>
                    <li><strong>Guessing Contest:</strong> Recipients guess before Secret Santas reveal themselves</li>
                  </ul>
                  <p className="text-gray-700 mt-3">The reveal is often the most memorable part. Take photos, share laughs, and enjoy the camaraderie!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Rules */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Secret Santa Rules Everyone Should Know</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              Golden Rules
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Keep it Secret:</strong> Don't reveal who you drew until the designated time</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Respect the Budget:</strong> Don't go significantly over or under the agreed amount</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Be Thoughtful:</strong> Put effort into choosing a gift they'll actually enjoy</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>No Exchanges:</strong> Once drawn, you can't trade assignments with others</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Bring Your Gift:</strong> Don't be the person who forgets or doesn't participate</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
              <Gift className="w-6 h-6 text-purple-600" />
              Etiquette Guidelines
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Be Gracious:</strong> Always thank your Secret Santa, even if the gift isn't perfect</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Wrap Nicely:</strong> Presentation shows you care about the experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Read the Room:</strong> Match the gift tone to the group dynamic</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Don't Regift:</strong> Buy something new unless explicitly agreed upon</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Have a Backup:</strong> Organizers should have an extra gift in case someone forgets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Variations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Secret Santa Variations</h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">White Elephant Secret Santa</h3>
            <p className="text-gray-700 mb-3">
              Combines Secret Santa with White Elephant gift exchange. Participants can "steal" opened gifts from each other, creating competition and entertainment.
            </p>
            <Link href="/en/blog/white-elephant-vs-secret-santa" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
              Learn the differences <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Ongoing Secret Santa</h3>
            <p className="text-gray-700">
              Instead of one gift, Secret Santas give small gifts or surprises over several days or weeks leading up to the reveal. Builds anticipation and spreads joy throughout the season.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Themed Secret Santa</h3>
            <p className="text-gray-700">
              All gifts must fit a specific theme (e.g., "books only," "handmade gifts," "funny gifts"). Adds creativity and makes shopping more focused.
            </p>
            <Link href="/en/blog/funny-secret-santa-gifts" className="text-purple-600 hover:underline font-semibold flex items-center gap-2 mt-3">
              Browse funny gift ideas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Virtual Secret Santa</h3>
            <p className="text-gray-700">
              Perfect for remote teams or distant friend groups. Use online tools for name drawing and ship gifts directly to recipients. Open gifts together via video call.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Tips for Secret Santa Success</h2>

          <div className="space-y-4">
            {[
              {
                title: "Start Early",
                desc: "Begin organizing at least 3-4 weeks before the exchange. This gives participants time to shop thoughtfully and avoids last-minute stress."
              },
              {
                title: "Use Technology",
                desc: "Online Secret Santa generators eliminate logistical headaches. They handle randomization, exclusions, and notifications automatically. Our free generator makes organization effortless."
              },
              {
                title: "Set Clear Expectations",
                desc: "Be explicit about budget, gift type, and exchange format. Write down the rules and share them with everyone. Clarity prevents disappointment."
              },
              {
                title: "Create a Deadline",
                desc: "Set a firm deadline for participants to confirm involvement. Late additions complicate the drawing process. Also set a gift purchase deadline."
              },
              {
                title: "Consider Wish Lists",
                desc: "Encourage participants to share wishlists or preferences. This dramatically improves gift quality and reduces anxiety for gift-givers who don't know recipients well."
              },
              {
                title: "Have a Backup Plan",
                desc: "Organizers should have an extra generic gift ready in case someone forgets. This ensures no one leaves empty-handed and saves the day."
              },
              {
                title: "Make It an Event",
                desc: "Don't just exchange gifts—create an experience. Add games, food, decorations, or activities. The exchange becomes a memorable gathering."
              },
              {
                title: "Document the Memories",
                desc: "Take photos during the exchange, especially reaction shots when opening gifts. These become cherished memories and great content for next year's invitation."
              }
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 mt-1" />
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

      {/* Common Problems */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Secret Santa Problems & Solutions</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-red-600 text-xl mb-3">Problem: Someone Drew Themselves</h3>
            <p className="text-gray-700 mb-3">
              <strong>Solution:</strong> Use an online Secret Santa generator that prevents self-assignment. If using the hat method, establish a rule for immediate redrawing if someone draws themselves.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-red-600 text-xl mb-3">Problem: Participant Drops Out Last Minute</h3>
            <p className="text-gray-700 mb-3">
              <strong>Solution:</strong> The organizer steps in to buy for the abandoned person. For future years, require earlier commitment deadlines and set expectations about responsibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-red-600 text-xl mb-3">Problem: Gift Violates Budget Significantly</h3>
            <p className="text-gray-700 mb-3">
              <strong>Solution:</strong> Address it privately with the person for next time. This year, focus on gratitude for participation. Be clearer about budget expectations in future exchanges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-red-600 text-xl mb-3">Problem: Someone Accidentally Reveals Who They Drew</h3>
            <p className="text-gray-700 mb-3">
              <strong>Solution:</strong> Laugh it off and continue anyway. The gift exchange is still fun even without complete secrecy. The thought behind the gift matters more than the surprise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-red-600 text-xl mb-3">Problem: Gift is Clearly Inappropriate or Offensive</h3>
            <p className="text-gray-700 mb-3">
              <strong>Solution:</strong> Address privately with the giver afterward. Apologize to the recipient. Establish clearer guidelines for next year about appropriate gift types.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions About Secret Santa</h2>

        <div className="space-y-6">
          {[
            {
              q: "What is the minimum number of people needed for Secret Santa?",
              a: "Technically you can do Secret Santa with 3 people, but it's not ideal since each person can deduce who has them. 5-15 participants is the sweet spot—large enough for genuine secrecy but small enough to remain manageable. Groups larger than 20 people can become logistically challenging."
            },
            {
              q: "How much should you spend on Secret Santa gifts?",
              a: "The most common budget range is $20-30. However, the appropriate amount depends on your group. Student groups might do $10-15, while professional offices might agree on $30-50. The key is everyone spending approximately the same amount so gifts feel fair."
            },
            {
              q: "Do you have to reveal your identity as Secret Santa?",
              a: "Not necessarily! Some groups reveal identities at the end (most common), others keep it secret forever for added mystery. Decide as a group which tradition you prefer. Many people enjoy the reveal as part of the fun and bonding experience."
            },
            {
              q: "What if you draw someone you don't know well?",
              a: "This is common, especially in office settings. Solutions: (1) Ask mutual acquaintances for gift ideas, (2) Observe their workspace or social media for clues about interests, (3) Choose universally appreciated items like gourmet food, desk accessories, or gift cards, (4) Use wish lists if your group shares them."
            },
            {
              q: "Can you decline to participate in Secret Santa?",
              a: "Yes, participation should always be voluntary. If you can't afford it, don't enjoy gift exchanges, or have other reasons, politely decline early so organizers can plan accordingly. Most people understand financial or personal constraints."
            },
            {
              q: "What's the difference between Secret Santa and White Elephant?",
              a: "Secret Santa assigns specific people to buy for each other and gifts go to designated recipients. White Elephant involves a pool of unwrapped gifts that participants choose from and can \"steal\" from each other. They're completely different gift exchange formats. Learn more in our detailed comparison guide."
            },
            {
              q: "What happens if someone forgets to bring their Secret Santa gift?",
              a: "This is awkward but happens. The organizer's backup gift saves the day for the forgotten recipient. Address the situation privately with the forgetful person. For repeat offenders, consider not including them in future exchanges."
            },
            {
              q: "How do you organize Secret Santa for a large group?",
              a: "Use an online Secret Santa generator to handle the logistics. Tools like ours can manage hundreds of participants, send automatic notifications, collect wish lists, and enforce exclusion rules. Trying to organize large groups manually is unnecessarily complicated."
            },
            {
              q: "Can you do Secret Santa with just two people?",
              a: "With two people, there's no \"secret\"—you both know who has whom. At that point, you're just exchanging gifts rather than doing Secret Santa. Consider doing a regular gift exchange instead or include at least one more person."
            },
            {
              q: "What are good Secret Santa gifts for people you don't know well?",
              a: "Safe universal options include: premium coffee or tea, gourmet chocolates, desk accessories, quality candles, popular books, gift cards to major retailers, or nice notebooks. Check our gift guides for coworkers for more office-appropriate ideas that work for acquaintances."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 text-xl mb-3">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Secret Santa Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/en/blog/how-to-organize-secret-santa"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              How to Organize a Secret Santa
            </h3>
            <p className="text-gray-700 mb-4">
              Detailed organizational guide with logistics, timelines, and planning tools
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-for-coworkers"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              45+ Gift Ideas for Coworkers
            </h3>
            <p className="text-gray-700 mb-4">
              Office-appropriate professional gifts that everyone will appreciate
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Browse gifts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
          Now that you know how Secret Santa works, use our free generator to organize your exchange in minutes. No email required, completely free, and super easy!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-green-100 text-sm mt-4">
          Join thousands of groups who've successfully organized Secret Santa with our tool
        </p>
      </div>
    </article>
  );
}
