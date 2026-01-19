import type { Metadata } from 'next';
import Link from 'next/link';
import { Gift, DollarSign, Star, Sparkles, Heart, Coffee, Gamepad2, Book, Utensils, Home, Palette, Watch, Headphones, Camera, Wine, Briefcase, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Santa Gifts Under $25, $30 & $50: Premium Gift Ideas (2025)',
  description: 'Discover 80+ premium Secret Santa gift ideas at every price point. Quality gifts under $25, $30, and $50 that impress without overspending. Perfect for office parties and family exchanges.',
  keywords: 'secret santa gifts under $25, secret santa gifts under $30, secret santa gifts under $50, $25 secret santa gift ideas, $30 secret santa gifts, $50 secret santa gift ideas, premium secret santa gifts, quality gift exchange ideas',
};

export default function SecretSantaGiftsUnder25_30_50Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-red-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Secret Santa Gifts Under $25, $30 & $50</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Premium Gift Guide
            </span>
            <span className="text-gray-500 text-sm">18 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Secret Santa Gifts Under $25, $30 & $50: 80+ Premium Ideas That Impress
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            When your Secret Santa budget allows for something extra special, you can find truly impressive gifts
            that feel luxurious without breaking the bank. This guide covers quality gift ideas at three popular
            price points—$25, $30, and $50—so you can find the perfect present for any exchange.
          </p>
        </header>

        {/* Quick Navigation */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-green-600" />
            Quick Navigation by Budget
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="#under-25" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-green-600 mb-1">Under $25</div>
              <div className="text-sm text-gray-600">25+ quality gifts</div>
            </a>
            <a href="#under-30" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-emerald-600 mb-1">Under $30</div>
              <div className="text-sm text-gray-600">25+ elevated picks</div>
            </a>
            <a href="#under-50" className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-teal-600 mb-1">Under $50</div>
              <div className="text-sm text-gray-600">30+ premium options</div>
            </a>
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Higher Budget Gift Exchanges Work</h2>
          <p>
            While $10-20 Secret Santa exchanges are popular, many groups choose higher budget limits of $25, $30,
            or even $50. These elevated price points open up a world of gift possibilities—from premium brands
            to experience-based gifts to items that truly feel special.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Higher Budget Exchanges:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Quality over quantity:</strong> Invest in one impressive item rather than several forgettable ones</li>
              <li><strong>Brand-name options:</strong> Access to premium brands and better craftsmanship</li>
              <li><strong>Lasting gifts:</strong> Items that will be used and appreciated for years</li>
              <li><strong>Experience gifts:</strong> Subscriptions, classes, and memorable activities become possible</li>
              <li><strong>Personalization:</strong> Budget for engraving, monogramming, or custom touches</li>
            </ul>
          </div>
        </section>

        {/* Under $25 Section */}
        <section id="under-25" className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-3 rounded-xl mr-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Secret Santa Gifts Under $25</h2>
              <p className="text-gray-600">Quality gifts that feel premium without the premium price</p>
            </div>
          </div>

          {/* Tech & Gadgets Under $25 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Headphones className="w-5 h-5 mr-2 text-green-600" />
              Tech & Gadgets ($20-25)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Wireless Earbuds (Budget Brand)", price: "$20-25", desc: "JLab, Skullcandy, or Anker options with surprisingly good sound quality" },
                { name: "Phone Stand with Wireless Charger", price: "$22-25", desc: "Adjustable stand that charges while displaying your phone" },
                { name: "Portable Bluetooth Speaker", price: "$20-25", desc: "Compact speakers from Anker or JBL Go for music on the go" },
                { name: "LED Strip Lights Kit", price: "$18-24", desc: "RGB lights with remote control for ambiance in any room" },
                { name: "Tile Mate Tracker", price: "$22-25", desc: "Never lose keys, wallet, or bag again with this Bluetooth tracker" },
                { name: "USB-C Hub Adapter", price: "$20-25", desc: "Multi-port hub for laptops—HDMI, USB, SD card slots" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-green-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Home & Kitchen Under $25 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Home className="w-5 h-5 mr-2 text-green-600" />
              Home & Kitchen ($18-25)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Ember-Style Mug Warmer", price: "$20-25", desc: "Keeps coffee or tea at the perfect temperature all day" },
                { name: "Himalayan Salt Lamp (Small)", price: "$18-24", desc: "Natural ambiance and alleged air-purifying benefits" },
                { name: "Electric Milk Frother", price: "$18-22", desc: "Create café-quality lattes and cappuccinos at home" },
                { name: "Scented Candle Gift Set", price: "$20-25", desc: "Premium brands like Voluspa or Bath & Body Works 3-wick" },
                { name: "Insulated Tumbler (20oz)", price: "$22-25", desc: "YETI Rambler or quality alternative keeps drinks hot/cold for hours" },
                { name: "Pour-Over Coffee Set", price: "$20-25", desc: "Ceramic dripper with carafe for coffee enthusiasts" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-green-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Care & Beauty Under $25 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-green-600" />
              Self-Care & Beauty ($18-25)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Sheet Mask Collection", price: "$18-24", desc: "10-15 pack of Korean beauty masks (Dr. Jart, Innisfree)" },
                { name: "Jade Roller & Gua Sha Set", price: "$20-25", desc: "Facial massage tools for skincare routines" },
                { name: "Premium Hand Cream Set", price: "$20-25", desc: "L'Occitane, Crabtree & Evelyn, or similar luxury brands" },
                { name: "Aromatherapy Diffuser", price: "$20-25", desc: "Small ultrasonic diffuser with LED lights" },
                { name: "Bath Bomb Gift Box", price: "$18-24", desc: "6-8 pack of artisanal bath bombs in various scents" },
                { name: "Silk Pillowcase", price: "$20-25", desc: "Good for hair and skin—a small luxury for better sleep" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-green-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food & Drink Under $25 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Coffee className="w-5 h-5 mr-2 text-green-600" />
              Food & Drink ($18-25)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Gourmet Coffee Sampler", price: "$20-25", desc: "4-6 bags of specialty single-origin coffees to explore" },
                { name: "Artisanal Chocolate Box", price: "$22-25", desc: "Premium chocolates from Godiva, Lindt, or local chocolatiers" },
                { name: "Hot Sauce Gift Set", price: "$18-24", desc: "3-4 bottle collection featuring different heat levels and flavors" },
                { name: "Olive Oil & Balsamic Set", price: "$20-25", desc: "High-quality imported olive oil and aged balsamic vinegar" },
                { name: "Tea Sampler Collection", price: "$18-24", desc: "Loose leaf teas from brands like Harney & Sons or David's Tea" },
                { name: "Whiskey Stones Set", price: "$18-22", desc: "Soapstone or stainless steel cubes for chilling drinks without dilution" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-green-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Under $30 Section */}
        <section id="under-30" className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-emerald-100 p-3 rounded-xl mr-4">
              <Star className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Secret Santa Gifts Under $30</h2>
              <p className="text-gray-600">Elevated gifts that show extra thoughtfulness</p>
            </div>
          </div>

          {/* Tech & Gadgets Under $30 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Headphones className="w-5 h-5 mr-2 text-emerald-600" />
              Tech & Gadgets ($25-30)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Smart Plug 2-Pack", price: "$25-30", desc: "Control lights and devices with voice commands via Alexa/Google" },
                { name: "Kindle eBook Gift Card", price: "$25-30", desc: "Let them choose their next great read from Amazon's library" },
                { name: "Phone Camera Lens Kit", price: "$25-30", desc: "Wide-angle, macro, and fisheye lenses for smartphone photography" },
                { name: "Wireless Charging Pad (Premium)", price: "$28-30", desc: "Fast-charging pad from Anker or Samsung" },
                { name: "Streaming Stick (Fire TV or Roku)", price: "$25-30", desc: "Transform any TV into a smart TV with streaming apps" },
                { name: "Portable Power Bank (10,000mAh)", price: "$25-30", desc: "High-capacity charger with fast charging support" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-emerald-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Subscription Under $30 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-emerald-600" />
              Experience & Subscriptions ($25-30)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Streaming Service Gift Card", price: "$25-30", desc: "Netflix, Disney+, Spotify, or Apple Music subscription time" },
                { name: "Movie Theater Gift Card", price: "$25-30", desc: "AMC, Regal, or Cinemark for date nights or solo escapes" },
                { name: "MasterClass Single Class", price: "$30", desc: "Learn from world-renowned experts in cooking, writing, or more" },
                { name: "Coffee Subscription (1 Month)", price: "$25-30", desc: "Trade Coffee, Atlas, or Blue Bottle monthly delivery" },
                { name: "Book Subscription Box", price: "$25-30", desc: "Book of the Month or Once Upon a Book Club single month" },
                { name: "Online Course Gift Card", price: "$25-30", desc: "Skillshare, Udemy, or Coursera credit for learning anything" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-emerald-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Home & Lifestyle Under $30 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Home className="w-5 h-5 mr-2 text-emerald-600" />
              Home & Lifestyle ($25-30)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Premium Throw Blanket", price: "$25-30", desc: "Soft fleece or sherpa blanket for cozy nights" },
                { name: "Succulent Planter Set", price: "$25-30", desc: "3-4 succulents in decorative pots for low-maintenance greenery" },
                { name: "Cocktail Making Kit", price: "$28-30", desc: "Shaker, jigger, strainer, and recipe cards for home mixology" },
                { name: "Premium Candle (Large)", price: "$28-30", desc: "Yankee Candle, Paddywax, or similar large format" },
                { name: "Picture Frame Set", price: "$25-28", desc: "Gallery wall set of 3-5 matching frames in various sizes" },
                { name: "Luxury Coaster Set", price: "$25-30", desc: "Marble, agate, or leather coasters with holder" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-emerald-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Games & Entertainment Under $30 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Gamepad2 className="w-5 h-5 mr-2 text-emerald-600" />
              Games & Entertainment ($25-30)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Board Game (Popular Title)", price: "$25-30", desc: "Codenames, Ticket to Ride, or Wingspan for game nights" },
                { name: "Puzzle (1000 Pieces)", price: "$25-28", desc: "Beautiful art puzzles from Ravensburger or Galison" },
                { name: "Card Game Collection", price: "$25-30", desc: "Exploding Kittens bundle or What Do You Meme expansion set" },
                { name: "Video Game (On Sale)", price: "$25-30", desc: "Watch for deals on popular titles—often discounted during holidays" },
                { name: "Adult Coloring Book Set", price: "$25-30", desc: "Premium coloring book with high-quality colored pencils" },
                { name: "Vinyl Record (Classic Album)", price: "$25-30", desc: "A favorite album on vinyl for music lovers with turntables" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-emerald-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Under $50 Section */}
        <section id="under-50" className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-teal-100 p-3 rounded-xl mr-4">
              <Gift className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Secret Santa Gifts Under $50</h2>
              <p className="text-gray-600">Premium gifts that feel truly special</p>
            </div>
          </div>

          {/* Tech & Electronics Under $50 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Headphones className="w-5 h-5 mr-2 text-teal-600" />
              Tech & Electronics ($35-50)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Echo Dot (Latest Gen)", price: "$40-50", desc: "Smart speaker with Alexa for music, smart home control, and more" },
                { name: "Wireless Earbuds (Premium)", price: "$45-50", desc: "JBL, Soundcore, or Samsung Galaxy Buds with quality audio" },
                { name: "Smart Light Bulb Starter Kit", price: "$40-50", desc: "Philips Hue or LIFX 2-pack for customizable lighting" },
                { name: "Instant Print Camera Film Pack", price: "$40-50", desc: "Fujifilm Instax camera or large film bundle" },
                { name: "Gaming Mouse", price: "$40-50", desc: "Logitech G502 or Razer DeathAdder for gamers" },
                { name: "Tablet Stand with Speaker", price: "$40-50", desc: "Adjustable stand with built-in Bluetooth speakers" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-teal-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen & Culinary Under $50 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Utensils className="w-5 h-5 mr-2 text-teal-600" />
              Kitchen & Culinary ($35-50)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Electric Wine Opener Set", price: "$35-45", desc: "Automatic opener with foil cutter, aerator, and vacuum stoppers" },
                { name: "Cast Iron Skillet", price: "$40-50", desc: "Lodge 12-inch pre-seasoned skillet—a kitchen essential" },
                { name: "Premium Chef's Knife", price: "$40-50", desc: "Victorinox or Mercer—professional quality at a reasonable price" },
                { name: "Espresso Maker (Stovetop)", price: "$40-50", desc: "Bialetti Moka Express for authentic Italian espresso" },
                { name: "Food Subscription Box", price: "$40-50", desc: "ButcherBox, HelloFresh, or specialty food box gift card" },
                { name: "Electric Kettle (Gooseneck)", price: "$45-50", desc: "Temperature control kettle for pour-over coffee and tea" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-teal-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fashion & Accessories Under $50 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Watch className="w-5 h-5 mr-2 text-teal-600" />
              Fashion & Accessories ($35-50)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Leather Wallet", price: "$40-50", desc: "Quality leather billfold or slim card holder with RFID blocking" },
                { name: "Designer Sunglasses (Outlet)", price: "$40-50", desc: "Ray-Ban, Oakley outlet finds or quality polarized options" },
                { name: "Cashmere Blend Scarf", price: "$40-50", desc: "Soft, warm scarf that elevates any winter outfit" },
                { name: "Quality Watch", price: "$40-50", desc: "Timex, Casio, or minimalist brands like MVMT" },
                { name: "Leather Belt", price: "$40-50", desc: "Classic leather belt that will last for years" },
                { name: "Premium Backpack", price: "$45-50", desc: "Herschel, Fjallraven mini, or quality laptop backpack" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-teal-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Gifts Under $50 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-teal-600" />
              Experience Gifts ($35-50)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Escape Room Gift Card", price: "$40-50", desc: "Contribution toward an escape room adventure for two" },
                { name: "Cooking Class Voucher", price: "$40-50", desc: "Sur La Table, Williams Sonoma, or local cooking school" },
                { name: "Wine Tasting Experience", price: "$40-50", desc: "Gift card for local winery or virtual tasting kit" },
                { name: "Spa Gift Card", price: "$50", desc: "Contribution toward massage, facial, or spa day" },
                { name: "Concert/Event Tickets", price: "$40-50", desc: "Ticketmaster or StubHub gift card for live experiences" },
                { name: "Pottery or Art Class", price: "$40-50", desc: "Try something creative—pottery, painting, or crafts" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-teal-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobby & Specialty Under $50 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Palette className="w-5 h-5 mr-2 text-teal-600" />
              Hobby & Specialty ($35-50)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "LEGO Set (Adult Collection)", price: "$40-50", desc: "Architecture, Botanicals, or Icons series for adult builders" },
                { name: "Art Supply Set", price: "$40-50", desc: "Quality watercolor, colored pencil, or sketching kit" },
                { name: "Yoga Mat (Premium)", price: "$40-50", desc: "Manduka, Liforme, or quality non-slip mat" },
                { name: "Gardening Tool Set", price: "$40-50", desc: "Quality hand tools with ergonomic handles" },
                { name: "Model Kit", price: "$40-50", desc: "Gundam, wooden 3D puzzles, or metal model kits" },
                { name: "Photography Accessories", price: "$40-50", desc: "Camera strap, cleaning kit, or memory card combo" },
              ].map((gift, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{gift.name}</h4>
                    <span className="text-teal-600 font-medium text-sm">{gift.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{gift.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Comparison Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Budget Comparison Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-green-600">$25</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-emerald-600">$30</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-teal-600">$50</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Tech</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Basic earbuds, chargers</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Smart plugs, speakers</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Echo Dot, premium earbuds</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Experiences</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Movie tickets</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Subscription boxes</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Classes, spa credits</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Kitchen</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Mug warmer, tumbler</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Cocktail kit, blanket</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Cast iron, chef knife</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">Fashion</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Small accessories</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Basic jewelry, scarves</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">Leather goods, watches</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Higher Budget Exchanges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Setting the Right Budget</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>$25:</strong> Great for casual friend groups and mixed-age families</li>
                <li>• <strong>$30:</strong> Popular for workplace exchanges where you want to impress</li>
                <li>• <strong>$50:</strong> Best for small, close-knit groups or special occasions</li>
                <li>• Survey participants before setting the limit</li>
                <li>• Consider everyone's financial situation</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Maximizing Your Budget</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Shop Black Friday/Cyber Monday for premium items at lower prices</li>
                <li>• Check outlet stores for designer brands within budget</li>
                <li>• Look for gift sets that offer more value than individual items</li>
                <li>• Consider experience gifts—often more memorable</li>
                <li>• Add a personal touch with a handwritten note</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What's the most popular Secret Santa budget?",
                a: "$25 is the sweet spot for most groups—it allows for quality gifts without being too expensive. Workplace exchanges often use $25-30, while close friend groups might go up to $50."
              },
              {
                q: "Should I spend exactly the budget amount?",
                a: "Aim to spend close to the limit (within $5). Spending significantly under can seem thoughtless, while going over might make others feel bad about their gifts."
              },
              {
                q: "Are gift cards okay for higher budget exchanges?",
                a: "Absolutely! At $30-50, gift cards to quality restaurants, streaming services, or experience venues are thoughtful choices. Just avoid generic Visa gift cards—pick something meaningful."
              },
              {
                q: "How do I make a $50 gift feel special?",
                a: "Focus on presentation—nice wrapping, a handwritten card, and thoughtful selection based on the recipient's interests. Quality over quantity always wins."
              },
              {
                q: "What if I don't know the person well with a high budget?",
                a: "Use a questionnaire to learn preferences, or choose universally-loved items like premium candles, gourmet food baskets, or experience gift cards. Our generator helps match people strategically."
              },
              {
                q: "Can I combine items to reach the budget?",
                a: "Yes! A curated gift basket with several smaller items often feels more thoughtful than one expensive item. Just ensure everything works together thematically."
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Gift Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/secret-santa-gifts-under-20" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <DollarSign className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gifts Under $20</h3>
              <p className="text-gray-600 text-sm">50+ budget-friendly ideas</p>
            </Link>
            <Link href="/blog/secret-santa-gifts-under-10" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <DollarSign className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gifts Under $10</h3>
              <p className="text-gray-600 text-sm">60+ affordable picks</p>
            </Link>
            <Link href="/blog/secret-santa-gifts-for-coworkers" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Briefcase className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gifts for Coworkers</h3>
              <p className="text-gray-600 text-sm">Office-appropriate ideas</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <Gift className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Premium Gift Exchange?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Use our free Secret Santa Generator to match participants, set your budget, and send invitations.
            No email required—just easy, secure gift exchanges.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
          >
            Start Your Exchange
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
}
