import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, DollarSign, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Santa Gifts for Men: 40+ Ideas Guys Actually Want (2025)',
  description: 'Discover 40+ secret santa gift ideas for men that guys will genuinely love. From tech gadgets to practical accessories, find the perfect gift under $20, $30, or $50.',
  keywords: 'secret santa gifts for men, secret santa for guys, secret santa gifts for men under 20, secret santa presents for men, gifts for guys secret santa',
  openGraph: {
    title: 'Secret Santa Gifts for Men: 40+ Ideas Guys Actually Want',
    description: 'Comprehensive guide to secret santa gifts for men - tech, accessories, and more',
    type: 'article',
  },
};

export default function SecretSantaGiftsForMen() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            <Gift className="w-4 h-4" />
            Gift Guide
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Users className="w-4 h-4" />
            For Men
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Secret Santa Gifts for Men: 40+ Ideas Guys Actually Want
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            12 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            40+ gift ideas
          </span>
          <span className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4" />
            $10-$50 budget
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Finding the perfect secret santa gifts for men can feel like solving a puzzle. Whether you're shopping for coworkers, friends, or family members, guys can be notoriously difficult to buy for. They say they "don't need anything," but everyone appreciates a thoughtful gift.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The key to finding great secret santa gifts for guys is understanding what men actually use and appreciate. Forget generic gifts that end up in a drawer—we're focusing on practical, cool, and genuinely useful items that any guy would be happy to receive.
        </p>

        <p className="text-gray-700 leading-relaxed">
          In this comprehensive guide, we've curated 40+ secret santa gift ideas for men across different categories and budgets. Whether you're looking for tech gadgets, accessories, or funny gifts, you'll find something perfect for your secret santa exchange.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#tech-gadgets" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Tech & Gadgets
          </a>
          <a href="#accessories" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Accessories
          </a>
          <a href="#food-drink" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Food & Drink
          </a>
          <a href="#practical" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Practical Gifts
          </a>
          <a href="#fitness" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Fitness & Outdoors
          </a>
          <a href="#funny" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Funny Gifts
          </a>
        </div>
      </div>

      {/* Tech & Gadgets Section */}
      <section id="tech-gadgets" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech & Gadgets for Men</h2>
          <p className="text-gray-700 text-lg">
            Tech gifts are always a safe bet for secret santa. These gadgets are practical, cool, and something most guys will actually use daily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Wireless Charging Station", price: "$30-50", desc: "Keep all devices charged in one sleek spot. Perfect for the guy with multiple gadgets—phone, watch, and earbuds all charge simultaneously." },
            { name: "Portable Bluetooth Speaker", price: "$25-40", desc: "Compact speaker for music anywhere. Great sound quality for its size, waterproof options available for outdoor use." },
            { name: "Phone Card Holder", price: "$15-25", desc: "Stick-on wallet for the back of phone. Holds 2-3 cards and eliminates the need for a bulky wallet." },
            { name: "Blue Light Blocking Glasses", price: "$20-35", desc: "Protect eyes from screen strain. Essential for guys who work at computers all day. Reduces headaches and improves sleep." },
            { name: "USB Hub Multi-Port Adapter", price: "$18-30", desc: "Expand laptop connectivity instantly. Adds multiple USB ports, HDMI, and SD card reader in one compact device." },
            { name: "Portable Phone Charger", price: "$20-40", desc: "Never run out of battery again. High-capacity power bank that can charge phones 2-3 times." },
            { name: "Wireless Earbuds", price: "$30-50", desc: "Budget-friendly alternative to AirPods. Decent sound quality, comfortable fit, and surprisingly long battery life." },
            { name: "Smart Key Finder", price: "$25-30", desc: "Never lose keys again. Attach to keychain and locate via smartphone app with precision tracking." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessories Every Guy Needs</h2>
          <p className="text-gray-700 text-lg">
            Accessories make excellent secret santa gifts for men because they're universally useful and don't require knowing someone's size or specific preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Leather Wallet or Card Holder", price: "$25-45", desc: "Slim minimalist design that fits in front pocket. High-quality leather that ages beautifully. Upgrade from bulky old wallets." },
            { name: "Quality Watch", price: "$30-50", desc: "Affordable yet stylish timepiece. Casio or Timex offer great value. Works with any outfit, from casual to business." },
            { name: "Sunglasses", price: "$20-50", desc: "Classic Ray-Ban style or sporty option. UV protection is essential. Choose neutral colors like black or tortoise shell." },
            { name: "Baseball Cap or Beanie", price: "$15-30", desc: "Practical headwear for any season. Choose neutral colors or favorite sports teams. Corduroy hats are trending." },
            { name: "Leather Belt", price: "$25-40", desc: "Reversible black/brown leather belt. Essential accessory that gets worn almost daily. Look for quality stitching." },
            { name: "Stainless Steel Bracelet", price: "$20-35", desc: "Minimalist jewelry for men. Sterling silver or stainless steel options. Adds style to any outfit without being flashy." },
            { name: "Quality Socks Set", price: "$15-25", desc: "Nike, Bombas, or Darn Tough crew socks. It's not a boring gift—guys actually appreciate good socks as they get older." },
            { name: "Tie or Pocket Square", price: "$15-30", desc: "For the professional guy. Classic patterns or modern slim ties. Adds personality to business attire." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Food & Drink Section */}
      <section id="food-drink" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Food & Drink Gifts for Men</h2>
          <p className="text-gray-700 text-lg">
            The way to a man's heart is through his stomach. These food and drink gifts are perfect for secret santa exchanges and always appreciated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Premium Coffee Sampler", price: "$20-35", desc: "Variety pack from local roasters. Great for coffee enthusiasts who want to try new flavors without commitment." },
            { name: "Hot Sauce Gift Set", price: "$18-30", desc: "Assorted heat levels from mild to insane. Perfect for guys who like to test their spice tolerance." },
            { name: "Craft Beer or Whiskey Stones", price: "$15-25", desc: "Chill drinks without dilution. Reusable stainless steel or soapstone cubes. Great for whiskey lovers." },
            { name: "Gourmet Jerky Variety Pack", price: "$20-35", desc: "High-protein snack in multiple flavors. Beef, turkey, or exotic meats like elk or bison." },
            { name: "BBQ Rub & Spice Set", price: "$20-30", desc: "Elevate grilling game instantly. Includes multiple flavor profiles for different meats. Recipe cards often included." },
            { name: "Artisan Chocolate Bar Set", price: "$15-25", desc: "Not your average chocolate. Single-origin cacao with unique flavor notes. Great for the guy with refined taste." },
            { name: "Cocktail Making Kit", price: "$25-45", desc: "Everything needed for home bartending. Includes shaker, strainer, jigger, and recipe book. Fun for entertaining." },
            { name: "Gourmet Popcorn Tin", price: "$15-25", desc: "Three flavors in one tin—cheese, caramel, and butter. Perfect for movie nights or game watching." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Gifts Section */}
      <section id="practical" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Practical Gifts Guys Will Use</h2>
          <p className="text-gray-700 text-lg">
            These practical secret santa gifts for men solve everyday problems and get used regularly—the mark of a truly great gift.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Multi-Tool or Pocket Knife", price: "$20-40", desc: "Leatherman or Swiss Army knife. Incredibly useful for everyday tasks. Compact enough to carry daily." },
            { name: "Insulated Water Bottle", price: "$25-40", desc: "Keeps drinks cold 24 hours, hot 12 hours. YETI or Hydro Flask quality. Perfect for gym, office, or outdoors." },
            { name: "Car Emergency Kit", price: "$25-45", desc: "Jumper cables, flashlight, basic tools. Every car should have one. Compact storage in trunk organizer." },
            { name: "Portable Tire Air Compressor", price: "$30-50", desc: "Plug into car outlet to inflate tires. Includes pressure gauge. Saves trips to gas station air pumps." },
            { name: "Quality Flashlight", price: "$20-35", desc: "LED rechargeable with multiple brightness settings. Useful for emergencies, camping, or working in dark spaces." },
            { name: "Leather Desk Mat", price: "$30-50", desc: "Protects desk surface while looking professional. Built-in cable management. Creates a refined workspace aesthetic." },
            { name: "Cable Organizer Set", price: "$15-25", desc: "Eliminate cable chaos on desk. Includes clips, sleeves, and velcro ties. Makes workspace look clean and organized." },
            { name: "Car Phone Mount", price: "$15-25", desc: "Secure phone holder for GPS navigation. Adjustable viewing angles. Easy one-handed operation while driving." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fitness & Outdoors Section */}
      <section id="fitness" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitness & Outdoor Gifts</h2>
          <p className="text-gray-700 text-lg">
            For the active guy or the one trying to get more active, these gifts support fitness goals and outdoor adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Resistance Bands Set", price: "$15-25", desc: "Portable home gym equipment. Multiple resistance levels. Perfect for travel or small apartments. Full-body workouts possible." },
            { name: "Gym Towel & Water Bottle Combo", price: "$20-30", desc: "Quick-dry microfiber towel plus insulated bottle. Gym essentials in one package. Choose motivational designs." },
            { name: "Foam Roller", price: "$15-30", desc: "Muscle recovery essential. Relieves soreness and improves flexibility. Every athlete needs one but few buy it themselves." },
            { name: "Wireless Workout Earbuds", price: "$25-45", desc: "Sweat-resistant with secure fit. Critical for gym motivation. Better sound than AirPods for half the price." },
            { name: "Camping Hammock", price: "$25-40", desc: "Lightweight and portable. Sets up anywhere between two trees. Perfect for hiking, camping, or backyard relaxing." },
            { name: "Hiking Socks", price: "$15-25", desc: "Merino wool moisture-wicking socks. Prevents blisters on long hikes. Guys who hike will appreciate the quality difference." },
            { name: "Headlamp for Running/Camping", price: "$20-35", desc: "Hands-free lighting for outdoor activities. Adjustable brightness settings. Essential for early morning runs or camping." },
            { name: "Portable Camping Chair", price: "$30-50", desc: "Lightweight folding chair for tailgating, camping, or fishing. Compact storage. More comfortable than sitting on ground." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Funny Gifts Section */}
      <section id="funny" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Funny Secret Santa Gifts for Guys</h2>
          <p className="text-gray-700 text-lg">
            Sometimes the best gifts are the ones that make everyone laugh. These funny options are perfect for casual office exchanges or friend groups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Desktop Punching Bag", price: "$15-25", desc: "Stress relief for the office. Suction cup base sticks to desk. Perfect for venting frustrations between meetings." },
            { name: "Toilet Golf Game", price: "$12-18", desc: "Practice putting while on the throne. Includes mini putter and hole. Ridiculous but genuinely entertaining." },
            { name: "Emergency Underpants Kit", price: "$10-15", desc: "For the guy who's always unprepared. Disposable underwear in a sardine-style tin. Gag gift that's actually useful." },
            { name: "Giant Wine Glass", price: "$15-25", desc: "Holds entire bottle of wine. Technically one glass. Perfect for the guy who likes to relax after work." },
            { name: "Beard Shaping Tool", price: "$10-20", desc: "Guide for symmetrical beard trimming. Looks ridiculous in use but produces great results. Bearded guys will secretly love it." },
            { name: "Bacon-Scented Candle", price: "$12-18", desc: "Makes room smell like breakfast. Novelty candle that's surprisingly popular. For the bacon enthusiast." },
            { name: "Emergency Drinking Hat", price: "$15-25", desc: "Holds two drinks with straws. Hands-free beverage consumption. Perfect for game day or tailgating." },
            { name: "Funny Graphic Socks", price: "$10-18", desc: "Tacos, pizza, or witty sayings. Adds personality to boring work attire. Guys actually wear and appreciate these." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Tips */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Choosing Secret Santa Gifts for Men</h2>

          <div className="space-y-4">
            {[
              {
                title: "Know Your Budget Range",
                desc: "Most secret santa exchanges have a $20-30 limit. Don't stress about going over—focus on thoughtfulness within your price range."
              },
              {
                title: "Consider Practicality Over Flash",
                desc: "Guys appreciate gifts they'll actually use. A quality everyday item beats a flashy novelty that sits in a drawer."
              },
              {
                title: "When in Doubt, Go Tech",
                desc: "Almost every guy likes tech gadgets. Phone accessories, charging cables, or Bluetooth speakers are safe bets."
              },
              {
                title: "Food & Drink Never Fails",
                desc: "Consumable gifts eliminate the worry of whether they'll like it long-term. Premium snacks or drinks are always appreciated."
              },
              {
                title: "Skip the Cologne Unless You Know",
                desc: "Fragrance is extremely personal. Unless you know his exact preference, avoid cologne and stick to other categories."
              },
              {
                title: "Quality Over Quantity",
                desc: "One well-made item is better than multiple cheap ones. Guys notice and appreciate quality construction and materials."
              }
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
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

      {/* Budget Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Secret Santa Gifts for Men by Budget</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Under $20</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Quality socks set</li>
              <li>• Phone card holder</li>
              <li>• Funny graphic socks</li>
              <li>• Craft beer stones</li>
              <li>• Resistance bands</li>
              <li>• Desk organizer</li>
              <li>• Gourmet popcorn</li>
              <li>• Blue light glasses</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$20-$35</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Wireless charging station</li>
              <li>• Bluetooth speaker</li>
              <li>• Leather wallet</li>
              <li>• Multi-tool</li>
              <li>• Coffee sampler</li>
              <li>• Insulated water bottle</li>
              <li>• Premium jerky pack</li>
              <li>• Camping hammock</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$35-$50</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Wireless earbuds</li>
              <li>• Quality watch</li>
              <li>• Cocktail making kit</li>
              <li>• Leather desk mat</li>
              <li>• Portable camping chair</li>
              <li>• Tire air compressor</li>
              <li>• Sunglasses (Ray-Ban style)</li>
              <li>• Car emergency kit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: "What are the best secret santa gifts for men under $20?",
              a: "The best budget-friendly options include quality crew socks, phone card holders, funny graphic socks, portable phone chargers, blue light blocking glasses, and gourmet snack packs. These items are practical, universally appreciated, and don't feel cheap despite the low price point."
            },
            {
              q: "What should I avoid when buying secret santa gifts for guys?",
              a: "Avoid cologne (too personal), overly personal items like clothing with sizes, anything too juvenile unless you know their sense of humor, and generic office supplies. Also skip items that require specific knowledge like video games for consoles they might not own."
            },
            {
              q: "Are tech gifts good for secret santa exchanges with men?",
              a: "Yes! Tech accessories are among the safest bets for secret santa gifts for men. Phone accessories, wireless chargers, Bluetooth speakers, and cable organizers are universally useful. Avoid expensive tech items or anything requiring brand compatibility you're unsure about."
            },
            {
              q: "What are good secret santa gifts for coworkers who are men?",
              a: "For office settings, stick with professional but fun items: desk organizers, quality coffee, insulated mugs, blue light glasses, premium snacks, cable management systems, or practical accessories like wallets or watches. Avoid anything too personal or potentially inappropriate."
            },
            {
              q: "Should I get a funny gift or a practical gift for a guy?",
              a: "This depends on your relationship and the exchange setting. Office parties typically appreciate practical gifts with subtle humor. Friend groups can handle funnier options. When in doubt, choose practical items with a slight fun twist—like a high-quality flashlight with funny packaging."
            },
            {
              q: "What are safe gift options if I don't know the guy well?",
              a: "Universal crowd-pleasers include: wireless phone chargers, premium coffee or snacks, multi-tools, quality socks, portable Bluetooth speakers, insulated water bottles, or car accessories. These work for virtually any guy regardless of personal preferences."
            },
            {
              q: "How much should I spend on secret santa gifts for men?",
              a: "Follow your group's agreed-upon budget, typically $20-30. Don't feel pressure to exceed it—thoughtfulness matters more than price. You can find excellent gifts at every price point from $10 to $50+."
            },
            {
              q: "Can I give food as a secret santa gift to a guy?",
              a: "Absolutely! Food and drink gifts are excellent choices for men. Consider gourmet jerky, hot sauce sets, premium coffee, craft beer accessories, BBQ rubs, artisan chocolates, or snack variety packs. Just be mindful of dietary restrictions if you know them."
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
            href="/en/blog/secret-santa-gifts-under-20"
            className="group bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-red-600 transition-colors">
              Secret Santa Gifts Under $20: 50+ Ideas
            </h3>
            <p className="text-gray-700 mb-4">
              Budget-friendly gift ideas for everyone on your list
            </p>
            <span className="text-red-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/how-to-organize-secret-santa"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              How to Organize a Secret Santa Gift Exchange
            </h3>
            <p className="text-gray-700 mb-4">
              Complete guide to planning the perfect Secret Santa
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Gift className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-red-50 max-w-2xl mx-auto">
          Now that you have the perfect gift ideas for men, use our free Secret Santa generator to organize your gift exchange in minutes. No email required!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
