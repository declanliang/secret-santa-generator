import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, Users, ArrowRight, CheckCircle2, Heart, Scissors, Sparkles, ShoppingBag, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DIY Secret Santa Gifts: 40+ Handmade & Homemade Ideas (2025)',
  description: 'Creative DIY secret santa gift ideas you can make yourself. From simple crafts to gourmet treats, find handmade gifts that feel personal and thoughtful.',
  keywords: 'diy secret santa gifts, homemade secret santa gifts, handmade secret santa, diy christmas gifts, homemade gift ideas, crafts for secret santa',
  openGraph: {
    title: 'DIY Secret Santa Gifts: 40+ Handmade Ideas',
    description: 'Thoughtful handmade gift ideas for Secret Santa exchanges',
    type: 'article',
  },
};

export default function DIYSecretSantaGifts() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
            <Scissors className="w-4 h-4" />
            DIY & Handmade
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4" />
            40+ Ideas
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Thoughtful
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          DIY Secret Santa Gifts: 40+ Handmade & Homemade Ideas
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            18 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            40+ DIY ideas
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            All skill levels
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          DIY secret santa gifts carry something store-bought items never can: the unmistakable warmth of time, thought, and personal effort. When you make a gift yourself, whether it's a batch of homemade cookies, a hand-poured candle, or a carefully curated care package, the recipient knows you invested more than money—you invested yourself.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The beauty of handmade secret santa gifts isn't just their personal touch—they're often more budget-friendly than purchased gifts while feeling significantly more valuable. A $5 jar of homemade granola feels more special than a $15 generic gift card. Plus, DIY gifts allow you to customize based on your recipient's specific tastes, creating truly one-of-a-kind presents.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This comprehensive guide features 40+ DIY secret santa gift ideas organized by skill level and category. Whether you're a crafting novice who can barely thread a needle or an experienced maker with a fully stocked craft room, you'll find projects that match your abilities and delight your recipient. From edible treats to practical handmade items, let's explore the world of homemade gift-giving.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 mb-12 border border-pink-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#why-diy" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Why Choose DIY Gifts?
          </a>
          <a href="#edible-treats" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Edible Treats
          </a>
          <a href="#bath-beauty" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Bath & Beauty
          </a>
          <a href="#home-decor" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Home & Decor
          </a>
          <a href="#practical-crafts" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            Practical Crafts
          </a>
          <a href="#tips" className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium">
            <ArrowRight className="w-4 h-4" />
            DIY Tips & Tricks
          </a>
        </div>
      </div>

      {/* Why DIY */}
      <section id="why-diy" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose DIY Secret Santa Gifts?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              title: "More Personal & Meaningful",
              desc: "Handmade gifts show you cared enough to invest time and effort. The recipient knows this wasn't a rushed purchase—you actually thought about them.",
              icon: Heart
            },
            {
              title: "Budget-Friendly Luxury",
              desc: "A $10 batch of homemade cookies in a nice jar feels more special than a $20 generic gift. You control costs while maximizing perceived value.",
              icon: ShoppingBag
            },
            {
              title: "Completely Customizable",
              desc: "Tailor flavors, scents, colors, and styles to your recipient's exact preferences. Can't get that level of personalization from Amazon.",
              icon: Sparkles
            },
            {
              title: "Unique & Memorable",
              desc: "Nobody else will give the same gift. DIY items stand out in a sea of store-bought presents and create lasting memories.",
              icon: Gift
            }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-pink-600" />
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
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Important Timing Note</h3>
              <p className="text-gray-700 leading-relaxed">
                Start DIY projects 1-2 weeks before your exchange date. Some items like infused oils or bath salts need time to set or cure. Last-minute crafting leads to stress and lower-quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edible Treats */}
      <section id="edible-treats" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Edible DIY Gifts (Easy & Popular)</h2>
          <p className="text-gray-700 text-lg">
            Food gifts are perfect for DIY beginners—they don't require special equipment, and everyone appreciates homemade treats. These ideas work well for any skill level.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              name: "Homemade Cookie Mix in a Jar",
              difficulty: "Easy",
              time: "15 min",
              cost: "$5-8",
              desc: "Layer dry ingredients (flour, sugar, chocolate chips, oats) in a mason jar. Attach a cute tag with baking instructions. Looks beautiful and just needs butter and eggs to bake.",
              materials: "Mason jar, dry ingredients, ribbon, printed recipe card"
            },
            {
              name: "Gourmet Hot Chocolate Mix",
              difficulty: "Easy",
              time: "20 min",
              cost: "$6-10",
              desc: "Mix cocoa powder, powdered milk, sugar, and mini marshmallows. Add crushed peppermint or cinnamon for flavor variations. Package in jars or cellophane bags with festive ribbons.",
              materials: "Cocoa powder, sugar, powdered milk, mini marshmallows, jars or bags"
            },
            {
              name: "Homemade Granola",
              difficulty: "Easy",
              time: "45 min",
              cost: "$8-12",
              desc: "Combine oats, nuts, honey, and dried fruit. Bake until golden. Package in glass jars with custom labels. Healthy, delicious, and feels artisanal.",
              materials: "Oats, nuts, honey, dried fruit, baking sheet, jars"
            },
            {
              name: "Flavored Infused Honey",
              difficulty: "Easy",
              time: "10 min + 1 week infusion",
              cost: "$8-12",
              desc: "Add lavender, cinnamon sticks, or chili flakes to honey jars. Let infuse for 1 week. Beautiful presentation and unique flavors. Great for tea lovers.",
              materials: "Raw honey, dried herbs/spices, small jars, labels"
            },
            {
              name: "Homemade Vanilla Extract",
              difficulty: "Easy",
              time: "15 min + 6 weeks aging",
              cost: "$10-15",
              desc: "Split vanilla beans, submerge in vodka, let age for 6 weeks minimum. Professional-quality extract at fraction of store price. Start early!",
              materials: "Vanilla beans, vodka, dark glass bottles, labels"
            },
            {
              name: "Spiced Nuts",
              difficulty: "Easy",
              time: "30 min",
              cost: "$8-12",
              desc: "Toss almonds, pecans, or cashews with maple syrup, cinnamon, cayenne, and salt. Roast until caramelized. Addictive and impressive.",
              materials: "Mixed nuts, maple syrup, spices, parchment paper"
            },
            {
              name: "Homemade Truffles or Fudge",
              difficulty: "Medium",
              time: "1 hour + chill time",
              cost: "$12-18",
              desc: "Chocolate truffles rolled in cocoa or crushed cookies. Or simple fudge with condensed milk and chocolate. Package in small gift boxes.",
              materials: "Chocolate, cream, condensed milk, cocoa powder, gift boxes"
            },
            {
              name: "Flavored Popcorn Gift Set",
              difficulty: "Easy",
              time: "30 min",
              cost: "$6-10",
              desc: "Make 2-3 flavors: caramel, cheese, and kettle corn. Package in clear bags tied with ribbons. Movie night essential.",
              materials: "Popcorn kernels, butter, seasonings, cellophane bags"
            },
            {
              name: "Homemade Jam or Preserves",
              difficulty: "Medium",
              time: "1-2 hours",
              cost: "$10-15",
              desc: "Simple strawberry jam or fig preserves. Small batch means no canning expertise required. Refrigerator jam lasts 2-3 weeks.",
              materials: "Fresh fruit, sugar, lemon juice, jars, pectin"
            },
            {
              name: "Biscotti or Shortbread Cookies",
              difficulty: "Medium",
              time: "1.5 hours",
              cost: "$8-12",
              desc: "Classic twice-baked biscotti or buttery shortbread. Both travel well and look elegant in clear bags with ribbons.",
              materials: "Flour, butter, sugar, eggs, vanilla, almonds (for biscotti)"
            }
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-gray-900 text-xl flex-1">{gift.name}</h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    gift.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {gift.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {gift.cost}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed">{gift.desc}</p>

              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Time: </span>
                  <span className="text-gray-600">{gift.time}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Materials: </span>
                  <span className="text-gray-600">{gift.materials}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bath & Beauty */}
      <section id="bath-beauty" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bath & Beauty DIY Gifts</h2>
          <p className="text-gray-700 text-lg">
            Spa-quality pampering gifts you can make at home. These feel luxurious and are surprisingly simple to create with basic ingredients.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              name: "Sugar or Salt Body Scrub",
              difficulty: "Easy",
              time: "15 min",
              cost: "$6-10",
              desc: "Mix sugar or sea salt with coconut oil and essential oils (lavender, peppermint, citrus). Package in mason jars with wooden spoons. Spa-quality exfoliation.",
              materials: "Sugar/salt, coconut oil, essential oils, jars, labels"
            },
            {
              name: "Handmade Bath Bombs",
              difficulty: "Medium",
              time: "45 min + 24hr dry",
              cost: "$10-15",
              desc: "Combine baking soda, citric acid, oils, and colors. Mold into spheres or fun shapes. Add dried flowers or herbs for Instagram-worthy presentation.",
              materials: "Baking soda, citric acid, oils, food coloring, molds"
            },
            {
              name: "Lip Balm Set",
              difficulty: "Medium",
              time: "30 min",
              cost: "$8-12",
              desc: "Melt beeswax, coconut oil, and shea butter. Add flavors (peppermint, vanilla). Pour into small tins or tubes. Make 6-8 balms per batch.",
              materials: "Beeswax, coconut oil, shea butter, essential oils, lip balm containers"
            },
            {
              name: "Lavender Bath Salts",
              difficulty: "Easy",
              time: "10 min",
              cost: "$5-8",
              desc: "Epsom salt + sea salt + dried lavender + lavender essential oil. Layer in glass jars. Simple, elegant, and actually therapeutic.",
              materials: "Epsom salt, sea salt, dried lavender, essential oil, jars"
            },
            {
              name: "Whipped Body Butter",
              difficulty: "Medium",
              time: "30 min",
              cost: "$10-15",
              desc: "Whip shea butter, coconut oil, and vitamin E oil with mixer until fluffy. Add essential oils. Package in pretty jars. Rich moisturizer.",
              materials: "Shea butter, coconut oil, vitamin E, mixer, jars"
            },
            {
              name: "Hand-Poured Soy Candles",
              difficulty: "Medium",
              time: "1 hour + cooling",
              cost: "$12-18",
              desc: "Melt soy wax, add fragrance oils, pour into jars with wicks. Customize scents for recipient. Looks professional with proper containers.",
              materials: "Soy wax, wicks, jars, fragrance oils, thermometer"
            },
            {
              name: "Coffee Body Scrub",
              difficulty: "Easy",
              time: "15 min",
              cost: "$5-8",
              desc: "Used coffee grounds + brown sugar + coconut oil + vanilla extract. Energizing morning scrub that smells amazing. Great for coffee lovers.",
              materials: "Coffee grounds, sugar, coconut oil, vanilla, jars"
            },
            {
              name: "Natural Face Masks (Dry Mix)",
              difficulty: "Easy",
              time: "15 min",
              cost: "$6-10",
              desc: "Mix clay, oatmeal, and dried herbs. Package with instructions to add water/honey. Create 3-4 single-use packets.",
              materials: "Bentonite clay, oatmeal, dried herbs, small envelopes"
            }
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-gray-900 text-xl flex-1">{gift.name}</h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    gift.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {gift.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {gift.cost}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed">{gift.desc}</p>

              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Time: </span>
                  <span className="text-gray-600">{gift.time}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Materials: </span>
                  <span className="text-gray-600">{gift.materials}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home & Decor */}
      <section id="home-decor" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Home & Decor DIY Gifts</h2>
          <p className="text-gray-700 text-lg">
            Handmade items that add personality to living spaces. These gifts are both decorative and functional.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              name: "Hand-Painted Plant Pot",
              difficulty: "Easy",
              time: "1 hour + dry time",
              cost: "$8-12",
              desc: "Buy terracotta pot, paint with acrylics (geometric patterns, quotes, or abstract designs). Seal with varnish. Add succulent or small plant.",
              materials: "Terracotta pot, acrylic paints, brushes, sealant, plant"
            },
            {
              name: "Macramé Plant Hanger",
              difficulty: "Medium",
              time: "2-3 hours",
              cost: "$8-12",
              desc: "Learn basic macramé knots on YouTube. Create boho plant hanger. Trendy and functional. Include care instructions.",
              materials: "Macramé cord, wooden ring, scissors, measuring tape"
            },
            {
              name: "Custom Photo Coasters",
              difficulty: "Easy",
              time: "30 min + dry time",
              cost: "$8-12",
              desc: "Mod Podge photos onto ceramic tiles. Seal with waterproof coating. Add felt pads to bottom. Set of 4 personalized coasters.",
              materials: "Ceramic tiles, photos, Mod Podge, sealant, felt pads"
            },
            {
              name: "Hand-Dipped Beeswax Candles",
              difficulty: "Medium",
              time: "1.5 hours",
              cost: "$12-18",
              desc: "Traditional candle-making by repeatedly dipping wicks in melted beeswax. Natural honey scent. Beautiful taper candles.",
              materials: "Beeswax, wicks, double boiler, tall container"
            },
            {
              name: "Decorative Throw Pillow Cover",
              difficulty: "Medium-Hard",
              time: "2-3 hours",
              cost: "$10-15",
              desc: "Sew simple envelope-back pillow cover. No zipper needed. Choose fabric that matches recipient's style. Fits 16x16 or 18x18 insert.",
              materials: "Fabric, thread, sewing machine, measuring tape, scissors"
            },
            {
              name: "Wooden Serving Board",
              difficulty: "Medium",
              time: "2 hours",
              cost: "$15-20",
              desc: "Sand and oil wooden board. Optional: wood-burn initials or decorative border. Food-safe mineral oil finish. Perfect for charcuterie.",
              materials: "Wooden board, sandpaper, mineral oil, wood burning tool (optional)"
            },
            {
              name: "Terrarium in Glass Container",
              difficulty: "Easy",
              time: "45 min",
              cost: "$12-18",
              desc: "Layer pebbles, charcoal, soil, and small plants in glass jar or fishbowl. Add miniature decorations. Low-maintenance living gift.",
              materials: "Glass container, pebbles, charcoal, soil, succulents, decorations"
            },
            {
              name: "Embroidery Hoop Art",
              difficulty: "Medium",
              time: "3-5 hours",
              cost: "$8-12",
              desc: "Embroider simple design, quote, or pattern onto fabric. Mount in wooden hoop. YouTube has excellent beginner tutorials.",
              materials: "Embroidery hoop, fabric, embroidery floss, needle, pattern"
            }
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-gray-900 text-xl flex-1">{gift.name}</h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    gift.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    gift.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {gift.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {gift.cost}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed">{gift.desc}</p>

              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Time: </span>
                  <span className="text-gray-600">{gift.time}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Materials: </span>
                  <span className="text-gray-600">{gift.materials}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Crafts */}
      <section id="practical-crafts" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Practical DIY Crafts</h2>
          <p className="text-gray-700 text-lg">
            Handmade items that solve everyday problems. These gifts combine thoughtfulness with utility.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              name: "Reusable Fabric Gift Bags",
              difficulty: "Easy",
              time: "30 min each",
              cost: "$5-8",
              desc: "Sew simple drawstring bags from festive fabric. Recipient can reuse for groceries or storage. Eco-friendly alternative to wrapping paper.",
              materials: "Fabric, ribbon/cord, sewing machine, thread"
            },
            {
              name: "Hand-Knitted Dish Cloths",
              difficulty: "Easy-Medium",
              time: "2 hours",
              cost: "$6-10",
              desc: "Knit 3-4 washable cotton dishcloths. Simple pattern perfect for beginners. More sustainable than paper towels. Bundle with ribbon.",
              materials: "Cotton yarn, knitting needles, pattern"
            },
            {
              name: "Personalized Bookmark",
              difficulty: "Easy",
              time: "30 min",
              cost: "$4-6",
              desc: "Laminate pressed flowers, paint watercolor designs, or use leather scraps. Add tassel. Perfect for book lovers.",
              materials: "Cardstock, laminator, pressed flowers OR leather, hole punch, tassel"
            },
            {
              name: "Sewn Pot Holders or Oven Mitts",
              difficulty: "Medium",
              time: "1-2 hours",
              cost: "$8-12",
              desc: "Layer fabric with insulated batting. Sew together with binding. Practical kitchen essential. Choose fun, colorful fabrics.",
              materials: "Cotton fabric, insulated batting, thread, sewing machine"
            },
            {
              name: "Hand-Painted Tote Bag",
              difficulty: "Easy",
              time: "1 hour + dry time",
              cost: "$6-10",
              desc: "Buy plain canvas tote, paint with fabric paints. Simple designs or funny quotes. Seal with iron. Practical and personalized.",
              materials: "Canvas tote bag, fabric paints, brushes, iron"
            },
            {
              name: "Recipe Card Organizer Box",
              difficulty: "Medium",
              time: "2 hours",
              cost: "$10-15",
              desc: "Decorate wooden box, include handwritten favorite recipes on cards, add dividers. Perfect for someone who loves cooking.",
              materials: "Wooden box, recipe cards, paint/washi tape, cardstock dividers"
            },
            {
              name: "Car Emergency Kit",
              difficulty: "Easy",
              time: "30 min",
              cost: "$15-20",
              desc: "Assemble: flashlight, first aid basics, emergency blanket, hand warmers, granola bars. Package in labeled bag. Thoughtful safety gift.",
              materials: "Small bag/pouch, emergency supplies from dollar store"
            },
            {
              name: "Handmade Soap Bars",
              difficulty: "Medium",
              time: "1 hour + cure time",
              cost: "$10-15",
              desc: "Melt-and-pour soap base, add scents/colors/exfoliants, pour into molds. Easier than cold-process. Make 4-6 bars per batch.",
              materials: "Soap base, essential oils, colorants, molds, labels"
            }
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-gray-900 text-xl flex-1">{gift.name}</h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    gift.difficulty.includes('Easy') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {gift.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {gift.cost}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed">{gift.desc}</p>

              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Time: </span>
                  <span className="text-gray-600">{gift.time}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Materials: </span>
                  <span className="text-gray-600">{gift.materials}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIY Tips */}
      <section id="tips" className="mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert DIY Gift-Making Tips</h2>

          <div className="space-y-4">
            {[
              {
                title: "Start with a Practice Run",
                desc: "Never make your first attempt the gift itself. Do a test batch to work out kinks, perfect technique, and avoid gift-day disasters. This is especially important for baking and crafts."
              },
              {
                title: "Presentation is Everything",
                desc: "A simple DIY gift in beautiful packaging feels premium. Invest in nice jars, boxes, ribbons, and custom labels. Your $5 cookies become a $15-looking gift with proper presentation."
              },
              {
                title: "Label Everything Clearly",
                desc: "Include ingredients (for food), use-by dates, and instructions. For bath products, list ingredients in case of allergies. Professional labels are cheap to print at home."
              },
              {
                title: "Know Your Recipient's Restrictions",
                desc: "Before making food or beauty products, check your questionnaire for allergies, dietary needs, and scent sensitivities. Dairy-free, nut-free, and fragrance-free are common requirements."
              },
              {
                title: "Budget Time Realistically",
                desc: "First-time projects take 2-3x longer than you expect. Add drying, cooling, or curing time. Don't start a 'quick' project the night before your exchange."
              },
              {
                title: "Source Quality Base Materials",
                desc: "The foundation matters—cheap chocolate makes bad truffles, rough fabric creates scratchy pillows. Splurge on key ingredients/materials, save on packaging and tools."
              },
              {
                title: "Photograph the Process",
                desc: "Take photos as you create. If your gift turns out amazing, you can share the process later. Plus, it's useful for improving future batches."
              },
              {
                title: "Scale Recipes Carefully",
                desc: "Doubling a recipe doesn't always work the same. Make multiple single batches rather than one giant batch for better quality control."
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

      {/* Cost Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY Gift Budget Breakdown</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <span className="text-2xl">$</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Under $10</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Cookie mix in jar</li>
              <li>• Sugar scrub</li>
              <li>• Bath salts</li>
              <li>• Flavored popcorn</li>
              <li>• Hand-painted pot</li>
              <li>• Custom bookmark</li>
              <li>• Coffee scrub</li>
              <li>• Fabric gift bags</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                <span className="text-2xl">$$</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$10-$15</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Homemade granola</li>
              <li>• Bath bombs</li>
              <li>• Lip balm set</li>
              <li>• Soy candles</li>
              <li>• Photo coasters</li>
              <li>• Terrarium</li>
              <li>• Soap bars</li>
              <li>• Macramé hanger</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                <span className="text-2xl">$$$</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$15-$20</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Vanilla extract</li>
              <li>• Truffles/fudge</li>
              <li>• Whipped body butter</li>
              <li>• Beeswax candles</li>
              <li>• Wooden serving board</li>
              <li>• Embroidery art</li>
              <li>• Car emergency kit</li>
              <li>• Recipe box set</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: "How far in advance should I start making DIY Secret Santa gifts?",
              a: "Start 2-3 weeks before your exchange date. Some items like infused oils, vanilla extract, or cured soaps need 1-2 weeks minimum. Even 'quick' projects benefit from having time for mistakes, re-dos, and proper drying/cooling. Last-minute DIY gifts often look rushed."
            },
            {
              q: "Are DIY gifts cheaper than buying Secret Santa gifts?",
              a: "Usually yes, but not always. A batch of cookies costs $5-8 but feels worth $15-20. However, some DIY projects requiring specialty tools or ingredients can cost more than buying similar items. Choose projects where you already own most supplies for best savings."
            },
            {
              q: "What if my DIY gift doesn't turn out well?",
              a: "Always do a practice run first! If your gift-day attempt fails, have a backup plan: buy a complementary store-bought item, pivot to a simpler DIY project you've made successfully before, or be honest—most people appreciate the effort even if the result isn't perfect."
            },
            {
              q: "Do I need to disclose ingredients in homemade food gifts?",
              a: "Yes! Always include a complete ingredient list, especially for common allergens (nuts, dairy, gluten). Add a 'best by' date for food safety. This isn't just courteous—it could prevent serious allergic reactions."
            },
            {
              q: "What are the easiest DIY Secret Santa gifts for beginners?",
              a: "The easiest DIY gifts require no special skills: cookie mix in a jar (just layering), sugar scrubs (mixing), bath salts (combining ingredients), flavored popcorn (stovetop cooking), or hand-painted plant pots (basic painting). All take under 30 minutes active time."
            },
            {
              q: "How do I package DIY gifts to look professional?",
              a: "Use glass jars with custom labels, clear cellophane bags with ribbons, small gift boxes with tissue paper, or fabric wrapping (furoshiki style). Print labels on cardstock or buy pre-made tags. Add a handwritten note explaining what it is and how to use/store it."
            },
            {
              q: "Can I make DIY gifts for a $10 Secret Santa budget?",
              a: "Absolutely! Many DIY gifts cost $5-8 in materials but present beautifully. Cookie mix jars, sugar scrubs, bath salts, coffee scrubs, and flavored popcorn all stay well under $10 while looking and feeling much more valuable than their cost."
            },
            {
              q: "What if my recipient doesn't like homemade gifts?",
              a: "Most people appreciate handmade gifts, but if you know someone prefers store-bought items, respect that. Some people worry about unknown ingredients or simply prefer the polish of commercial products. When in doubt, stick to universally loved edible treats or pair your DIY item with a small store-bought component."
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
            href="/en/blog/secret-santa-gifts-under-10"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              Secret Santa Gifts Under $10
            </h3>
            <p className="text-gray-700 mb-4">
              More budget-friendly gift ideas including store-bought options
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Ask the right questions to customize your DIY gifts perfectly
            </p>
            <span className="text-purple-600 font-medium flex items-center gap-2">
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
              Office-appropriate DIY gift ideas
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/how-to-organize-secret-santa"
            className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-orange-600 transition-colors">
              How to Organize Secret Santa
            </h3>
            <p className="text-gray-700 mb-4">
              Complete guide to planning your gift exchange
            </p>
            <span className="text-orange-600 font-medium flex items-center gap-2">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-pink-50 max-w-2xl mx-auto">
          Whether you're giving DIY gifts or store-bought presents, use our free Secret Santa generator to organize your exchange perfectly!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg"
        >
          Start Your Secret Santa
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
