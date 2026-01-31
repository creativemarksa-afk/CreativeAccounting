"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer.sections.services'), href: "/services" },
    { name: t('footer.sections.about'), href: "/about" },
    { name: t('footer.sections.contact'), href: "/contact" },
    { name: t('footer.sections.blog'), href: "/blog" },
  ];

  const legalLinks = t('footer.legal', { returnObjects: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-gray-700 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Top Accent Bar */}
      <div className="relative h-2">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B7FF] to-[#0099CC]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0099CC] to-[#007BA7] opacity-40 transform translate-y-0.5"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#00B7FF]/5 transform rotate-45 translate-x-32"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-[#0099CC]/5 transform -rotate-12 -translate-x-24"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-16 lg:gap-24">
          {/* Logo and Tagline */}
          <div className="md:col-span-1 relative">
            <div className="relative inline-block">
              <div className="absolute -inset-3 bg-[#00B7FF]/5 transform -skew-x-6"></div>
              <div className="relative mb-4 h-16 w-16">
                <Image
                  src="/CaLogo.png"
                  alt={t('footer.company.logoAlt')}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#00B7FF] to-transparent"></div>
              <h3 className={`mb-3 text-xl font-bold text-gray-900 ${isRTL ? 'text-right pr-4' : 'text-left pl-4'}`}>
                {t('footer.company.name')}
              </h3>
              <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'text-right pr-4' : 'text-left pl-4'}`}>
                {t('footer.company.tagline')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 relative">
            <div className="relative mb-6">
              <div className={`absolute top-0 w-16 h-1 bg-[#00b7ff] ${isRTL ? 'right-0' : 'left-0'}`}></div>
              <h4 className={`mt-4 text-lg font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('footer.sections.quickLinks')}
              </h4>
            </div>
            <ul className={`space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
              {quickLinks.map((link, index) => (
                <li key={link.name} className="relative group">
                  <div className={`absolute inset-y-0 w-0 bg-[#00B7FF]/5 transition-all duration-300 group-hover:w-full ${isRTL ? 'right-0' : 'left-0'}`}></div>
                  <a
                    href={link.href}
                    className={`relative block py-1 text-sm font-medium text-gray-600 hover:text-[#00b7ff] transition-colors ${isRTL ? 'pr-3' : 'pl-3'}`}
                  >
                    {link.name}
                  </a>
                  <div className={`absolute top-0 h-full w-1 bg-[#00b7ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isRTL ? 'right-0' : 'left-0'}`}></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 relative">
            <div className="relative mb-6">
              <div className={`absolute top-0 w-16 h-1 bg-[#00b7ff] ${isRTL ? 'right-0' : 'left-0'}`}></div>
              <h4 className={`mt-4 text-lg font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('footer.sections.contact')}
              </h4>
            </div>
            <div className={`space-y-3 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="relative group">
                <div className={`absolute inset-0 bg-[#00B7FF]/0 transform skew-x-6 transition-all duration-300 group-hover:bg-[#00B7FF]/5 ${isRTL ? '-skew-x-6' : 'skew-x-6'}`}></div>
                <p className="relative py-2 px-3">
                  <span className="font-semibold text-gray-700">{t('footer.contactInfo.emailLabel')}</span>
                  <br />
                  <a href="mailto:info@creativeeaccounting.com" className="text-gray-600 hover:text-[#00b7ff] transition-colors">
                    info@creativeeaccounting.com
                  </a>
                </p>
              </div>
              <div className="relative group">
                <div className={`absolute inset-0 bg-[#00B7FF]/0 transform skew-x-6 transition-all duration-300 group-hover:bg-[#00B7FF]/5 ${isRTL ? '-skew-x-6' : 'skew-x-6'}`}></div>
                <p className="relative py-2 px-3">
                  <span className="font-semibold text-gray-700">{t('footer.contactInfo.phoneLabel')}</span>
                  <br />
                  <a href="tel:+966506397402" className="text-gray-600 hover:text-[#00b7ff] transition-colors">
                    +966 506397402
                  </a>
                </p>
              </div>
              <div className="relative group">
                <div className={`absolute inset-0 bg-[#00B7FF]/0 transform skew-x-6 transition-all duration-300 group-hover:bg-[#00B7FF]/5 ${isRTL ? '-skew-x-6' : 'skew-x-6'}`}></div>
                <p className="relative py-2 px-3">
                  <span className="font-semibold text-gray-700">{t('footer.contactInfo.locationLabel')}</span>
                  <br />
                  <span className="text-gray-600">Riafh Ibn Rafi Street, Al Olaya, Riyadh, Saudi Arabia</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator with 3D Effect */}
        <div className="relative my-12">
          <div className="absolute inset-0 border-t border-gray-200 transform translate-y-1"></div>
          <div className="relative border-t-2 border-gray-100"></div>
        </div>

        {/* Bottom Bar */}
        <div className={`flex flex-col items-center justify-between gap-6 md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          {/* Copyright */}
          <div className="relative">
            <div className={`absolute -inset-2 bg-[#00B7FF]/0 transform ${isRTL ? 'skew-x-3' : '-skew-x-3'}`}></div>
            <p className={`relative text-xs font-medium text-gray-600 ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
              © {currentYear} {t('footer.company.name')}. {t('footer.copyright')}
            </p>
          </div>

          <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Legal Links */}
            <div className={`flex gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {Array.isArray(legalLinks) && legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group text-xs font-medium text-gray-600 hover:text-[#00b7ff] transition-colors"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#00b7ff] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="relative group"
            >
              <div className="absolute -inset-3 bg-[#00B7FF]/5 transform skew-x-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className={`relative flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00b7ff] hover:text-gray-900 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-current transform rotate-45"></div>
                  <svg
                    className="relative h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
                <span>{t('footer.backToTop')}</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00B7FF]/20 to-transparent"></div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-px bg-[#00B7FF]/30"></div>
      <div className="absolute top-0 left-0 w-px h-32 bg-[#00B7FF]/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-px bg-[#0099CC]/30"></div>
      <div className="absolute bottom-0 right-0 w-px h-32 bg-[#0099CC]/30"></div>
    </footer>
  );
}