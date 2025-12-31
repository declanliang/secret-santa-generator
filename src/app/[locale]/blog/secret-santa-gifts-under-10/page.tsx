import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, DollarSign, Users, ArrowRight, CheckCircle2, Tag, TrendingDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Santa Gifts Under $10: 60+ Budget-Friendly Ideas (2025)',
  description: 'Discover 60+ amazing secret santa gift ideas under $10 that don\'t feel cheap. Perfect for students, large groups, and budget-conscious exchanges. Quality gifts on a budget!',
  keywords: 'secret santa gifts under $10, cheap secret santa gifts, secret santa gifts under 10 dollars, budget secret santa ideas, inexpensive secret santa gifts',
  openGraph: {
    title: 'Secret Santa Gifts Under $10: 60+ Budget-Friendly Ideas',
    description: 'Quality secret santa gifts under $10 that actually impress - from practical to fun',
    type: 'article',
  },
};

export default function SecretSantaGiftsUnder10() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Tag className="w-4 h-4" />
            Budget Guide
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <TrendingDown className="w-4 h-4" />
            Under $10
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Gift className="w-4 h-4" />
            60+ Ideas
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Secret Santa Gifts Under $10: 60+ Budget-Friendly Ideas That Don't Feel Cheap
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            15 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            60+ gift ideas
          </span>
          <span className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4" />
            $5-$10 budget
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Finding great secret santa gifts under $10 can feel like a challenge, but it absolutely doesn't have to be. Whether you're a student on a tight budget, organizing a large office exchange, or simply want to keep costs reasonable, there are countless thoughtful, fun, and practical gifts available for under ten dollars.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The secret to successful budget gift-giving isn't about how much you spend—it's about choosing items that feel thoughtful and useful. A $7 gift that someone uses daily is infinitely better than a $30 item that sits in a drawer. The best cheap secret santa gifts combine practicality with personality, showing you put thought into the selection without breaking the bank.
        </p>

        <p className="text-gray-700 leading-relaxed">
          In this comprehensive guide, we've curated 60+ secret santa gift ideas under $10 organized by category. From practical everyday items to fun novelty gifts, you'll find budget-friendly options perfect for coworkers, friends, classmates, and family members. Every suggestion proves that great gifts don't require a big budget.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#practical-everyday" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Practical Everyday Items
          </a>
          <a href="#food-snacks" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Food & Snacks
          </a>
          <a href="#self-care" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Self-Care & Beauty
          </a>
          <a href="#desk-office" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Desk & Office
          </a>
          <a href="#fun-novelty" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Fun & Novelty
          </a>
          <a href="#accessories" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Accessories
          </a>
        </div>
      </div>

      {/* Budget Tip Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-xl">
        <div className="flex gap-3">
          <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Pro Budget Tip</h3>
            <p className="text-gray-700 leading-relaxed">
              Most items in this guide cost between $5-10. Look for multipacks to get even better value—buying a 3-pack of something for $15 gives you three $5 gifts! Also check discount stores like TJ Maxx, Ross, or Five Below for premium brands at budget prices.
            </p>
          </div>
        </div>
      </div>

      {/* Practical Everyday Items */}
      <section id="practical-everyday" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Practical Everyday Items Under $10</h2>
          <p className="text-gray-700 text-lg">
            These useful items get daily use, making them feel valuable despite the low price point. Everyone appreciates practical gifts that solve small everyday problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Reusable Shopping Bag", price: "$5-8", desc: "Foldable tote that fits in pocket or purse. Eco-friendly and practical. Choose fun patterns or solid colors. Stronger than plastic, reusable for years." },
            { name: "Microfiber Cleaning Cloths", price: "$6-9", desc: "Pack of 3-5 premium cloths. Perfect for glasses, phones, screens, or car. Washable and reusable. Everyone needs these but rarely buys them." },
            { name: "Phone Stand Holder", price: "$6-10", desc: "Adjustable angle for desk or nightstand. Hands-free viewing for videos or video calls. Compact and foldable. Works with all phones." },
            { name: "Cable Ties Organizer", price: "$5-8", desc: "Velcro ties or clips to tame cable chaos. Set of 10-20 pieces. Keeps desk, nightstand, and car organized. Simple but genuinely useful." },
            { name: "Reusable Straws Set", price: "$7-10", desc: "Stainless steel or silicone straws with cleaning brush. Eco-friendly alternative. Comes in carrying case. Great for smoothies and iced drinks." },
            { name: "Lint Roller", price: "$5-8", desc: "Pet hair and lint remover with refills. Essential for anyone with pets or dark clothing. Compact enough for desk drawer or purse." },
            { name: "Keychain Multi-Tool", price: "$8-10", desc: "Tiny screwdriver, bottle opener, and ruler combo. Fits on keychain. Surprisingly useful for quick fixes. TSA-friendly size." },
            { name: "Reusable Coffee Filter", price: "$6-9", desc: "Mesh filter for pour-over coffee. Eliminates paper filter waste. Saves money over time. For the eco-conscious coffee lover." },
            { name: "Shower Caddy Organizer", price: "$7-10", desc: "Hanging mesh pockets for shower essentials. No installation needed. Perfect for dorm rooms or shared bathrooms. Drains quickly." },
            { name: "Measuring Spoons Set", price: "$6-9", desc: "Stainless steel or colorful plastic. Nesting design for compact storage. Every kitchen needs these. Choose fun colors or sleek metal." },
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

      {/* Food & Snacks */}
      <section id="food-snacks" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Food & Snack Gifts Under $10</h2>
          <p className="text-gray-700 text-lg">
            Edible gifts are always appreciated and eliminate the worry of whether they'll like it long-term. These gourmet treats feel indulgent without exceeding your budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Fancy Chocolate Bar", price: "$5-9", desc: "Lindt, Ghirardelli, or artisan chocolate. Single-origin cacao or unique flavors like sea salt caramel. Premium quality in individual bar." },
            { name: "Hot Chocolate Mix", price: "$6-10", desc: "Gourmet cocoa with marshmallows. Flavored options like peppermint or salted caramel. Add a candy cane for presentation. Cozy winter gift." },
            { name: "Specialty Coffee Bag", price: "$8-10", desc: "Small bag from local roaster. Single-origin beans or unique blend. Enough for 3-4 cups. Perfect for coffee enthusiasts." },
            { name: "Flavored Popcorn", price: "$5-8", desc: "Gourmet popcorn in fun flavors. Caramel, cheese, or kettle corn. Small gift bag or tin. Movie night essential." },
            { name: "Tea Sampler Box", price: "$7-10", desc: "5-10 different tea varieties. Herbal, green, black, and chai options. Beautiful packaging. Perfect for tea lovers." },
            { name: "Honey Stick Pack", price: "$5-8", desc: "Flavored honey sticks in various flavors. Natural sweetener for tea or coffee. Unique and practical. Often locally made." },
            { name: "Spice Blend or Rub", price: "$6-9", desc: "Everything bagel seasoning, taco spice, or BBQ rub. Elevates home cooking. Small jar with recipe suggestions. Trader Joe's has great options." },
            { name: "Protein Bars Box", price: "$8-10", desc: "Variety pack of premium bars. Quest, RX Bar, or KIND bars. Healthy snack for busy people. Practical and tasty." },
            { name: "Fancy Jam or Preserves", price: "$6-9", desc: "Small-batch preserves in unique flavors. Fig, strawberry balsamic, or pepper jelly. Pairs with cheese or toast. Feels gourmet." },
            { name: "Hot Sauce Set", price: "$7-10", desc: "2-3 mini bottles in different heat levels. Adds flavor to any meal. For the spice enthusiast. Gift box presentation." },
            { name: "Cookie Mix in a Jar", price: "$8-10", desc: "Layered dry ingredients in mason jar. Just add butter and eggs. Decorative and functional. Homemade feel." },
            { name: "Candy or Sweets Bag", price: "$5-8", desc: "Nostalgic candy assortment or gourmet sweets. Sour gummies, retro candy, or chocolate truffles. Fun and shareable." },
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

      {/* Self-Care & Beauty */}
      <section id="self-care" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Care & Beauty Items Under $10</h2>
          <p className="text-gray-700 text-lg">
            Pampering products make excellent budget gifts because they feel luxurious. These self-care items offer a moment of relaxation without the high price tag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Sheet Face Mask Pack", price: "$6-10", desc: "3-5 face masks in assorted formulas. Korean beauty brands offer best value. Hydrating, brightening, or soothing. Self-care essential." },
            { name: "Lip Balm Set", price: "$5-9", desc: "3-pack of lip balm in different flavors. Burt's Bees, EOS, or Chapstick. Keeps lips moisturized. Everyone uses lip balm daily." },
            { name: "Hand Cream Tube", price: "$6-10", desc: "Premium hand lotion in nice scent. Neutrogena Norwegian Formula or L'Occitane minis. Desk or purse essential. Frequent use item." },
            { name: "Bath Bomb", price: "$5-8", desc: "Single large bath bomb or 2-pack. Lush-style fizzy bath treatment. Relaxing scents like lavender. Affordable luxury." },
            { name: "Nail File Set", price: "$5-7", desc: "Glass or metal nail files. Lasts forever unlike disposable files. Compact for travel. Better for nail health." },
            { name: "Facial Cleansing Brush", price: "$7-10", desc: "Silicone face scrubber. Gentle exfoliation. Lasts years with proper care. Improves cleanser effectiveness." },
            { name: "Hair Ties & Clips Set", price: "$6-9", desc: "No-crease hair ties or claw clips. Trendy patterns and colors. Prevents hair breakage. Practical and fashionable." },
            { name: "Travel Size Toiletries", price: "$5-8", desc: "Mini shampoo, conditioner, and lotion set. Perfect for gym bags or travel. Premium brands in TSA-friendly sizes." },
            { name: "Pumice Stone or Foot File", price: "$5-7", desc: "Removes dead skin from feet. Spa treatment at home. Everyone wants soft feet. Practical self-care." },
            { name: "Shower Steamer Tablets", price: "$8-10", desc: "Aromatherapy for showers (like bath bombs but for showers). Eucalyptus for congestion. Relaxing morning or evening ritual." },
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

      {/* Desk & Office */}
      <section id="desk-office" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Desk & Office Essentials Under $10</h2>
          <p className="text-gray-700 text-lg">
            Perfect for office Secret Santa exchanges. These desk accessories are professional, practical, and help organize workspaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Sticky Note Set", price: "$5-8", desc: "Colorful sticky notes in fun shapes. Page markers and flags included. Essential for organizing. Choose funny designs or minimalist." },
            { name: "Desk Plant (Succulent)", price: "$5-10", desc: "Small potted succulent or cactus. Requires minimal care. Adds life to desk. Improves air quality and mood." },
            { name: "Pen Set", price: "$7-10", desc: "3-5 quality ballpoint or gel pens. Smooth writing experience. Professional look. Better than cheap office pens." },
            { name: "Mini Desk Organizer", price: "$6-9", desc: "Compartments for pens, clips, and small items. Keeps desk tidy. Mesh metal or colorful plastic. Space-saving design." },
            { name: "Magnetic Paper Clip Holder", price: "$5-7", desc: "Magnetic dispenser keeps clips organized. Modern sculpture appearance. Functional desk art. Satisfying to use." },
            { name: "Mouse Pad", price: "$6-10", desc: "Gel wrist rest or funny design. Ergonomic support. Protects desk surface. Adds personality to workspace." },
            { name: "Desktop Tape Dispenser", price: "$5-8", desc: "Weighted tape dispenser in fun color or shape. One-handed operation. Functional and decorative. Office essential." },
            { name: "Desk Calendar", price: "$7-10", desc: "Small monthly calendar or daily tear-off. Funny quotes or beautiful photos. Helps track deadlines. Functional decor." },
            { name: "USB Hub", price: "$8-10", desc: "Expands laptop USB ports. 3-4 additional ports. Essential for remote workers. Compact and portable." },
            { name: "Notebook or Journal", price: "$6-9", desc: "Hardcover notebook with quality paper. Dotted, lined, or blank pages. Professional or fun cover designs. Always useful." },
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

      {/* Fun & Novelty */}
      <section id="fun-novelty" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fun & Novelty Gifts Under $10</h2>
          <p className="text-gray-700 text-lg">
            These entertaining gifts bring smiles and laughs to Secret Santa exchanges. Perfect for casual groups and friends who appreciate humor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Funny Socks", price: "$5-9", desc: "Novelty crew socks with tacos, pizza, or witty sayings. Conversation starters. Actually get worn. Fun fashion statement." },
            { name: "Playing Cards Deck", price: "$5-8", desc: "Unique deck designs or waterproof cards. Game night essential. Compact and portable. Endless entertainment value." },
            { name: "Enamel Pin Set", price: "$6-10", desc: "2-3 cute or funny pins. Attach to backpack, jacket, or hat. Collectible and trendy. Express personality." },
            { name: "Desk Toy or Fidget", price: "$5-9", desc: "Stress ball, fidget cube, or magnetic sculpture. Relieves anxiety. Keeps hands busy during calls. Office-appropriate." },
            { name: "Silly Magnet Set", price: "$5-7", desc: "Funny fridge magnets with quotes or designs. Brightens kitchen. Holds shopping lists and photos. Affordable personality." },
            { name: "Mini Puzzle or Brain Teaser", price: "$6-9", desc: "Metal puzzle or Rubik's cube. Challenging and fun. Desk decoration when not in use. Great conversation piece." },
            { name: "Temporary Tattoos", price: "$5-7", desc: "Fun temporary tattoo sheet. Metallic or colorful designs. Perfect for festivals or parties. Nostalgic and playful." },
            { name: "Emoji Stress Ball", price: "$5-8", desc: "Squishy foam ball with emoji face. Stress relief and desk decoration. Funny and functional. Actually helps with tension." },
            { name: "Miniature Board Game", price: "$7-10", desc: "Travel-size classic game like chess or checkers. Magnetic pieces. Portable entertainment. Quality time with others." },
            { name: "Scratch-off Poster", price: "$8-10", desc: "Bucket list or places to visit poster. Scratch off as you complete. Motivational wall art. Interactive decoration." },
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

      {/* Accessories */}
      <section id="accessories" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessories Under $10</h2>
          <p className="text-gray-700 text-lg">
            Small accessories that add style or solve everyday problems. These items punch above their weight class in terms of usefulness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Phone Ring Holder", price: "$5-8", desc: "Pop socket or ring stand. Prevents drops and enables one-handed use. Cute designs or minimalist. Universal phone accessory." },
            { name: "Sunglasses Case", price: "$6-9", desc: "Hard case protects glasses. Compact for purse or backpack. Fun patterns or sleek design. Prevents scratches and breaks." },
            { name: "Beanie or Winter Hat", price: "$8-10", desc: "Warm knit beanie in neutral color. One size fits most. Essential winter accessory. Practical and stylish." },
            { name: "Keychain", price: "$5-8", desc: "Leather tassel, enamel charm, or multi-tool keychain. Personalizes keys. Makes keys easier to find. Small but thoughtful." },
            { name: "Hair Headband", price: "$6-9", desc: "Fabric headband or hair hoop. Keeps hair out of face. Fashion and function. Multiple colors available." },
            { name: "Wallet Card Holder", price: "$7-10", desc: "Slim card sleeve for phone back. Holds 2-3 cards. Eliminates bulky wallet. Minimalist convenience." },
            { name: "Bookmark", price: "$5-7", desc: "Metal bookmark with tassel or magnetic page holder. More elegant than folding pages. For book lovers." },
            { name: "Scrunchie Hair Tie Set", price: "$6-9", desc: "Velvet or satin scrunchies in trendy colors. Gentle on hair. Doubles as wrist accessory. 90s nostalgia." },
            { name: "Enamel Mug", price: "$8-10", desc: "Camping-style metal mug. Retro aesthetic. Durable and won't break. Perfect for coffee or tea." },
            { name: "Zipper Pouch", price: "$6-9", desc: "Small cosmetic or coin purse. Organizes small items in bag. Cute patterns or motivational quotes. Versatile storage." },
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

      {/* Shopping Strategy */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Shopping Strategies for $10 Budget</h2>

          <div className="space-y-4">
            {[
              {
                title: "Shop Discount Stores First",
                desc: "TJ Maxx, Ross, Marshalls, and Five Below offer name-brand items for $5-10. You can find $20-30 retail value items at these prices. Don't overlook dollar stores for basic items."
              },
              {
                title: "Buy in Bulk for Better Value",
                desc: "If you need multiple gifts, buy multipacks. A $15 three-pack gives you three $5 gifts. Amazon and Costco have great bulk options that reduce per-item cost."
              },
              {
                title: "Shop Seasonal Sales",
                desc: "After Christmas, Valentine's Day, and other holidays, stores clear inventory at 50-75% off. Stock up on cute seasonal items to use next year."
              },
              {
                title: "Check Target Dollar Spot",
                desc: "Target's $1-5 section (Bullseye's Playground) has surprisingly nice items. Combine 2-3 items for a themed gift that stays under $10 total."
              },
              {
                title: "DIY Presentation Elevates Value",
                desc: "A $7 item in nice wrapping or a small gift bag feels more expensive. Add tissue paper, ribbon, or a handwritten tag to boost perceived value."
              },
              {
                title: "Focus on Consumables",
                desc: "Food, beauty products, and candles feel indulgent at any price point. People appreciate consumable gifts because there's no long-term commitment."
              }
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1" />
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

      {/* Budget Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Gifts Organized by Exact Budget</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$5 or Less</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Funny socks</li>
              <li>• Lip balm set</li>
              <li>• Sticky notes</li>
              <li>• Phone ring holder</li>
              <li>• Reusable shopping bag</li>
              <li>• Chocolate bar</li>
              <li>• Bookmark</li>
              <li>• Hair ties set</li>
              <li>• Silly magnets</li>
              <li>• Keychain</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$6-$8</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Face mask pack</li>
              <li>• Hand cream tube</li>
              <li>• Microfiber cloths</li>
              <li>• Phone stand</li>
              <li>• Desk plant</li>
              <li>• Hot chocolate mix</li>
              <li>• Playing cards</li>
              <li>• Wallet card holder</li>
              <li>• Measuring spoons</li>
              <li>• Pen set</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$8-$10</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Specialty coffee bag</li>
              <li>• Tea sampler box</li>
              <li>• Bath bomb</li>
              <li>• Beanie or winter hat</li>
              <li>• USB hub</li>
              <li>• Enamel mug</li>
              <li>• Protein bars box</li>
              <li>• Multi-tool keychain</li>
              <li>• Shower steamers</li>
              <li>• Scratch-off poster</li>
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
              q: "Can you really find good secret santa gifts for under $10?",
              a: "Absolutely! The key is focusing on practical everyday items, consumable treats, and fun accessories rather than trying to buy scaled-down versions of expensive products. Many items in this guide cost $5-8 but deliver $20+ worth of value through frequent use. Quality doesn't always require a high price—it requires thoughtful selection."
            },
            {
              q: "Where are the best places to shop for cheap secret santa gifts?",
              a: "Discount retailers like TJ Maxx, Ross, Marshalls, and Five Below offer the best value for budget gifts. Target's Dollar Spot section, Amazon's under $10 category, and stores like Trader Joe's for food items are also excellent. Don't forget dollar stores for basic practical items—they've significantly improved quality in recent years."
            },
            {
              q: "How can I make a $10 gift feel more expensive?",
              a: "Presentation is everything. Wrap your gift nicely with quality wrapping paper or place it in a decorative gift bag with tissue paper. Add a handwritten note or card. Consider combining 2-3 smaller items (like chocolate, lip balm, and socks) into a themed gift basket. The effort you put into presentation significantly boosts perceived value."
            },
            {
              q: "What are the safest $10 secret santa gifts if I don't know the person well?",
              a: "Universal crowd-pleasers include: gourmet chocolate or snacks, hand cream or lip balm, fun socks, quality pens or sticky notes, phone accessories, coffee or tea, and small desk plants. These items work for virtually anyone and don't require knowing specific preferences or sizes."
            },
            {
              q: "Should I buy one $10 item or multiple smaller items?",
              a: "Both approaches work! One quality $10 item can feel substantial, while 2-3 smaller items ($3-4 each) create a fun variety pack. Consider your recipient—minimalists might prefer one nice item, while people who love variety appreciate multiple small gifts. Themed bundles (like a coffee lover's pack with fancy coffee + chocolate + mug) work especially well."
            },
            {
              q: "Are food gifts appropriate for $10 secret santa exchanges?",
              a: "Yes! Food and drink gifts are perfect for budget exchanges because they feel indulgent at any price point. Gourmet chocolate, specialty coffee or tea, hot chocolate mixes, flavored popcorn, or small-batch preserves all make excellent $10 gifts. Just be mindful of common allergies if you know about them."
            },
            {
              q: "What should I avoid when buying secret santa gifts under $10?",
              a: "Avoid anything that looks obviously cheap—flimsy plastics, poorly made items, or things that will break immediately. Skip overly personal items like fragrances. Avoid joke gifts unless you know your group well—a funny gift that falls flat feels like wasted money. Also avoid items that require batteries or charging unless those are included."
            },
            {
              q: "Can I give a gift card for $10 or less?",
              a: "While technically possible, a $5-10 gift card often feels less thoughtful than a physical gift because the low amount highlights the budget restriction. If you do give a gift card, consider pairing a $5 card with a related $5 item (like a Starbucks card + fancy chocolate) to create a more complete gift experience."
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
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              Secret Santa Gifts Under $20: 50+ Ideas
            </h3>
            <p className="text-gray-700 mb-4">
              More gift options if you have a slightly higher budget
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-for-coworkers"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              Secret Santa Gifts for Coworkers
            </h3>
            <p className="text-gray-700 mb-4">
              Office-appropriate gifts at various budgets
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/funny-secret-santa-gifts"
            className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-purple-600 transition-colors">
              Funny Secret Santa Gifts
            </h3>
            <p className="text-gray-700 mb-4">
              Hilarious gift ideas including many under $10
            </p>
            <span className="text-purple-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/how-to-organize-secret-santa"
            className="group bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-red-600 transition-colors">
              How to Organize a Secret Santa
            </h3>
            <p className="text-gray-700 mb-4">
              Complete guide to planning your gift exchange
            </p>
            <span className="text-red-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Gift className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Budget-Friendly Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
          Now that you have amazing gift ideas under $10, use our free Secret Santa generator to organize your exchange effortlessly. Set your budget limit and share with your group!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
