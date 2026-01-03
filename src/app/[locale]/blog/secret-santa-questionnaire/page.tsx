import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, Users, ArrowRight, CheckCircle2, ClipboardList, MessageSquare, Star, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Santa Questionnaire: 30+ Questions to Ask Participants (2025)',
  description: 'Complete Secret Santa questionnaire template with 30+ questions to help gift-givers choose perfect gifts. Includes printable form and tips for collecting preferences.',
  keywords: 'secret santa questionnaire, secret santa questions, secret santa form, secret santa survey, gift preference questions, secret santa template',
  openGraph: {
    title: 'Secret Santa Questionnaire: 30+ Questions Template',
    description: 'Essential questions to ask Secret Santa participants for better gift matching',
    type: 'article',
  },
};

export default function SecretSantaQuestionnaire() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <ClipboardList className="w-4 h-4" />
            Questionnaire
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <MessageSquare className="w-4 h-4" />
            30+ Questions
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Gift className="w-4 h-4" />
            Free Template
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Secret Santa Questionnaire: 30+ Essential Questions to Ask Participants
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            12 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            30+ questions
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Template included
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          One of the biggest challenges in Secret Santa is choosing a gift for someone you might not know well. A well-crafted Secret Santa questionnaire solves this problem by giving gift-givers crucial insights into their recipient's preferences, interests, and dislikes—transforming the exchange from guesswork into thoughtful gift-giving.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The best Secret Santa questions strike a balance between being specific enough to be helpful and general enough to leave room for surprise. They should reveal personality, preferences, and practical needs without dictating exactly what gift to buy. Whether you're organizing for your office, friend group, or family, the right questionnaire dramatically improves gift quality and recipient satisfaction.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This comprehensive guide provides 30+ carefully selected Secret Santa questions organized by category, plus tips on how to collect and share this information effectively. We'll also cover what questions to avoid and how to use questionnaire responses to choose the perfect gift.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border border-purple-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#why-questionnaire" className="flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Why Use a Questionnaire?
          </a>
          <a href="#essential-questions" className="flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Essential Questions
          </a>
          <a href="#category-questions" className="flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Questions by Category
          </a>
          <a href="#how-to-collect" className="flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            How to Collect Responses
          </a>
          <a href="#using-responses" className="flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Using the Responses
          </a>
          <a href="#questions-to-avoid" className="flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Questions to Avoid
          </a>
        </div>
      </div>

      {/* Why Use Questionnaire */}
      <section id="why-questionnaire" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use a Secret Santa Questionnaire?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              title: "Better Gift Matching",
              desc: "Even a few basic questions can transform a generic gift into something personalized and thoughtful. Knowing someone likes coffee over tea makes all the difference.",
              icon: Gift
            },
            {
              title: "Reduces Gift Anxiety",
              desc: "Gift-givers feel less stressed when they have guidance. Nobody wants to accidentally give someone something they're allergic to or already own.",
              icon: CheckCircle2
            },
            {
              title: "Prevents Duplicate Gifts",
              desc: "Questions about what they already have (coffee maker, water bottle, etc.) help avoid giving duplicates or unnecessary items.",
              icon: AlertCircle
            },
            {
              title: "Saves Time Shopping",
              desc: "Instead of wandering stores hoping for inspiration, gift-givers can shop with confidence knowing their recipient's preferences.",
              icon: Clock
            }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
          <div className="flex gap-3">
            <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Pro Tip</h3>
              <p className="text-gray-700 leading-relaxed">
                Keep questionnaires to 8-15 questions maximum. Too many questions feel like homework and reduce completion rates. Focus on the most useful information for your specific group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Questions */}
      <section id="essential-questions" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">10 Essential Secret Santa Questions (Must-Ask)</h2>

        <p className="text-gray-700 text-lg mb-8">
          These core questions should be included in every Secret Santa questionnaire. They provide the foundation for thoughtful gift selection:
        </p>

        <div className="space-y-4">
          {[
            {
              q: "What are your hobbies or interests?",
              why: "Helps identify gift categories (books for readers, cooking tools for chefs, etc.)"
            },
            {
              q: "What's your favorite color?",
              why: "Guides choices for anything from clothing to home decor items"
            },
            {
              q: "Coffee, tea, neither, or both?",
              why: "Extremely useful for beverage-related gifts, one of the most popular categories"
            },
            {
              q: "Do you have any allergies or dietary restrictions?",
              why: "Critical for food gifts and scented items. Prevents potentially harmful gifts"
            },
            {
              q: "What's something under [budget] you've wanted but haven't bought yourself?",
              why: "Often reveals the perfect gift—something they want but consider a small luxury"
            },
            {
              q: "What size clothing do you typically wear? (shirt, pants, shoes)",
              why: "Enables clothing and accessory gifts, but only ask if your budget supports these items"
            },
            {
              q: "What's something you absolutely do NOT want?",
              why: "Prevents gift disasters. Some people hate candles, stuffed animals, or certain scents"
            },
            {
              q: "Do you prefer practical gifts or fun/novelty items?",
              why: "Reveals their gift philosophy—some want everyday utility, others want entertainment"
            },
            {
              q: "What's your favorite type of snack or treat?",
              why: "Food gifts are safe bets when you know preferences (sweet vs savory, chocolate vs fruit, etc.)"
            },
            {
              q: "Are there any items you already have plenty of?",
              why: "Prevents giving duplicates. Many people already own 5 water bottles or 10 coffee mugs"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-600">
                    <span className="font-semibold text-purple-600">Why ask this:</span> {item.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Questions */}
      <section id="category-questions" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Questions by Category</h2>

        <div className="space-y-8">
          {/* Lifestyle & Preferences */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-7 h-7 text-blue-600" />
              Lifestyle & Personal Preferences
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Are you a morning person or night owl?</li>
              <li>• Do you prefer staying in or going out?</li>
              <li>• What's your typical weekend like?</li>
              <li>• Do you have any pets? What kind?</li>
              <li>• What's your favorite season?</li>
              <li>• Do you prefer minimalist or decorative items?</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm italic">
              <strong>Use these for:</strong> Choosing between cozy home items vs outdoor gear, pet-related gifts, seasonal items
            </p>
          </div>

          {/* Entertainment */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Gift className="w-7 h-7 text-purple-600" />
              Entertainment & Media
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• What's your favorite genre of books/movies/music?</li>
              <li>• Do you prefer physical books or e-books?</li>
              <li>• What streaming services do you use?</li>
              <li>• Do you play video games? What platforms?</li>
              <li>• What's the last thing you binge-watched?</li>
              <li>• Do you enjoy puzzles, board games, or card games?</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm italic">
              <strong>Use these for:</strong> Books, games, subscriptions, entertainment-related accessories
            </p>
          </div>

          {/* Self-Care & Wellness */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-7 h-7 text-green-600" />
              Self-Care & Wellness
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• What's your favorite scent (vanilla, lavender, citrus, etc.)?</li>
              <li>• Do you prefer baths or showers?</li>
              <li>• What's your skincare routine like? (minimal, extensive, somewhere between)</li>
              <li>• Do you enjoy candles or prefer other home scents?</li>
              <li>• Are you sensitive to strong fragrances?</li>
              <li>• Do you practice any wellness activities? (yoga, meditation, fitness)</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm italic">
              <strong>Use these for:</strong> Bath products, candles, skincare, wellness accessories
            </p>
          </div>

          {/* Food & Drink */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Gift className="w-7 h-7 text-orange-600" />
              Food & Beverage
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sweet or savory snacks?</li>
              <li>• Do you enjoy spicy food?</li>
              <li>• What's your favorite type of chocolate?</li>
              <li>• Do you cook or bake at home?</li>
              <li>• What's your go-to comfort food?</li>
              <li>• Any favorite local restaurants or food brands?</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm italic">
              <strong>Use these for:</strong> Gourmet snacks, cooking tools, specialty ingredients, gift cards
            </p>
          </div>

          {/* Work & Productivity */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ClipboardList className="w-7 h-7 text-gray-600" />
              Work & Productivity (Great for Office Exchanges)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Do you work from home, office, or hybrid?</li>
              <li>• What does your workspace look like?</li>
              <li>• Do you prefer digital or paper planners?</li>
              <li>• What's your favorite type of pen or stationery?</li>
              <li>• Do you drink water from a reusable bottle or disposable cups?</li>
              <li>• Is your desk usually organized or chaotic?</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm italic">
              <strong>Use these for:</strong> Desk accessories, organization tools, tech gadgets, drinkware
            </p>
          </div>
        </div>
      </section>

      {/* How to Collect */}
      <section id="how-to-collect" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Collect Questionnaire Responses</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              Google Forms (Best for Most Groups)
            </h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Pros:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Free and easy to use</li>
                <li>Automatically collects responses in spreadsheet</li>
                <li>Can include multiple question types</li>
                <li>Easy to share via email or link</li>
              </ul>
              <p className="mt-3"><strong>How to use:</strong></p>
              <p className="text-sm">Create form → Share link → Export responses to spreadsheet → Share relevant info with each gift-giver</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              Slack/Teams Channel (Office Groups)
            </h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Pros:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Everyone already has access</li>
                <li>Casual and low-pressure</li>
                <li>Allows for fun interactions</li>
                <li>Easy to reference year-round</li>
              </ul>
              <p className="mt-3"><strong>How to use:</strong></p>
              <p className="text-sm">Create dedicated channel → Post questions periodically → Compile responses manually or use pinned message</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-purple-600" />
              Email Survey (Simple Groups)
            </h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Pros:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Direct and personal</li>
                <li>No additional platforms needed</li>
                <li>Good for small groups (&lt;15 people)</li>
              </ul>
              <p className="mt-3"><strong>How to use:</strong></p>
              <p className="text-sm">Email questions → Participants reply with answers → Organizer compiles into document</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
              <Gift className="w-6 h-6 text-pink-600" />
              Built-in Generator Features
            </h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Pros:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>All-in-one solution</li>
                <li>Preferences shared only with matched giver</li>
                <li>Privacy protected</li>
              </ul>
              <p className="mt-3"><strong>How to use:</strong></p>
              <p className="text-sm">Some Secret Santa generators include wishlist or preference fields when participants receive their assignment</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Important Privacy Note</h3>
              <p className="text-gray-700 leading-relaxed">
                Only share each participant's questionnaire answers with their assigned Secret Santa—not the entire group. This maintains privacy and prevents people from figuring out who has whom based on who's asking specific questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Using Responses */}
      <section id="using-responses" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Questionnaire Responses to Choose Gifts</h2>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Gift Selection Process</h3>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Read the full questionnaire first",
                  desc: "Don't jump to conclusions from one answer. Look for patterns and connections across all responses."
                },
                {
                  step: "2",
                  title: "Identify 2-3 key themes",
                  desc: "Maybe they love coffee, enjoy reading, and prefer cozy nights in. These themes guide your search."
                },
                {
                  step: "3",
                  title: "Cross-reference with dislikes and allergies",
                  desc: "Eliminate ideas that conflict with what they specifically said NO to. This is crucial."
                },
                {
                  step: "4",
                  title: "Combine preferences creatively",
                  desc: "A coffee lover who enjoys reading might love a \"cozy reading kit\" with specialty coffee, a bookmark, and a candle."
                },
                {
                  step: "5",
                  title: "Check the practical vs fun preference",
                  desc: "If they said practical, choose the high-quality everyday item. If fun, go for the novelty or entertainment option."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Example: Good Gift Selection
              </h4>
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Questionnaire says:</strong></p>
                <ul className="list-disc list-inside ml-2">
                  <li>Loves coffee (not tea)</li>
                  <li>Favorite scent: vanilla</li>
                  <li>Works from home</li>
                  <li>Doesn't want mugs (has too many)</li>
                </ul>
                <p className="mt-3"><strong>Perfect gift:</strong> Vanilla-flavored coffee sampler + coffee scoop + small bag of gourmet beans</p>
                <p className="italic">Why it works: Combines coffee preference with vanilla scent, useful for WFH, avoids the mug they don't want</p>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Example: Poor Gift Selection
              </h4>
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Same questionnaire responses</strong></p>
                <p className="mt-3"><strong>Poor gift choice:</strong> Generic coffee mug with generic chocolate</p>
                <p className="italic text-red-700">Why it fails: Ignored their "no mugs" request, didn't use the vanilla preference, chocolate not mentioned in their responses, feels generic despite having their questionnaire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions to Avoid */}
      <section id="questions-to-avoid" className="mb-16">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-red-600" />
            Questions to Avoid in Your Secret Santa Questionnaire
          </h2>

          <div className="space-y-4">
            {[
              {
                avoid: "Too specific product requests",
                why: "\"What exact item do you want?\" removes all surprise and fun from the exchange. Keep some mystery!"
              },
              {
                avoid: "Overly personal questions",
                why: "Relationship status, income level, or deeply personal topics make people uncomfortable, especially in workplace settings."
              },
              {
                avoid: "Questions about budget",
                why: "Don't ask what they're spending on their gift. This creates pressure and comparison. Budget should be set by organizer."
              },
              {
                avoid: "Political or religious topics",
                why: "Even if well-intentioned, these can create division. Keep Secret Santa inclusive and light-hearted."
              },
              {
                avoid: "Too many required questions",
                why: "More than 15 questions feels like homework. Make some optional or use conditional logic (\"If you drink coffee, what type?\")."
              },
              {
                avoid: "Vague or unhelpful questions",
                why: "\"What do you like?\" is too broad. \"Do you prefer sweet or savory snacks?\" is actionable and specific."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">❌ {item.avoid}</p>
                  <p className="text-gray-700 text-sm">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Template */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Secret Santa Questionnaire Template</h2>

        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-purple-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready-to-Use Questionnaire</h3>
              <p className="text-gray-700">Copy these questions into Google Forms, email, or your preferred survey tool:</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 space-y-4">
            <div className="space-y-3">
              <p className="font-bold text-gray-900 text-lg border-b pb-2">Basic Information</p>
              <ul className="space-y-2 text-gray-700">
                <li>1. What are your main hobbies or interests?</li>
                <li>2. What's your favorite color?</li>
                <li>3. Do you have any allergies or dietary restrictions?</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-gray-900 text-lg border-b pb-2">Food & Beverage Preferences</p>
              <ul className="space-y-2 text-gray-700">
                <li>4. Coffee, tea, both, or neither?</li>
                <li>5. Sweet or savory snacks?</li>
                <li>6. Any favorite treats or candies?</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-gray-900 text-lg border-b pb-2">Personal Style</p>
              <ul className="space-y-2 text-gray-700">
                <li>7. What's your favorite scent (if any)?</li>
                <li>8. Do you prefer minimalist or decorative items?</li>
                <li>9. What clothing sizes do you wear? (optional - only if budget allows clothing)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-gray-900 text-lg border-b pb-2">Interests & Entertainment</p>
              <ul className="space-y-2 text-gray-700">
                <li>10. What type of books/movies/music do you enjoy?</li>
                <li>11. Do you prefer staying in or going out?</li>
                <li>12. Any favorite stores or brands?</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-gray-900 text-lg border-b pb-2">Gift Guidance</p>
              <ul className="space-y-2 text-gray-700">
                <li>13. Do you prefer practical gifts or fun/novelty items?</li>
                <li>14. What's something under $[budget] you'd love but haven't bought yourself?</li>
                <li>15. What's something you absolutely do NOT want or already have too many of?</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 italic">💡 Tip: Customize this template based on your group's preferences and budget</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: "How many questions should be in a Secret Santa questionnaire?",
              a: "Aim for 8-15 questions total. This is enough to gather useful information without overwhelming participants. Include a mix of required questions (allergies, major dislikes) and optional ones (specific preferences). Longer questionnaires have lower completion rates."
            },
            {
              q: "When should I send the Secret Santa questionnaire?",
              a: "Send the questionnaire immediately after participants sign up, ideally 3-4 weeks before gift exchange day. This gives gift-givers plenty of time to shop once they receive their match assignment. Send a reminder if people haven't completed it within a week."
            },
            {
              q: "Should the Secret Santa questionnaire be anonymous?",
              a: "No, questionnaires should NOT be anonymous—you need to know who submitted what answers so you can share them with the correct gift-giver. However, only share each person's responses with their assigned Secret Santa, not the whole group, to maintain privacy."
            },
            {
              q: "What if someone doesn't fill out the questionnaire?",
              a: "Send a gentle reminder emphasizing it helps their Secret Santa choose a better gift. If they still don't respond, their gift-giver will have to choose something more generic. Consider setting a deadline and making questionnaire completion mandatory for participation."
            },
            {
              q: "Can I use the same Secret Santa questionnaire every year?",
              a: "Yes, but ask participants to update their responses annually as preferences change. People might develop new hobbies, have different dietary restrictions, or accumulate items they don't want more of. Add a question asking what's changed since last year."
            },
            {
              q: "Should I include a wishlist section in the questionnaire?",
              a: "A general \"what would you like under [budget]?\" question is fine, but avoid asking for specific product links or detailed wishlists—this removes the fun of Secret Santa. The goal is to provide guidance, not dictate exact purchases."
            },
            {
              q: "How do I handle dietary restrictions in the questionnaire?",
              a: "Ask specifically about food allergies, dietary preferences (vegetarian, vegan), and any foods to avoid. Make this a required question since it's a safety issue. Even if your budget doesn't emphasize food gifts, scented items (candles, soaps) can also trigger allergies."
            },
            {
              q: "What's the best way to share questionnaire responses with gift-givers?",
              a: "Email each person's responses individually to their assigned Secret Santa, or create a secure shared document where people can only see their match's info. Never post everyone's responses in a group email or public channel—this compromises privacy and can reveal who has whom."
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
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              How to Organize a Secret Santa Gift Exchange
            </h3>
            <p className="text-gray-700 mb-4">
              Complete guide to planning and running Secret Santa
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/virtual-secret-santa"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              Virtual Secret Santa for Remote Teams
            </h3>
            <p className="text-gray-700 mb-4">
              How to organize online gift exchanges with questionnaires
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-for-coworkers"
            className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-purple-600 transition-colors">
              Secret Santa Gifts for Coworkers
            </h3>
            <p className="text-gray-700 mb-4">
              Use questionnaire insights for office-appropriate gifts
            </p>
            <span className="text-purple-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/how-does-secret-santa-work"
            className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-orange-600 transition-colors">
              How Does Secret Santa Work?
            </h3>
            <p className="text-gray-700 mb-4">
              Understanding the basics before creating questionnaires
            </p>
            <span className="text-orange-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Gift className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-purple-50 max-w-2xl mx-auto">
          Now that you have the perfect questionnaire template, use our free Secret Santa generator to organize your exchange! Collect preferences, draw names, and share assignments—all in one place.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
        >
          Start Your Secret Santa Exchange
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
