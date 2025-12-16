import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { defaultLocale, locales } from '@/i18n/config';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  // Parse Accept-Language header to find best match
  let detectedLocale = defaultLocale;

  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, q = '1'] = lang.trim().split(';q=');
        return { code: code.split('-')[0].toLowerCase(), priority: parseFloat(q) };
      })
      .sort((a, b) => b.priority - a.priority);

    for (const { code } of languages) {
      if (locales.includes(code as any)) {
        detectedLocale = code as any;
        break;
      }
    }
  }

  redirect(`/${detectedLocale}`);
}
