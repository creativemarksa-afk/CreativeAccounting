"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollBasedAnimation from "./ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function ContactHeroSection() {
  const heroRef = useRef(null);
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const isRTL = i18n.language === 'ar';

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 h-[120%] w-full">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern office building"
          className="h-full w-full object-cover opacity-70"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/80 to-[#0099CC]/60" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className={`relative z-10 flex flex-col justify-center h-full pt-24 ${
          isRTL ? 'lg:pr-12 lg:pl-6' : 'lg:pl-12 lg:pr-6'
        }`}
      >
        <div className="max-w-7xl px-6">
          <div className={`max-w-4xl space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Headline */}
            <ScrollBasedAnimation delay={0.1} duration={0.6} direction="up" offset={30}>
              <h1 className="font-bold leading-tight text-white">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {t('contact.hero.title')}
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-100 mt-2">
                  {t('contact.hero.subtitle')}
                </span>
              </h1>
            </ScrollBasedAnimation>

            {/* Description */}
            <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up" offset={20}>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl">
                {t('contact.hero.description')}
              </p>
            </ScrollBasedAnimation>

            {/* CTA Button */}
            <ScrollBasedAnimation delay={0.3} duration={0.6} direction="up" offset={20}>
              <div className={`mt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <a
                  href="#contact-form"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#00B7FF] font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  {t('contact.hero.cta')}
                </a>
              </div>
            </ScrollBasedAnimation>
          </div>
        </div>
      </motion.div>
    </section>
  );
}