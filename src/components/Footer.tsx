import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/LanguageProvider';
import { getSiteSettings } from '../services';
import { SiteSettings } from '../types';

export const Footer: React.FC = () => {
  const { lang, t } = useI18n();
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    let isMounted = true;
    getSiteSettings().then((data) => {
      if (isMounted) setSettings(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const currentYear = 2026;

  const quickLinks = [
    { to: '/', labelKey: 'nav.home' },
    { to: '/about', labelKey: 'nav.about' },
    { to: '/courses', labelKey: 'nav.courses' },
    { to: '/admission', labelKey: 'nav.admission' },
    { to: '/contact', labelKey: 'nav.contact' },
    { to: '/portal/login', labelKey: 'nav.portal_login' },
  ];

  const address =
    lang === 'ur'
      ? settings?.address_ur || 'صادق آباد، پنجاب، پاکستان'
      : settings?.address_en || 'Sadiqabad, Punjab, Pakistan';

  const phone = settings?.phone || '0300-0000000';
  const whatsapp = settings?.whatsapp || '923000000000';

  return (
    <footer className="bg-primary-dark text-slate-200 pt-14 pb-10 border-t border-indigo-950">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-indigo-900/60 text-start">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent text-slate-900 flex items-center justify-center font-bold text-sm shadow-md shrink-0">
                {t('brand.short_name')}
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {t('brand.name')}
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {t('brand.description')}
            </p>
            <div className="text-xs text-amber-400 font-medium pt-1">
              {t('footer.founded_tag')}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.quick_links')}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-amber-400 transition-colors inline-block py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details from Site Settings */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.contact_info')}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  className="w-5 h-5 text-amber-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${phone}`}
                  className="hover:text-amber-400 transition-colors"
                  dir="ltr"
                >
                  {phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  className="w-5 h-5 text-emerald-400 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.74 1.542 2.709.308.274.568.361.748.448.181.087.289.072.396-.051.107-.123.462-.534.585-.717.123-.183.245-.153.411-.092.166.061 1.055.498 1.236.588.181.09.303.135.347.21.044.075.044.436-.1 1.041z" />
                </svg>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                  dir="ltr"
                >
                  +{whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {currentYear} {t('brand.name')}. {t('footer.all_rights_reserved')}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-200 transition-colors">
              {t('nav.about')}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/admission" className="hover:text-slate-200 transition-colors">
              {t('nav.admission')}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
