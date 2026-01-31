"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "./ScrollBasedAnimation";
import { MapPin, Mail, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';

export default function ContactMap() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <ScrollBasedAnimation direction="up" delay={0}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#00B7FF]" />
              <span className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-[#00B7FF]">
                {t('contact.section.badge')}
              </span>
            </div>
          </ScrollBasedAnimation>
          <ScrollBasedAnimation direction="up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('contact.map.title')}
            </h2>
          </ScrollBasedAnimation>
          <ScrollBasedAnimation direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.map.description')}
            </p>
          </ScrollBasedAnimation>
        </div>

        <ScrollBasedAnimation direction="up" delay={0.3}>
          <div className="relative h-96 w-full overflow-hidden">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7250.688498274848!2d46.697973688001404!3d24.68069018454255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1763216249408!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>

         

            {/* Simple Overlay with address */}
            <div className="absolute bottom-4 left-4 bg-white p-4 max-w-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00B7FF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('contact.map.office')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Rifah Ibn Rafi Street Al Olaya, Riyadh<br />
                    Saudi Arabia
                  </p>
                  <a
                    href="https://maps.app.goo.gl/1Sgh2R5tyU6Nv3TE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-[#00B7FF] font-medium text-sm hover:text-[#0099CC] transition-colors"
                  >
                    {isRTL ? 'عرض على الخريطة' : 'View on Map'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollBasedAnimation>

        {/* Flippable Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              front: {
                icon: <Mail className="w-8 h-8 text-[#00B7FF]" />,
                title: t('contact.map.email'),
                value: 'info@creativeeaccounting.com',
                description: t('contact.map.emailDesc')
              },
              back: {
                title: isRTL ? 'راسلنا الآن' : 'Send us an email',
                description: isRTL ? 'نحن نرد عادة خلال 24 ساعة' : 'We typically respond within 24 hours',
                action: 'mailto:info@creativeeaccounting.com',
                actionText: isRTL ? 'إرسال بريد إلكتروني' : 'Send Email'
              }
            },
            {
              front: {
                icon: <Phone className="w-8 h-8 text-[#00B7FF]" />,
                title: t('contact.map.phone'),
                value: '+966506397402',
                description: t('contact.map.phoneDesc')
              },
              back: {
                title: isRTL ? 'اتصل بنا' : 'Call us now',
                description: isRTL ? 'متاح خلال ساعات العمل' : 'Available during business hours',
                action: 'tel:+96606397402',
                actionText: isRTL ? 'اتصال' : 'Call Now'
              }
            },
            {
              front: {
                icon: <Clock className="w-8 h-8 text-[#00B7FF]" />,
                title: t('contact.map.hours'),
                value: t('contact.map.hoursValue'),
                description: t('contact.map.hoursDesc')
              },
              back: {
                title: isRTL ? 'ساعات العمل' : 'Business Hours',
                description: isRTL ? 'الأحد - الخميس: 8 صباحاً - 5 مساءً' : 'Sunday - Thursday: 8 AM - 8 PM',
                action: '#contact-form',
                actionText: isRTL ? 'احجز موعداً' : 'Schedule Meeting'
              }
            }
          ].map((card, index) => (
            <ScrollBasedAnimation key={index} direction="up" delay={0.4 + index * 0.1}>
              <div
                className="group relative h-80 cursor-pointer"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setFlippedIndex(index)}
                onMouseLeave={() => setFlippedIndex(null)}
              >
                <div
                  className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white [backface-visibility:hidden] [transform:rotateY(0deg)] p-6 text-center">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-12 h-12 bg-[#00B7FF]/10 flex items-center justify-center mb-4">
                        {card.front.icon}
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{card.front.title}</h3>
                      <p className="text-[#00B7FF] font-medium text-base mb-1">{card.front.value}</p>
                      <p className="text-gray-600 text-sm">{card.front.description}</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF] to-[#0099CC] [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 text-center text-white">
                    <div className="flex flex-col items-center justify-center h-full">
                      <h3 className="font-semibold text-xl mb-3">{card.back.title}</h3>
                      <p className="text-blue-100 text-sm mb-4">{card.back.description}</p>
                      <a
                        href={card.back.action}
                        className="inline-flex items-center gap-2 bg-white text-[#00B7FF] px-4 py-2 font-medium hover:bg-gray-100 transition-colors"
                      >
                        {card.back.actionText}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}