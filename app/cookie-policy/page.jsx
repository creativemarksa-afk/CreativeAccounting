"use client";

import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "@/components/ScrollBasedAnimation";

export default function CookiePolicy() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const sections = t('cookiePolicy.sections', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section with 3D Layers */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Geometric Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00B7FF] to-[#0099CC]"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
          <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-[#0099CC] to-[#007BA7] opacity-60"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0 97%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center transform perspective-1000">
            <ScrollBasedAnimation direction="up" delay={0}>
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/10 transform -skew-y-3"></div>
                  <h1 className="relative text-4xl lg:text-6xl font-bold text-white tracking-tight">
                    {t('cookiePolicy.title')}
                  </h1>
                </div>
              </div>
            </ScrollBasedAnimation>

            <ScrollBasedAnimation direction="up" delay={0.1}>
              <div className="relative inline-block max-w-3xl">
                <div className="absolute -inset-3 bg-white/5 transform skew-y-1"></div>
                <p className="relative text-xl lg:text-2xl text-blue-50 px-6 py-4">
                  {isRTL ? 'سياسة ملفات تعريف الارتباط الخاصة بشركة المحاسبة الإبداعية - تعرف على كيفية استخدامنا لملفات تعريف الارتباط.' : 'Creative Accounting Cookie Policy - Learn how we use cookies on our website.'}
                </p>
              </div>
            </ScrollBasedAnimation>
          </div>
        </div>

        {/* Decorative 3D Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0099CC] opacity-20 transform rotate-45 translate-x-32 translate-y-32"></div>
        <div className="absolute top-20 left-0 w-48 h-48 bg-[#00B7FF] opacity-15 transform -rotate-12 -translate-x-24"></div>
      </section>

      {/* Content Section with 3D Cards */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* 3D Container */}
          <div className="relative">
            {/* Background Layers for Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 transform translate-y-4 translate-x-4"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white transform translate-y-2 translate-x-2"></div>

            {/* Main Content */}
            <div className="relative bg-white">
              <div className="p-12 lg:p-16">
                {/* Header Bar */}
                <div className="relative mb-16">
                  <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-[#00B7FF] to-[#0099CC]"></div>
                  <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-[#00B7FF] to-[#0099CC]"></div>
                </div>

                {/* Sections Grid */}
                <div className="space-y-12">
                  {sections.map((section, index) => (
                    <div key={index} className="relative group">
                      {/* 3D Card Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/5 to-[#0099CC]/5 transform translate-y-2 translate-x-2 transition-transform group-hover:translate-y-3 group-hover:translate-x-3"></div>

                      <div className="relative bg-white border-l-4 border-[#00B7FF] p-8 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                        {/* Number Badge */}
                        <div className="absolute -top-4 -left-6 w-12 h-12 bg-gradient-to-br from-[#00B7FF] to-[#0099CC] flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{index + 1}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-2">
                          {section.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed text-lg">
                          {section.content}
                        </p>

                        {/* Corner Accent */}
                        <div className="absolute bottom-0 right-0 w-16 h-16">
                          <div className="absolute bottom-0 right-0 w-12 h-1 bg-[#0099CC]/30"></div>
                          <div className="absolute bottom-0 right-0 w-1 h-12 bg-[#0099CC]/30"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Section */}
                <div className="mt-16 pt-8 border-t-2 border-gray-100">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00B7FF]/10 to-[#0099CC]/10 transform skew-x-12"></div>
                    <p className="relative text-sm text-gray-600 px-6 py-3 font-medium">
                      {isRTL ? 'آخر تحديث: نوفمبر 2025' : 'Last updated: November 2025'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Geometric Decorations */}
        <div className="absolute top-20 right-12 w-24 h-24 bg-[#00B7FF]/10 transform rotate-45"></div>
        <div className="absolute bottom-20 left-12 w-32 h-32 border-4 border-[#0099CC]/20 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-24 w-16 h-16 bg-gradient-to-br from-[#00B7FF]/20 to-transparent transform rotate-12"></div>
      </section>

      {/* Bottom Geometric Footer */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B7FF] to-[#0099CC]"
             style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0099CC] to-[#007BA7] opacity-40"
             style={{ clipPath: 'polygon(0 60%, 100% 10%, 100% 100%, 0 100%)' }}></div>
      </div>
    </div>
  );
}