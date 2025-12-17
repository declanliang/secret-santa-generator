import { Metadata } from 'next';
import Link from 'next/link';
import { Gift, DollarSign, Sparkles, Users, Heart, Laugh } from 'lucide-react';

export const metadata: Metadata = {
  title: "Secret Santa Gifts Under $20: 50+ Best Ideas for 2025 | Budget-Friendly",
  description: "Discover 50+ creative Secret Santa gift ideas under $20. From funny to practical, find the perfect budget-friendly gift for coworkers, friends, and family. Updated for 2025.",
  keywords: "secret santa gifts under $20, $20 secret santa gift ideas, cheap secret santa gifts, budget secret santa, inexpensive secret santa gifts, secret santa ideas under $20",
  alternates: {
    canonical: '/blog/secret-santa-gifts-under-20',
  },
  openGraph: {
    title: "Secret Santa Gifts Under $20: 50+ Best Ideas for 2025",
    description: "Discover 50+ creative Secret Santa gift ideas under $20. Perfect for office parties, friends, and family.",
    type: "article",
  },
};

export default function SecretSantaGiftsUnder20Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-12 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-violet-600 mb-4">
            <Gift className="w-5 h-5" />
            <span className="text-sm font-semibold">GIFT GUIDE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Secret Santa Gifts Under $20: 50+ Best Ideas for 2025
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Finding the perfect Secret Santa gift on a budget doesn't have to be stressful.
            We've curated 50+ creative, funny, and practical gift ideas—all under $20—that will
            make you the star of your gift exchange.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>📅 Updated December 2024</span>
            <span>⏱️ 10 min read</span>
          </div>
        </header>

        {/* Quick Navigation */}
        <nav className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="font-bold text-lg mb-4">Jump to Category:</h2>
          <div className="grid md:grid-cols-2 gap-2 text-violet-600">
            <a href="#funny" className="hover:underline">🎭 Funny Gifts ($5-$20)</a>
            <a href="#practical" className="hover:underline">🎯 Practical Gifts ($10-$20)</a>
            <a href="#food" className="hover:underline">🍫 Food & Snacks ($8-$20)</a>
            <a href="#tech" className="hover:underline">💻 Tech Gadgets ($12-$20)</a>
            <a href="#cozy" className="hover:underline">🧦 Cozy Comfort ($15-$20)</a>
            <a href="#unique" className="hover:underline">✨ Unique Finds ($10-$20)</a>
          </div>
        </nav>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-12">
          <div className="bg-violet-50 border-l-4 border-violet-600 p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-bold text-violet-900 mt-0">Why $20 is the Sweet Spot</h3>
            <p className="text-gray-700 mb-0">
              The $20 price range is perfect for Secret Santa—it's affordable for everyone while still
              allowing you to give something thoughtful and memorable. Whether you're shopping for
              coworkers, friends, or family, this budget gives you plenty of options without breaking
              the bank.
            </p>
          </div>
        </section>

        {/* Category 1: Funny Gifts */}
        <section id="funny" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Laugh className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">Funny Secret Santa Gifts ($5-$20)</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Make everyone laugh with these hilarious and quirky gift ideas that are guaranteed to
            be the talk of the party.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Toilet Golf Game", price: "$15", desc: "Mini golf for bathroom breaks—perfect for the sports enthusiast" },
              { name: "Desktop Punching Bag", price: "$18", desc: "Stress relief for frustrating work days" },
              { name: "Funny Novelty Socks", price: "$10-15", desc: "Pizza, tacos, or funny sayings—always a crowd-pleaser" },
              { name: "Emergency Underpants Kit", price: "$12", desc: "\"In case of emergency\" gag gift" },
              { name: "World's Smallest Violin", price: "$8", desc: "For their sob stories" },
              { name: "Office Supply Samurai", price: "$14", desc: "Desktop figurine made from office supplies" },
              { name: "Nicolas Cage Pillowcase", price: "$16", desc: "Yes, it's a thing. Yes, it's hilarious." },
              { name: "Passive-Aggressive Notes Pad", price: "$10", desc: "Pre-written notes for annoying coworkers" },
              { name: "Crazy Cat Lady Board Game", price: "$18", desc: "For the cat lover in your group" },
              { name: "Instant Underpants", price: "$7", desc: "Just add water!" },
            ].map((gift, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{gift.name}</h3>
                  <span className="text-violet-600 font-semibold whitespace-nowrap ml-2">{gift.price}</span>
                </div>
                <p className="text-sm text-gray-600">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category 2: Practical Gifts */}
        <section id="practical" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">Practical Secret Santa Gifts ($10-$20)</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Useful gifts that people will actually use and appreciate long after the party is over.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Stainless Steel Water Bottle", price: "$15-20", desc: "Eco-friendly and keeps drinks cold/hot for hours" },
              { name: "Phone Charging Cable Set", price: "$12", desc: "Multi-pack with different lengths—everyone needs these" },
              { name: "Portable Phone Charger", price: "$18", desc: "Compact power bank for on-the-go charging" },
              { name: "Desk Organizer", price: "$16", desc: "Bamboo or acrylic organizer to declutter workspace" },
              { name: "Reusable Coffee Cup", price: "$14", desc: "Insulated travel mug for coffee lovers" },
              { name: "Mini Tool Kit", price: "$19", desc: "Compact toolkit for everyday fixes" },
              { name: "Bluetooth Earbuds", price: "$20", desc: "Budget-friendly wireless earbuds" },
              { name: "Plant Mister & Pruning Set", price: "$15", desc: "For the plant parent in your life" },
              { name: "Cable Management Box", price: "$17", desc: "Hide messy cables in style" },
              { name: "Microfiber Cleaning Cloths", price: "$12", desc: "Premium set for glasses, screens, and electronics" },
            ].map((gift, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{gift.name}</h3>
                  <span className="text-violet-600 font-semibold whitespace-nowrap ml-2">{gift.price}</span>
                </div>
                <p className="text-sm text-gray-600">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category 3: Food & Snacks */}
        <section id="food" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">Food & Snack Gifts ($8-$20)</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Delicious treats that are perfect for foodies and snack enthusiasts.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Gourmet Hot Sauce Set", price: "$15", desc: "Variety pack of artisan hot sauces" },
              { name: "Specialty Coffee Sampler", price: "$18", desc: "Collection of premium single-origin coffees" },
              { name: "Chocolate Tasting Box", price: "$20", desc: "Assorted premium chocolates from around the world" },
              { name: "Popcorn Seasoning Set", price: "$12", desc: "Unique flavors like truffle, buffalo, and cheddar" },
              { name: "Tea Sampler Collection", price: "$16", desc: "Variety of loose-leaf teas in fancy packaging" },
              { name: "Gourmet Jerky Pack", price: "$19", desc: "Premium beef, turkey, or vegan jerky" },
              { name: "International Snack Box", price: "$18", desc: "Curated snacks from different countries" },
              { name: "Infused Olive Oil Set", price: "$17", desc: "Garlic, chili, and herb-infused oils" },
              { name: "Cookie Baking Mix in a Jar", price: "$14", desc: "Layered ingredients with recipe card" },
              { name: "Craft BBQ Rub Set", price: "$15", desc: "Smoky, spicy, and sweet rub blends" },
            ].map((gift, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{gift.name}</h3>
                  <span className="text-violet-600 font-semibold whitespace-nowrap ml-2">{gift.price}</span>
                </div>
                <p className="text-sm text-gray-600">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category 4: Tech Gadgets */}
        <section id="tech" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">Tech Gadgets & Accessories ($12-$20)</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Cool tech gifts that won't break the bank but will definitely impress.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "LED Strip Lights", price: "$15", desc: "USB-powered lights for desk or gaming setup" },
              { name: "Wireless Mouse", price: "$18", desc: "Ergonomic design with adjustable DPI" },
              { name: "PopSocket & Phone Stand", price: "$12", desc: "Combo pack for better phone grip and viewing" },
              { name: "Cable Clips & Holders", price: "$10", desc: "Magnetic organizers for desk cables" },
              { name: "Screen Cleaning Kit", price: "$14", desc: "Spray and microfiber cloths for all devices" },
              { name: "Mini Bluetooth Speaker", price: "$19", desc: "Portable speaker with surprisingly good sound" },
              { name: "Webcam Cover Set", price: "$8", desc: "Privacy sliders for laptop and phone cameras" },
              { name: "USB Hub Splitter", price: "$16", desc: "Multi-port hub for connecting devices" },
              { name: "Gaming Mouse Pad", price: "$15", desc: "Extra-large RGB or standard gaming surface" },
              { name: "Phone Camera Lens Kit", price: "$18", desc: "Clip-on wide-angle and macro lenses" },
            ].map((gift, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{gift.name}</h3>
                  <span className="text-violet-600 font-semibold whitespace-nowrap ml-2">{gift.price}</span>
                </div>
                <p className="text-sm text-gray-600">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category 5: Cozy Comfort */}
        <section id="cozy" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">Cozy Comfort Gifts ($15-$20)</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Warm and fuzzy gifts perfect for the winter season.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Fuzzy Socks Bundle", price: "$15", desc: "Pack of 3-4 pairs of ultra-soft fuzzy socks" },
              { name: "Aromatherapy Candle Set", price: "$18", desc: "Lavender, eucalyptus, and vanilla scents" },
              { name: "Cozy Blanket Scarf", price: "$16", desc: "Oversized plaid scarf that doubles as a blanket" },
              { name: "Bath Bomb Gift Set", price: "$14", desc: "Assorted scents for relaxing baths" },
              { name: "Neck Warmer Pillow", price: "$17", desc: "Microwavable pillow for sore muscles" },
              { name: "Slippers with Memory Foam", price: "$19", desc: "Ultra-comfortable house slippers" },
              { name: "Hand Cream Set", price: "$15", desc: "Moisturizing creams in travel-friendly tubes" },
              { name: "Weighted Eye Mask", price: "$16", desc: "Soothing mask for better sleep" },
              { name: "Tea & Honey Gift Basket", price: "$20", desc: "Herbal teas with local honey" },
              { name: "Heating Pad", price: "$18", desc: "Electric heating pad for cozy warmth" },
            ].map((gift, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{gift.name}</h3>
                  <span className="text-violet-600 font-semibold whitespace-nowrap ml-2">{gift.price}</span>
                </div>
                <p className="text-sm text-gray-600">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category 6: Unique Finds */}
        <section id="unique" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-gray-900">Unique & Creative Finds ($10-$20)</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Stand out from the crowd with these one-of-a-kind gift ideas.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Mini Succulent Plant Set", price: "$15", desc: "Trio of low-maintenance succulents with cute pots" },
              { name: "Customizable Desk Name Plate", price: "$18", desc: "Funny job titles like \"Professional Procrastinator\"" },
              { name: "Scratch-Off World Map", price: "$16", desc: "Track travels by scratching off visited countries" },
              { name: "Magnetic Poetry Kit", price: "$14", desc: "Create hilarious poems on any metal surface" },
              { name: "Mini Zen Garden", price: "$13", desc: "Desktop sand garden for stress relief" },
              { name: "Grow Your Own Mushroom Kit", price: "$19", desc: "Countertop kit for growing edible mushrooms" },
              { name: "Fortune Telling Fish", price: "$8", desc: "Retro novelty that \"tells your fortune\"" },
              { name: "Personalized Stamp", price: "$17", desc: "Custom name stamp for books or stationery" },
              { name: "Constellation Night Light", price: "$20", desc: "Projects stars onto ceiling" },
              { name: "Vintage Recipe Box Set", price: "$15", desc: "Decorative box with blank recipe cards" },
            ].map((gift, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-violet-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{gift.name}</h3>
                  <span className="text-violet-600 font-semibold whitespace-nowrap ml-2">{gift.price}</span>
                </div>
                <p className="text-sm text-gray-600">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shopping Tips */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Pro Tips for Finding Great Gifts Under $20</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">1️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Shop During Sales</h3>
                <p className="text-gray-600">Black Friday, Cyber Monday, and post-holiday sales offer huge discounts. Stock up for next year!</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">2️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Bundle Smaller Items</h3>
                <p className="text-gray-600">Combine 2-3 items (like candy + socks + small gadget) to create a themed gift basket within budget.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">3️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Check Amazon Deals</h3>
                <p className="text-gray-600">Amazon's \"Deals\" section often has items under $20 with free Prime shipping.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">4️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Consider DIY Options</h3>
                <p className="text-gray-600">Homemade gifts like baked goods, infused oils, or crafts can be more meaningful and budget-friendly.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">5️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Think About Packaging</h3>
                <p className="text-gray-600">Even an inexpensive gift looks premium with nice wrapping. Spend $2-3 on quality gift wrap.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What's a good Secret Santa gift for $20 for coworkers?</h3>
              <p className="text-gray-600">
                Stick to office-appropriate gifts like desk accessories, coffee/tea, quality pens, or funny desk signs.
                Avoid anything too personal or potentially offensive. Popular choices include reusable coffee cups,
                desk plants, or premium snacks.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Can I find quality gifts under $20?</h3>
              <p className="text-gray-600">
                Absolutely! The $20 price point offers plenty of high-quality options. Look for items on sale,
                shop at discount retailers like TJ Maxx or HomeGoods, or buy directly from brands during promotions.
                Many of the gifts listed above are well-made and will last for years.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What if I don't know the person well?</h3>
              <p className="text-gray-600">
                Stick to universal crowd-pleasers: food/snacks, socks, candles, or desk accessories. These work for
                almost anyone and aren't too personal. Avoid anything related to hobbies, religion, or politics unless
                you're certain about their preferences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Should I buy funny or practical gifts?</h3>
              <p className="text-gray-600">
                Consider your audience. Office parties often appreciate funny gifts that spark conversation, while
                family exchanges might prefer practical items. When in doubt, choose something that's both—like
                funny socks that are still useful, or a humorous desk organizer.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Where's the best place to buy Secret Santa gifts under $20?</h3>
              <p className="text-gray-600">
                Amazon, Target, and Walmart offer the widest selection with free shipping options. For unique finds,
                check Etsy, local boutiques, or specialty stores like HomeGoods and TJ Maxx. Dollar stores and
                discount retailers can also have surprising finds if you search carefully.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How early should I buy my Secret Santa gift?</h3>
              <p className="text-gray-600">
                Start shopping 2-3 weeks before the exchange to avoid last-minute stress and shipping delays.
                This gives you time to browse sales, compare prices, and ensure your gift arrives on time if
                ordering online.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl shadow-xl p-8 text-center text-white mb-12">
          <Gift className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Organize Your Secret Santa?</h2>
          <p className="text-lg mb-6 text-violet-100">
            Use our free Secret Santa generator to easily organize your gift exchange.
            No email required, works on any device!
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
              <p className="text-gray-600 text-sm">Complete guide with video tutorial on planning the perfect Secret Santa event.</p>
            </Link>
            <Link href="/en/blog/best-secret-santa-generator-apps" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Best Secret Santa Generator Apps in 2025</h3>
              <p className="text-gray-600 text-sm">Compare the top Secret Santa tools and find the perfect one for your group.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
