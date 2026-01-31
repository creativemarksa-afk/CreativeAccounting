"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "@/components/ScrollBasedAnimation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

function ServicesPage() {
  const heroRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await client.fetch('*[_type == "service"]');
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00b7ff]"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 h-[120%] w-full">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
            alt="Professional accounting services"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/80 to-[#0099CC]/60" />

        <div className="relative z-10 flex flex-col justify-center h-full pt-24">
          <div className="max-w-7xl px-6 mx-auto">
            <div className={`max-w-3xl space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <ScrollBasedAnimation delay={0.1} duration={0.6} direction="up">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-white/10 transform -skew-y-2"></div>
                  <h1 className="relative font-bold leading-tight text-white">
                    <span className="block text-5xl md:text-7xl">
                      {t('services.section.title')}
                    </span>
                    <span className="block text-4xl md:text-6xl text-blue-100 mt-2">
                      {isRTL ? 'للأعمال السعودية' : 'for Saudi Businesses'}
                    </span>
                  </h1>
                </div>
              </ScrollBasedAnimation>

              <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up">
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                  {t('services.section.description')}
                </p>
              </ScrollBasedAnimation>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-64 h-32 bg-[#0099CC]/20 transform skew-x-12"></div>
        <div className="absolute top-40 right-0 w-48 h-48 border-4 border-white/10 transform rotate-45"></div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          {/* Services Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollBasedAnimation key={index} direction="up" delay={0.1 + index * 0.05}>
                <div
                  className="group relative h-[450px] cursor-pointer"
                  style={{ perspective: "1000px" }}
                  onMouseEnter={() => setFlippedIndex(index)}
                  onMouseLeave={() => setFlippedIndex(null)}
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-700 ${
                      flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 bg-white"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/5 to-transparent transform translate-x-2 translate-y-2"></div>

                      <div className="relative h-full flex flex-col border-t-4 border-[#00b7ff]">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={service.image ? urlFor(service.image).width(800).height(400).url() : "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"}
                            alt={isRTL ? service.titleAr : service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="flex flex-col p-6 flex-grow">
                          <div className="mb-3">
                            <span className="text-xs font-bold text-[#00b7ff] uppercase tracking-wider">
                              {isRTL ? service.subtitleAr : service.subtitle}
                            </span>
                          </div>
                          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-[#00b7ff] transition-colors">
                            {isRTL ? service.titleAr : service.title}
                          </h3>
                          <p className="flex-grow text-sm leading-relaxed text-gray-600">
                            {isRTL ? service.descriptionAr : service.description}
                          </p>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex flex-wrap gap-1">
                              {(isRTL ? service.featuresAr : service.features).slice(0, 2).map((feature, i) => (
                                <span key={i} className="text-xs bg-[#00b7ff]/10 text-[#00b7ff] px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center border-4 border-[#00b7ff] bg-[#00b7ff] p-8 text-white"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/30"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/30"></div>

                      <h3 className="mb-4 text-2xl font-bold text-center">{isRTL ? service.titleAr : service.title}</h3>
                      <p className="mb-8 text-sm text-center">
                        {isRTL ? service.subtitleAr : service.subtitle}
                      </p>

                      {/* Features List */}
                      <ul className={`space-y-3 text-sm w-full max-w-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                        {(isRTL ? service.featuresAr : service.features).map((feature, i) => (
                          <li key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <svg
                              className="mt-1 h-4 w-4 flex-shrink-0 text-[#6EFF33]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                  
                    </div>
                  </div>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollBasedAnimation direction="up" delay={0.8}>
            <div className="mt-24 lg:mt-32">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/10 to-[#0099CC]/10 transform translate-x-6 translate-y-6"></div>

                <div className="relative bg-white border-t-4 border-[#00b7ff] py-16 px-8 lg:px-16">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b7ff]/5 transform rotate-45 translate-x-16 -translate-y-16"></div>

                  <div className="relative z-10 text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      {isRTL ? 'هل تحتاج إلى خدمات محاسبية؟' : 'Need Professional Accounting Services?'}
                    </h3>
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                      {isRTL
                        ? 'فريق المحاسبة الإبداعية هنا لمساعدتك في إدارة أعمالك المالية وضمان الامتثال للوائح السعودية.'
                        : 'Our team of accounting experts is here to help you manage your financial operations and ensure ZATCA compliance.'
                      }
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center bg-[#00b7ff] px-10 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-[#0099dd] transition-colors"
                      >
                        {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                      </a>
                      <a
                        href="/about"
                        className="inline-flex items-center justify-center border-2 border-[#00b7ff] px-10 py-4 text-base font-bold uppercase tracking-wider text-[#00b7ff] hover:bg-[#00b7ff] hover:text-white transition-colors"
                      >
                        {isRTL ? 'اعرف عنا' : 'About Us'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-12 w-24 h-24 bg-[#00B7FF]/10 transform rotate-45"></div>
        <div className="absolute bottom-40 left-12 w-32 h-32 border-4 border-[#0099CC]/20 transform -rotate-12"></div>
      </section>
    </div>
  );
}

export default ServicesPage