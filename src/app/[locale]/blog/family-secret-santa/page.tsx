import type { Metadata } from 'next';
import Link from 'next/link';
import { Gift, Users, Heart, Baby, GraduationCap, Briefcase, Home, Star, Sparkles, DollarSign, Calendar, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Family Secret Santa: Complete Guide for All Ages (2025)',
  description: 'Plan the perfect family Secret Santa gift exchange. Age-appropriate gift ideas for kids, teens, adults & grandparents. Plus rules, traditions, and tips for large families.',
  keywords: 'family secret santa, secret santa for families, family gift exchange, secret santa with kids, family christmas exchange, multi-generational secret santa, family gift exchange ideas',
};

export default function FamilySecretSantaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-red-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Family Secret Santa</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
              Family Guide
            </span>
            <span className="text-gray-500 text-sm">16 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Family Secret Santa: The Complete Guide for Multi-Generational Gift Exchanges
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Family Secret Santa brings generations together through the joy of thoughtful gift-giving. Whether your
            family includes toddlers, teenagers, or grandparents, this guide helps you create memorable exchanges
            that work for everyone—no matter how big or spread out your family may be.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-rose-600" />
            Why Families Love Secret Santa
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-rose-600 mb-1">75%</div>
              <div className="text-sm text-gray-600">Less gift-buying stress</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-rose-600 mb-1">1 Gift</div>
              <div className="text-sm text-gray-600">Per person to buy</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-rose-600 mb-1">More</div>
              <div className="text-sm text-gray-600">Thoughtful presents</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-rose-600 mb-1">Fun</div>
              <div className="text-sm text-gray-600">Reveal traditions</div>
            </div>
          </div>
        </div>

        {/* Why Family Secret Santa */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Switch to Family Secret Santa?</h2>
          <p>
            As families grow, buying gifts for everyone becomes overwhelming and expensive. A family of 15 means
            14 gifts per person—that's 210 total gifts to buy, wrap, and exchange! Secret Santa simplifies
            everything while actually improving the quality of gift-giving.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">The Math Makes Sense:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Traditional Exchange (15 people):</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 14 gifts per person × $20 = $280 each</li>
                  <li>• Total family spending: $4,200</li>
                  <li>• Lots of generic, forgettable gifts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Secret Santa (15 people):</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 1 gift per person × $40 = $40 each</li>
                  <li>• Total family spending: $600</li>
                  <li>• Meaningful, personalized gifts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Setting Up Family Secret Santa */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-rose-600" />
            How to Set Up Family Secret Santa
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Decide Who Participates",
                items: [
                  "Adults only, or include children?",
                  "Couples draw together or separately?",
                  "Include extended family (aunts, cousins)?",
                  "Set a minimum age for participation (often 12+)"
                ]
              },
              {
                step: "2",
                title: "Set Budget & Rules",
                items: [
                  "Agree on spending limit ($25-50 is common for families)",
                  "Decide if handmade gifts count",
                  "Set exclusion rules (spouses can't draw each other)",
                  "Clarify if wish lists are required"
                ]
              },
              {
                step: "3",
                title: "Do the Draw",
                items: [
                  "Use a Secret Santa generator for fairness",
                  "Set up exclusions to prevent awkward pairings",
                  "Send results via email, text, or unique links",
                  "Keep organizer from seeing all matches (for secrecy)"
                ]
              },
              {
                step: "4",
                title: "Plan the Reveal",
                items: [
                  "Choose a date—Christmas Eve, Christmas Day, or family gathering",
                  "Decide on reveal method—guessing game, one-by-one, or all at once",
                  "For remote family: plan virtual reveal via video call",
                  "Make it festive with holiday music and treats"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-rose-600 font-bold">{section.step}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Age-Appropriate Gift Ideas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gift Ideas by Age Group</h2>
          <p className="text-gray-600 mb-8">
            The key to successful family Secret Santa is matching gifts to the recipient's age and interests.
            Here are curated ideas for every generation.
          </p>

          {/* Kids Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                <Baby className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Kids (Ages 5-12)</h3>
                <p className="text-gray-600">Fun, age-appropriate gifts that spark joy</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "LEGO Set", price: "$20-40", desc: "Age-appropriate building sets from classic bricks to themed collections" },
                { name: "Art Supply Kit", price: "$15-30", desc: "Crayons, markers, sketchbooks, and craft supplies for creative kids" },
                { name: "Board Games", price: "$15-35", desc: "Candy Land, Sorry!, or Guess Who for family game night" },
                { name: "Books (Age-Appropriate)", price: "$10-25", desc: "Diary of a Wimpy Kid, Dog Man, or chapter book series" },
                { name: "Science Kit", price: "$20-35", desc: "Volcano, crystal growing, or simple chemistry experiments" },
                { name: "Stuffed Animal", price: "$15-30", desc: "Squishmallows, Build-A-Bear, or character plushies" },
                { name: "Outdoor Toys", price: "$15-35", desc: "Jump rope, frisbee, sidewalk chalk, or bubble machines" },
                { name: "Puzzle Set", price: "$15-25", desc: "100-500 piece puzzles featuring favorite characters or animals" },
              ].map((gift, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-yellow-700 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teens Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Teens (Ages 13-19)</h3>
                <p className="text-gray-600">Trendy gifts they'll actually use</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Gift Cards (Their Choice)", price: "$25-50", desc: "Amazon, Starbucks, gaming stores, or clothing brands they love" },
                { name: "Wireless Earbuds", price: "$25-50", desc: "JBL, Skullcandy, or similar brands for music and gaming" },
                { name: "LED Strip Lights", price: "$15-25", desc: "RGB lights for bedroom aesthetic—very popular with teens" },
                { name: "Portable Charger", price: "$20-35", desc: "High-capacity power bank for their phones and devices" },
                { name: "Graphic Novel/Manga", price: "$15-30", desc: "Popular series or collector editions for book-loving teens" },
                { name: "Subscription Box (1 Month)", price: "$25-40", desc: "Snack boxes, book boxes, or hobby-specific subscriptions" },
                { name: "Gaming Accessories", price: "$20-40", desc: "Controller grips, headset stands, or gaming chairs" },
                { name: "Skincare Set", price: "$20-35", desc: "Teen-friendly brands like CeraVe, The Ordinary, or Bubble" },
              ].map((gift, index) => (
                <div key={index} className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-purple-700 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Adults Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Adults (Ages 20-59)</h3>
                <p className="text-gray-600">Practical, thoughtful, and quality gifts</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Premium Coffee/Tea Set", price: "$25-40", desc: "Specialty beans, loose leaf teas, or quality brewing equipment" },
                { name: "Cozy Throw Blanket", price: "$25-45", desc: "Soft fleece or sherpa blanket for relaxing at home" },
                { name: "Candle Gift Set", price: "$25-40", desc: "Yankee Candle, Voluspa, or Bath & Body Works collection" },
                { name: "Kitchen Gadget", price: "$25-50", desc: "Air fryer accessories, Instant Pot tools, or quality utensils" },
                { name: "Experience Gift Card", price: "$30-50", desc: "Restaurant, movie theater, spa, or activity voucher" },
                { name: "Book (Popular Title)", price: "$20-35", desc: "Bestseller, cookbook, or hobby-related book they'd enjoy" },
                { name: "Wine/Spirit Accessories", price: "$25-45", desc: "Aerator, glasses, or cocktail-making kit" },
                { name: "Tech Accessories", price: "$25-45", desc: "Wireless chargers, phone stands, or smart home devices" },
              ].map((gift, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-blue-700 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grandparents Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Grandparents (60+)</h3>
                <p className="text-gray-600">Thoughtful gifts that show you care</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Photo Book/Calendar", price: "$25-45", desc: "Custom photo book or calendar featuring family photos" },
                { name: "Comfort Slippers", price: "$25-40", desc: "Memory foam slippers with non-slip soles" },
                { name: "Large-Print Books", price: "$15-30", desc: "Bestsellers or crossword/puzzle books in easy-to-read format" },
                { name: "Heating Pad/Blanket", price: "$30-50", desc: "Electric heating pad for aches or heated throw blanket" },
                { name: "Video Calling Device", price: "$40-50", desc: "Echo Show, Google Nest Hub for easy video calls with family" },
                { name: "Garden Tools", price: "$25-40", desc: "Ergonomic tools, kneeling pad, or plant care kit" },
                { name: "Gourmet Food Basket", price: "$30-50", desc: "Quality treats—chocolates, jams, cookies, or specialty foods" },
                { name: "Cozy Robe", price: "$30-50", desc: "Soft, warm robe in their favorite color" },
              ].map((gift, index) => (
                <div key={index} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-emerald-700 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family Variations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Creative Family Secret Santa Variations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Couples Exchange",
                icon: Heart,
                color: "rose",
                desc: "Couples are paired as a unit—they shop together for another couple. Works great for married siblings and their spouses.",
                tips: ["Double the budget since gift is for two", "Can include couple activities like board games", "Great for reducing total number of exchanges"]
              },
              {
                title: "Themed Exchange",
                icon: Star,
                color: "amber",
                desc: "Everyone follows a theme for their gift—like 'cozy', 'homemade', 'experiences', or 'their favorite color'.",
                tips: ["Makes shopping easier with direction", "Creates cohesive gift-opening experience", "Can rotate themes each year"]
              },
              {
                title: "Kids-Only Draw",
                icon: Baby,
                color: "yellow",
                desc: "Only children participate in the exchange while adults opt out or do a separate adult draw.",
                tips: ["Teaches kids about thoughtful giving", "Adults can focus budget on kids' gifts", "Great for large families with many children"]
              },
              {
                title: "White Elephant Hybrid",
                icon: Gift,
                color: "green",
                desc: "Combine Secret Santa with stealing/swapping rules for more excitement during the reveal.",
                tips: ["Each person brings wrapped gift to pile", "Take turns picking or stealing", "Set 2-3 steal limit per gift"]
              },
              {
                title: "Year-Long Secret Santa",
                icon: Calendar,
                color: "blue",
                desc: "Draw names in January and send small gifts throughout the year, culminating in a bigger Christmas gift.",
                tips: ["Birthday cards, holiday treats, small surprises", "Builds anticipation all year", "Strengthens distant family connections"]
              },
              {
                title: "Charity Exchange",
                icon: Sparkles,
                color: "purple",
                desc: "Instead of physical gifts, donate to a charity in your recipient's name based on their values.",
                tips: ["Great for families who have everything", "Teaches children about giving back", "Can include small token gift with donation card"]
              },
            ].map((variation, index) => (
              <div key={index} className={`bg-${variation.color}-50 border border-${variation.color}-200 rounded-xl p-6`}>
                <div className="flex items-center mb-3">
                  <variation.icon className={`w-6 h-6 text-${variation.color}-600 mr-2`} />
                  <h3 className="font-semibold text-gray-900">{variation.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{variation.desc}</p>
                <ul className="space-y-1">
                  {variation.tips.map((tip, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className={`text-${variation.color}-500 mr-2`}>•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Large Family Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Large & Extended Families</h2>
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-rose-600" />
                  Managing 15+ Participants
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use an online generator to handle complex exclusions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create a shared spreadsheet for wish lists and sizes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Split into groups (adults/kids, generations, nuclear families)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Designate one family member as organizer each year</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-rose-600" />
                  Dealing with Distance
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Set shipping deadline 2 weeks before gathering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ship directly to host's house if traveling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use video call for virtual reveal if some can't attend</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consider experience gifts for distant relatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Exclusion Rules */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Family Exclusion Rules</h2>
          <p className="text-gray-600 mb-6">
            Exclusions prevent awkward pairings and ensure everyone gets a meaningful gift from someone
            who doesn't already buy for them. Here are typical rules families use:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { rule: "Spouses/Partners", reason: "Already exchange gifts with each other" },
              { rule: "Parents ↔ Children", reason: "Parents buy for kids separately anyway" },
              { rule: "Same Household", reason: "Live together and know each other too well" },
              { rule: "Last Year's Match", reason: "Ensures variety year to year" },
              { rule: "Siblings (Optional)", reason: "Some families want to mix generations" },
              { rule: "In-Laws (Sometimes)", reason: "Ensures family members aren't always paired" },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{item.rule}</h4>
                <p className="text-gray-600 text-sm">{item.reason}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-rose-50 border border-rose-200 rounded-xl p-4">
            <p className="text-rose-800 text-sm">
              <strong>Pro Tip:</strong> Our Secret Santa Generator supports unlimited exclusion rules.
              Just add each pair that shouldn't be matched, and the algorithm handles the rest automatically.
            </p>
          </div>
        </section>

        {/* Reveal Ideas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fun Family Reveal Ideas</h2>
          <div className="space-y-4">
            {[
              {
                title: "Guessing Game Reveal",
                desc: "Before opening, each person guesses who their Secret Santa is. Award small prizes for correct guesses!",
                steps: ["Everyone sits in circle with gifts", "One at a time, make your guess", "Then open to reveal if correct", "Celebrate guesses with treats or points"]
              },
              {
                title: "Hot Potato Pass",
                desc: "Pass gifts around while music plays. When it stops, that person opens their gift.",
                steps: ["All gifts go in center pile", "Play holiday music, pass gifts", "When music stops, open that gift", "Continue until all gifts opened"]
              },
              {
                title: "Scavenger Hunt",
                desc: "Hide gifts around the house with clues. Each person follows their personalized clue trail.",
                steps: ["Secret Santas create 3-5 clues each", "Clues are personalized for recipient", "Everyone hunts simultaneously", "Great for kids and active families"]
              },
              {
                title: "20 Questions Reveal",
                desc: "Recipients ask yes/no questions to guess their Secret Santa before opening.",
                steps: ["Limit to 10-20 questions", "Questions like 'Are you older than me?'", "Three guess limit", "Open gift to confirm"]
              },
            ].map((idea, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{idea.title}</h3>
                <p className="text-gray-600 mb-4">{idea.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {idea.steps.map((step, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {i + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Handling Difficulties */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Handling Common Family Challenges</h2>
          <div className="space-y-4">
            {[
              {
                problem: "Picky family members who are 'impossible to buy for'",
                solution: "Require wish lists with at least 5 items at different price points. Include gift card preferences. No wish list = no complaints about the gift!"
              },
              {
                problem: "Big age gaps making matching difficult",
                solution: "Consider separate draws for different age groups (kids pool, adult pool). Or use themes to level the playing field—everyone loves a 'cozy' themed gift."
              },
              {
                problem: "Someone always 'spoils' who they have",
                solution: "Use our generator's individual link feature—each person only sees their own match. No group email with all pairings to accidentally reveal."
              },
              {
                problem: "Family members who can't afford the budget",
                solution: "Set a lower budget everyone can manage, or allow homemade gifts to count. The thought matters more than the price tag."
              },
              {
                problem: "Some family members don't participate",
                solution: "That's okay! Just exclude them from the draw. They can still watch the reveal and join the celebration without participating in the exchange."
              },
              {
                problem: "Remote family members who can't attend",
                solution: "Ship gifts to the host's house ahead of time, or coordinate a video call for simultaneous opening. Virtual reveals can be just as fun!"
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                  <MessageCircle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                  {item.problem}
                </h3>
                <p className="text-gray-600 ml-7">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Family Secret Santa FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "What's the ideal budget for family Secret Santa?",
                a: "$25-40 works well for most families. It's enough for a quality gift but not so much that it creates financial strain. Survey your family first—a quick poll in the family group chat helps."
              },
              {
                q: "What age should kids start participating?",
                a: "Ages 8-10+ can participate with parent help. Younger children can be paired with a parent to shop together. It teaches them about thoughtful giving while ensuring appropriate gifts."
              },
              {
                q: "How do we handle new family members (boyfriends/girlfriends)?",
                a: "Generally, wait until engagement or marriage to include significant others. For long-term partners, discuss as a family. You can always include them as 'observers' without participating in the draw."
              },
              {
                q: "Can we do Secret Santa instead of a gift for everyone?",
                a: "Absolutely! Many families transition to Secret Santa as they grow. Frame it positively—'We're doing Secret Santa so we can focus on one meaningful gift instead of many rushed ones.'"
              },
              {
                q: "How do we handle wish lists fairly?",
                a: "Use a shared document (Google Sheets works great) where everyone lists 5-10 items at various price points, plus sizes, favorite stores, and things to avoid. Update it annually."
              },
              {
                q: "What if someone gets the same person two years in a row?",
                a: "Use exclusion rules to prevent last year's matches. Our generator has a 'no repeat from last year' feature. If it happens anyway, just do a redraw."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/secret-santa-questionnaire" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <MessageCircle className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Questionnaire Template</h3>
              <p className="text-gray-600 text-sm">30+ questions to help with gifting</p>
            </Link>
            <Link href="/blog/virtual-secret-santa" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Home className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Virtual Secret Santa</h3>
              <p className="text-gray-600 text-sm">For families spread across distances</p>
            </Link>
            <Link href="/blog/christmas-secret-santa-2025" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Calendar className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Christmas 2025 Guide</h3>
              <p className="text-gray-600 text-sm">Timeline and planning checklist</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Family Exchange?</h2>
          <p className="text-rose-100 mb-6 max-w-xl mx-auto">
            Our free Secret Santa Generator handles all the complexities of family exchanges—
            exclusion rules, wish lists, and private notifications. No email required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors"
          >
            Create Family Exchange
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
}
