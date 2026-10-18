import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/LanguageProvider';
import { usePageMeta } from '../../hooks/usePageMeta';
import { getSiteSettings, getStats, getToppers, getTestimonials } from '../../services';
import { SiteSettings, Stats, Topper, Testimonial } from '../../types';
import { Button, Card, Skeleton, AnimatedCounter } from '../../components';

export const Home: React.FC = () => {
  const { lang, t } = useI18n();

  // SEO & Head Metadata
  const seoTitle =
    lang === 'ur' ? t('seo.home_title_ur') : t('seo.home_title');
  const seoDesc =
    lang === 'ur' ? t('seo.home_desc_ur') : t('seo.home_desc');
  usePageMeta(seoTitle, seoDesc);

  // Data states
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [toppers, setToppers] = useState<Topper[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Loading & error states
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const [settingsData, statsData, toppersData, testimonialsData] = await Promise.all([
        getSiteSettings(),
        getStats(),
        getToppers(),
        getTestimonials(),
      ]);
      setSettings(settingsData);
      setStats(statsData);
      setToppers(toppersData);
      setTestimonials(testimonialsData);
    } catch (err) {
      setLoadError('Failed to load home page data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const phone = settings?.phone || '0300-0000000';
  const whatsapp = settings?.whatsapp || '923000000000';
  const slogan =
    lang === 'ur'
      ? settings?.academy_slogan_ur || t('brand.tagline')
      : settings?.academy_slogan_en || t('brand.tagline');

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    'Hello Unicorn Academy Sadiqabad, I would like to inquire about admissions.'
  )}`;

  // Academic Levels Preview Data
  const academicLevels = [
    {
      title: t('classes_preview.primary_title'),
      classes: t('classes_preview.primary_classes'),
      desc: t('classes_preview.primary_desc'),
      icon: (
        <svg
          className="w-7 h-7 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: t('classes_preview.middle_title'),
      classes: t('classes_preview.middle_classes'),
      desc: t('classes_preview.middle_desc'),
      icon: (
        <svg
          className="w-7 h-7 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: t('classes_preview.matric_title'),
      classes: t('classes_preview.matric_classes'),
      desc: t('classes_preview.matric_desc'),
      icon: (
        <svg
          className="w-7 h-7 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: t('classes_preview.fsc_title'),
      classes: t('classes_preview.fsc_classes'),
      desc: t('classes_preview.fsc_desc'),
      icon: (
        <svg
          className="w-7 h-7 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      ),
    },
  ];

  // Why Unicorn Academy 4 points
  const whyReasons = [
    {
      title: t('why_us.reason_1_title'),
      desc: t('why_us.reason_1_desc'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      title: t('why_us.reason_2_title'),
      desc: t('why_us.reason_2_desc'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
      ),
    },
    {
      title: t('why_us.reason_3_title'),
      desc: t('why_us.reason_3_desc'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('why_us.reason_4_title'),
      desc: t('why_us.reason_4_desc'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  // Error State Display
  if (loadError) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Card className="max-w-md mx-auto p-8 flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 text-error flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900">{t('common.error_title')}</h2>
          <p className="text-sm text-muted">{t('common.error_desc')}</p>
          <Button variant="primary" onClick={fetchData}>
            {t('common.retry')}
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. ADMISSION OPEN BANNER (TOP STRIP, GOLD) */}
      {settings?.admission_open_banner && (
        <aside aria-label="Admissions announcement" className="bg-amber-400 text-slate-950 px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-xs">
          <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0" aria-hidden="true" />
              <span>{t('banner.admission_open_title')}</span>
            </div>
            <Link
              to="/admission"
              className="inline-flex items-center gap-1 font-bold underline hover:text-slate-800 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
            >
              <span>{t('banner.apply_now')}</span>
              <svg
                className="w-4 h-4 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </aside>
      )}

      {/* 2. HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Gold Admission Open Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-amber-100 text-amber-950 border border-amber-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Academy Name & Slogan */}
            <div>
              <span className="text-sm sm:text-base font-semibold text-secondary block mb-1">
                {slogan}
              </span>
              <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-primary font-heading tracking-tight leading-[1.2]">
                {t('brand.name')}
              </h1>
            </div>

            {/* Headline & Short Supporting Line */}
            <p className="text-xl sm:text-2xl font-bold text-slate-800 font-heading leading-snug">
              {t('hero.headline')}
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t('hero.supporting')}
            </p>

            {/* Actions: Primary CTA ("Apply Now"), WhatsApp, and Call link */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <Button to="/admission" variant="accent" className="font-bold text-base px-6">
                {t('hero.apply_now')}
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-semibold border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <svg
                  className="w-4 h-4 me-2 text-emerald-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.74 1.542 2.709.308.274.568.361.748.448.181.087.289.072.396-.051.107-.123.462-.534.585-.717.123-.183.245-.153.411-.092.166.061 1.055.498 1.236.588.181.09.303.135.347.21.044.075.044.436-.1 1.041z" />
                </svg>
                <span>{t('hero.whatsapp')}</span>
              </a>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-primary px-3 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                dir="ltr"
              >
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{t('hero.call')}: {phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Student Image Placeholder Block */}
          <div className="lg:col-span-5 w-full">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 border border-indigo-200/40 shadow-xl flex flex-col items-center justify-center p-8 text-center text-white"
              role="img"
              aria-label={t('hero.student_image_alt')}
            >
              {/* Subtle ambient rings */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent pointer-events-none" />

              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-amber-300 shadow-inner">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>

              <span className="font-heading font-bold text-lg text-white tracking-wide">
                {t('brand.name')}
              </span>
              <p className="text-xs text-indigo-200 mt-1 max-w-xs leading-relaxed">
                {t('hero.student_image_alt')}
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-white/20">
                <span>Prep to FSc Tuition Batches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUMBERS STRIP SECTION */}
      <section className="bg-primary text-white py-10 shadow-sm border-y border-indigo-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Stat 1: Students */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 font-heading">
                {isLoading ? (
                  <Skeleton variant="rectangular" className="h-10 w-24 bg-white/20" />
                ) : (
                  <AnimatedCounter
                    value={stats?.students || 650}
                    suffix="+"
                    lang={lang}
                    duration={1000}
                  />
                )}
              </span>
              <span className="text-xs sm:text-sm text-indigo-100 font-medium mt-1">
                {t('stats.students')}
              </span>
            </div>

            {/* Stat 2: Teachers */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 font-heading">
                {isLoading ? (
                  <Skeleton variant="rectangular" className="h-10 w-20 bg-white/20" />
                ) : (
                  <AnimatedCounter
                    value={stats?.teachers || 28}
                    suffix="+"
                    lang={lang}
                    duration={1000}
                  />
                )}
              </span>
              <span className="text-xs sm:text-sm text-indigo-100 font-medium mt-1">
                {t('stats.teachers')}
              </span>
            </div>

            {/* Stat 3: Years */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 font-heading">
                {isLoading ? (
                  <Skeleton variant="rectangular" className="h-10 w-20 bg-white/20" />
                ) : (
                  <AnimatedCounter
                    value={stats?.years || 9}
                    suffix="+"
                    lang={lang}
                    duration={1000}
                  />
                )}
              </span>
              <span className="text-xs sm:text-sm text-indigo-100 font-medium mt-1">
                {t('stats.years')}
              </span>
            </div>

            {/* Stat 4: Results % */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 font-heading">
                {isLoading ? (
                  <Skeleton variant="rectangular" className="h-10 w-24 bg-white/20" />
                ) : (
                  <AnimatedCounter
                    value={stats?.results_percent || 98}
                    suffix="%"
                    lang={lang}
                    duration={1000}
                  />
                )}
              </span>
              <span className="text-xs sm:text-sm text-indigo-100 font-medium mt-1">
                {t('stats.results_percent')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLASSES PREVIEW SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[24px] lg:text-[32px] font-bold text-primary font-heading">
              {t('classes_preview.heading')}
            </h2>
            <p className="text-sm sm:text-base text-muted mt-1 max-w-2xl leading-relaxed">
              {t('classes_preview.subheading')}
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
          >
            <span>{t('classes_preview.view_courses')}</span>
            <svg
              className="w-4 h-4 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicLevels.map((lvl, idx) => (
            <Link
              key={idx}
              to="/courses"
              className="group block rounded-[12px] bg-surface p-6 shadow-sm border border-slate-200/80 hover:border-secondary hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-50 text-secondary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 shrink-0">
                {lvl.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-primary transition-colors">
                {lvl.title}
              </h3>
              <span className="text-xs font-semibold text-secondary block mt-0.5 mb-2">
                {lvl.classes}
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lvl.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-secondary">
                <span>{t('actions.explore_courses')}</span>
                <svg className="w-3.5 h-3.5 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. WHY UNICORN ACADEMY SECTION */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-[24px] lg:text-[32px] font-bold text-primary font-heading">
              {t('why_us.heading')}
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {t('why_us.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyReasons.map((reason, idx) => (
              <Card key={idx} className="flex flex-col gap-3 p-6 bg-white hover:border-indigo-200">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  {reason.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TOPPERS SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[24px] lg:text-[32px] font-bold text-primary font-heading">
              {t('toppers.heading')}
            </h2>
            <p className="text-sm sm:text-base text-muted mt-1 max-w-2xl leading-relaxed">
              {t('toppers.subheading')}
            </p>
          </div>
          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
          >
            <span>{t('toppers.view_all')}</span>
            <svg
              className="w-4 h-4 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-5 flex flex-col gap-4">
                <Skeleton variant="rectangular" className="w-full aspect-[4/3] rounded-lg" />
                <Skeleton variant="text" className="h-5 w-3/4" />
                <Skeleton variant="text" className="h-4 w-1/2" />
                <Skeleton variant="rectangular" className="h-8 w-full mt-2" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((topper) => {
              const topperName = lang === 'ur' ? topper.name_ur : topper.name_en;
              const classLabel = lang === 'ur' ? topper.class_label_ur : topper.class_label_en;

              return (
                <Card
                  key={topper.id}
                  className="flex flex-col justify-between p-5 border border-slate-200/90 hover:border-amber-300"
                >
                  <div className="space-y-4">
                    {/* Photo placeholder with student insignia */}
                    <div
                      className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center relative overflow-hidden"
                      role="img"
                      aria-label={`${topperName} - ${t('toppers.photo_alt')}`}
                    >
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-amber-300 mb-1 border border-white/20">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <span className="text-[11px] text-indigo-200 font-medium tracking-wide">
                        {topper.year} {t('toppers.session')}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-heading">
                        {topperName}
                      </h3>
                      <p className="text-xs text-muted font-medium mt-0.5">
                        {classLabel}
                      </p>
                    </div>
                  </div>

                  {/* Marks with gold accent */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      {t('toppers.marks_label')}
                    </span>
                    <span className="text-sm font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 font-mono tabular-nums">
                      {topper.marks}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-[24px] lg:text-[32px] font-bold text-primary font-heading">
              {t('testimonials.heading')}
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {t('testimonials.subheading')}
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 flex flex-col gap-4">
                  <Skeleton variant="text" className="h-4 w-full" />
                  <Skeleton variant="text" className="h-4 w-5/6" />
                  <Skeleton variant="rectangular" className="h-10 w-1/2 mt-4" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x">
              {testimonials.map((item) => {
                const role = lang === 'ur' ? item.role_ur : item.role_en;
                const quoteText = lang === 'ur' ? item.text_ur : item.text_en;

                return (
                  <Card
                    key={item.id}
                    className="flex flex-col justify-between p-6 bg-white border border-slate-200/90 snap-start shrink-0 min-w-[280px] md:min-w-0"
                  >
                    <div>
                      {/* Quote mark decoration */}
                      <svg className="w-8 h-8 text-purple-200 mb-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-sm text-slate-700 leading-relaxed italic">
                        "{quoteText}"
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <h4 className="text-sm font-bold text-slate-900 font-heading">
                        {item.name}
                      </h4>
                      <p className="text-xs text-secondary font-medium mt-0.5">
                        {role}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 8. ADMISSION CTA BAND (DARK INDIGO BACKGROUND) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-dark text-white rounded-2xl p-8 sm:p-12 lg:p-14 shadow-xl border border-indigo-900 flex flex-col md:flex-row items-center justify-between gap-8 text-start">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-snug">
              {t('cta.heading')}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t('cta.subheading')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Button
              to="/admission"
              variant="accent"
              className="w-full sm:w-auto font-bold text-base px-6 py-3"
            >
              {t('cta.apply_now')}
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-semibold border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-950/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {t('cta.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
