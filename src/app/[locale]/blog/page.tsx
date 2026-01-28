import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Gift, Users, Laptop, DollarSign, Heart, Briefcase, HelpCircle, Laugh, Scale, Sparkles, ClipboardList, Scissors, Calendar, Home } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Secret Santa Blog - Guides, Tips & Gift Ideas | Secret Santa Generator',
  description: 'Comprehensive guides and resources for Secret Santa gift exchanges. Find gift ideas, organization tips, questionnaires, and more.',
  keywords: 'secret santa blog, secret santa guides, secret santa tips, gift exchange ideas',
};

export default function BlogPage() {
  const t = useTranslations('blog');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const articles = [
    {
      title: t('articles.familySecretSanta.title'),
      description: t('articles.familySecretSanta.description'),
      href: `/${locale}/blog/family-secret-santa`,
      category: t('articles.familySecretSanta.category'),
      icon: Home,
      color: "from-rose-500 to-pink-500",
      readTime: t('articles.familySecretSanta.readTime'),
    },
    {
      title: t('articles.giftsUnder25.title'),
      description: t('articles.giftsUnder25.description'),
      href: `/${locale}/blog/secret-santa-gifts-under-25-30-50`,
      category: t('articles.giftsUnder25.category'),
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      readTime: t('articles.giftsUnder25.readTime'),
    },
    {
      title: t('articles.christmas2025.title'),
      description: t('articles.christmas2025.description'),
      href: `/${locale}/blog/christmas-secret-santa-2025`,
      category: t('articles.christmas2025.category'),
      icon: Calendar,
      color: "from-red-500 to-green-500",
      readTime: t('articles.christmas2025.readTime'),
    },
    {
      title: t('articles.diyGifts.title'),
      description: t('articles.diyGifts.description'),
      href: `/${locale}/blog/diy-secret-santa-gifts`,
      category: t('articles.diyGifts.category'),
      icon: Scissors,
      color: "from-pink-500 to-rose-500",
      readTime: t('articles.diyGifts.readTime'),
    },
    {
      title: t('articles.questionnaire.title'),
      description: t('articles.questionnaire.description'),
      href: `/${locale}/blog/secret-santa-questionnaire`,
      category: t('articles.questionnaire.category'),
      icon: ClipboardList,
      color: "from-purple-500 to-pink-500",
      readTime: t('articles.questionnaire.readTime'),
    },
    {
      title: t('articles.virtual.title'),
      description: t('articles.virtual.description'),
      href: `/${locale}/blog/virtual-secret-santa`,
      category: t('articles.virtual.category'),
      icon: Laptop,
      color: "from-blue-500 to-indigo-500",
      readTime: t('articles.virtual.readTime'),
    },
    {
      title: t('articles.giftsUnder10.title'),
      description: t('articles.giftsUnder10.description'),
      href: `/${locale}/blog/secret-santa-gifts-under-10`,
      category: t('articles.giftsUnder10.category'),
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      readTime: t('articles.giftsUnder10.readTime'),
    },
    {
      title: t('articles.giftsForWomen.title'),
      description: t('articles.giftsForWomen.description'),
      href: `/${locale}/blog/secret-santa-gifts-for-women`,
      category: t('articles.giftsForWomen.category'),
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      readTime: t('articles.giftsForWomen.readTime'),
    },
    {
      title: t('articles.giftsForMen.title'),
      description: t('articles.giftsForMen.description'),
      href: `/${locale}/blog/secret-santa-gifts-for-men`,
      category: t('articles.giftsForMen.category'),
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      readTime: t('articles.giftsForMen.readTime'),
    },
    {
      title: t('articles.giftsForCoworkers.title'),
      description: t('articles.giftsForCoworkers.description'),
      href: `/${locale}/blog/secret-santa-gifts-for-coworkers`,
      category: t('articles.giftsForCoworkers.category'),
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      readTime: t('articles.giftsForCoworkers.readTime'),
    },
    {
      title: t('articles.funnyGifts.title'),
      description: t('articles.funnyGifts.description'),
      href: `/${locale}/blog/funny-secret-santa-gifts`,
      category: t('articles.funnyGifts.category'),
      icon: Laugh,
      color: "from-orange-500 to-red-500",
      readTime: t('articles.funnyGifts.readTime'),
    },
    {
      title: t('articles.giftsUnder20.title'),
      description: t('articles.giftsUnder20.description'),
      href: `/${locale}/blog/secret-santa-gifts-under-20`,
      category: t('articles.giftsUnder20.category'),
      icon: DollarSign,
      color: "from-green-500 to-teal-500",
      readTime: t('articles.giftsUnder20.readTime'),
    },
    {
      title: t('articles.uniqueQuirky.title'),
      description: t('articles.uniqueQuirky.description'),
      href: `/${locale}/blog/unique-quirky-secret-santa-gifts`,
      category: t('articles.uniqueQuirky.category'),
      icon: Sparkles,
      color: "from-amber-500 to-purple-500",
      readTime: t('articles.uniqueQuirky.readTime'),
    },
    {
      title: t('articles.printableForms.title'),
      description: t('articles.printableForms.description'),
      href: `/${locale}/blog/printable-secret-santa-forms`,
      category: t('articles.printableForms.category'),
      icon: ClipboardList,
      color: "from-emerald-500 to-blue-500",
      readTime: t('articles.printableForms.readTime'),
    },
    {
      title: t('articles.howItWorks.title'),
      description: t('articles.howItWorks.description'),
      href: `/${locale}/blog/how-does-secret-santa-work`,
      category: t('articles.howItWorks.category'),
      icon: HelpCircle,
      color: "from-violet-500 to-purple-500",
      readTime: t('articles.howItWorks.readTime'),
    },
    {
      title: t('articles.howToOrganize.title'),
      description: t('articles.howToOrganize.description'),
      href: `/${locale}/blog/how-to-organize-secret-santa`,
      category: t('articles.howToOrganize.category'),
      icon: Gift,
      color: "from-red-500 to-pink-500",
      readTime: t('articles.howToOrganize.readTime'),
    },
    {
      title: t('articles.whiteElephant.title'),
      description: t('articles.whiteElephant.description'),
      href: `/${locale}/blog/white-elephant-vs-secret-santa`,
      category: t('articles.whiteElephant.category'),
      icon: Scale,
      color: "from-amber-500 to-orange-500",
      readTime: t('articles.whiteElephant.readTime'),
    },
    {
      title: t('articles.bestApps.title'),
      description: t('articles.bestApps.description'),
      href: `/${locale}/blog/best-secret-santa-generator-apps`,
      category: t('articles.bestApps.category'),
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500",
      readTime: t('articles.bestApps.readTime'),
    },
  ];

  const categories = [
    { name: t('categories.all'), count: 18, color: "bg-purple-100 text-purple-700" },
    { name: t('categories.giftIdeas'), count: 10, color: "bg-pink-100 text-pink-700" },
    { name: t('categories.organizationGuides'), count: 4, color: "bg-blue-100 text-blue-700" },
    { name: t('categories.toolsTemplates'), count: 3, color: "bg-green-100 text-green-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            {t('header')}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('guidesResources')}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
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
            <div className="text-gray-600">{t('stats.guides')}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
            <div className="text-gray-600">{t('stats.gifts')}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">{t('stats.resources')}</div>
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
                      <span className="text-sm">{t('readMore')}</span>
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
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-purple-50 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {t('newsletter.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('newsletter.description')}
          </p>
          <div className="flex gap-4 justify-center text-sm text-gray-500">
            <span>📝 {t('newsletter.items.diy')}</span>
            <span>•</span>
            <span>🎄 {t('newsletter.items.christmas')}</span>
            <span>•</span>
            <span>✉️ {t('newsletter.items.email')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
