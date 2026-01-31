"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollBasedAnimation from "./ScrollBasedAnimation";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ServicesHeroSection() {
  const heroRef = useRef(null);
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const isRTL = i18n.language === 'ar';

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] w-full">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
          alt="Professional accounting services"
          fill
          className="object-cover opacity-70"
          priority
        />
      </motion.div>

      {/* Minimal Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className={`relative z-10 flex flex-col justify-center h-full pt-24 ${
          isRTL ? 'lg:pr-12 lg:pl-6' : 'lg:pl-12 lg:pr-6'
        }`}
      >
        <div className="max-w-7xl px-6">
          <div className={`max-w-3xl space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Headline */}
            <ScrollBasedAnimation delay={0.1} duration={0.6} direction="up" offset={30}>
              <h1 className="font-bold leading-tight text-white">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {t('services.section.title')}
                </span>
              </h1>
            </ScrollBasedAnimation>

            {/* Description */}
            <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up" offset={20}>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl">
                {t('services.section.description')}
              </p>
            </ScrollBasedAnimation>

            {/* CTA Button */}
            <ScrollBasedAnimation delay={0.3} duration={0.6} direction="up" offset={20}>
              <div className={`flex gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <a
                  href="#services"
                  className="bg-[#00B7FF] text-white px-8 py-3 font-semibold hover:bg-[#0099CC] transition-colors duration-300"
                >
                  {isRTL ? 'اكتشف خدماتنا' : 'Explore Services'}
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </div>
            </ScrollBasedAnimation>
          </div>
        </div>
      </motion.div>
    </section>
  );
}