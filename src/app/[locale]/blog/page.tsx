import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Gift, Users, Laptop, DollarSign, Heart, Briefcase, HelpCircle, Laugh, Scale, Sparkles, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Santa Blog - Guides, Tips & Gift Ideas | Secret Santa Generator',
  description: 'Comprehensive guides and resources for Secret Santa gift exchanges. Find gift ideas, organization tips, questionnaires, and more.',
  keywords: 'secret santa blog, secret santa guides, secret santa tips, gift exchange ideas',
};

export default function BlogPage() {
  const articles = [
    {
      title: "Secret Santa Questionnaire: 30+ Questions to Ask",
      description: "Essential questions template to help gift-givers choose perfect presents. Includes ready-to-use questionnaire with 30+ questions organized by category.",
      href: "/blog/secret-santa-questionnaire",
      category: "Tools & Templates",
      icon: ClipboardList,
      color: "from-purple-500 to-pink-500",
      readTime: "12 min",
    },
    {
      title: "Virtual Secret Santa: How to Organize Remote Gift Exchange",
      description: "Complete guide for remote teams - online tools, shipping logistics, and creative virtual reveal ideas for distributed teams.",
      href: "/blog/virtual-secret-santa",
      category: "Organization Guides",
      icon: Laptop,
      color: "from-blue-500 to-indigo-500",
      readTime: "16 min",
    },
    {
      title: "Secret Santa Gifts Under $10: 60+ Budget-Friendly Ideas",
      description: "Amazing gifts under $10 that don't feel cheap. Perfect for students, large groups, and budget-conscious exchanges.",
      href: "/blog/secret-santa-gifts-under-10",
      category: "Gift Ideas",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      readTime: "15 min",
    },
    {
      title: "Secret Santa Gifts for Women: 45+ Thoughtful Ideas",
      description: "Perfect gift ideas for women from beauty & self-care to accessories. Organized by budget and personality type.",
      href: "/blog/secret-santa-gifts-for-women",
      category: "Gift Ideas",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      readTime: "14 min",
    },
    {
      title: "Secret Santa Gifts for Men: 40+ Ideas Guys Actually Want",
      description: "Comprehensive gift guide for men with tech, accessories, and practical items guys will genuinely love.",
      href: "/blog/secret-santa-gifts-for-men",
      category: "Gift Ideas",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      readTime: "12 min",
    },
    {
      title: "Secret Santa Gifts for Coworkers: 45+ Professional & Fun Ideas",
      description: "Office-appropriate gift ideas that balance professionalism with personality. Perfect for workplace exchanges.",
      href: "/blog/secret-santa-gifts-for-coworkers",
      category: "Gift Ideas",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      readTime: "13 min",
    },
    {
      title: "Funny Secret Santa Gifts That Will Make Everyone Laugh",
      description: "50+ hilarious gift ideas from office-safe humor to outrageous gag gifts. Make your Secret Santa unforgettable.",
      href: "/blog/funny-secret-santa-gifts",
      category: "Gift Ideas",
      icon: Laugh,
      color: "from-orange-500 to-red-500",
      readTime: "11 min",
    },
    {
      title: "Secret Santa Gifts Under $20: 50+ Best Ideas",
      description: "Budget-friendly gift ideas organized by category. Find thoughtful presents without breaking the bank.",
      href: "/blog/secret-santa-gifts-under-20",
      category: "Gift Ideas",
      icon: DollarSign,
      color: "from-green-500 to-teal-500",
      readTime: "14 min",
    },
    {
      title: "How Does Secret Santa Work? Complete Beginner's Guide",
      description: "Learn everything about Secret Santa - from basic rules to expert tips. Perfect for first-timers and experienced organizers.",
      href: "/blog/how-does-secret-santa-work",
      category: "Getting Started",
      icon: HelpCircle,
      color: "from-violet-500 to-purple-500",
      readTime: "15 min",
    },
    {
      title: "How to Organize a Secret Santa Gift Exchange",
      description: "Complete guide to planning and running the perfect Secret Santa exchange for any group size or setting.",
      href: "/blog/how-to-organize-secret-santa",
      category: "Organization Guides",
      icon: Gift,
      color: "from-red-500 to-pink-500",
      readTime: "13 min",
    },
    {
      title: "White Elephant vs Secret Santa: What's the Difference?",
      description: "Comprehensive comparison of two popular gift exchange games. Learn rules, differences, and which is right for your group.",
      href: "/blog/white-elephant-vs-secret-santa",
      category: "Comparisons",
      icon: Scale,
      color: "from-amber-500 to-orange-500",
      readTime: "10 min",
    },
    {
      title: "7 Best Secret Santa Generator Apps in 2025",
      description: "Compare the top Secret Santa generators and apps. Find the perfect tool for organizing your gift exchange.",
      href: "/blog/best-secret-santa-generator-apps",
      category: "Tools & Templates",
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500",
      readTime: "11 min",
    },
  ];

  const categories = [
    { name: "All Articles", count: articles.length, color: "bg-purple-100 text-purple-700" },
    { name: "Gift Ideas", count: articles.filter(a => a.category === "Gift Ideas").length, color: "bg-pink-100 text-pink-700" },
    { name: "Organization Guides", count: articles.filter(a => a.category === "Organization Guides").length, color: "bg-blue-100 text-blue-700" },
    { name: "Tools & Templates", count: articles.filter(a => a.category === "Tools & Templates").length, color: "bg-green-100 text-green-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            Secret Santa Blog
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Secret Santa Guides & Resources
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about organizing perfect Secret Santa gift exchanges. From gift ideas to organization tips, questionnaires, and more.
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 ${category.color}`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{articles.length}</div>
            <div className="text-gray-600">Comprehensive Guides</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
            <div className="text-gray-600">Gift Ideas Covered</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => {
            const Icon = article.icon;
            return (
              <Link
                key={idx}
                href={article.href}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Category Badge & Icon */}
                <div className={`bg-gradient-to-r ${article.color} p-6 relative`}>
                  <div className="absolute top-4 right-4">
                    <Icon className="w-8 h-8 text-white opacity-80" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>

                    <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-12 text-center text-white">
          <Gift className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Organize Your Secret Santa?
          </h2>
          <p className="text-xl mb-8 text-purple-50 max-w-2xl mx-auto">
            Use our free Secret Santa generator to organize your gift exchange in minutes. No email required, completely private!
          </p>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            Try Free Generator
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            More Guides Coming Soon!
          </h3>
          <p className="text-gray-600 mb-6">
            We're creating more helpful guides about Secret Santa. Bookmark this page to stay updated.
          </p>
          <div className="flex gap-4 justify-center text-sm text-gray-500">
            <span>📝 DIY Gift Ideas</span>
            <span>•</span>
            <span>🎄 Christmas Planning</span>
            <span>•</span>
            <span>✉️ Email Templates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
