'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en/common.json';
import ar from '../public/locales/ar/common.json';

export const locales = ['en', 'ar'];

// Get browser language or default to Arabic
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    return locales.includes(browserLang) ? browserLang : 'ar';
  }
  return 'ar'; // Server-side default
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });
}

export default i18n;