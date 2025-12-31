import Link from 'next/link';
import { ArrowRight, BookOpen, Video, Award, Gift, Users, UserCircle, Laugh, Briefcase, HelpCircle, Heart } from 'lucide-react';

export function RelatedArticles() {
  const articles = [
    {
      title: "How Does Secret Santa Work? Complete Beginner's Guide",
      description: "Learn everything about Secret Santa - from basic rules to expert tips. Perfect for first-timers and experienced organizers!",
      href: "/blog/how-does-secret-santa-work",
      tag: "Complete Guide",
      icon: HelpCircle,
      readTime: "15 min read",
    },
    {
      title: "Secret Santa Gifts for Women: 45+ Thoughtful Ideas She'll Love",
      description: "Perfect gift ideas for women from beauty & self-care to accessories. Organized by budget and personality type!",
      href: "/blog/secret-santa-gifts-for-women",
      tag: "Gift Ideas",
      icon: Heart,
      readTime: "14 min read",
    },
    {
      title: "Secret Santa Gifts for Coworkers: 45+ Professional & Fun Ideas",
      description: "Office-appropriate gift ideas that balance professionalism with personality. Perfect for workplace exchanges!",
      href: "/blog/secret-santa-gifts-for-coworkers",
      tag: "Office Gifts",
      icon: Briefcase,
      readTime: "13 min read",
    },
    {
      title: "Secret Santa Gifts for Men: 40+ Ideas Guys Actually Want",
      description: "Comprehensive gift guide for men with tech, accessories, and practical items guys will genuinely love. Organized by budget!",
      href: "/blog/secret-santa-gifts-for-men",
      tag: "Gift Ideas",
      icon: UserCircle,
      readTime: "12 min read",
    },
  ];

  return (
    <section className="mt-20 mb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Helpful Guides & Resources
        </h2>
        <p className="text-gray-600 text-lg">
          Learn everything about organizing Secret Santa gift exchanges
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {articles.map((article, index) => {
          const Icon = article.icon;
          return (
            <Link
              key={index}
              href={article.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-violet-200"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.tag}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex items-center text-violet-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA Banner */}
      <div className="mt-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-8 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="w-6 h-6" />
          <h3 className="text-2xl font-bold">More Guides Coming Soon!</h3>
        </div>
        <p className="text-white/90 text-lg mb-6">
          We're creating more helpful guides about Secret Santa. Subscribe to stay updated!
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-violet-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get Notified
        </Link>
      </div>
    </section>
  );
}
