import React, { useEffect, useState } from 'react';
import { useI18n } from '../../i18n/LanguageProvider';
import { usePageMeta } from '../../hooks/usePageMeta';
import { getSiteSettings } from '../../services';
import { SiteSettings } from '../../types';
import { Button, Card, Skeleton } from '../../components';

export const About: React.FC = () => {
  const { lang, t } = useI18n();

  // Dynamic SEO metadata
  const seoTitle =
    lang === 'ur' ? t('seo.about_title_ur') : t('seo.about_title');
  const seoDesc =
    lang === 'ur' ? t('seo.about_desc_ur') : t('seo.about_desc');
  usePageMeta(seoTitle, seoDesc);

  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchSettings = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const data = await getSiteSettings();
      setSettings(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const history =
    lang === 'ur' ? settings?.about_history_ur : settings?.about_history_en;
  const mission =
    lang === 'ur' ? settings?.about_mission_ur : settings?.about_mission_en;
  const vision =
    lang === 'ur' ? settings?.about_vision_ur : settings?.about_vision_en;

  const coreValues = [
    {
      title: t('about_page.value_1_title'),
      desc: t('about_page.value_1_desc'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      title: t('about_page.value_2_title'),
      desc: t('about_page.value_2_desc'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('about_page.value_3_title'),
      desc: t('about_page.value_3_desc'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
  ];

  if (hasError) {
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
          <Button variant="primary" onClick={fetchSettings}>
            {t('common.retry')}
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Header Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-secondary border border-indigo-200">
            {t('brand.short_name')} · Sadiqabad
          </div>
          <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-primary font-heading tracking-tight leading-tight">
            {t('about_page.title')}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[70ch]">
            {t('about_page.intro')}
          </p>
        </div>
      </section>

      {/* 2. Visual Campus Placeholder Block */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="w-full aspect-[16/7] min-h-[220px] rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-900 to-indigo-900 border border-indigo-200/50 shadow-md flex flex-col items-center justify-center p-6 text-center text-white relative"
          role="img"
          aria-label={t('about_page.image_alt')}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 text-amber-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.333A2.25 2.25 0 0018.25 8.25H5.75A2.25 2.25 0 003.5 10.333V21" />
            </svg>
          </div>
          <span className="font-heading font-bold text-lg text-white">
            Unicorn Academy Campus
          </span>
          <p className="text-xs text-indigo-200 mt-1 max-w-sm">
            {t('about_page.image_alt')}
          </p>
        </div>
      </section>

      {/* 3. Three Pillars: History, Mission, Vision */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* History */}
          <Card className="p-7 flex flex-col gap-4 border border-slate-200/90">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-primary flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              {t('about_page.history_title')}
            </h2>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton variant="text" className="h-4 w-full" />
                <Skeleton variant="text" className="h-4 w-5/6" />
                <Skeleton variant="text" className="h-4 w-4/6" />
              </div>
            ) : (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[70ch]">
                {history}
              </p>
            )}
          </Card>

          {/* Mission */}
          <Card className="p-7 flex flex-col gap-4 border border-slate-200/90">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-secondary flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              {t('about_page.mission_title')}
            </h2>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton variant="text" className="h-4 w-full" />
                <Skeleton variant="text" className="h-4 w-5/6" />
                <Skeleton variant="text" className="h-4 w-4/6" />
              </div>
            ) : (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[70ch]">
                {mission}
              </p>
            )}
          </Card>

          {/* Vision */}
          <Card className="p-7 flex flex-col gap-4 border border-slate-200/90">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              {t('about_page.vision_title')}
            </h2>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton variant="text" className="h-4 w-full" />
                <Skeleton variant="text" className="h-4 w-5/6" />
                <Skeleton variant="text" className="h-4 w-4/6" />
              </div>
            ) : (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[70ch]">
                {vision}
              </p>
            )}
          </Card>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
              {t('about_page.values_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <Card key={idx} className="p-6 bg-white flex flex-col gap-3 border border-slate-200/80">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Admission Call to Action */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 flex flex-col items-center gap-6 bg-gradient-to-br from-indigo-900/5 via-white to-amber-500/5 border border-indigo-100 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
            {t('about_page.cta_heading')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            {t('about_page.cta_subheading')}
          </p>
          <div className="pt-2">
            <Button to="/admission" variant="accent" className="font-bold text-base px-8 py-3">
              {t('about_page.apply_now')}
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default About;
