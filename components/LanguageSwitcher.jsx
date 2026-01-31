'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import '@/lib/i18n';

export default function LanguageSwitcher({ isMobile = false }) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  // Load saved language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setIsOpen(false);
    
    // Update document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Force page reload to ensure proper RTL layout
    window.location.reload();
  };

  const languages = [
    { code: 'en', name: t('language.switcher.english'), flag: '🇺🇸' },
    { code: 'ar', name: t('language.switcher.arabic'), flag: '🇸🇦' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const buttonClass = isMobile
    ? "flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-[#00b7ff]/10 transition-colors duration-300 w-full text-left"
    : "flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
      >
        <Globe className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-sm text-gray-800 font-medium">{currentLang.flag} {currentLang.name}</span>
        {!isMobile && (
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {isOpen && !isMobile && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute top-full mt-2 w-48 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl z-20 overflow-hidden ${isRTL ? 'left-0' : 'right-0'}`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center gap-3 w-full px-4 py-3 hover:bg-[#00b7ff]/10 transition-colors duration-200 ${
                  i18n.language === lang.code ? 'bg-[#00b7ff]/20 text-gray-700' : 'text-gray-700'
                } ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {i18n.language === lang.code && (
                  <span className="ml-auto text-[#00b7ff]">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}