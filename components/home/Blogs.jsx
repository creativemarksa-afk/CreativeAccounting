"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "../ScrollBasedAnimation";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import groq from "groq";

export default function Blogs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = groq`*[_type == "blogs"] | order(publishedAt desc)[0...3] { title, titleAr, slug, introduction, introductionAr, images, publishedAt }`;
      const data = await client.fetch(query);
      setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 lg:py-32"
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
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => {
              const processedBlog = {
                title: isRTL ? blog.titleAr : blog.title,
                introduction: isRTL ? blog.introductionAr : blog.introduction,
                slug: blog.slug.current,
                image: blog.images?.[0],
                publishedAt: blog.publishedAt
              };
              return (
                <ScrollBasedAnimation
                  key={index}
                  direction="up"
                  delay={0.1 + index * 0.05}
                  duration={0.6}
                >
                  <Link href={`/blog/${processedBlog.slug}`} className="group block">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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

                      <div className="p-6">
                        <div className="mb-4">
                          <p className="text-sm text-[#00b7ff] font-semibold uppercase tracking-wider">
                            {new Date(processedBlog.publishedAt).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {processedBlog.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {processedBlog.introduction}
                        </p>

                        <div className={`mt-4 flex items-center gap-2 text-[#00b7ff] font-semibold ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span>{t('blogs.readMore', 'Read More')}</span>
                          <svg
                            className={`h-4 w-4 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
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
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollBasedAnimation>
              );
            })}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32 text-center">
          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-16 px-8">
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('blogs.cta.title', 'Want to Learn More?')}
                </h3>
                <p className="text-gray-600 mb-8">
                  {t('blogs.cta.description', 'Explore our complete collection of articles and stay informed about the latest trends in accounting and finance.')}
                </p>
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