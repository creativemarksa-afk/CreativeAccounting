"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import ScrollBasedAnimation from "@/components/ScrollBasedAnimation";
import Image from "next/image";
import ContactHeroSection from "../../components/ContactHero";
import ContactSection from "../../components/home/Contact";
import ContactMap from "../../components/ContactMap";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Zap, Shield, CheckCircle, Target, DollarSign } from 'lucide-react';

export default function Contact() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const contactStats = [
    { value: "24/7", label: t('contact.stats.support') || "Support Available" },
    { value: "<1hr", label: t('contact.stats.response') || "Response Time" },
    { value: "100%", label: t('contact.stats.satisfaction') || "Client Satisfaction" },
    { value: "5/5", label: t('contact.stats.rating') || "Average Rating" }
  ];

  const contactSections = [
    {
      title: t('contact.sections.communication.title') || "Multiple Ways to Connect",
      subtitle: t('contact.sections.communication.subtitle') || "Choose Your Preferred Method",
      description: t('contact.sections.communication.description') || "We offer various communication channels to ensure you can reach us whenever and however you prefer. From email to phone calls, we're always just a message away.",
      features: [
        "Email support for detailed inquiries",
        "Phone calls for immediate assistance",
        "Online contact form for convenience",
        "Business hours and after-hours support"
      ],
      highlight: "Always Available"
    },
  
  ];

  const contactFeatures = [
    {
      key: "responsive",
      title: t('contact.features.responsive.title') || "Quick Response",
      description: t('contact.features.responsive.description') || "We respond to all inquiries within 24 hours",
      icon: Zap,
      backContent: t('contact.features.responsive.backContent') || "Fast and reliable communication ensures your questions are answered promptly"
    },
    {
      key: "expertise",
      title: t('contact.features.expertise.title') || "Expert Knowledge",
      description: t('contact.features.expertise.description') || "Deep understanding of Saudi market and regulations",
      icon: Shield,
      backContent: t('contact.features.expertise.backContent') || "Our team stays updated with the latest regulations and best practices"
    },
    {
      key: "personalized",
      title: t('contact.features.personalized.title') || "Personalized Service",
      description: t('contact.features.personalized.description') || "Tailored solutions for your unique business needs",
      icon: Target,
      backContent: t('contact.features.personalized.backContent') || "Every client receives customized attention and solutions"
    },
    {
      key: "reliable",
      title: t('contact.features.reliable.title') || "Reliable Support",
      description: t('contact.features.reliable.description') || "Consistent and dependable service you can count on",
      icon: CheckCircle,
      backContent: t('contact.features.reliable.backContent') || "We deliver on our promises and maintain high service standards"
    },
    
  ];

  const sectionImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80"
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Contact Stats Section */}
      <section className="py-16 bg-[#00B7FF] relative overflow-hidden">
        {/* Geometric Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0099CC] to-[#007BA7] opacity-60"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {contactStats.map((stat, index) => (
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

    

      {/* Contact Features Section */}
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
                  {t('contact.features.title') || 'Why Contact Us?'}
                </h2>
              </div>
            </ScrollBasedAnimation>
            <ScrollBasedAnimation direction="up" delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('contact.features.subtitle') || 'Experience the difference with our commitment to excellence and personalized service'}
              </p>
            </ScrollBasedAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactFeatures.map((item, index) => {
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
                      <div className="absolute inset-0 flex flex-col bg-white  shadow-lg backface-hidden transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                        <div className="flex flex-col p-8 flex-grow justify-center items-center text-center">
                          <IconComponent className="text-5xl mb-6 text-[#00B7FF]" />
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full rounded-bl-lg" />
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-[#00b7ff] bg-[#00b7ff] p-8 text-center text-white backface-hidden rotate-y-180">
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

      {/* Contact Form Section */}
      <div id="contact-form">
        <ContactSection />
      </div>

      {/* Contact Map */}
      <ContactMap />

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
                {t('contact.cta.title') || 'Ready to Get Started?'}
              </h2>
            </div>
          </ScrollBasedAnimation>
          <ScrollBasedAnimation direction="up" delay={0.1}>
            <div className="relative inline-block max-w-3xl mb-8">
              <div className="absolute -inset-3 bg-white/5 transform skew-y-1"></div>
              <p className="relative text-xl text-blue-50 px-6 py-4">
                {t('contact.cta.description') || 'Join hundreds of satisfied clients who trust us with their financial success. Let\'s discuss how we can help your business thrive.'}
              </p>
            </div>
          </ScrollBasedAnimation>
          <ScrollBasedAnimation direction="up" delay={0.2}>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                href="#contact-form"
                className="relative inline-flex items-center justify-center bg-white text-[#00B7FF] px-10 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                {t('contact.cta.contact') || 'Contact Us Today'}
              </Link>
              <Link
                href="/services"
                className="relative inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-[#00B7FF] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                {t('contact.cta.services') || 'Explore Services'}
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