import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Gift, Laugh, Users, ArrowRight, CheckCircle2, Smile, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Funny Secret Santa Gifts That Will Make Everyone Laugh (2025)',
  description: 'Discover 50+ hilarious secret santa gift ideas that guarantee laughs. From office-appropriate humor to outrageous gag gifts, find the perfect funny present under $30.',
  keywords: 'funny secret santa gifts, funny secret santa ideas, humorous secret santa gifts, gag secret santa gifts, hilarious secret santa gifts',
  openGraph: {
    title: 'Funny Secret Santa Gifts That Will Make Everyone Laugh',
    description: 'Complete guide to hilarious secret santa gifts - from subtle office humor to outrageous gag gifts',
    type: 'article',
  },
};

export default function FunnySecretSantaGifts() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
            <Laugh className="w-4 h-4" />
            Funny Gifts
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Gift className="w-4 h-4" />
            Gag Gifts
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Funny Secret Santa Gifts That Will Make Everyone Laugh
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            11 min read
          </span>
          <span className="flex items-center gap-1.5">
            <Laugh className="w-4 h-4" />
            50+ hilarious ideas
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Office & friends
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          Let's be honest—the best secret santa gifts are the ones that make everyone burst out laughing when they're unwrapped. Whether you're shopping for your office party, friend group, or family gathering, funny secret santa gifts add an element of entertainment that makes the whole exchange memorable.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The key to choosing great funny secret santa ideas is knowing your audience. What flies at a casual friend gathering might not work at the office Christmas party. But don't worry—we've organized our hilarious gift ideas by setting so you can find the perfect level of humor for your exchange.
        </p>

        <p className="text-gray-700 leading-relaxed">
          From subtle office-appropriate gag gifts to outrageous presents that will have everyone in tears (the good kind), this guide covers 50+ funny secret santa gifts that guarantee laughs while staying within budget. Let's dive into the most entertaining gift ideas that people will actually remember.
        </p>
      </div>

      {/* Humor Level Guide */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12 border border-yellow-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Smile className="w-7 h-7 text-yellow-600" />
          Understanding Humor Levels for Secret Santa
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-green-200">
            <h3 className="font-bold text-green-700 text-lg mb-2">😊 Level 1: Office-Safe Humor</h3>
            <p className="text-gray-700">
              Gentle, universally funny gifts appropriate for professional settings. These get chuckles without risking HR involvement. Perfect for corporate Secret Santa exchanges.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-blue-200">
            <h3 className="font-bold text-blue-700 text-lg mb-2">😄 Level 2: Friend Group Fun</h3>
            <p className="text-gray-700">
              Moderately funny gifts with a bit more edge. Great for close friends and casual workplace environments where people know each other well.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-orange-200">
            <h3 className="font-bold text-orange-700 text-lg mb-2">😂 Level 3: Outrageous Gag Gifts</h3>
            <p className="text-gray-700">
              Over-the-top hilarious gifts that will have everyone dying laughing. Best for very close friends or family who appreciate bold humor. Use caution in professional settings!
            </p>
          </div>
        </div>
      </div>

      {/* Office-Safe Funny Gifts */}
      <section id="office-safe" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">😊 Office-Safe Funny Secret Santa Gifts</h2>
          <p className="text-gray-700 text-lg">
            These humorous secret santa gifts are perfect for workplace exchanges. They're funny without being offensive, making everyone laugh while keeping things professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Desktop Punching Bag", price: "$15-20", desc: "Miniature stress relief punching bag that suctions to desk. Perfect for those frustrating Monday mornings or after difficult meetings. Actually therapeutic!" },
            { name: "Emergency 'I'm Not Bossy' Mug", price: "$12-18", desc: "Coffee mug with hilariously accurate workplace humor. Multiple variations available like 'I'm not arguing, I'm just explaining why I'm right.'" },
            { name: "Passive Aggressive Sticky Notes", price: "$10-15", desc: "Pre-printed notes with polite but sassy messages. Great for leaving hints around the office kitchen about cleaning up after yourself." },
            { name: "USB Pet Rock", price: "$12-18", desc: "Modern take on the classic pet rock—this one plugs into your computer and does absolutely nothing. The ultimate useless tech accessory that gets big laughs." },
            { name: "Deadline Procrastinator Timer", price: "$15-25", desc: "Countdown clock for those who thrive under pressure. Shows exactly how much time left until panic mode kicks in. Funny because it's true." },
            { name: "Toilet Golf Game", price: "$15-20", desc: "Mini putting green for bathroom breaks. Surprisingly popular in offices. Improves golf skills while you're... indisposed." },
            { name: "'Do Not Disturb' Office Sign", price: "$10-15", desc: "Humorous door sign with funny warnings like 'Genius at work' or 'Meeting in progress (just kidding, I'm napping).' Actually gets used!" },
            { name: "Mystery Flavor Jelly Beans", price: "$12-18", desc: "BeanBoozled-style beans with flavors like 'booger' and 'rotten egg.' Great for office entertainment and watching coworkers' reactions." },
            { name: "Emergency Chocolate Bar", price: "$8-12", desc: "Giant chocolate bar labeled 'Break in case of emergency.' Perfect for stress eating during busy seasons. Everyone relates to this one." },
            { name: "Sarcastic Coaster Set", price: "$12-18", desc: "Drink coasters with workplace humor like 'This might be wine' or 'Decaf? Seriously?' Subtle and actually useful." },
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

      {/* Friend Group Fun */}
      <section id="friend-group" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">😄 Funny Gifts for Friend Groups</h2>
          <p className="text-gray-700 text-lg">
            Step up the humor for friends who can handle a bit more sass. These funny secret santa ideas are entertaining without crossing major lines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Ugly Christmas Sweater (Intentionally)", price: "$20-30", desc: "The tackier, the better. Light-up designs, 3D decorations, questionable patterns. Bonus points if it plays music. Actually becomes their favorite party outfit." },
            { name: "Wine Bottle Glass Holder", price: "$15-25", desc: "Holds entire wine bottle. Technically counts as 'one glass.' Perfect for friends who appreciate wine... perhaps too much." },
            { name: "Nicolas Cage Pillowcase", price: "$12-18", desc: "Sequined pillowcase with Nicolas Cage's face. Flip the sequins to reveal different expression. Absolutely ridiculous, absolutely hilarious." },
            { name: "Inflatable Unicorn Horn for Cats", price: "$8-15", desc: "Transform any pet into a magical creature. Works for cats, small dogs, or extremely patient guinea pigs. Instagram gold." },
            { name: "Toilet Night Light", price: "$12-18", desc: "Motion-activated LED that makes toilet glow in dark. Color-changing options available. Actually useful AND hilarious." },
            { name: "Pizza Sleeping Bag", price: "$25-35", desc: "Full-size sleeping bag shaped like giant pizza slice. Perfect for camping, sleepovers, or just being extra at home." },
            { name: "Screaming Goat Figure", price: "$10-18", desc: "Squeeze it and it screams like a goat. Annoying? Yes. Hilarious? Also yes. Will be used to scare people repeatedly." },
            { name: "Beard Ornaments Kit", price: "$12-18", desc: "Tiny ornaments that clip onto beards. Transform facial hair into holiday decoration. Bearded friends secretly love this." },
            { name: "Emergency Underpants in a Can", price: "$10-15", desc: "Disposable underwear packaged like canned goods. For the chronically unprepared friend. Funny gift that's oddly practical." },
            { name: "Taco Socks Gift Box", price: "$12-18", desc: "Socks rolled to look like tacos. Comes in taco holder box. Surprisingly well-made socks that actually get worn." },
            { name: "Desktop Bowling Game", price: "$15-25", desc: "Miniature bowling alley for desk or table. Entertaining during Zoom calls. More addictive than it should be." },
            { name: "Face Bank Coin Collector", price: "$18-25", desc: "Creepy face that 'eats' coins you feed it. Disturbing yet mesmerizing. Everyone wants to try feeding it." },
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

      {/* Outrageous Gag Gifts */}
      <section id="outrageous" className="mb-16">
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">😂 Outrageous Gag Gifts (Use with Caution!)</h2>
              <p className="text-orange-700 font-medium">
                These are for very close friends/family only. Not recommended for professional settings!
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-lg">
            Go big or go home with these over-the-top funny gifts. Perfect for friend groups with no filter or family members who appreciate bold humor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Toilet Paper Wedding Dress Kit", price: "$15-25", desc: "Create wedding dress entirely from toilet paper. Includes instructions and judging scorecard. Hilarious party activity for bachelorette parties or game nights." },
            { name: "Grow Your Own Boyfriend/Girlfriend", price: "$8-12", desc: "Tiny figure that grows 600% when placed in water. For the perpetually single friend. Comes with certificate of authenticity." },
            { name: "Prank Pack Gift Boxes", price: "$10-15", desc: "Fake product boxes like 'Earwax Candle Making Kit' or 'iArm Selfie Stick.' Put real gift inside. The look on their face is priceless." },
            { name: "Yodeling Pickle", price: "$12-18", desc: "Electronic pickle that yodels when you press button. Completely absurd. Strangely entertaining. Will be shown to every visitor." },
            { name: "Emergency Clown Nose", price: "$8-12", desc: "For when life gets too serious. Packaged like medical emergency kit. Instructions included: 'Apply directly to face. Repeat as needed.'" },
            { name: "Handerpants Underwear for Hands", price: "$10-15", desc: "Tiny tighty-whities for your hands. Because... why not? Makes typing awkward but hilarious." },
            { name: "Mustache Pacifier", price: "$8-12", desc: "Baby pacifier with mustache attached. Perfect gag gift for new parents or people who just appreciate facial hair humor." },
            { name: "Squatty Potty Unicorn Gold", price: "$25-35", desc: "Actual useful product (toilet stool) with hilariously bizarre marketing. They'll laugh, then actually use it and thank you." },
            { name: "Bacon-Flavored Everything", price: "$10-20", desc: "Bacon toothpaste, bacon soap, bacon dental floss. For friends who claim bacon makes everything better. Test that theory." },
            { name: "Singing Fish Trophy", price: "$20-30", desc: "Motion-activated mounted fish that sings. Classic gag gift that never gets old. Annoying? Yes. Hilarious? Absolutely." },
            { name: "Toilet Mug", price: "$12-18", desc: "Coffee mug shaped like miniature toilet. Comes with tiny plunger spoon. Gross? Yes. Funny? Also yes." },
            { name: "Instant Underpants", price: "$8-12", desc: "Compressed underwear in pill form. Add water and watch them expand. Because your friend is clearly unprepared for life." },
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

      {/* Funny Food Gifts */}
      <section id="food-gifts" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Funny Food & Drink Gifts</h2>
          <p className="text-gray-700 text-lg">
            Edible gag gifts are perfect because even if the joke falls flat, at least it's consumable. These funny food gifts deliver laughs and snacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "World's Hottest Hot Sauce", price: "$15-25", desc: "Ghost pepper or Carolina Reaper sauce with warning labels. Watch brave souls try it. Keep milk nearby. Document reactions for posterity." },
            { name: "Bacon-Flavored Candy Canes", price: "$8-12", desc: "Yes, they're real. Yes, they taste like bacon. No, nobody asked for this. Perfect conversation starter at any party." },
            { name: "Unicorn Snot Glitter Gel", price: "$10-15", desc: "Edible shimmer gel (actually food-safe glitter). Makes everything sparkly. Hilarious name, surprisingly popular for baking." },
            { name: "Mystery Flavor Chips Variety", price: "$12-20", desc: "International weird chip flavors: seaweed, squid, cappuccino. Taste-testing becomes group entertainment activity." },
            { name: "Gummy Body Parts", price: "$10-15", desc: "Anatomically questionable gummy candy. Gross? Yes. Funny? Also yes. Halloween vibes all year round." },
            { name: "Coffee Mug with Snarky Quote", price: "$12-18", desc: "'Don't talk to me until this is empty' or 'Powered by sarcasm and coffee.' Funny AND they'll actually use it daily." },
            { name: "Booze-Infused Chocolates", price: "$15-25", desc: "Whiskey, rum, or wine-filled chocolates. For the friend who can't decide between dessert and drinks. Why not both?" },
            { name: "Instant Ramen Sweatshirt", price: "$25-35", desc: "Hoodie that looks like ramen packet. Oddly comfortable, undeniably funny. College students especially appreciate this." },
            { name: "Pickle Candy Canes", price: "$8-12", desc: "For pickle lovers or people you want to mildly disturb. Shockingly accurate pickle flavor. Reactions are entertainment gold." },
            { name: "Emergency Chocolate Bar (Giant)", price: "$15-20", desc: "Massive chocolate bar with funny warning label. 'Break glass in case of emergency.' Everyone needs emergency chocolate." },
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

      {/* Funny Wearables */}
      <section id="wearables" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hilarious Wearable Gifts</h2>
          <p className="text-gray-700 text-lg">
            Clothing and accessories that make a statement. These funny wearables actually get worn (usually as dare or for social media).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Funny Graphic Socks", price: "$10-15", desc: "Tacos, pizza, or sassy sayings. 'If you can read this, bring me wine.' Funny but actually wearable to work under pants." },
            { name: "Inflatable Dinosaur Costume", price: "$30-50", desc: "Battery-powered inflatable T-Rex suit. Instant party legend status. Perfect for Zoom calls, errands, or just Tuesday." },
            { name: "Mullet Hat (Wig)", price: "$15-25", desc: "Business in front, party in back—in hat form. Surprisingly warm. Undeniably ridiculous. 80s nostalgia strong." },
            { name: "Funny Apron with Abs", price: "$15-25", desc: "Apron printed with six-pack abs or bikini body. For the dad who grills. Actually functional kitchen gear with humor built-in." },
            { name: "Light-Up LED Gloves", price: "$12-20", desc: "Rave gloves that light up. For concerts, parties, or dramatically making a point in conversations. More versatile than expected." },
            { name: "Onesie Pajamas (Animal)", price: "$25-40", desc: "Adult onesie in dinosaur, unicorn, or shark. Childish? Yes. Comfortable? Extremely. Will become their favorite lazy-day outfit." },
            { name: "Funny Hat Collection", price: "$12-20", desc: "Taco hat, pizza hat, or novelty foam finger hat. Perfect for sports events, parties, or confusing neighbors." },
            { name: "Beard Beanie (Attached)", price: "$15-25", desc: "Beanie with knitted beard attached. Instant facial hair for the follicly challenged. Doubles as ski mask." },
            { name: "Novelty Tie (Pizza/Bacon)", price: "$12-18", desc: "Professional ties with food prints. Office-appropriate from distance, hilarious up close. Perfect for casual Fridays." },
            { name: "Sunglasses (Ridiculous)", price: "$10-18", desc: "Oversized, neon-colored, or shaped like palm trees. Festival essential. Makes every photo instantly better (or worse)." },
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
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Choosing Funny Secret Santa Gifts</h2>

          <div className="space-y-4">
            {[
              {
                title: "Know Your Audience",
                desc: "Office party? Keep it PG. Close friends? Push boundaries a bit. Family gathering? Somewhere in between. When in doubt, err on the side of caution."
              },
              {
                title: "Add Practical Value When Possible",
                desc: "The best gag gifts are funny AND useful. Novelty mugs get used daily. Funny socks get worn. Purely decorative items often get forgotten."
              },
              {
                title: "Presentation Matters",
                desc: "Wrap gag gifts in serious-looking packaging for maximum surprise effect. Or use absurdly large boxes for tiny items. The unwrapping is part of the entertainment."
              },
              {
                title: "Avoid Mean-Spirited Humor",
                desc: "Funny should be lighthearted, not hurtful. Skip gifts that mock appearance, intelligence, or personal struggles. Keep it fun, not cruel."
              },
              {
                title: "Consider Group Entertainment Value",
                desc: "Gifts that create shared experiences (mystery foods, group games, things people try together) make better memories than solo gag gifts."
              },
              {
                title: "Check Return Policies",
                desc: "Sometimes jokes fall flat. Buying from places with easy returns gives you an out if your hilarious gift ends up being just awkward."
              },
              {
                title: "Timing Is Everything",
                desc: "Some funny gifts work better as icebreakers (early in party), others as grand finales. Plan your gift based on exchange format."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Funny Secret Santa Gifts by Budget</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <Laugh className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Under $15</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Passive aggressive notes</li>
              <li>• USB pet rock</li>
              <li>• Screaming goat</li>
              <li>• Emergency clown nose</li>
              <li>• Grow your own boyfriend</li>
              <li>• Funny graphic socks</li>
              <li>• Bacon candy canes</li>
              <li>• Handerpants</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                <Laugh className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$15-$25</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Desktop punching bag</li>
              <li>• Toilet golf game</li>
              <li>• Wine bottle glass</li>
              <li>• Nicolas Cage pillowcase</li>
              <li>• Beard ornaments</li>
              <li>• Mystery flavor jelly beans</li>
              <li>• Yodeling pickle</li>
              <li>• Light-up LED gloves</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                <Laugh className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$25-$50</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Ugly Christmas sweater</li>
              <li>• Pizza sleeping bag</li>
              <li>• Inflatable dinosaur costume</li>
              <li>• Onesie pajamas</li>
              <li>• Squatty Potty unicorn</li>
              <li>• Singing fish trophy</li>
              <li>• Ramen sweatshirt</li>
              <li>• Face bank coin collector</li>
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
              q: "What makes a good funny secret santa gift?",
              a: "The best funny secret santa gifts strike a balance between humor and usefulness. Look for items that will make people laugh but also serve a purpose (like funny mugs or socks). Consider your audience—what's hilarious to friends might not work at the office. The gift should be memorable without being mean-spirited or offensive."
            },
            {
              q: "How do I know if a gag gift is appropriate for my office?",
              a: "Stick to Level 1 office-safe humor: gentle jokes that don't reference anything controversial. Avoid gifts related to alcohol, bodily functions (beyond toilet golf), politics, or anything remotely suggestive. When in doubt, imagine showing the gift to HR—if you'd hesitate, choose something else."
            },
            {
              q: "What are the funniest secret santa gifts under $20?",
              a: "Popular options include the desktop punching bag ($15-20), screaming goat figure ($10-18), USB pet rock ($12-18), passive aggressive sticky notes ($10-15), toilet golf game ($15-20), and Nicolas Cage sequin pillowcase ($12-18). These consistently get big laughs while staying budget-friendly."
            },
            {
              q: "Can funny gifts also be practical?",
              a: "Absolutely! The best gag gifts serve dual purposes. Funny mugs get used every morning. Novelty socks get worn. Toilet night lights are actually helpful. Desktop games provide stress relief. Look for items where the humor enhances the functionality rather than replacing it entirely."
            },
            {
              q: "Should I pair a gag gift with a real gift?",
              a: "It depends on your budget and exchange rules. For exchanges under $20, one good funny gift is fine. For higher budgets ($30-50), consider pairing a small gag item with something more practical. The combo of 'funny' plus 'actually useful' often works well."
            },
            {
              q: "What are good funny secret santa gifts for men vs women?",
              a: "Most funny gifts are gender-neutral (desktop punching bag, funny mugs, gag gadgets). For men specifically, consider beard ornaments, emergency underpants, or tool-related gags. For women, funny wine accessories or beauty product parodies work well. However, the best approach is thinking about the individual's personality rather than gender."
            },
            {
              q: "How can I make my gag gift presentation funnier?",
              a: "Creative packaging amplifies the humor. Put small items in huge boxes. Wrap serious-looking gifts in ridiculous wrapping paper. Use prank boxes that look like absurd products. Add funny notes or fake instructions. The unwrapping anticipation builds suspense and makes the reveal more impactful."
            },
            {
              q: "What funny gifts actually get used after the party?",
              a: "Practical novelty items see the most use: funny socks (worn regularly), humorous mugs (daily coffee), desk toys (stress relief), toilet golf (bathroom entertainment), wine accessories (every party), and novelty kitchen items. Purely decorative gag gifts tend to be forgotten, while functional funny gifts become conversation starters."
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
            href="/en/blog/secret-santa-gifts-for-men"
            className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
              Secret Santa Gifts for Men: 40+ Ideas
            </h3>
            <p className="text-gray-700 mb-4">
              Tech, accessories, and practical gifts guys actually want
            </p>
            <span className="text-blue-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/en/blog/secret-santa-gifts-under-20"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
              Secret Santa Gifts Under $20: 50+ Ideas
            </h3>
            <p className="text-gray-700 mb-4">
              Budget-friendly gifts for everyone on your list
            </p>
            <span className="text-green-600 font-medium flex items-center gap-2">
              Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <Laugh className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Organize Your Secret Santa Exchange?
        </h2>
        <p className="text-xl mb-8 text-yellow-50 max-w-2xl mx-auto">
          Now that you have hilarious gift ideas, use our free Secret Santa generator to organize the perfect gift exchange. No email required, completely free!
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-colors shadow-lg"
        >
          Try Free Secret Santa Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
