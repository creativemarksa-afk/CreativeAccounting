"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "../ScrollBasedAnimation";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import groq from "groq";

export default function TestimonialSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [flippedIndex, setFlippedIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const query = groq`*[_type == "testimonial"] { name, nameAr, position, positionAr, company, companyAr, fullQuote, fullQuoteAr, rating, image }`;
      const data = await client.fetch(query);
      setTestimonials(data);
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-32"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
                {t('testimonials.section.badge')}
              </span>
              <div className="h-px w-12 bg-[#00b7ff]" />
            </div>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {t('testimonials.section.title')}
            </h2>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {t('testimonials.section.description')}
            </p>
          </ScrollBasedAnimation>
        </div>

        {/* Carousel Container */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00b7ff]"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">
              {isRTL ? 'لا توجد تقييمات متاحة حالياً' : 'No reviews available at the moment'}
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className={`absolute top-1/2 z-20 -translate-y-1/2 bg-opacity-90 hover:bg-opacity-100 p-3 transition-all duration-300 group ${isRTL ? 'right-0' : 'left-0'}`}
              aria-label={t('testimonials.navigation.previous')}
            >
              <ChevronLeft className={`h-12 w-12 text-gray-600 group-hover:text-[#00b7ff] ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={handleNext}
              className={`absolute top-1/2 z-20 -translate-y-1/2 bg-opacity-90 hover:bg-opacity-100 p-3 transition-all duration-300 group ${isRTL ? 'left-0' : 'right-0'}`}
              aria-label={t('testimonials.navigation.next')}
            >
              <ChevronRight className={`h-12 w-12 text-gray-600 group-hover:text-[#00b7ff] ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => {
                  const processedTestimonial = {
                    name: isRTL ? testimonial.nameAr : testimonial.name,
                    position: isRTL ? testimonial.positionAr : testimonial.position,
                    company: isRTL ? testimonial.companyAr : testimonial.company,
                    fullQuote: isRTL ? testimonial.fullQuoteAr : testimonial.fullQuote,
                    rating: testimonial.rating,
                    image: testimonial.image
                  };
                  return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <ScrollBasedAnimation
                      direction="up"
                      delay={0.1}
                      duration={0.6}
                    >
                      <div
                        className="group relative h-[450px] cursor-pointer mx-auto max-w-md"
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
                            <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                              <Image
                                src={processedTestimonial.image ? urlFor(processedTestimonial.image).url() : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"}
                                alt={processedTestimonial.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              {/* Top Accent Line */}
                              <div className="absolute left-0 top-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full" />
                            </div>

                            <div className={`flex flex-col justify-center items-center p-8 flex-grow ${isRTL ? 'text-right' : 'text-center'}`}>
                              <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#00b7ff]">
                                {processedTestimonial.name}
                              </h3>
                              <p className="text-base font-semibold text-[#00b7ff] mb-2">
                                {processedTestimonial.position}
                              </p>
                              <p className="text-sm text-gray-600">
                                {processedTestimonial.company}
                              </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00b7ff] to-transparent transition-all duration-500 group-hover:w-full" />
                          </div>

                          {/* Back Side */}
                          <div className={`absolute inset-0 flex flex-col items-center justify-center border-2 border-[#00b7ff] bg-[#00b7ff] p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] ${isRTL ? 'text-right' : 'text-center'}`}>
                            <Quote className="w-16 h-16 text-[#6EFF33] mb-6" />

                            <h3 className="mb-8 text-3xl font-bold">{processedTestimonial.name}</h3>

                            {/* Full Review */}
                            <div className="mb-8 max-w-sm">
                              <p className="text-lg leading-relaxed font-medium">
                                "{processedTestimonial.fullQuote}"
                              </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-2 mb-8">
                              {renderStars(processedTestimonial.rating)}
                              <span className="text-base font-semibold">
                                {processedTestimonial.rating}.0/5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollBasedAnimation>
                  </div>
                );
              })}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-3 transition-all duration-300 ${
                      index === currentIndex
                        ? "w-12 bg-[#00b7ff]"
                        : "w-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`${t('testimonials.navigation.goTo')} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b7ff]/30 to-transparent" />
    </section>
  );
}