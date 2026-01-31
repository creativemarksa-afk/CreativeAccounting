"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "../ScrollBasedAnimation";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import groq from "groq";

export default function BlogSection() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = groq`*[_type == "blogs"] | order(publishedAt desc)[0...6] { title, titleAr, slug, introduction, introductionAr, images, publishedAt, category }`;
      const data = await client.fetch(query);
      setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <section
      id="blogs"
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
                {t('blogs.section.badge', 'Latest Blogs')}
              </span>
              <div className="h-px w-12 bg-[#00b7ff]" />
            </div>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {t('blogs.section.title', 'Our Latest Insights')}
            </h2>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {t('blogs.section.description', 'Stay updated with our latest articles and insights on accounting, finance, and business management.')}
            </p>
          </ScrollBasedAnimation>
        </div>

        {/* Blog Cards Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00b7ff]"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">
              {isRTL ? 'لا توجد مدونات متاحة الآن' : 'No blogs available at the moment'}
            </p>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => {
              const processedBlog = {
                title: isRTL ? blog.titleAr : blog.title,
                introduction: isRTL ? blog.introductionAr : blog.introduction,
                slug: blog.slug.current,
                image: blog.images?.[0],
                publishedAt: blog.publishedAt,
                category: blog.category
              };
              return (
                <ScrollBasedAnimation
                  key={index}
                  direction="up"
                  delay={0.1 + index * 0.05}
                  duration={0.6}
                >
                  <Link href={`/blog/${processedBlog.slug}`} className="group block">
                    <div
                      className="group relative h-[400px] cursor-pointer"
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
                              src={processedBlog.image ? urlFor(processedBlog.image).url() : "/CaLogo.png"}
                              alt={processedBlog.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Top Accent Line */}
                            <div className="absolute left-0 top-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full" />
                          </div>

                          <div className="flex flex-col p-6 flex-grow">
                            <div className="mb-4">
                              <p className="text-sm text-[#00b7ff] font-semibold uppercase tracking-wider">
                                {new Date(processedBlog.publishedAt).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#00b7ff]">
                              {processedBlog.title}
                            </h3>
                            <p className="flex-grow text-sm leading-relaxed text-gray-600 line-clamp-3">
                              {processedBlog.introduction}
                            </p>
                          </div>

                          {/* Bottom Accent Line */}
                          <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full" />
                        </div>

                        {/* Back Side */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center border-2 border-[#00b7ff] bg-[#00b7ff] p-6 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)] ${isRTL ? 'text-right' : 'text-center'}`}>
                          <h3 className="mb-4 text-2xl font-bold">{processedBlog.title}</h3>
                          <p className="mb-4 text-sm">
                            {t('blogs.readMore', 'Read More')}
                          </p>
                          <div className={`border-2 border-white px-6 py-2 text-sm font-semibold transition-all hover:bg-white hover:text-[#00b7ff] ${isRTL ? 'self-start' : 'self-center'}`}>
                            {t('blogs.readMore', 'Read More')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollBasedAnimation>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        {!loading && blogs.length > 0 && (
          <div className="mt-20 lg:mt-32 text-center">
            <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center gap-2 border-2 border-[#00b7ff] bg-[#00b7ff] px-10 py-4 text-base font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-[#00b7ff]"
              >
                {t('blogs.viewAll', 'View All Blogs')}
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
              </Link>
            </ScrollBasedAnimation>
          </div>
        )}
      </div>
    </section>
  );
}
