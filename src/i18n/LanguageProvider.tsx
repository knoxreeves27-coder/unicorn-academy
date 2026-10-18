import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import enTranslations from './en.json';
import urTranslations from './ur.json';
import { Language, Direction } from '../types';

interface I18nContextType {
  lang: Language;
  dir: Direction;
  setLang: (lang: Language) => void;
  t: (keyPath: string) => string;
}

const STORAGE_KEY = 'unicorn_academy_lang';

const translations: Record<Language, any> = {
  en: enTranslations,
  ur: urTranslations,
};

const I18nContext = createContext<I18nContextType | null>(null);

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ur' || saved === 'en') {
      return saved;
    }
  } catch {
    // localStorage might be unavailable or disabled
  }
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const dir: Direction = lang === 'ur' ? 'rtl' : 'ltr';

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Safe fallback if localStorage fails
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = useCallback(
    (keyPath: string): string => {
      const keys = keyPath.split('.');
      let currentVal = translations[lang];

      for (const key of keys) {
        if (currentVal && typeof currentVal === 'object' && key in currentVal) {
          currentVal = currentVal[key];
        } else {
          // Fallback to English dictionary
          let fallbackVal = translations['en'];
          for (const fallbackKey of keys) {
            if (fallbackVal && typeof fallbackVal === 'object' && fallbackKey in fallbackVal) {
              fallbackVal = fallbackVal[fallbackKey];
            } else {
              return keyPath;
            }
          }
          return typeof fallbackVal === 'string' ? fallbackVal : keyPath;
        }
      }

      return typeof currentVal === 'string' ? currentVal : keyPath;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, dir, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within a LanguageProvider');
  }
  return context;
}
