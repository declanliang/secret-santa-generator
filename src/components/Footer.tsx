'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Extract locale from pathname
  const locale = pathname.split('/')[1] || 'en';

  const handleManageCookies = () => {
    // Clear cookie consent to show banner again
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('title')}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="hover:text-white transition-colors">
                  {t('faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('legal')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
                  {t('terms')}
                </Link>
              </li>
              <li>
                <button
                  onClick={handleManageCookies}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('cookieSettings')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('contactUs')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={`mailto:${t('email')}`} className="hover:text-white transition-colors">
                  {t('email')}
                </a>
              </li>
              <li>
                <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {t('phone')}
                </a>
              </li>
              <li className="pt-2">
                {t('address')}<br />
                {t('addressLine2')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Language Switcher */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t('copyright', { year: currentYear })}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-400">
                {t('madeWith')}
              </p>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
