import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/LanguageProvider';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', labelKey: 'nav.home' },
    { to: '/about', labelKey: 'nav.about' },
    { to: '/courses', labelKey: 'nav.courses' },
    { to: '/teachers', labelKey: 'nav.teachers' },
    { to: '/results', labelKey: 'nav.results' },
    { to: '/gallery', labelKey: 'nav.gallery' },
    { to: '/admission', labelKey: 'nav.admission' },
    { to: '/contact', labelKey: 'nav.contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Title */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg p-1"
          >
            {/* Gold circle logo placeholder */}
            <div className="w-11 h-11 rounded-full bg-accent text-slate-900 flex items-center justify-center font-bold text-base shadow-sm ring-2 ring-amber-300/40 group-hover:scale-105 transition-transform duration-200 shrink-0">
              {t('brand.short_name')}
            </div>
            <div className="flex flex-col text-start">
              <span className="font-heading font-bold text-base sm:text-lg text-primary tracking-tight group-hover:text-primary-dark transition-colors line-clamp-1">
                {t('brand.name')}
              </span>
              <span className="text-[11px] sm:text-xs text-muted font-medium line-clamp-1">
                {t('brand.tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Hidden below 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.to);

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                    isActive
                      ? 'text-secondary font-semibold bg-secondary/5'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-100/60'
                  }`}
                >
                  {t(link.labelKey)}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Items: Language Toggle & Portal Login */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Toggle: EN | اردو */}
            <div
              className="inline-flex items-center p-0.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-1.5 rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                  lang === 'en'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <span className="text-slate-300 px-0.5 select-none" aria-hidden="true">
                |
              </span>
              <button
                type="button"
                onClick={() => setLang('ur')}
                aria-pressed={lang === 'ur'}
                className={`px-2.5 py-1.5 rounded-md transition-all font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                  lang === 'ur'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                اردو
              </button>
            </div>

            {/* Portal Login Button */}
            <div className="hidden sm:block">
              <Button
                to="/portal/login"
                variant="primary"
                className="text-xs sm:text-sm py-2 px-3.5 whitespace-nowrap"
              >
                {t('nav.portal_login')}
              </Button>
            </div>

            {/* Mobile Hamburger Menu Toggle (< 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen ? t('nav.close_menu') : t('nav.open_menu')
              }
              className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-surface px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.to);

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-secondary/10 text-secondary font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-primary'
                  }`}
                >
                  {t(link.labelKey)}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 sm:hidden">
            <Button
              to="/portal/login"
              variant="primary"
              className="w-full justify-center"
              onClick={closeMobileMenu}
            >
              {t('nav.portal_login')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
