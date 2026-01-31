"use client";

import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import ScrollBasedAnimation from "@/components/ScrollBasedAnimation";
import Image from "next/image";
import { Building, Lightbulb, Handshake, CheckCircle, Target, DollarSign } from 'lucide-react';

export default function About() {
  const heroRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const aboutSections = t('about.sections', { returnObjects: true }) || [];

  const stats = [
    { value: "10+", label: t('about.stats.experience') },
    { value: "500+", label: t('about.stats.clients') },
    { value: "50+", label: t('about.stats.professionals') },
    { value: "24/7", label: t('about.stats.support') }
  ];

  const whyChooseItems = [
    {
      key: "local",
      title: t('about.whyChoose.items.local.title'),
      description: t('about.whyChoose.items.local.description'),
      icon: Building,
      backContent: t('about.whyChoose.items.local.backContent'),
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
    },
    {
      key: "innovative",
      title: t('about.whyChoose.items.innovative.title'),
      description: t('about.whyChoose.items.innovative.description'),
      icon: Lightbulb,
      backContent: t('about.whyChoose.items.innovative.backContent'),
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    },
    {
      key: "support",
      title: t('about.whyChoose.items.support.title'),
      description: t('about.whyChoose.items.support.description'),
      icon: Handshake,
      backContent: t('about.whyChoose.items.support.backContent'),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
    },
    {
      key: "compliance",
      title: t('about.whyChoose.items.compliance.title'),
      description: t('about.whyChoose.items.compliance.description'),
      icon: CheckCircle,
      backContent: t('about.whyChoose.items.compliance.backContent'),
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80"
    },
    {
      key: "personalized",
      title: t('about.whyChoose.items.personalized.title'),
      description: t('about.whyChoose.items.personalized.description'),
      icon: Target,
      backContent: t('about.whyChoose.items.personalized.backContent'),
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&q=80"
    },
    {
      key: "value",
      title: t('about.whyChoose.items.value.title'),
      description: t('about.whyChoose.items.value.description'),
      icon: DollarSign,
      backContent: t('about.whyChoose.items.value.backContent'),
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80"
    }
  ];

  const sectionImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80"
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] w-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
            alt="Professional accounting team"
            className="h-full w-full object-cover opacity-70"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/80 to-[#0099CC]/60" />

        <motion.div style={{ opacity: contentOpacity }} className="relative z-10 flex flex-col justify-center h-full pt-24">
          <div className="max-w-7xl px-6 mx-auto">
            <div className={`max-w-3xl space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <ScrollBasedAnimation delay={0.1} duration={0.6} direction="up">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-white/10 transform -skew-y-2"></div>
                  <h1 className="relative font-bold leading-tight text-white">
                    <span className="block text-5xl md:text-7xl">
                      {t('about.section.title')}
                    </span>
                    <span className="block text-4xl md:text-6xl text-blue-100 mt-2">
                      {isRTL ? 'من نحن' : 'About Us'}
                    </span>
                  </h1>
                </div>
              </ScrollBasedAnimation>

              <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up">
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                  {t('about.section.description')}
                </p>
              </ScrollBasedAnimation>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-64 h-32 bg-[#0099CC]/20 transform skew-x-12"></div>
        <div className="absolute top-40 right-0 w-48 h-48 border-4 border-white/10 transform rotate-45"></div>
      </section>

      {/* Company Stats Section */}
      <section className="py-16 bg-[#00B7FF] relative overflow-hidden">
        {/* Geometric Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0099CC] to-[#007BA7] opacity-60"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <ScrollBasedAnimation key={index} direction="up" delay={index * 0.1}>
                <div className="relative group">
                  {/* 3D Card Effect */}
                  <div className="absolute inset-0 bg-white/10 transform translate-y-2 translate-x-2 transition-transform group-hover:translate-y-3 group-hover:translate-x-3"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 p-6 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-8 h-8">
                      <div className="absolute bottom-0 right-0 w-6 h-1 bg-white/30"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-6 bg-white/30"></div>
                    </div>
                  </div>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>

        {/* Decorative 3D Elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 transform rotate-45 translate-x-16 translate-y-16"></div>
        <div className="absolute top-8 left-8 w-24 h-24 bg-white/5 transform -rotate-12 -translate-x-12"></div>
      </section>

      {/* Alternating Content Sections */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Floating Geometric Decorations */}
        <div className="absolute top-20 right-12 w-24 h-24 bg-[#00B7FF]/10 transform rotate-45"></div>
        <div className="absolute bottom-20 left-12 w-32 h-32 border-4 border-[#0099CC]/20 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-24 w-16 h-16 bg-gradient-to-br from-[#00B7FF]/20 to-transparent transform rotate-12"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="space-y-24">
            {aboutSections.map((section, index) => (
              <ScrollBasedAnimation
                key={index}
                direction={index % 2 === 0 ? (isRTL ? "right" : "left") : (isRTL ? "left" : "right")}
                delay={0.2}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                    {/* 3D Card Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/5 to-[#0099CC]/5 transform translate-y-4 translate-x-4 transition-transform group-hover:translate-y-6 group-hover:translate-x-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0099CC]/5 to-[#007BA7]/5 transform translate-y-2 translate-x-2 transition-transform group-hover:translate-y-3 group-hover:translate-x-3"></div>

                    <div className="relative bg-white border-l-4 border-[#00B7FF] p-8 transform transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -left-6 w-12 h-12 bg-gradient-to-br from-[#00B7FF] to-[#0099CC] flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>

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
                            {section.features?.map((feature, featureIndex) => (
                              <li key={featureIndex} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <CheckCircle className="text-[#00B7FF] mt-1 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute bottom-0 right-0 w-16 h-16">
                        <div className="absolute bottom-0 right-0 w-12 h-1 bg-[#0099CC]/30"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-12 bg-[#0099CC]/30"></div>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} relative`}>
                    <div className="relative group">
                      {/* 3D Image Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/10 to-[#0099CC]/10 transform translate-y-3 translate-x-3 transition-transform group-hover:translate-y-4 group-hover:translate-x-4"></div>

                      <div className="relative transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                        <Image
                          src={sectionImages[index] || sectionImages[0]}
                          alt={section.title}
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <div className={`absolute -bottom-4 ${isRTL ? '-left-4' : '-right-4'} bg-[#00B7FF] text-white px-4 py-2 font-bold text-sm shadow-lg rounded`}>
                          {section.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        {/* Geometric Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-white opacity-50"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <ScrollBasedAnimation direction="up" delay={0}>
              <div className="relative inline-block">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#00B7FF]/10 to-[#0099CC]/10 transform skew-x-12"></div>
                <h2 className="relative text-3xl lg:text-4xl font-bold text-gray-900 mb-6 px-6 py-3">
                  {t('about.whyChoose.title')}
                </h2>
              </div>
            </ScrollBasedAnimation>
            <ScrollBasedAnimation direction="up" delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.whyChoose.subtitle')}
              </p>
            </ScrollBasedAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollBasedAnimation key={item.key} direction="up" delay={0.2 + index * 0.1}>
                  <div
                    className="group relative h-[320px] cursor-pointer perspective-1000"
                    onMouseEnter={() => setFlippedIndex(index)}
                    onMouseLeave={() => setFlippedIndex(null)}
                  >
                    {/* 3D Card Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/10 to-[#0099CC]/10 transform translate-y-3 translate-x-3 transition-transform group-hover:translate-y-4 group-hover:translate-x-4"></div>

                    <div
                      className={`relative h-full w-full transition-transform duration-700 transform-style-preserve-3d ${
                        flippedIndex === index ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 flex flex-col bg-white rounded-lg shadow-lg backface-hidden transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                        <div className="flex flex-col p-8 flex-grow justify-center items-center text-center">
                          <IconComponent className="text-5xl mb-6 text-[#00B7FF]" />
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full rounded-bl-lg" />
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-[#00b7ff] bg-[#00b7ff] rounded-lg p-8 text-center text-white backface-hidden rotate-y-180">
                        <IconComponent className="text-4xl mb-6" />
                        <h3 className="mb-6 text-2xl font-bold">{item.title}</h3>
                        <p className="text-base leading-relaxed">{item.backContent}</p>
                      </div>
                    </div>
                  </div>
                </ScrollBasedAnimation>
              );
            })}
          </div>
        </div>

        {/* Decorative 3D Elements */}
        <div className="absolute top-16 right-16 w-20 h-20 bg-[#00B7FF]/10 transform rotate-45"></div>
        <div className="absolute bottom-16 left-16 w-28 h-28 border-4 border-[#0099CC]/20 transform -rotate-12"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#00B7FF] to-[#0099CC] relative overflow-hidden">
        {/* Geometric Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0099CC] to-[#007BA7] opacity-40"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
          <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-[#007BA7] to-[#005A8A] opacity-20"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0 97%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <ScrollBasedAnimation direction="up" delay={0}>
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-4 bg-white/10 transform -skew-y-3"></div>
              <h2 className="relative text-3xl lg:text-4xl font-bold text-white mb-6 px-6 py-4">
                {t('about.cta.title')}
              </h2>
            </div>
          </ScrollBasedAnimation>
          <ScrollBasedAnimation direction="up" delay={0.1}>
            <div className="relative inline-block max-w-3xl mb-8">
              <div className="absolute -inset-3 bg-white/5 transform skew-y-1"></div>
              <p className="relative text-xl text-blue-50 px-6 py-4">
                {t('about.cta.description')}
              </p>
            </div>
          </ScrollBasedAnimation>
          <ScrollBasedAnimation direction="up" delay={0.2}>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center bg-white text-[#00B7FF] px-10 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                {t('about.cta.contact')}
              </Link>
              <Link
                href="/services"
                className="relative inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-[#00B7FF] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                {t('about.cta.services')}
              </Link>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* Decorative 3D Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 transform rotate-45 translate-x-32 translate-y-32"></div>
        <div className="absolute top-20 left-0 w-48 h-48 bg-white/5 transform -rotate-12 -translate-x-24"></div>
      </section>
    </div>
  );
}

