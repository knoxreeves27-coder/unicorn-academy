import React from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/LanguageProvider';
import { Button, Card } from '../../components';

export const ComingSoon: React.FC = () => {
  const { t } = useI18n();
  const location = useLocation();

  // Determine current page section name
  const pathKey = location.pathname.replace(/^\//, '').replace(/\/.*$/, '') || 'page';
  const sectionTitle = t(`nav.${pathKey}`) !== `nav.${pathKey}` ? t(`nav.${pathKey}`) : location.pathname;

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      <Card className="max-w-xl mx-auto p-8 sm:p-12 flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-accent flex items-center justify-center">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>

        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-secondary border border-indigo-200">
          {t('coming_soon.status_badge')}
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
            {sectionTitle}: {t('coming_soon.title')}
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed">
            {t('coming_soon.subtitle')}
          </p>
        </div>

        <div className="pt-2">
          <Button to="/" variant="primary">
            {t('actions.back_to_home')}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ComingSoon;
