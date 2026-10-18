import React, { useEffect, useState } from 'react';
import { useI18n } from '../i18n/LanguageProvider';
import { getSiteSettings } from '../services';

export const WhatsAppButton: React.FC = () => {
  const { t } = useI18n();
  const [whatsappNumber, setWhatsappNumber] = useState('923000000000');

  useEffect(() => {
    let isMounted = true;
    getSiteSettings().then((data) => {
      if (isMounted && data.whatsapp) {
        setWhatsappNumber(data.whatsapp);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Unicorn Academy Sadiqabad, I would like to inquire about admissions.'
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsapp.button_label')}
        title={t('whatsapp.button_label')}
        className="fixed bottom-6 end-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.74 1.542 2.709.308.274.568.361.748.448.181.087.289.072.396-.051.107-.123.462-.534.585-.717.123-.183.245-.153.411-.092.166.061 1.055.498 1.236.588.181.09.303.135.347.21.044.075.044.436-.1 1.041z" />
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.65a.75.75 0 00.923.923l4.587-1.383A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-8.5 10c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.46 8.46 0 01-4.303-1.168.75.75 0 00-.594-.083l-3.322 1.002 1.006-3.336a.75.75 0 00-.083-.598A8.463 8.463 0 013.5 12z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </aside>
  );
};
