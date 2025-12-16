'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-2xl">🎅</span>
            <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Secret Santa
            </span>
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
