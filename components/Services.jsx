"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "./ScrollBasedAnimation";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";
import groq from "groq";

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const query = groq`*[_type == "service"][0...3] { title, titleAr, subtitle, subtitleAr, description, descriptionAr, features, featuresAr, image }`;
      const data = await client.fetch(query);
      setServices(data);
      setLoading(false);
    };
    fetchServices();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-32"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00b7ff_2px,transparent_2px),linear-gradient(to_bottom,#00b7ff_2px,transparent_2px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 text-center lg:mb-24 ${isRTL ? 'text-right' : 'text-left'}`}>
          <ScrollBasedAnimation direction="up" delay={0} duration={0.6}>
            <div className={`inline-flex items-center gap-3 justify-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-px w-12 bg-[#00b7ff]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00b7ff]">
                {t('services.section.badge')}
              </span>
              <div className="h-px w-12 bg-[#00b7ff]" />
            </div>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {t('services.section.title')}
            </h2>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {t('services.section.description')}
            </p>
          </ScrollBasedAnimation>
        </div>

        {/* Service Cards Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin h-12 w-12 border-b-2 border-[#00b7ff]"></div>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const processedService = {
                title: isRTL ? service.titleAr : service.title,
                subtitle: isRTL ? service.subtitleAr : service.subtitle,
                description: isRTL ? service.descriptionAr : service.description,
                features: isRTL ? service.featuresAr : service.features,
                image: service.image
              };
              return (
                <ScrollBasedAnimation
                  key={index}
                  direction="up"
                  delay={0.1 + index * 0.05}
                  duration={0.6}
                >
                  <div
                    className="group relative h-[450px] cursor-pointer"
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
                      <div className="absolute inset-0 flex flex-col bg-white [backface-visibility:hidden] [transform:rotateY(0deg)]">
                        <div className="relative h-60 w-full overflow-hidden">
                          <Image
                            src={urlFor(processedService.image).url()}
                            alt={processedService.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Top Accent Line */}
                          <div className="absolute left-0 top-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full" />
                        </div>

                        <div className="flex flex-col p-8 flex-grow justify-center text-center">
                          <div className="mb-6">
                            <p className="text-sm font-semibold uppercase tracking-wider text-[#00b7ff] mb-3">
                              {processedService.subtitle}
                            </p>
                          </div>

                          <p className="text-base leading-relaxed text-gray-600">
                            {processedService.description}
                          </p>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00b7ff] to-transparent transition-all duration-500 group-hover:w-full" />
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-[#00b7ff] bg-[#00b7ff] p-8 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <h3 className="mb-8 text-3xl font-bold">{processedService.title}</h3>

                        {/* Complete Features List */}
                        <ul className={`space-y-4 text-lg w-full max-w-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                          {processedService.features.map((feature, i) => (
                            <li key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <svg
                                className="mt-1 h-5 w-5 flex-shrink-0 text-[#6EFF33]"
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
              );
            })}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32 text-center">
          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 px-8">
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('services.cta.title')}
                </h3>
                <p className="text-gray-600 mb-8">
                  {t('services.cta.description')}
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-[#00b7ff] bg-[#00b7ff] px-10 py-4 text-base font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-[#00b7ff]"
                >
                  {t('navigation.contact')}
                  <svg
                    className={`h-5 w-5 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isRTL ? "M7 8l-4 4m0 0l4 4m-4-4h14" : "M17 8l4 4m0 0l-4 4m4-4H3"}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b7ff]/30 to-transparent" />
    </section>
  );
}