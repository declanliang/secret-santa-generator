import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, DollarSign, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Santa Gifts for Women: 45+ Thoughtful Ideas She\'ll Love (2025)',
  description: 'Discover 45+ perfect secret santa gift ideas for women across all budgets. From beauty & self-care to home decor, find thoughtful gifts under $20, $30, or $50.',
  keywords: 'secret santa gifts for women, secret santa for women, secret santa gifts for her, secret santa presents for women, gifts for women secret santa',
  openGraph: {
    title: 'Secret Santa Gifts for Women: 45+ Thoughtful Ideas She\'ll Love',
    description: 'Comprehensive guide to secret santa gifts for women - beauty, self-care, accessories, and more',
    type: 'article',
  },
};

export default function SecretSantaGiftsForWomen() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
            <Gift className="w-4 h-4" />
            Gift Guide
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Users className="w-4 h-4" />
            For Women
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Thoughtful & Fun
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Secret Santa Gifts for Women: 45+ Thoughtful Ideas She'll Love
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            14 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            45+ gift ideas
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
          Finding the perfect secret santa gifts for women doesn't have to be stressful. Whether you're shopping for colleagues, friends, sisters, or your mom's best friend, the key is choosing something thoughtful that shows you put effort into the selection—even if you don't know her intimately.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The best secret santa gifts for women strike a balance between practical and delightful. Women appreciate gifts that add a touch of luxury to everyday life, solve a small problem they didn't know they had, or simply bring a smile to their face. From cozy self-care items to stylish accessories, we've curated options across every budget and personality type.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This comprehensive guide features 45+ secret santa gift ideas for women organized by category—beauty & self-care, home & lifestyle, accessories, food & drink, and more. Whether your budget is $15 or $50, you'll find the perfect present that feels personal without being too intimate for a Secret Santa exchange.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 mb-12 border border-pink-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#beauty-selfcare" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Beauty & Self-Care
          </a>
          <a href="#home-lifestyle" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Home & Lifestyle
          </a>
          <a href="#accessories" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Accessories & Jewelry
          </a>
          <a href="#food-drink" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Food & Drink
          </a>
          <a href="#stationery" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Stationery & Books
          </a>
          <a href="#tech-practical" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Tech & Practical
          </a>
        </div>
      </div>

      {/* Beauty & Self-Care Section */}
      <section id="beauty-selfcare" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Beauty & Self-Care Gifts</h2>
          <p className="text-gray-700 text-lg">
            Self-care gifts are always appreciated by women. These beauty and wellness items offer a moment of relaxation and pampering in busy lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Luxury Hand Cream Set", price: "$18-28", desc: "Assorted scents in travel-friendly sizes. Shea butter or Korean beauty brands. Perfect for desk drawers or purses. Softens hands without greasy residue." },
            { name: "Face Sheet Mask Collection", price: "$15-25", desc: "Variety pack with 10-15 masks. Korean or Japanese brands offer best value. Hydrating, brightening, and soothing options. Self-care Sunday essential." },
            { name: "Aromatherapy Essential Oil Set", price: "$20-35", desc: "Lavender, eucalyptus, peppermint, and citrus oils. Includes roller bottles for easy application. Stress relief and better sleep in a beautiful box." },
            { name: "Jade Roller or Gua Sha Tool", price: "$15-30", desc: "Skincare tool for facial massage and de-puffing. Real jade or rose quartz. Improves circulation and helps serums absorb better." },
            { name: "Bath Bombs Gift Set", price: "$18-30", desc: "Lush-style fizzy bombs with essential oils. 6-8 luxurious scents. Transforms ordinary baths into spa experiences. Beautiful packaging." },
            { name: "Silk Sleep Mask", price: "$12-22", desc: "Pure mulberry silk in jewel tones. Gentle on skin and lashes. Blocks light completely for better sleep. Adjustable elastic strap." },
            { name: "Lip Balm & Lip Scrub Duo", price: "$15-25", desc: "Natural ingredients like honey and sugar. Exfoliates and moisturizes. Tower28 or Fresh brands are favorites. Perfect winter essential." },
            { name: "Makeup Brush Cleaner", price: "$20-35", desc: "Electric spinning brush cleaner. Cleans brushes in seconds. Extends brush life and prevents breakouts. Dermatologist-recommended." },
            { name: "Foot Peel Mask", price: "$15-25", desc: "Baby Foot or similar exfoliating treatment. Removes dead skin for soft feet. Results in 5-7 days. Surprisingly satisfying experience." },
            { name: "Nail Care Gift Set", price: "$18-28", desc: "Glass nail files, cuticle oil, hand cream. Durable tools that last years. Salon-quality manicure at home. Elegant presentation." },
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

      {/* Home & Lifestyle Section */}
      <section id="home-lifestyle" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Home & Lifestyle Gifts</h2>
          <p className="text-gray-700 text-lg">
            These home decor and lifestyle items add personality and comfort to living spaces—perfect for women who love making their environment cozy and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Scented Candle", price: "$20-40", desc: "Luxury soy candle from Voluspa, Capri Blue, or Yankee Candle. 40-50 hour burn time. Scents like volcano, fig, or vanilla bean. Beautiful glass jar for reuse." },
            { name: "Cozy Throw Blanket", price: "$25-45", desc: "Ultra-soft fleece or chunky knit. Perfect for couch lounging or reading. Neutral colors like cream, grey, or blush. Machine washable." },
            { name: "Decorative Trinket Dish", price: "$15-25", desc: "Ceramic or marble ring holder. Keeps jewelry organized on nightstand or bathroom counter. Elegant designs in gold rim or pastel colors." },
            { name: "Desktop Plant with Pot", price: "$18-30", desc: "Low-maintenance succulent or snake plant. Includes decorative ceramic pot. Adds life to workspace or bedroom. Air-purifying benefits." },
            { name: "Coffee Table Book", price: "$25-45", desc: "Beautiful photography book on travel, fashion, or art. Doubles as decor. Topics like Paris, Vogue, or modern art. Inspires conversation." },
            { name: "Picture Frame Set", price: "$20-35", desc: "Gallery wall frame collection in matching finish. Gold, black, or white options. Includes multiple sizes. Creates personalized photo display." },
            { name: "Himalayan Salt Lamp", price: "$20-35", desc: "Natural pink salt crystal on wooden base. Warm ambient glow. Air purifying properties. Perfect for bedroom or meditation space." },
            { name: "Decorative Pillow Covers", price: "$18-30", desc: "Set of 2 velvet or linen covers. Easy decor refresh for any season. Trendy patterns like geometric, boho, or minimalist. Machine washable." },
            { name: "Wall Art Print", price: "$15-30", desc: "Framed abstract art or motivational quote. Ready to hang. Complements modern decor. Sizes from 8x10 to 11x14 inches." },
            { name: "Essential Oil Diffuser", price: "$25-40", desc: "Ultrasonic aromatherapy diffuser with LED lights. Runs 6-8 hours. Includes starter oils. Creates spa-like ambiance at home." },
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

      {/* Accessories Section */}
      <section id="accessories" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessories & Jewelry</h2>
          <p className="text-gray-700 text-lg">
            Stylish accessories that elevate everyday outfits without being too personal. These items work for various styles and occasions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Delicate Layering Necklace", price: "$15-30", desc: "Gold or silver minimalist chain. Simple pendant like moon, star, or initial. Adjustable length. Pairs with everything from casual to formal." },
            { name: "Hair Accessories Set", price: "$12-22", desc: "Claw clips, scrunchies, and headbands. Trendy patterns and colors. Velvet, silk, or pearl embellished. Protects hair from damage." },
            { name: "Silk or Satin Scrunchie Set", price: "$15-25", desc: "Gentle on hair and prevents breakage. Set of 6-8 in coordinating colors. Doubles as wrist accessory. Retro trend that's practical." },
            { name: "Stackable Ring Set", price: "$18-35", desc: "3-5 thin gold or silver rings. Mix and match stacking. Minimalist designs. Fits multiple fingers and styles." },
            { name: "Leather Card Wallet", price: "$20-35", desc: "Slim card holder in genuine leather. RFID blocking protection. Fits in small purses or pockets. Colors like tan, black, or blush." },
            { name: "Cashmere Blend Scarf", price: "$25-45", desc: "Soft winter scarf in neutral color. Oversized for multiple styling options. Keeps warm without bulk. Timeless accessory." },
            { name: "Sunglasses", price: "$20-40", desc: "Trendy frames in classic shapes. UV protection essential. Styles like cat-eye, round, or oversized. Neutral tortoise or black." },
            { name: "Stud Earring Set", price: "$15-28", desc: "Multiple pairs in gold or silver. Geometric shapes, pearls, or crystals. Hypoallergenic posts. Everyday and dressy options." },
            { name: "Leather Bracelet or Bangle", price: "$18-30", desc: "Minimalist cuff in genuine leather or metal. Adjustable sizing. Boho or modern aesthetic. Stacks well with watches." },
            { name: "Cozy Socks Gift Set", price: "$15-25", desc: "Fluffy cabin socks or compression socks. Fun patterns or solid colors. Bamboo or merino wool. Perfect for lounging." },
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

      {/* Food & Drink Section */}
      <section id="food-drink" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Food & Drink Gifts</h2>
          <p className="text-gray-700 text-lg">
            Gourmet treats and beverage gifts are universally appreciated. These edible delights are perfect when you want something special but not too personal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Specialty Tea Sampler", price: "$18-30", desc: "Premium loose-leaf tea collection. Includes herbal, black, green, and oolong varieties. Beautiful tin packaging. Perfect for tea lovers." },
            { name: "Gourmet Chocolate Box", price: "$20-40", desc: "Artisan chocolates from brands like Godiva or local chocolatiers. Assorted flavors and fillings. Beautiful presentation. Indulgent treat." },
            { name: "Wine Accessories Gift Set", price: "$25-40", desc: "Includes wine stopper, aerator, and foil cutter. Elegant presentation box. Essential tools for wine enthusiasts. Practical and sophisticated." },
            { name: "Flavored Coffee Sampler", price: "$20-35", desc: "Gourmet coffee beans or ground. Seasonal flavors like hazelnut, vanilla, or caramel. From specialty roasters. For the coffee connoisseur." },
            { name: "Hot Chocolate Bomb Set", price: "$15-25", desc: "Viral TikTok trend in gift box. Drop in hot milk for instant luxury cocoa. Multiple flavors. Fun and delicious experience." },
            { name: "Cheese Board Accessories", price: "$20-35", desc: "Cheese knives, markers, and spreaders. Bamboo or slate board. Perfect for entertaining. Pairs with wine and charcuterie." },
            { name: "Infused Olive Oil & Vinegar", price: "$20-35", desc: "Truffle oil, balsamic vinegar, or herb-infused varieties. Elevates home cooking. Small bottles for sampling. Gourmet kitchen essential." },
            { name: "Macaron Gift Box", price: "$18-30", desc: "French macarons in assorted flavors. Beautiful pastel colors. From bakeries like Ladurée or local patisseries. Instagram-worthy gift." },
            { name: "Cocktail Mixer Set", price: "$18-28", desc: "Gourmet simple syrups and bitters. Craft cocktails at home. Flavors like lavender, ginger, or elderflower. Includes recipe cards." },
            { name: "Gourmet Popcorn Trio", price: "$15-25", desc: "Three premium flavors in decorative tins. Caramel, cheddar, and kettle corn. Perfect for movie nights or snacking." },
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

      {/* Stationery & Books Section */}
      <section id="stationery" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stationery & Books</h2>
          <p className="text-gray-700 text-lg">
            For women who love planning, journaling, or reading, these thoughtful gifts combine functionality with beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Leather Journal or Planner", price: "$20-40", desc: "Genuine leather cover with refillable pages. Daily planner or blank journal. Ribbon bookmark included. Classic gift for organized women." },
            { name: "Luxury Pen Set", price: "$25-45", desc: "Fountain pen or rollerball in gift box. Smooth writing experience. Professional yet elegant. Refillable for sustainability." },
            { name: "Washi Tape & Sticker Set", price: "$15-25", desc: "Decorative Japanese washi tape collection. Perfect for bullet journaling or scrapbooking. Aesthetic patterns and colors. Creative gift." },
            { name: "Bestseller Novel", price: "$15-30", desc: "Current bestseller in fiction or non-fiction. Choose based on interests—romance, mystery, or self-help. Hardcover edition feels premium." },
            { name: "Daily Affirmation Cards", price: "$15-25", desc: "Deck of 50-100 inspirational cards. Beautiful illustrations. Morning motivation ritual. Mindfulness and self-care tool." },
            { name: "Desk Calendar", price: "$18-28", desc: "Witty quotes or beautiful photography. Tear-off daily pages. Brightens workspace. Functional art for desk." },
            { name: "Bookmark Set", price: "$12-20", desc: "Metal page markers with tassels. Set of 4-6 in gift box. Elegant designs. For the avid reader." },
            { name: "Adult Coloring Book & Markers", price: "$20-30", desc: "Intricate designs for stress relief. Includes premium markers or colored pencils. Mindfulness activity. Beautiful finished art." },
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

      {/* Tech & Practical Section */}
      <section id="tech-practical" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech & Practical Gifts</h2>
          <p className="text-gray-700 text-lg">
            Modern women appreciate practical tech accessories that make daily life easier and more organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Phone Ring Stand", price: "$12-18", desc: "Stick-on grip with rotating stand. Prevents drops and enables hands-free viewing. Sleek metallic or floral designs." },
            { name: "Wireless Charging Pad", price: "$20-35", desc: "Fast charging for iPhone or Android. Sleek design in rose gold or white. No more tangled cables. LED indicator light." },
            { name: "AirPods Case Cover", price: "$10-18", desc: "Silicone or leather protective case. Cute designs or solid colors. Carabiner clip for attaching to bag. Prevents loss and scratches." },
            { name: "Blue Light Blocking Glasses", price: "$15-30", desc: "Reduces eye strain from screens. Fashionable frames. Improves sleep quality. Essential for remote workers." },
            { name: "Portable Phone Charger", price: "$25-40", desc: "Slim power bank in pretty colors. 10,000mAh capacity. Charges phone 2-3 times. Lifesaver for travel or long days." },
            { name: "Laptop Sleeve", price: "$20-35", desc: "Padded protection in stylish fabric. Fits 13-15 inch laptops. Additional pockets for accessories. Professional appearance." },
            { name: "Cable Organizer Accessories", price: "$15-25", desc: "Cute cable clips and cord winders. Keeps purse and desk tidy. Pastel colors or marble patterns. Practical and pretty." },
            { name: "Reusable Water Bottle", price: "$20-40", desc: "Insulated stainless steel in trendy colors. Keeps drinks cold 24 hours. Straw lid option. Eco-friendly and stylish." },
            { name: "Bluetooth Tracker Tile", price: "$25-35", desc: "Attach to keys, purse, or luggage. Locate via smartphone app. Never lose important items. Peace of mind gift." },
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

      {/* Shopping Tips */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Tips for Choosing Secret Santa Gifts for Women</h2>

          <div className="space-y-4">
            {[
              {
                title: "Self-Care is Always Safe",
                desc: "Beauty and wellness gifts are universally appreciated. Candles, bath products, or hand creams work for virtually any woman and feel thoughtful."
              },
              {
                title: "When in Doubt, Choose Consumables",
                desc: "Food, tea, chocolate, or candles eliminate the risk of unused gifts. They're enjoyed and gone—no long-term commitment or style mismatch worries."
              },
              {
                title: "Stick to Neutral Colors",
                desc: "Unless you know her favorite color, choose neutral tones like gold, rose gold, white, cream, grey, or blush pink. These complement any style."
              },
              {
                title: "Quality Over Trendiness",
                desc: "A well-made classic item beats a trendy piece that feels cheap. Women notice quality materials and thoughtful construction."
              },
              {
                title: "Avoid Overly Personal Items",
                desc: "Skip clothing sizes, strong perfumes, or intimate items for Secret Santa. Accessories, home goods, and food are appropriately personal without crossing boundaries."
              },
              {
                title: "Beautiful Packaging Matters",
                desc: "Presentation counts for gifts to women. Look for items that come in nice boxes or add your own gift wrapping for extra thoughtfulness."
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

      {/* Budget Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Secret Santa Gifts for Women by Budget</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Under $20</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Silk sleep mask</li>
              <li>• Hair accessories set</li>
              <li>• Nail care gift set</li>
              <li>• Face sheet masks</li>
              <li>• Phone ring stand</li>
              <li>• Delicate necklace</li>
              <li>• Bookmark set</li>
              <li>• Hot chocolate bombs</li>
              <li>• Cozy socks set</li>
              <li>• Washi tape collection</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$20-$35</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Scented candle</li>
              <li>• Essential oil set</li>
              <li>• Leather card wallet</li>
              <li>• Jade roller</li>
              <li>• Wireless charging pad</li>
              <li>• Specialty tea sampler</li>
              <li>• Bath bombs set</li>
              <li>• Desktop plant with pot</li>
              <li>• Gourmet chocolate</li>
              <li>• Leather journal</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$35-$50</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Cozy throw blanket</li>
              <li>• Luxury pen set</li>
              <li>• Coffee table book</li>
              <li>• Essential oil diffuser</li>
              <li>• Cashmere scarf</li>
              <li>• Reusable water bottle</li>
              <li>• Wine accessories set</li>
              <li>• Sunglasses</li>
              <li>• Portable phone charger</li>
              <li>• Laptop sleeve</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gift Ideas by Personality */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Gift Ideas by Personality Type</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">The Wellness Enthusiast</h3>
            <p className="text-gray-700 mb-3">Perfect for the yoga-loving, self-care focused woman:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Aromatherapy essential oils</li>
              <li>• Jade roller or gua sha</li>
              <li>• Bath bombs or foot masks</li>
              <li>• Silk sleep mask</li>
              <li>• Herbal tea sampler</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">The Home Decor Lover</h3>
            <p className="text-gray-700 mb-3">For women who love creating cozy, beautiful spaces:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Luxury scented candle</li>
              <li>• Throw blanket or pillow covers</li>
              <li>• Picture frame set</li>
              <li>• Desktop plant with decorative pot</li>
              <li>• Wall art print</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">The Professional Woman</h3>
            <p className="text-gray-700 mb-3">Ideal for career-focused, organized colleagues:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Leather planner or journal</li>
              <li>• Luxury pen set</li>
              <li>• Blue light blocking glasses</li>
              <li>• Leather card wallet</li>
              <li>• Laptop sleeve</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-gray-900 text-xl mb-3">The Creative Spirit</h3>
            <p className="text-gray-700 mb-3">Great for artistic, expressive women:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Adult coloring book with markers</li>
              <li>• Washi tape and sticker set</li>
              <li>• Coffee table art book</li>
              <li>• Decorative journal</li>
              <li>• Unique jewelry pieces</li>
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
              q: "What are the best secret santa gifts for women under $20?",
              a: "Excellent options under $20 include silk sleep masks, face sheet mask sets, hair accessories, hand cream sets, cozy socks, delicate necklaces, phone accessories, nail care sets, and gourmet treats like specialty tea or hot chocolate bombs. These feel thoughtful and luxurious despite the modest price."
            },
            {
              q: "What should I avoid when buying secret santa gifts for women?",
              a: "Avoid anything that requires knowing her size (clothing), overly personal items (perfume, intimate apparel), age-inappropriate gifts, and anything that might be offensive or too joke-focused for someone you don't know well. Stick to universal items that don't require intimate knowledge of her preferences."
            },
            {
              q: "Are beauty gifts appropriate for secret santa exchanges?",
              a: "Yes! Beauty and self-care items are perfect for secret santa gifts for women. Stick to universal items like hand cream, bath products, face masks, or nail care rather than makeup shades or strong fragrances. These feel pampering without being too personal."
            },
            {
              q: "What are safe gift options if I don't know the woman well?",
              a: "Universal crowd-pleasers include scented candles, luxury hand cream, gourmet chocolate or tea, cozy socks, desk accessories, reusable water bottles, or home decor like small plants or picture frames. These work for virtually any woman and show thoughtfulness."
            },
            {
              q: "Should I choose practical or fun gifts for women?",
              a: "The best secret santa gifts for women often combine both—practical items with a touch of luxury or fun. Think quality everyday items that feel special, like a beautiful journal, fancy hand soap, or stylish phone accessories. Pure novelty gifts might not get used, but practical-with-personality items are appreciated."
            },
            {
              q: "How much should I spend on secret santa gifts for women?",
              a: "Follow your group's agreed budget, typically $20-30 for most exchanges. You can find thoughtful, quality gifts at every price point. Don't stress about going significantly over budget—the effort you put into selection matters more than the price tag."
            },
            {
              q: "What are good secret santa gifts for female coworkers?",
              a: "For office settings, choose professional yet thoughtful items: desk accessories, premium coffee or tea, quality hand cream, planners or journals, candles, blue light glasses, tech accessories, or gourmet treats. Avoid anything too personal or casual for workplace appropriateness."
            },
            {
              q: "Can I give food as a secret santa gift to a woman?",
              a: "Absolutely! Gourmet food and drink gifts are excellent choices. Consider artisan chocolates, specialty tea or coffee, gourmet popcorn, wine accessories, hot chocolate sets, or other premium treats. Just be mindful of common dietary restrictions if you know them."
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
            href="/en/blog/secret-santa-gifts-for-men"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              Secret Santa Gifts for Men: 40+ Ideas
            </h3>
            <p className="text-gray-700 mb-4">
              Perfect gift ideas for the guys in your Secret Santa exchange
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-for-coworkers"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              Secret Santa Gifts for Coworkers
            </h3>
            <p className="text-gray-700 mb-4">
              Professional yet fun gift ideas perfect for the office
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-under-20"
            className="group bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-red-600 transition-colors">
              Secret Santa Gifts Under $20: 50+ Ideas
            </h3>
            <p className="text-gray-700 mb-4">
              Budget-friendly gifts that don't feel cheap
            </p>
            <span className="text-red-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/how-to-organize-secret-santa"
            className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-purple-600 transition-colors">
              How to Organize a Secret Santa Gift Exchange
            </h3>
            <p className="text-gray-700 mb-4">
              Complete guide to planning the perfect Secret Santa
            </p>
            <span className="text-purple-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Gift className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Secret Santa Exchange?
        </h2>
        <p className="text-xl mb-8 text-pink-50 max-w-2xl mx-auto">
          Now that you've found the perfect gift ideas for women, use our free Secret Santa generator to effortlessly organize your gift exchange. No email required, completely private!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
