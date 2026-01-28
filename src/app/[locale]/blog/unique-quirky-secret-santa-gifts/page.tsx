import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Gift, Sparkles, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unique & Quirky Secret Santa Gifts: 45+ Unusual Ideas (2025)',
  description: 'Discover unique and quirky Secret Santa gifts for creative people. From unexpected desk toys to weirdly wonderful gadgets, find unforgettable gift ideas under $50.',
  keywords: 'unique secret santa gifts, quirky secret santa gifts, unusual secret santa gifts, creative secret santa gifts, weird secret santa gifts',
  openGraph: {
    title: 'Unique & Quirky Secret Santa Gifts: 45+ Unusual Ideas',
    description: 'Unusual Secret Santa gift ideas that feel creative, surprising, and actually useful',
    type: 'article',
  },
};

export default function UniqueQuirkySecretSantaGifts() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Unique Gifts
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Quirky Ideas
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Unique & Quirky Secret Santa Gifts: 45+ Unusual Ideas
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            12 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            45+ gift ideas
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Perfect for creative people
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Looking for a Secret Santa gift that feels genuinely different? Unique and quirky gifts are perfect when you want to stand out, spark conversation, and give something the recipient will not already own. These ideas are surprising, creative, and still practical enough to be appreciated long after the exchange ends.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The best unusual Secret Santa gifts balance novelty with usefulness. Think unexpected desk toys that actually calm stress, oddly designed kitchen tools that work better than you would expect, or tiny experience kits that let people try something new. These are the gifts that get remembered.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Below you will find 45+ unique and quirky Secret Santa gift ideas organized by vibe: creative desk finds, home decor oddities, maker kits, weird snacks, and more. There is something here for every personality, budget, and exchange setting.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12 border border-amber-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#desk-toys" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Oddly Satisfying Desk Toys
          </a>
          <a href="#home-decor" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Unexpected Home & Decor
          </a>
          <a href="#maker-kits" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Creative & Maker Kits
          </a>
          <a href="#quirky-tech" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Quirky Tech & Gadgets
          </a>
          <a href="#weird-snacks" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Weird & Wonderful Snacks
          </a>
          <a href="#mini-experiences" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Mini Experiences & Activities
          </a>
        </div>
      </div>

      {/* Desk Toys */}
      <section id="desk-toys" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Oddly Satisfying Desk Toys</h2>
          <p className="text-gray-700 text-lg">
            These quirky desk gifts are perfect for coworkers or anyone who likes to fidget while thinking. They are small, memorable, and oddly calming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Kinetic Desk Sculpture", price: "$20-35", desc: "A spinning, flowing metal sculpture that moves with a gentle touch. Mesmerizing and surprisingly calming for busy desks." },
            { name: "Magnetic Sand Hourglass", price: "$15-25", desc: "Iron filings create spiky patterns as they fall. A modern twist on a classic hourglass that people cannot stop staring at." },
            { name: "Satisfying Clicker Cube", price: "$8-15", desc: "A compact fidget cube with switches, buttons, and textures. Great for focus without being noisy." },
            { name: "Mini Zen Garden", price: "$12-20", desc: "Tiny rake, sand, and stones for quick desk mindfulness breaks. A quirky gift that actually gets used." },
            { name: "Balancing Desk Pebbles", price: "$15-25", desc: "Stackable stones that challenge coordination. Looks like modern art when arranged." },
            { name: "Floating Globe Magnet", price: "$25-40", desc: "A levitating globe that spins in midair. Attention grabbing without feeling gimmicky." },
            { name: "Color-Shift Desk Light", price: "$20-30", desc: "Compact LED light that cycles through colors. Adds a playful vibe to any workspace." },
            { name: "Puzzle Cable Organizer", price: "$12-18", desc: "Interlocking pieces that tame messy cords. Functional and fun to assemble." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-amber-600 font-semibold text-sm bg-amber-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Home & Decor */}
      <section id="home-decor" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Unexpected Home & Decor Gifts</h2>
          <p className="text-gray-700 text-lg">
            These pieces are playful, decorative, and instantly make a space feel more personal. Perfect for creative roommates, friends, or coworkers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Neon Quote Light", price: "$25-40", desc: "A mini LED neon sign with a fun phrase. Adds cozy, quirky ambience to any room." },
            { name: "Upside-Down Planter", price: "$18-30", desc: "Plants hang upside down for a fun twist. Great for small spaces and conversation." },
            { name: "Color-Drip Candles", price: "$12-18", desc: "Tall candles that melt into wild color patterns. A quick way to make any space feel artsy." },
            { name: "Mini Storm Cloud Diffuser", price: "$20-35", desc: "An essential oil diffuser shaped like a cloud. Mist looks like rain and feels whimsical." },
            { name: "3D Printed Vase", price: "$18-30", desc: "Organic, geometric shapes that look handcrafted. Pairs well with a single flower or sprig." },
            { name: "Glow-in-the-Dark Wall Stars (Retro)", price: "$8-12", desc: "Nostalgic and unexpectedly fun. Works great for quirky adults too." },
            { name: "Tiny Cozy Lamp", price: "$20-30", desc: "A warm, miniature lamp that adds instant charm to desks and shelves." },
            { name: "Scented Match Jar", price: "$12-18", desc: "A decorative jar of matches infused with scent. Looks cool and actually useful." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-purple-600 font-semibold text-sm bg-purple-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maker Kits */}
      <section id="maker-kits" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Creative & Maker Kits</h2>
          <p className="text-gray-700 text-lg">
            A mini project makes a gift feel special. These kits are fun to open and even better to try on a weekend afternoon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Mini Terrarium Kit", price: "$25-40", desc: "Includes tiny plants, stones, and a jar to build a desktop ecosystem." },
            { name: "DIY Hot Sauce Kit", price: "$20-35", desc: "Spices, bottles, and instructions for crafting custom hot sauces." },
            { name: "Beginner Embroidery Kit", price: "$12-20", desc: "A small hoop, thread, and pattern for a simple, relaxing craft." },
            { name: "Paint-by-Number Postcard Set", price: "$10-18", desc: "Relaxing mini art projects with display worthy results." },
            { name: "Book Nook Miniature Scene", price: "$30-45", desc: "A detailed, glowing diorama that fits between books. Unique and impressive." },
            { name: "Make-Your-Own Candle Kit", price: "$25-40", desc: "Simple materials and scents for custom candles." },
            { name: "DIY Ramen Spice Mix", price: "$12-20", desc: "Create bold seasonings to upgrade instant noodles." },
            { name: "Tiny Pottery Air-Dry Kit", price: "$18-30", desc: "No kiln required. Make small bowls, trays, or trinket dishes." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-pink-600 font-semibold text-sm bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quirky Tech */}
      <section id="quirky-tech" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quirky Tech & Gadgets</h2>
          <p className="text-gray-700 text-lg">
            Tech does not have to be predictable. These gadgets are clever, a little odd, and surprisingly useful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Pocket Thermal Printer", price: "$30-45", desc: "Prints tiny stickers, notes, and photos from your phone. Great for journaling and planners." },
            { name: "Retro Mini Game Console", price: "$25-40", desc: "Loaded with classic games for quick nostalgia hits." },
            { name: "Smartphone Telescope Lens", price: "$20-35", desc: "Clips on for zoomed in stargazing or long distance shots." },
            { name: "USB Aroma Diffuser", price: "$18-25", desc: "Small diffuser that plugs into a laptop for subtle desk aromatherapy." },
            { name: "Self-Watering Plant Sensor", price: "$25-40", desc: "A tiny sensor that helps keep plants alive. Practical and geeky." },
            { name: "Mini Projector (Phone Size)", price: "$35-50", desc: "Projects videos on a wall for an instant movie night vibe." },
            { name: "Color-Shifting Charging Cable", price: "$12-18", desc: "Cable glows while charging. A small but delightful touch." },
            { name: "Sound-Reactive LED Strip", price: "$20-35", desc: "Lights sync to music. Perfect for game rooms or parties." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Weird Snacks */}
      <section id="weird-snacks" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Weird & Wonderful Snacks</h2>
          <p className="text-gray-700 text-lg">
            Food gifts are always safe, but these have a creative twist. Think unusual flavors and unexpected combinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "International Snack Box", price: "$20-35", desc: "A mix of global chips, candies, and drinks for a mini taste adventure." },
            { name: "Mushroom Hot Chocolate", price: "$15-25", desc: "Earthy, cozy, and different in the best way." },
            { name: "Truffle Popcorn Seasoning", price: "$12-18", desc: "Elevates movie night with gourmet flavor." },
            { name: "Unusual Jam Trio", price: "$15-25", desc: "Flavors like lavender, fig rose, or spicy citrus." },
            { name: "Cereal Milk Candy", price: "$10-18", desc: "Nostalgic cereal flavor in candy form." },
            { name: "Hot Honey Gift Jar", price: "$12-20", desc: "Sweet heat drizzle for pizza or roasted veggies." },
            { name: "Salt Flight Sampler", price: "$18-30", desc: "Smoked, flaky, and flavored salts for cooking lovers." },
            { name: "Tea & Syrup Pairing Set", price: "$20-35", desc: "Unique tea blends with matching syrups for custom drinks." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-emerald-600 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Experiences */}
      <section id="mini-experiences" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mini Experiences & Activities</h2>
          <p className="text-gray-700 text-lg">
            Experiences feel more unique than objects. These small activity kits keep things fun and affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Scratch-Off Adventure Map", price: "$18-30", desc: "Scratch destinations or local challenges. Encourages fun weekend plans." },
            { name: "Murder Mystery Party Kit", price: "$25-40", desc: "A small, self contained mystery for a fun night in." },
            { name: "Astrology Birth Chart Print", price: "$20-35", desc: "Personalized and quirky. Great for astrology fans." },
            { name: "Mini Indoor Herb Garden", price: "$20-35", desc: "Compact grow kit for fresh basil or mint." },
            { name: "DIY Cocktail Dice", price: "$10-18", desc: "Roll dice to build random drink combos. Great for parties." },
            { name: "Paint & Sip Mini Set", price: "$18-30", desc: "Includes mini canvas, paints, and prompts." },
            { name: "Puzzle Postcard Set", price: "$12-18", desc: "Small puzzles that double as unique postcards." },
            { name: "Tiny Origami Challenge Book", price: "$10-15", desc: "Quick creative breaks with folded art." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-orange-600 font-semibold text-sm bg-orange-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Picking a Unique Secret Santa Gift</h2>

          <div className="space-y-4">
            {[
              {
                title: "Choose a Conversation Starter",
                desc: "Unique gifts should spark a quick story. If you can imagine someone saying 'Where did you get this?' you are on the right track."
              },
              {
                title: "Keep It Useful",
                desc: "The best quirky gifts still serve a purpose. A fun desk toy, a clever kitchen tool, or an unusual lamp gets used and remembered."
              },
              {
                title: "Balance Novelty and Taste",
                desc: "Aim for playful, not tacky. Avoid items that feel like pure gag gifts unless the group expects that style."
              },
              {
                title: "Think Small but Special",
                desc: "Smaller objects with thoughtful details often feel more unique than large generic items."
              },
              {
                title: "Lean Into Their Interests",
                desc: "A quirky gift related to coffee, plants, art, or tech feels personal without needing a deep relationship."
              },
              {
                title: "Presentation Matters",
                desc: "Unique wrapping or a short note explaining the gift makes it feel more intentional and memorable."
              }
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1" />
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Unique Secret Santa Gifts by Budget</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-3">
                <Gift className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Under $15</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>? Satisfying clicker cube</li>
              <li>? Mini zen garden</li>
              <li>? Cereal milk candy</li>
              <li>? Color drip candles</li>
              <li>? DIY cocktail dice</li>
              <li>? Puzzle postcard set</li>
              <li>? Glow in the dark stars</li>
              <li>? Tiny origami challenge book</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$15-$30</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>? Magnetic sand hourglass</li>
              <li>? Upside down planter</li>
              <li>? Mini terrarium kit</li>
              <li>? International snack box</li>
              <li>? LED neon quote light</li>
              <li>? USB aroma diffuser</li>
              <li>? Hot honey gift jar</li>
              <li>? Scratch off adventure map</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$30-$50</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>? Pocket thermal printer</li>
              <li>? Book nook miniature scene</li>
              <li>? Mini projector</li>
              <li>? Floating globe magnet</li>
              <li>? Murder mystery kit</li>
              <li>? Mini herb garden</li>
              <li>? Retro mini game console</li>
              <li>? Custom birth chart print</li>
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
              q: "What makes a Secret Santa gift unique?",
              a: "A unique Secret Santa gift feels unexpected and personal without requiring inside jokes. It often has a creative twist (design, function, or packaging) while still being useful or enjoyable."
            },
            {
              q: "Are quirky gifts appropriate for office exchanges?",
              a: "Yes, as long as they are tasteful and work appropriate. Stick to clever desk items, creative snacks, or small decor pieces. Avoid anything too loud, crude, or overly personal."
            },
            {
              q: "What are safe quirky gifts if I do not know the person well?",
              a: "Safe bets include desk toys, interesting candles, snack boxes, mini plant kits, or novelty kitchen tools. These feel creative but are not too personal."
            },
            {
              q: "Can a unique gift still be affordable?",
              a: "Absolutely. Many unique gifts are under $20 because they are small but thoughtfully designed. A creative presentation also makes budget gifts feel more special."
            },
            {
              q: "Should I prioritize usefulness or novelty?",
              a: "Aim for both. The best unique gifts are quirky enough to spark a smile, but practical enough to keep using afterward."
            },
            {
              q: "What if my group prefers funny gifts?",
              a: "You can combine unique and funny. Choose something quirky that has a humorous element but is still tasteful, like a playful desk toy or unusual snack kit."
            },
            {
              q: "Do handmade gifts count as unique?",
              a: "Definitely. DIY items often feel the most personal. Even a simple homemade candle or spice mix can be memorable if presented well."
            },
            {
              q: "How do I make a quirky gift feel thoughtful?",
              a: "Include a short note that explains why you chose it. That little context turns a fun oddity into a gift that feels intentional."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Gift Guides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/en/blog/funny-secret-santa-gifts"
            className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-orange-600 transition-colors">
              Funny Secret Santa Gifts That Will Make Everyone Laugh
            </h3>
            <p className="text-gray-700 mb-4">
              Hilarious ideas for office parties and friend groups
            </p>
            <span className="text-orange-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-under-20"
            className="group bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-emerald-600 transition-colors">
              Secret Santa Gifts Under $20: 50+ Ideas
            </h3>
            <p className="text-gray-700 mb-4">
              Affordable ideas that still feel creative and thoughtful
            </p>
            <span className="text-emerald-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-purple-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Secret Santa Exchange?
        </h2>
        <p className="text-xl mb-8 text-amber-50 max-w-2xl mx-auto">
          Now that you have unique gift ideas, use our free Secret Santa generator to organize a fun exchange. No email required, completely free.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
