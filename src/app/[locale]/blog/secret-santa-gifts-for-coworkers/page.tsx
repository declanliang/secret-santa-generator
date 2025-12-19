import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, Briefcase, Users, ArrowRight, CheckCircle2, AlertTriangle, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Santa Gifts for Coworkers: 45+ Professional & Fun Ideas (2025)',
  description: 'Discover office-appropriate secret santa gifts for coworkers that are professional yet fun. From desk accessories to treats, find the perfect workplace gift under $30.',
  keywords: 'secret santa gifts for coworkers, secret santa for coworkers, office secret santa gifts, work secret santa ideas, professional secret santa gifts',
  openGraph: {
    title: 'Secret Santa Gifts for Coworkers: Professional & Fun Ideas',
    description: 'Complete guide to workplace secret santa gifts - professional, appropriate, and actually appreciated',
    type: 'article',
  },
};

export default function SecretSantaGiftsForCoworkers() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Briefcase className="w-4 h-4" />
            Office Gifts
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Users className="w-4 h-4" />
            Professional
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Secret Santa Gifts for Coworkers: 45+ Professional & Fun Ideas
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            13 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            45+ gift ideas
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            HR-approved
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Office Secret Santa exchanges require a delicate balance—you want gifts that are fun and thoughtful, but also professional enough for the workplace. The best secret santa gifts for coworkers are those that bring a smile without crossing any professional boundaries or making anyone uncomfortable.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether you're shopping for your close work friend, a casual acquaintance from another department, or even your boss, this guide has you covered. We've curated 45+ office-appropriate secret santa ideas that strike the perfect balance between professional and personal, practical and fun.
        </p>

        <p className="text-gray-700 leading-relaxed">
          From desk essentials that upgrade their workspace to gourmet treats that brighten their day, these gifts are guaranteed to be appreciated without raising any HR eyebrows. Let's find the perfect gift that'll make you the office Secret Santa MVP.
        </p>
      </div>

      {/* Office Gift Guidelines */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12 border border-amber-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-amber-600" />
          Office Secret Santa Gift Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border-2 border-green-200">
            <h3 className="font-bold text-green-700 text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              DO: Safe Gift Choices
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Desk accessories and organizers</li>
              <li>✓ Coffee, tea, and gourmet treats</li>
              <li>✓ Tech gadgets and phone accessories</li>
              <li>✓ Notebooks, planners, quality pens</li>
              <li>✓ Stress relief items (plants, fidgets)</li>
              <li>✓ Gift cards to popular retailers</li>
              <li>✓ Reusable water bottles and mugs</li>
              <li>✓ Subtle humor (funny mugs, socks)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-red-200">
            <h3 className="font-bold text-red-700 text-lg mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              DON'T: Avoid These
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✗ Anything overly personal (underwear, perfume)</li>
              <li>✗ Alcohol (unless company culture clearly allows)</li>
              <li>✗ Religious or political items</li>
              <li>✗ Anything suggesting weight loss or fitness</li>
              <li>✗ Romantic or suggestive gifts</li>
              <li>✗ Gag gifts that could offend</li>
              <li>✗ Items that smell strongly</li>
              <li>✗ Anything requiring size knowledge</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desk Essentials */}
      <section id="desk-essentials" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Desk Essentials That Upgrade Their Workspace</h2>
          <p className="text-gray-700 text-lg">
            These practical desk accessories are perfect for any coworker. They're useful, professional, and show you put thought into improving their daily work experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Wireless Phone Charger Pad", price: "$15-25", desc: "Keep their phone charged all day without cable clutter. Works with most modern smartphones. Clean, minimalist design fits any desk aesthetic." },
            { name: "Cable Management Organizer", price: "$12-20", desc: "Eliminate cable chaos with clips and sleeves. Makes workspace look professional and organized. Reduces frustration searching for the right cable." },
            { name: "Desk Plant (Low Maintenance)", price: "$15-30", desc: "Succulents or small pothos plants improve air quality and add life to workspace. Nearly impossible to kill. Reduces stress and increases productivity." },
            { name: "Monitor Stand with Storage", price: "$20-35", desc: "Raises monitor to ergonomic height while providing drawer storage. Reduces neck strain. Looks professional and keeps desk tidy." },
            { name: "Leather Desk Mat", price: "$25-40", desc: "Protects desk surface while creating professional aesthetic. Built-in cable management. Ages beautifully with use." },
            { name: "USB Hub Multi-Port Adapter", price: "$18-28", desc: "Expands laptop connectivity with multiple USB ports, HDMI, and card readers. Essential for anyone with limited ports. Compact and portable." },
            { name: "Desk Organizer Caddy", price: "$15-25", desc: "Keeps pens, sticky notes, and office supplies organized. Multiple compartments. Metal or wood options for different office aesthetics." },
            { name: "Ergonomic Wrist Rest Pad", price: "$12-20", desc: "Memory foam support for keyboard and mouse. Reduces wrist strain during long typing sessions. Medical-grade materials." },
            { name: "Blue Light Blocking Glasses", price: "$15-30", desc: "Reduces eye strain from screens. Improves sleep quality. Modern stylish frames. No prescription needed." },
            { name: "Desk Lamp with USB Port", price: "$20-35", desc: "Adjustable LED lighting with multiple brightness levels. Built-in USB charging port. Reduces eye fatigue during late work sessions." },
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

      {/* Coffee & Treats */}
      <section id="coffee-treats" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Coffee className="w-8 h-8" />
            Coffee, Tea & Gourmet Treats
          </h2>
          <p className="text-gray-700 text-lg">
            Food and drink gifts are universally appreciated in office settings. They're consumable, so no worry about whether they'll use it long-term.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Premium Coffee Sampler", price: "$20-30", desc: "Variety pack from local roasters or specialty brands. Multiple roast levels and origins. Perfect for coffee enthusiasts wanting to explore new flavors." },
            { name: "Insulated Coffee Mug", price: "$20-35", desc: "YETI or similar quality brand. Keeps coffee hot for hours. Reduces disposable cup waste. Professional look for meetings." },
            { name: "Specialty Tea Collection", price: "$15-25", desc: "Assorted premium teas in decorative box. Multiple flavors from green to herbal. Great for non-coffee drinkers." },
            { name: "Gourmet Chocolate Box", price: "$20-30", desc: "Artisan chocolates from quality chocolatier. Beautiful presentation. Perfect for desk drawer emergency chocolate stash." },
            { name: "Healthy Snack Box", price: "$25-35", desc: "Curated selection of nuts, dried fruits, protein bars. Health-conscious gift. Keeps them fueled during busy workdays." },
            { name: "Pour-Over Coffee Kit", price: "$25-40", desc: "Portable brewing setup for office use. Includes dripper and filters. For coworkers serious about their coffee quality." },
            { name: "French Press Travel Mug", price: "$20-30", desc: "Brew coffee directly in travel mug. Double-walled insulation. Perfect for commuters or busy mornings." },
            { name: "Hot Sauce Gift Set", price: "$18-28", desc: "Variety pack from mild to spicy. Adds excitement to office lunches. Great conversation starter in break room." },
            { name: "Biscotti or Cookie Tin", price: "$15-25", desc: "Gourmet cookies in reusable tin. Perfect for coffee breaks. Shareable with team during meetings." },
            { name: "Cold Brew Coffee Maker", price: "$25-35", desc: "Makes smooth cold brew overnight. Glass carafe looks professional. Great for summer office drinks." },
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

      {/* Tech & Gadgets */}
      <section id="tech-gadgets" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Gadgets for the Modern Office</h2>
          <p className="text-gray-700 text-lg">
            Technology gifts are safe bets for coworkers. Everyone uses tech daily, and these accessories make work life easier and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Wireless Mouse (Ergonomic)", price: "$20-35", desc: "Comfortable grip reduces hand strain. Smooth tracking. Rechargeable battery lasts weeks. Professional appearance for any desk." },
            { name: "Portable Phone Stand", price: "$10-18", desc: "Adjustable viewing angles for video calls. Foldable and portable. Perfect for working from home or office hot-desking." },
            { name: "Bluetooth Keyboard (Compact)", price: "$25-40", desc: "Quiet typing for open offices. Connects multiple devices. Sleek design saves desk space." },
            { name: "USB Rechargeable Hand Warmer", price: "$15-25", desc: "For cold office environments. Doubles as phone charger. Appreciated during winter months." },
            { name: "Noise-Canceling Earbuds", price: "$30-50", desc: "Budget-friendly alternative to AirPods. Helps focus in noisy offices. Good for calls and music." },
            { name: "Webcam Cover Slider", price: "$8-12", desc: "Privacy protection for laptop cameras. Thin enough to close laptop. Small but meaningful security upgrade." },
            { name: "Laptop Cooling Pad", price: "$20-30", desc: "Prevents overheating during long work sessions. Improves performance. Adjustable angles for ergonomics." },
            { name: "Smart Notebook (Reusable)", price: "$25-35", desc: "Rocketbook or similar brand. Write traditionally, scan to cloud, then erase and reuse. Eco-friendly and innovative." },
            { name: "Portable SSD Drive", price: "$35-50", desc: "Fast external storage for backups. Compact and durable. Essential for anyone working with large files." },
            { name: "Phone Sanitizer UV Light", price: "$20-30", desc: "Kills 99.9% of germs on phones. Doubles as wireless charger. Particularly appreciated post-pandemic." },
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

      {/* Stress Relief & Wellness */}
      <section id="wellness" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stress Relief & Wellness Gifts</h2>
          <p className="text-gray-700 text-lg">
            Help your coworkers manage workplace stress with these thoughtful wellness gifts. Perfect for showing you care about their wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Desktop Zen Garden", price: "$15-25", desc: "Miniature sand garden with rake and rocks. Meditative stress relief. Looks professional and calming on desk." },
            { name: "Essential Oil Desk Diffuser", price: "$18-28", desc: "USB-powered aromatherapy. Subtle scents won't overwhelm office. Lavender or peppermint oils for focus and calm." },
            { name: "Stress Ball Set (Professional)", price: "$10-18", desc: "Textured grip strengthener balls. Reduces tension during calls or meetings. More sophisticated than foam stress balls." },
            { name: "Neck and Shoulder Massager", price: "$25-40", desc: "Portable massage tool for desk breaks. Rechargeable. Relieves tension from long hours at computer." },
            { name: "Mindfulness Journal", price: "$15-25", desc: "Guided prompts for gratitude and reflection. Quality paper and binding. Helps manage work stress productively." },
            { name: "Desktop Fountain (Quiet)", price: "$20-35", desc: "Peaceful water sounds. USB-powered. Creates calming atmosphere without disturbing neighbors." },
            { name: "Fidget Desk Toy Set", price: "$12-20", desc: "Professional fidget tools for focus. Magnetic balls or infinity cube. Helps thinking during problem-solving." },
            { name: "Eye Mask for Power Naps", price: "$15-25", desc: "Silk or memory foam eye mask. For lunch break power naps. Appreciated by busy professionals." },
            { name: "Posture Corrector Cushion", price: "$20-35", desc: "Lumbar support pillow for office chair. Reduces back pain. Medical-grade memory foam." },
            { name: "Desk Yoga Card Set", price: "$10-18", desc: "Quick stretches doable at desk. Illustrated cards. Promotes movement during long work sessions." },
          ].map((gift, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{gift.name}</h3>
                <span className="text-teal-600 font-semibold text-sm bg-teal-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                  {gift.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{gift.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional with Personality */}
      <section id="personality" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Gifts with Personality</h2>
          <p className="text-gray-700 text-lg">
            These gifts add personal touches while remaining workplace-appropriate. They show personality without crossing professional boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Funny Coffee Mug (Office Humor)", price: "$12-20", desc: "'Powered by coffee' or subtle sarcasm. Professional humor that gets daily use. Conversation starter in break room." },
            { name: "Customized Pen Set", price: "$20-30", desc: "Quality pens in nice case. Engraved or monogrammed option. Makes signing documents feel important." },
            { name: "Leather Notebook Cover", price: "$25-40", desc: "Elevates standard notebook to executive status. Ages beautifully. Professional look for client meetings." },
            { name: "Desk Nameplate (Funny Title)", price: "$15-25", desc: "'Director of Coffee Consumption' or similar. Playful but professional. Custom engraved options." },
            { name: "Quality Socks (Subtle Fun)", price: "$12-18", desc: "Professional patterns with hidden fun designs. Argyle with tiny tacos. Funny but workplace-appropriate." },
            { name: "Inspirational Desk Sign", price: "$15-25", desc: "Motivational quote in quality frame or wood. Tasteful inspiration. Fits professional office decor." },
            { name: "Bookmark Set (Unique)", price: "$10-18", desc: "Metal bookmarks with clever designs. For coworkers who read during lunch. Useful and thoughtful." },
            { name: "Sticky Note Dispenser (Fun)", price: "$12-20", desc: "Shaped like tape dispenser or fun design. Practical item with personality. Gets used daily." },
            { name: "Calendar (Humorous)", price: "$15-25", desc: "Daily tear-off with jokes or motivational quotes. Provides daily amusement. Safe office humor." },
            { name: "Playing Cards (Premium)", price: "$10-18", desc: "Waterproof or luxury cardstock. For lunch break games. Builds team camaraderie." },
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

      {/* Pro Tips */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Office Secret Santa Success</h2>

          <div className="space-y-4">
            {[
              {
                title: "Consider Office Culture First",
                desc: "Conservative corporate office? Stick to practical gifts. Startup with casual vibe? You can be slightly more playful. When in doubt, err on the professional side."
              },
              {
                title: "Observe Their Desk Setup",
                desc: "Notice what they already have. Coffee mug collection suggests they'd appreciate another. Cluttered desk means organizers. Empty desk means they prefer minimalism."
              },
              {
                title: "Listen to Casual Conversations",
                desc: "People often mention what they need. 'I need better desk organization' or 'I'm always cold in this office' are gift hints. Mental notes pay off."
              },
              {
                title: "Keep Receipts (Just in Case)",
                desc: "Even well-intentioned gifts can miss the mark. Buy from places with easy return policies. Gift cards to those stores work too if you're unsure."
              },
              {
                title: "Avoid Anything Too Personal",
                desc: "If it requires knowing their size, habits, or personal life details, it's too personal for office Secret Santa. Stick to universally useful items."
              },
              {
                title: "Quality Over Novelty",
                desc: "One useful item beats multiple cheap novelties. Coworkers appreciate quality things they'll actually use over cute junk that sits in drawers."
              },
              {
                title: "Presentation Matters",
                desc: "Nice wrapping shows effort. Even simple gifts feel special in quality wrapping paper. Avoid excessive ribbons that create desk clutter."
              },
              {
                title: "Include a Thoughtful Note",
                desc: "Brief handwritten note explaining why you chose the gift. 'Saw you're always at your desk, thought this might help!' adds personal touch without being too personal."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Secret Santa Gifts by Budget</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <Gift className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Under $20</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Cable organizer</li>
              <li>• Desk plant (succulent)</li>
              <li>• Funny office mug</li>
              <li>• Quality pen set</li>
              <li>• Stress ball set</li>
              <li>• Premium chocolate box</li>
              <li>• Phone stand</li>
              <li>• Desk fidget toys</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$20-$30</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Wireless phone charger</li>
              <li>• Coffee sampler pack</li>
              <li>• Blue light glasses</li>
              <li>• Desk lamp with USB</li>
              <li>• Insulated coffee mug</li>
              <li>• Wireless mouse</li>
              <li>• Essential oil diffuser</li>
              <li>• Leather notebook cover</li>
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
              <li>• Leather desk mat</li>
              <li>• Monitor stand storage</li>
              <li>• Noise-canceling earbuds</li>
              <li>• Smart notebook system</li>
              <li>• Premium coffee maker</li>
              <li>• Portable SSD drive</li>
              <li>• Massage device</li>
              <li>• Ergonomic accessories</li>
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
              q: "What's an appropriate budget for office Secret Santa?",
              a: "Most office Secret Santa exchanges have a $20-30 budget limit. This range is affordable for everyone while still allowing for thoughtful gifts. Some companies set $15 minimums or $50 maximums depending on team size and preferences. Always follow your office's established budget to ensure fairness."
            },
            {
              q: "What if I don't know my coworker well?",
              a: "Stick to universally appreciated gifts: coffee/tea, desk organizers, premium snacks, or tech accessories. These work for anyone regardless of personal preferences. Gift cards to popular retailers ($20-25) are also perfectly acceptable for acquaintances. Avoid trying to guess personal tastes you don't know."
            },
            {
              q: "Can I give food as a Secret Santa gift at work?",
              a: "Yes! Food gifts are excellent for office Secret Santa. Choose high-quality items: gourmet coffee, premium chocolates, specialty teas, or healthy snack boxes. Be mindful of common allergies (nuts, gluten) and dietary restrictions. Individually wrapped items work best for sharing concerns."
            },
            {
              q: "Is it okay to give humorous gifts in office Secret Santa?",
              a: "Gentle humor is fine, but keep it professional. Funny mugs with office-appropriate jokes, silly desk toys, or playful desk signs work well. Avoid anything potentially offensive, political, or too personal. If you wouldn't show it to HR, don't give it."
            },
            {
              q: "What gifts should I absolutely avoid for coworkers?",
              a: "Never give: personal hygiene items (deodorant, soap), anything suggesting weight loss or fitness improvement, alcohol unless company culture clearly accepts it, clothing requiring size knowledge, perfume/cologne, romantic items, political or religious items, or anything too personal (underwear, jewelry). Stick to professional items."
            },
            {
              q: "Should I include a card or note with my gift?",
              a: "Yes! A brief, friendly note adds thoughtfulness. Keep it professional: 'Hope this brightens your workday!' or 'Saw you love coffee, enjoy!' Sign it if your office reveals Secret Santa identities, or leave it anonymous if that's the tradition. Handwritten is nice but typed is fine."
            },
            {
              q: "What if my Secret Santa recipient is my boss?",
              a: "Don't panic! Treat your boss like any other coworker—stick to the same budget limit and choose professional gifts. Good options: premium coffee, quality pen, desk accessories, or gourmet treats. Don't spend more trying to impress; it makes others uncomfortable. Professionalism is key."
            },
            {
              q: "Can I give gift cards for office Secret Santa?",
              a: "Gift cards are perfectly acceptable, especially for $20-30 range. Choose popular retailers: Amazon, Starbucks, local restaurants, or bookstores. They're practical when you don't know someone well. Present them creatively in a small gift box or paired with a related small item to add thoughtfulness."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">More Secret Santa Gift Guides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/en/blog/secret-santa-gifts-under-20"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              Secret Santa Gifts Under $20
            </h3>
            <p className="text-gray-700 mb-4">
              Budget-friendly gift ideas perfect for office exchanges
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/funny-secret-santa-gifts"
            className="group bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-yellow-600 transition-colors">
              Funny Secret Santa Gifts
            </h3>
            <p className="text-gray-700 mb-4">
              Hilarious gifts that are still office-appropriate
            </p>
            <span className="text-yellow-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Office Secret Santa?
        </h2>
        <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
          Now that you have the perfect gift ideas, use our free Secret Santa generator to organize your office gift exchange in minutes. No email required, completely anonymous!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
