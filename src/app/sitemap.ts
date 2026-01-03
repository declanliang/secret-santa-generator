import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://secret-santa-generator.net';
  const currentDate = new Date();

  // Static pages that should be in both languages
  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  // Blog posts (English only for now)
  const blogPosts = [
    { path: '/blog/how-to-organize-secret-santa', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog/best-secret-santa-generator-apps', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog/secret-santa-gifts-under-20', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/white-elephant-vs-secret-santa', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/secret-santa-gifts-for-men', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/funny-secret-santa-gifts', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/secret-santa-gifts-for-coworkers', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/how-does-secret-santa-work', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/secret-santa-gifts-for-women', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/secret-santa-gifts-under-10', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/virtual-secret-santa', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/blog/secret-santa-questionnaire', priority: 0.95, changeFrequency: 'monthly' as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add root URL redirect
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // Add static pages for each locale
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    });

    // Add blog posts (only for English for now, as per your requirement)
    if (locale === 'en') {
      blogPosts.forEach((post) => {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}${post.path}`,
          lastModified: currentDate,
          changeFrequency: post.changeFrequency,
          priority: post.priority,
        });
      });
    }
  });

  return sitemapEntries;
}
