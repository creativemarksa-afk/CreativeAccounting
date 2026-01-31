"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollBasedAnimation from "./ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function AboutHeroSection() {
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
      {/* Background Video */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 h-[120%] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="https://www.pexels.com/download/video/7947407/" type="video/mp4" />
        </video>
      </motion.div>

      {/* Minimal Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30" />

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
                  {t('about.section.title')}
                </span>
              </h1>
            </ScrollBasedAnimation>

            {/* Vision Paragraph */}
            <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up" offset={20}>
              <p className="text-white/80 text-base sm:text-lg md:text-xl">
                {t('about.section.description')}
              </p>
            </ScrollBasedAnimation>
          </div>
        </div>
      </motion.div>
    </section>
  );
}