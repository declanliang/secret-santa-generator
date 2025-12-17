import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Gift, Users, Sparkles, Trophy, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: "White Elephant vs Secret Santa: What's the Difference? | Complete Comparison 2025",
  description: "Confused between White Elephant and Secret Santa? Learn the key differences, rules, and which gift exchange game is right for your party. Complete guide with examples.",
  keywords: "white elephant vs secret santa, secret santa vs white elephant, white elephant gift exchange, difference between white elephant and secret santa, white elephant game, secret santa game",
  alternates: {
    canonical: '/blog/white-elephant-vs-secret-santa',
  },
  openGraph: {
    title: "White Elephant vs Secret Santa: What's the Difference?",
    description: "Complete comparison of White Elephant and Secret Santa gift exchange games. Learn rules, differences, and which one to choose.",
    type: "article",
  },
};

export default function WhiteElephantVsSecretSantaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-12 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-violet-600 mb-4">
            <Scale className="w-5 h-5" />
            <span className="text-sm font-semibold">GAME COMPARISON</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            White Elephant vs Secret Santa: What's the Difference?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Planning a holiday gift exchange but can't decide between White Elephant and Secret Santa?
            You're not alone! These two popular party games are often confused, but they're actually
            quite different. This complete guide breaks down everything you need to know to choose
            the perfect game for your group.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>📅 Updated December 2024</span>
            <span>⏱️ 8 min read</span>
          </div>
        </header>

        {/* Quick Answer */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-2xl font-bold mb-4">🎯 Quick Answer</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Secret Santa</strong> is a traditional gift exchange where each person secretly buys a gift
            for one assigned person. <strong>White Elephant</strong> is a party game where participants can
            steal gifts from each other, creating a fun and chaotic atmosphere.
          </p>
          <p className="text-violet-100">
            Secret Santa = thoughtful, private, traditional<br/>
            White Elephant = entertaining, competitive, unpredictable
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Side-by-Side Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-left font-bold">Secret Santa</th>
                  <th className="px-6 py-4 text-left font-bold">White Elephant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Gift Assignment</td>
                  <td className="px-6 py-4 text-gray-700">Assigned secretly beforehand</td>
                  <td className="px-6 py-4 text-gray-700">Random during the party</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Who Knows</td>
                  <td className="px-6 py-4 text-gray-700">Gift giver stays secret</td>
                  <td className="px-6 py-4 text-gray-700">Everyone sees who brings what</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Stealing Allowed?</td>
                  <td className="px-6 py-4 text-gray-700">❌ No</td>
                  <td className="px-6 py-4 text-gray-700">✅ Yes! That's the fun</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Gift Type</td>
                  <td className="px-6 py-4 text-gray-700">Thoughtful & personalized</td>
                  <td className="px-6 py-4 text-gray-700">Funny, quirky, or useful</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Atmosphere</td>
                  <td className="px-6 py-4 text-gray-700">Warm & traditional</td>
                  <td className="px-6 py-4 text-gray-700">Competitive & hilarious</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-gray-700">Close groups, families</td>
                  <td className="px-6 py-4 text-gray-700">Office parties, large groups</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Time Needed</td>
                  <td className="px-6 py-4 text-gray-700">Quick unwrapping</td>
                  <td className="px-6 py-4 text-gray-700">Longer (the stealing takes time)</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Typical Budget</td>
                  <td className="px-6 py-4 text-gray-700">$10-$30</td>
                  <td className="px-6 py-4 text-gray-700">$15-$25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Secret Santa Deep Dive */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">What is Secret Santa?</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How Secret Santa Works</h3>

            <ol className="space-y-4 mb-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Names Are Drawn</h4>
                  <p className="text-gray-600">Each participant draws a name from a hat (or uses an online generator) to determine who they'll buy a gift for.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Keep It Secret</h4>
                  <p className="text-gray-600">You must keep your assigned person a secret. Don't tell anyone who you're buying for!</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Buy a Thoughtful Gift</h4>
                  <p className="text-gray-600">Purchase a gift within the agreed budget that your assigned person will genuinely enjoy.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Exchange & Reveal</h4>
                  <p className="text-gray-600">At the party, gifts are exchanged. Recipients can guess who their Secret Santa is!</p>
                </div>
              </li>
            </ol>

            <div className="bg-violet-50 border-l-4 border-violet-600 p-6 rounded-r-lg">
              <h4 className="font-bold text-violet-900 mb-2">✨ Best For:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Family gatherings</li>
                <li>• Small office teams (5-15 people)</li>
                <li>• Friend groups who know each other well</li>
                <li>• When you want a meaningful, personal exchange</li>
              </ul>
            </div>
          </div>
        </section>

        {/* White Elephant Deep Dive */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">What is White Elephant?</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How White Elephant Works</h3>

            <ol className="space-y-4 mb-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Everyone Brings a Wrapped Gift</h4>
                  <p className="text-gray-600">Participants bring a wrapped gift (identity unknown) and place it in a central pile.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Draw Numbers for Turn Order</h4>
                  <p className="text-gray-600">Participants draw numbers to determine the order of play.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">First Person Opens a Gift</h4>
                  <p className="text-gray-600">Person #1 selects and unwraps any gift from the pile.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Next Players: Unwrap or Steal!</h4>
                  <p className="text-gray-600">Each subsequent player can either unwrap a new gift OR steal an already-opened gift from someone else.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Stealing Rules Apply</h4>
                  <p className="text-gray-600">Common rules: Each gift can only be stolen 3 times total, and you can't immediately steal back the gift that was just taken from you.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">6</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Game Ends</h4>
                  <p className="text-gray-600">After the last person takes their turn, everyone keeps the gift they're holding.</p>
                </div>
              </li>
            </ol>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <h4 className="font-bold text-purple-900 mb-2">🎉 Best For:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Office holiday parties</li>
                <li>• Large groups (10-30+ people)</li>
                <li>• When you want lots of laughter and interaction</li>
                <li>• Groups where not everyone knows each other well</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🔑 Key Differences Explained</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-violet-200">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-violet-600" />
                <h3 className="text-xl font-bold text-gray-900">Secret Santa</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span><strong>Pre-assigned recipients</strong> - You know who you're buying for ahead of time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span><strong>Personalized gifts</strong> - Can tailor to recipient's interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span><strong>No stealing</strong> - Everyone gets one gift, no drama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span><strong>Traditional & heartfelt</strong> - Focus on giving</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">White Elephant</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Unknown recipients</strong> - Gifts are generic/universal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Fun over thoughtfulness</strong> - Quirky gifts work great</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Stealing encouraged!</strong> - Creates excitement and competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Interactive game</strong> - Entertainment value is high</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Which One to Choose */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Which One Should You Choose?</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-violet-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Secret Santa If...</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
                  <span>Your group is <strong>smaller than 15 people</strong> and knows each other well</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
                  <span>You want a <strong>meaningful, thoughtful</strong> exchange</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
                  <span>Participants prefer <strong>one-on-one giving</strong> without competition</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
                  <span>You have <strong>limited party time</strong> (Secret Santa is faster)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
                  <span>Your group includes <strong>family members</strong> or close friends</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose White Elephant If...</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Your group is <strong>large (15+ people)</strong> or includes strangers/acquaintances</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span>You want <strong>entertainment and laughter</strong> as the main goal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span>It's an <strong>office party</strong> where interaction is needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span>You have <strong>plenty of time</strong> for a longer activity</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Your group enjoys <strong>games and friendly competition</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Can You Do Both */}
        <section className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Pro Tip: Why Not Both?</h2>
          <p className="text-gray-700 mb-4">
            Some groups combine both games! Do a traditional <strong>Secret Santa</strong> for meaningful gifts,
            then add a <strong>White Elephant</strong> round with gag gifts or funny items to create entertainment.
            This gives you the best of both worlds.
          </p>
          <p className="text-gray-700">
            Example: Secret Santa with a $25 budget for thoughtful gifts, followed by White Elephant with
            a $10 budget for humorous items.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Which is more popular, Secret Santa or White Elephant?</h3>
              <p className="text-gray-600">
                Secret Santa is more popular for family and friend gatherings, while White Elephant dominates office
                parties. Secret Santa has been around longer and is more widely recognized globally, but White Elephant
                has gained massive popularity in North America over the past 20 years.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Can you do Secret Santa and White Elephant at the same party?</h3>
              <p className="text-gray-600">
                Yes! Many groups do both. Typically, you'd do Secret Santa for personalized gifts first, then follow
                up with a White Elephant round using smaller, funnier gifts. Just set different budgets for each
                (e.g., $20 for Secret Santa, $10 for White Elephant).
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What's the typical budget for each game?</h3>
              <p className="text-gray-600">
                <strong>Secret Santa:</strong> $15-$30, since gifts are personalized and thoughtful.<br/>
                <strong>White Elephant:</strong> $15-$25, with many groups opting for $20. Since gifts are generic,
                the focus is on finding something universally appealing or funny.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is White Elephant the same as Yankee Swap or Dirty Santa?</h3>
              <p className="text-gray-600">
                Yes! White Elephant, Yankee Swap, and Dirty Santa are different names for essentially the same game
                with minor rule variations. All involve gift stealing and swapping. The name varies by region—
                "White Elephant" is most common on the West Coast, "Yankee Swap" in New England, and "Dirty Santa"
                in the South.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Which game is better for large office parties?</h3>
              <p className="text-gray-600">
                White Elephant is usually better for large office parties (20+ people) because:
                (1) You don't need to know everyone personally to buy a gift,
                (2) The stealing creates interaction and laughter,
                (3) It works as entertainment, not just gift exchange.
                Secret Santa can feel awkward if you don't know your assigned person well.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What kind of gifts work best for each?</h3>
              <p className="text-gray-600">
                <strong>Secret Santa:</strong> Personalized items based on recipient's hobbies, favorite snacks,
                books they'd enjoy, or items from their wishlist.<br/>
                <strong>White Elephant:</strong> Universally appealing items, funny gag gifts, popular gadgets,
                or useful household items that anyone would want to "steal."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How long does each game typically take?</h3>
              <p className="text-gray-600">
                <strong>Secret Santa:</strong> 15-30 minutes for a group of 10-15 people (quick unwrapping and guessing).<br/>
                <strong>White Elephant:</strong> 30-60 minutes for the same group size, as the stealing rounds add time.
                Plan for about 2-3 minutes per person in White Elephant.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl shadow-xl p-8 text-center text-white mb-12">
          <Scale className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Organize Your Secret Santa?</h2>
          <p className="text-lg mb-6 text-violet-100">
            Decided on Secret Santa? Use our free generator to organize your gift exchange in minutes.
            No email required, works perfectly on any device!
          </p>
          <Link
            href="/en"
            className="inline-block bg-white text-violet-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Create Free Secret Santa →
          </Link>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/en/blog/how-to-organize-secret-santa" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How to Organize a Secret Santa Gift Exchange</h3>
              <p className="text-gray-600 text-sm">Step-by-step guide with video tutorial on planning the perfect Secret Santa.</p>
            </Link>
            <Link href="/en/blog/secret-santa-gifts-under-20" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Secret Santa Gifts Under $20: 50+ Ideas</h3>
              <p className="text-gray-600 text-sm">Budget-friendly gift ideas perfect for your Secret Santa exchange.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
