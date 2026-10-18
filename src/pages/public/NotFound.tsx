import React from 'react';
import { useI18n } from '../../i18n/LanguageProvider';
import { Button, Card } from '../../components';

export const NotFound: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <Card className="max-w-md mx-auto p-8 sm:p-10 flex flex-col items-center gap-6">
        <div className="text-6xl font-extrabold text-primary/20 tracking-wider font-heading">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-primary font-heading">
            {t('not_found.title')}
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            {t('not_found.subtitle')}
          </p>
        </div>
        <Button to="/" variant="primary">
          {t('actions.back_to_home')}
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
