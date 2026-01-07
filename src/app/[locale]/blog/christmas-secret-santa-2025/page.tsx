import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, Users, ArrowRight, CheckCircle2, Calendar, AlertCircle, TreePine, Star, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Christmas Secret Santa 2025: Complete Planning Guide & Timeline',
  description: 'Plan the perfect Christmas Secret Santa for 2025. Complete timeline, budget tips, theme ideas, and everything you need for a successful holiday gift exchange.',
  keywords: 'christmas secret santa 2025, secret santa 2025, christmas gift exchange, holiday secret santa, xmas secret santa, secret santa christmas party',
  openGraph: {
    title: 'Christmas Secret Santa 2025: Complete Planning Guide',
    description: 'Everything you need to organize a memorable Christmas Secret Santa in 2025',
    type: 'article',
  },
};

export default function ChristmasSecretSanta2025() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            <TreePine className="w-4 h-4" />
            Christmas 2025
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Calendar className="w-4 h-4" />
            Planning Guide
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-100 text-yellow-700 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Complete Timeline
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Christmas Secret Santa 2025: Complete Planning Guide & Timeline
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            20 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            For all group sizes
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Updated for 2025
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Christmas 2025 falls on Thursday, December 25th, making it perfect for Secret Santa exchanges during the week before Christmas or at your holiday party. Whether you're organizing for your office, friend group, or family, planning now ensures a stress-free and memorable gift exchange that captures the true spirit of the season.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The magic of Christmas Secret Santa lies in the anticipation, surprise, and joy of giving. But that magic requires thoughtful planning—from setting the right budget to creating a timeline that doesn't clash with the holiday rush. Start too late and you're shopping on December 23rd in a panic; start too early and people forget the details. This guide provides the perfect balance.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This comprehensive 2025 Christmas Secret Santa guide covers everything: optimal timelines, budget recommendations, theme ideas, gift suggestions, virtual and in-person options, and troubleshooting common problems. Whether this is your first time organizing or you're a seasoned coordinator looking to improve, you'll find actionable tips to create the best Secret Santa your group has ever experienced.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-red-50 via-green-50 to-red-50 rounded-2xl p-8 mb-12 border border-red-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#key-dates" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            2025 Key Dates
          </a>
          <a href="#timeline" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Planning Timeline
          </a>
          <a href="#budget" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Budget & Themes
          </a>
          <a href="#gift-ideas" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Christmas Gift Ideas
          </a>
          <a href="#party-ideas" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Party & Reveal Ideas
          </a>
          <a href="#troubleshooting" className="flex items-center gap-2 text-red-700 hover:text-red-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Troubleshooting
          </a>
        </div>
      </div>

      {/* Key Dates 2025 */}
      <section id="key-dates" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Christmas 2025 Dates</h2>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-red-600 to-green-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <Calendar className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">Christmas 2025: Thursday, December 25</h3>
                <p className="text-red-100">Plan your Secret Santa accordingly!</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">Office Exchanges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Best date:</strong> December 19 (Friday) - Last full workday before Christmas week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Alternative:</strong> December 22 (Monday) - If your office works Christmas week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Start organizing:</strong> Early November (6-8 weeks before)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">Friend & Family Exchanges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Weekend before:</strong> December 20-21 (Saturday-Sunday)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Christmas Eve:</strong> December 24 (Wednesday)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>New Year option:</strong> December 31 (Wednesday) for relaxed exchanges</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Shopping Deadlines to Remember:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Online shopping:</strong> Order by December 15 for guaranteed delivery</li>
                    <li>• <strong>International shipping:</strong> Order by December 1-5</li>
                    <li>• <strong>In-store pickup:</strong> December 18-20 for best selection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Christmas Secret Santa Timeline</h2>

        <div className="space-y-6">
          {[
            {
              date: "Early November (Nov 1-7)",
              title: "Initial Planning & Announcement",
              icon: Bell,
              color: "from-blue-500 to-indigo-500",
              tasks: [
                "Decide on exchange format (in-person, virtual, hybrid)",
                "Set budget range (recommend $20-30 for Christmas)",
                "Choose exchange date (ideally Dec 19-22)",
                "Create Secret Santa using online generator",
                "Send save-the-date announcement to participants"
              ]
            },
            {
              date: "Mid November (Nov 10-15)",
              title: "Collect Participants & Preferences",
              icon: Users,
              color: "from-green-500 to-emerald-500",
              tasks: [
                "Finalize participant list and get confirmations",
                "Send questionnaire about gift preferences, sizes, allergies",
                "Collect shipping addresses (for remote/hybrid groups)",
                "Set clear rules: budget, gift types allowed, deadline",
                "Run the drawing and send assignment notifications"
              ]
            },
            {
              date: "Late November (Nov 20-30)",
              title: "Early Shopping Window Opens",
              icon: ShoppingBag,
              color: "from-purple-500 to-pink-500",
              tasks: [
                "Participants begin shopping (Black Friday sales Nov 28!)",
                "Share recipient's questionnaire answers with gift-givers",
                "Send reminder about budget and deadline",
                "Suggest gift ideas based on questionnaire responses",
                "For virtual exchanges: remind about shipping deadlines"
              ]
            },
            {
              date: "Early December (Dec 1-7)",
              title: "Mid-Point Check & Shopping Continues",
              icon: Gift,
              color: "from-red-500 to-rose-500",
              tasks: [
                "Send progress reminder to participants",
                "Answer any questions about recipient preferences",
                "Share shipping deadline reminder (Dec 10 for safety)",
                "Plan the reveal party logistics (location, time, format)",
                "Send calendar invites for exchange event"
              ]
            },
            {
              date: "Mid December (Dec 10-15)",
              title: "Final Shopping Deadline",
              icon: AlertCircle,
              color: "from-orange-500 to-red-500",
              tasks: [
                "FINAL reminder: gifts must be purchased by Dec 15",
                "For virtual: confirm all gifts shipped with tracking",
                "For in-person: gifts should be wrapped and ready",
                "Finalize party details: food, decorations, activities",
                "Send final reminder with exchange date, time, location"
              ]
            },
            {
              date: "Exchange Week (Dec 15-22)",
              title: "Gift Exchange & Celebration",
              icon: TreePine,
              color: "from-green-600 to-emerald-700",
              tasks: [
                "Collect wrapped gifts (if in-person exchange)",
                "Set up party space with festive decorations",
                "Host the gift reveal event with games/activities",
                "Take photos and share with group",
                "Send thank-you message to all participants"
              ]
            }
          ].map((phase, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className={`bg-gradient-to-r ${phase.color} p-6 text-white`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1 text-white/90">{phase.date}</div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {phase.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Budget & Themes */}
      <section id="budget" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Budget Recommendations & Theme Ideas</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <span className="text-2xl font-bold text-green-700">$15</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Budget-Friendly</h3>
              <p className="text-gray-600 text-sm">For students, large groups</p>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Allows for thoughtful gifts</li>
              <li>• Reduces financial stress</li>
              <li>• Great for 15+ people</li>
              <li>• Focus on creativity over cost</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-green-50 p-6 rounded-xl shadow-md border-2 border-red-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-3">
                <span className="text-2xl font-bold text-white">$25</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Most Popular ⭐</h3>
              <p className="text-gray-600 text-sm">Sweet spot for most groups</p>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Wide variety of quality gifts</li>
              <li>• Standard for office exchanges</li>
              <li>• Balances generosity & budget</li>
              <li>• Recommended for Christmas</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                <span className="text-2xl font-bold text-purple-700">$50</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Premium</h3>
              <p className="text-gray-600 text-sm">For close friends, small groups</p>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• High-quality, memorable gifts</li>
              <li>• Best for 5-10 people</li>
              <li>• Special occasion exchanges</li>
              <li>• Luxury item possibilities</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-xl p-8 border border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Christmas Secret Santa Themes</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Winter Wonderland",
                desc: "Cozy gifts: blankets, hot chocolate sets, candles, fuzzy socks. Perfect for creating hygge vibes."
              },
              {
                name: "Handmade Christmas",
                desc: "All gifts must be DIY or handcrafted. Shows extra thought and creativity. Budget-friendly option."
              },
              {
                name: "Stocking Stuffers Only",
                desc: "Multiple small items instead of one big gift. Fun to unwrap, great for variety. $20-25 budget ideal."
              },
              {
                name: "Christmas Movie Night",
                desc: "Gifts related to holiday movies: popcorn sets, cozy PJs, classic film DVDs, themed mugs."
              },
              {
                name: "Eco-Friendly Holiday",
                desc: "Sustainable, zero-waste, or upcycled gifts. Reusable items, plants, bamboo products, beeswax wraps."
              },
              {
                name: "Gourmet Christmas Treats",
                desc: "All edible gifts: gourmet snacks, specialty coffee/tea, homemade cookies, artisan chocolates."
              }
            ].map((theme, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  {theme.name}
                </h4>
                <p className="text-gray-600">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Ideas */}
      <section id="gift-ideas" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Christmas Secret Santa Gift Ideas 2025</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              category: "Cozy Christmas Essentials",
              items: ["Fleece-lined slippers", "Holiday-scented candles", "Festive mug with cocoa mix", "Plush throw blanket", "Fuzzy Christmas socks"]
            },
            {
              category: "Festive Food & Drink",
              items: ["Gourmet hot chocolate set", "Holiday tea sampler", "Christmas cookie kit", "Peppermint bark", "Mulled wine spice kit"]
            },
            {
              category: "Winter Self-Care",
              items: ["Bath bomb holiday set", "Hand cream & lip balm combo", "Festive bath salts", "Cozy spa face masks", "Lavender sleep spray"]
            },
            {
              category: "Christmas Decor",
              items: ["Mini tabletop Christmas tree", "String lights for bedroom", "Festive wreath or garland", "Holiday-themed throw pillows", "Snow globe or ornament set"]
            },
            {
              category: "Tech & Gadgets",
              items: ["Holiday phone case", "LED fairy lights", "Portable phone charger", "Bluetooth speaker", "Wireless earbuds"]
            },
            {
              category: "Fun & Games",
              items: ["Christmas trivia game", "Holiday movie bingo cards", "Festive puzzle", "Card games", "Secret Santa game set"]
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-red-600" />
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link
            href="/en/blog/secret-santa-gifts-under-20"
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition-all group"
          >
            <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              50+ Gifts Under $20 →
            </p>
          </Link>
          <Link
            href="/en/blog/diy-secret-santa-gifts"
            className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg border border-pink-200 hover:shadow-md transition-all group"
          >
            <p className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
              40+ DIY Gift Ideas →
            </p>
          </Link>
          <Link
            href="/en/blog/funny-secret-santa-gifts"
            className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition-all group"
          >
            <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              Funny Gift Ideas →
            </p>
          </Link>
        </div>
      </section>

      {/* Party Ideas */}
      <section id="party-ideas" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Christmas Party & Reveal Ideas</h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-green-50 p-8 rounded-xl border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Person Christmas Party Ideas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Activities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ugly Christmas sweater contest</li>
                  <li>• Holiday trivia or bingo</li>
                  <li>• Secret Santa guessing game</li>
                  <li>• Cookie decorating station</li>
                  <li>• Christmas carol karaoke</li>
                  <li>• White elephant exchange combo</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Food & Drink</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hot chocolate bar with toppings</li>
                  <li>• Holiday cookie exchange</li>
                  <li>• Mulled wine or cider</li>
                  <li>• Potluck festive dishes</li>
                  <li>• Gingerbread house decorating</li>
                  <li>• Candy cane cocktails</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Christmas Exchange Ideas</h3>
            <ul className="space-y-3">
              {[
                {
                  title: "Virtual Holiday Background Contest",
                  desc: "Everyone decorates their video call background. Vote for most festive. Opens gifts on camera together."
                },
                {
                  title: "Online Christmas Games",
                  desc: "Play holiday trivia, Pictionary, or bingo during video call. Open gifts between game rounds for excitement."
                },
                {
                  title: "Synchronized Gift Opening",
                  desc: "Everyone receives gifts beforehand. On video call, open simultaneously and share reactions in real-time."
                },
                {
                  title: "Mystery Santa Video Messages",
                  desc: "Gift-givers record short video explaining gift choice. Recipients watch during reveal for personal touch."
                }
              ].map((idea, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">{idea.title}</p>
                    <p className="text-gray-600 text-sm">{idea.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section id="troubleshooting" className="mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Problems & Solutions</h2>

          <div className="space-y-4">
            {[
              {
                problem: "Someone drops out last minute",
                solution: "Have a backup organizer prepared with an extra gift. Or reassign that person's recipient to another participant who's willing to buy an extra gift (reimburse them)."
              },
              {
                problem: "Gift doesn't arrive on time",
                solution: "Digital backup plan: send e-gift card via email with apologetic note promising physical gift arrival soon. Most people understand shipping delays during holidays."
              },
              {
                problem: "Someone forgets and doesn't bring a gift",
                solution: "Keep 1-2 generic emergency gifts (nice candle, gift card, universal item). Discreetly give to the forgotten person's recipient so no one feels left out."
              },
              {
                problem: "Budget widely exceeded",
                solution: "Set clear budget in advance. If someone goes over, privately remind them it creates pressure on others. For future, emphasize budget limit multiple times."
              },
              {
                problem: "Inappropriate gift given",
                solution: "Privately approach giver and recipient. Apologize to recipient. Offer to replace gift. Use as learning opportunity for group—review gift guidelines next year."
              },
              {
                problem: "Duplicate gifts for same person",
                solution: "Prevent with questionnaire asking 'what do you already have?' If happens, person keeps both or exchanges one—make light of it rather than embarrassing givers."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Problem: {item.problem}</h3>
                    <p className="text-gray-700"><strong>Solution:</strong> {item.solution}</p>
                  </div>
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
              q: "When should I start organizing Secret Santa for Christmas 2025?",
              a: "Begin in early November (Nov 1-7) to give participants 6-8 weeks for shopping. This timeline allows for Black Friday sales (Nov 28), handles shipping delays, and reduces last-minute stress. For virtual exchanges with international shipping, start even earlier—mid-October."
            },
            {
              q: "What's the best budget for Christmas Secret Santa?",
              a: "$20-30 is the sweet spot for most Christmas exchanges. It allows for quality, thoughtful gifts without financial strain. For students or large groups (15+ people), $15 works well. Close friend/family groups can do $40-50 for more special gifts."
            },
            {
              q: "What date should we do our Christmas Secret Santa exchange?",
              a: "For offices: Friday, December 19, 2025 (last full workday before Christmas week). For friends/family: the weekend of December 20-21 or Christmas Eve (Dec 24). Avoid December 22-24 as people are traveling and stressed with final Christmas prep."
            },
            {
              q: "Should we do Secret Santa before or after Christmas?",
              a: "Before Christmas is traditional and captures the holiday excitement. The week of December 15-22 is ideal. Post-Christmas (Dec 26-31) works for relaxed exchanges or if your group can't meet beforehand—turn it into a fun New Year's celebration."
            },
            {
              q: "How do I handle Secret Santa for remote team members?",
              a: "Use an online Secret Santa generator for assignments. Set shipping deadline of December 10 for domestic, December 1-5 for international. Require tracking numbers. Host virtual reveal party on video call Dec 19-22 where everyone opens gifts together on camera."
            },
            {
              q: "What are good Christmas Secret Santa themes?",
              a: "Popular 2025 themes: Winter Wonderland (cozy items), Handmade Christmas (DIY gifts), Stocking Stuffers (multiple small items), Eco-Friendly Holiday (sustainable gifts), Gourmet Treats (all edible), or Ugly Sweater theme. Themes make gift shopping easier and more fun."
            },
            {
              q: "Can we combine Secret Santa with White Elephant?",
              a: "Yes! Some groups do both: Secret Santa for thoughtful personal gifts ($20-25), then White Elephant for funny/gag gifts ($10-15). Or alternate years. Just be clear which format you're using to avoid confusion about gift types and rules."
            },
            {
              q: "What if someone can't attend the Christmas exchange party?",
              a: "For in-person events: Have them ship/drop off gift beforehand and join via video call for opening. For virtual events: They open gift at home and share reaction in group chat with photos. The key is ensuring they're included even if timing doesn't work perfectly."
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
            className="group bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-red-600 transition-colors">
              How to Organize a Secret Santa
            </h3>
            <p className="text-gray-700 mb-4">
              Complete step-by-step guide for any Secret Santa exchange
            </p>
            <span className="text-red-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/virtual-secret-santa"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              Virtual Secret Santa Guide
            </h3>
            <p className="text-gray-700 mb-4">
              Perfect for remote teams celebrating Christmas online
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-questionnaire"
            className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-purple-600 transition-colors">
              Secret Santa Questionnaire
            </h3>
            <p className="text-gray-700 mb-4">
              30+ questions to help gift-givers choose perfect Christmas presents
            </p>
            <span className="text-purple-600 font-medium flex items-center gap-2">
              Get questions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-under-20"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              50+ Gifts Under $20
            </h3>
            <p className="text-gray-700 mb-4">
              Budget-friendly Christmas gift ideas
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Browse gifts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <TreePine className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Christmas Secret Santa 2025?
        </h2>
        <p className="text-xl mb-8 text-red-50 max-w-2xl mx-auto">
          Use our free Secret Santa generator to organize your Christmas exchange perfectly. Set budget limits, collect preferences, and share assignments—all for free!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
        >
          Start Christmas Secret Santa
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
