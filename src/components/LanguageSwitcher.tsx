'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] as Locale;

  const switchLanguage = (newLocale: Locale) => {
    // Replace the locale in the pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-gray-600" />
        <select
          value={currentLocale}
          onChange={(e) => switchLanguage(e.target.value as Locale)}
          className="bg-transparent border border-gray-300 rounded-md px-3 py-1 text-sm cursor-pointer hover:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {localeFlags[locale]} {localeNames[locale]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
