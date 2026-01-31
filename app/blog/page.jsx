"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import ScrollBasedAnimation from "../../components/ScrollBasedAnimation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function BlogPage() {
  const heroRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch('*[_type == "blogs"] | order(publishedAt desc)');
        setArticles(data);
        console.log("Blogs data: ", articles)
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00b7ff]"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir={isRTL ? "rtl" : "ltr"}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isRTL ? 'لا توجد مقالات متاحة' : 'No Articles Available'}
          </h1>
          <p className="text-gray-600 mb-8">
            {isRTL ? 'لم يتم نشر أي مقالات بعد. يرجى العودة لاحقاً.' : 'No articles have been published yet. Please check back later.'}
          </p>
          <Link href="/" className="inline-flex items-center justify-center bg-[#00b7ff] px-8 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-[#0099dd] transition-colors">
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 h-[120%] w-full">
          <img
            src="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=1470&auto=format&fit=crop"
            alt="Professional workspace"
            className="h-full w-full object-cover opacity-70"
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
                      {t('solutionFeatures.section.title')}
                    </span>
                    <span className="block text-4xl md:text-6xl text-blue-100 mt-2">
                      {isRTL ? 'ونصائح حصرية' : 'Insights & Tips'}
                    </span>
                  </h1>
                </div>
              </ScrollBasedAnimation>

              <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up">
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                  {t('solutionFeatures.section.description')}
                </p>
              </ScrollBasedAnimation>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-64 h-32 bg-[#0099CC]/20 transform skew-x-12"></div>
        <div className="absolute top-40 right-0 w-48 h-48 border-4 border-white/10 transform rotate-45"></div>
      </section>

      {/* Articles Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          {/* Featured Article */}
          <ScrollBasedAnimation direction="up" delay={0.3}>
            <div className="mb-16">
              <div className="relative mb-8">
                <div className="absolute left-0 top-0 w-24 h-1 bg-[#00b7ff]"></div>
                <h2 className="text-3xl font-bold text-gray-900 mt-4">
                  {t('blogPage.hero.featured')}
                </h2>
              </div>

              <div className="relative max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/10 to-[#0099CC]/10 transform translate-x-4 translate-y-4"></div>
                
                <Link href={`/blog/${featuredArticle.slug.current}`}>
                  <div className="relative group bg-white border-l-4 border-[#00b7ff] cursor-pointer">
                    <div className="relative h-96 overflow-hidden">
                      <Image
                        src={featuredArticle.images?.[0] ? urlFor(featuredArticle.images[0]).width(800).height(400).url() : "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"}
                        alt={isRTL ? featuredArticle.titleAr : featuredArticle.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                        <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className="bg-[#00b7ff] px-4 py-1 text-sm font-bold">
                            {featuredArticle.category}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00b7ff] transition-colors">
                          {isRTL ? featuredArticle.titleAr : featuredArticle.title}
                        </h3>
                        <p className="text-lg leading-relaxed mb-6">
                          {isRTL ? featuredArticle.introductionAr : featuredArticle.introduction}
                        </p>
                        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className="text-sm">{new Date(featuredArticle.publishedAt).toLocaleDateString()}</span>
                          <span className={`flex items-center gap-2 text-sm font-bold ${isRTL ? 'flex-row-reverse' : ''}`}>
                            {t('blogPage.hero.readMore')}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </ScrollBasedAnimation>

          {/* Blog Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-20">
            {otherArticles.map((article, index) => (
              <ScrollBasedAnimation key={article.slug} direction="up" delay={0.1 + index * 0.05}>
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
                            src={article.images?.[0] ? urlFor(article.images[0]).width(800).height(400).url() : "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"}
                            alt={isRTL ? article.titleAr : article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="flex flex-col p-6 flex-grow">
                          <div className="mb-3">
                            <span className="text-xs font-bold text-[#00b7ff] uppercase tracking-wider">
                              {article.category}
                            </span>
                          </div>
                          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-[#00b7ff] transition-colors">
                            {isRTL ? article.titleAr : article.title}
                          </h3>
                          <p className="flex-grow text-sm leading-relaxed text-gray-600">
                            {isRTL ? article.introductionAr : article.introduction}
                          </p>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</span>
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
                      
                      <h3 className="mb-4 text-2xl font-bold text-center">{isRTL ? article.titleAr : article.title}</h3>
                      <p className="mb-4 text-sm font-medium">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </p>
                      <p className="mb-8 text-sm">
                        {isRTL ? article.introductionAr : article.introduction}
                      </p>
                      <Link
                        href={`/blog/${article.slug.current}`}
                        className="border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#00b7ff] transition-all"
                      >
                        {t('blogPage.hero.readMore')}
                      </Link>
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
                      {isRTL ? 'هل تحتاج إلى مساعدة مالية؟' : 'Need Expert Financial Guidance?'}
                    </h3>
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                      {isRTL
                        ? 'فريق المحاسبة الإبداعية هنا لمساعدتك في تحقيق النجاح المالي والامتثال للوائح السعودية.'
                        : 'Our team of financial experts is here to help you achieve financial success and ensure ZATCA compliance.'
                      }
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-[#00b7ff] px-10 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-[#0099dd] transition-colors"
                      >
                        {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                      </Link>
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center border-2 border-[#00b7ff] px-10 py-4 text-base font-bold uppercase tracking-wider text-[#00b7ff] hover:bg-[#00b7ff] hover:text-white transition-colors"
                      >
                        {isRTL ? 'عرض خدماتنا' : 'View Our Services'}
                      </Link>
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