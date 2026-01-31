"use client";

import { useTranslation } from "react-i18next";
import SmoothMotion from "../ScrollBasedAnimation";
import Image from "next/image";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const aboutSections = t('about.sections', { returnObjects: true });
  const images = [
    "https://res.cloudinary.com/dl9d4khcs/image/upload/v1763300723/about1_lt49ya.png",
    "https://res.cloudinary.com/dl9d4khcs/image/upload/v1763300723/about2_xu8bs9.png",
    "https://res.cloudinary.com/dl9d4khcs/image/upload/v1763300723/about3_vgu6wv.png"
  ];
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isRTL ? 'text-right' : 'text-left'}`}>
          <SmoothMotion direction="up" delay={0}>
            <div className={`inline-flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-px w-12 bg-[#00B7FF]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00B7FF]">
                {t('about.section.badge')}
              </span>
              <div className="h-px w-12 bg-[#00B7FF]" />
            </div>
          </SmoothMotion>

          <SmoothMotion direction="up" delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('about.section.title')}
            </h2>
          </SmoothMotion>

          <SmoothMotion direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.section.description')}
            </p>
          </SmoothMotion>
        </div>

        {/* Alternating Content Sections */}
        <div className="space-y-24">
          {Array.isArray(aboutSections) && aboutSections.map((section, index) => (
            <SmoothMotion
              key={index}
              direction={index % 2 === 0 ? (isRTL ? "right" : "left") : (isRTL ? "left" : "right")}
              delay={0.2}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-lg font-semibold text-[#00B7FF] mb-4">
                        {section.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {section.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        {isRTL ? 'النقاط الرئيسية:' : 'Key Highlights:'}
                      </h4>
                      <ul className="space-y-2">
                        {section.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className="text-[#00B7FF] mt-1">✓</div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative h-60 md:h-90 w-full overflow-hidden">
                    <Image
                      src={images[index]}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute -bottom-0 ${isRTL ? '-left-0' : '-right-0'} bg-[#00B7FF] text-white p-4 font-bold text-sm `}>
                      {section.highlight}
                    </div>
                  </div>
                </div>
              </div>
            </SmoothMotion>
          ))}
        </div>
      </div>
    </section>
  );
}