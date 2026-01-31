"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useRouter } from "next/navigation";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag, Share2, BookOpen, Calendar } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function BlogDetailPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const params = useParams();
  const router = useRouter();

  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get article slug from URL
  const slug = params.slug;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "blogs" && slug.current == $slug][0]`,
          { slug }
        );
        setArticle(data);

        // Fetch related articles (excluding current one)
        const related = await client.fetch(
          `*[_type == "blogs" && slug.current != $slug] | order(publishedAt desc)[0...3]`,
          { slug }
        );
        setRelatedArticles(related);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00b7ff]"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir={isRTL ? "rtl" : "ltr"}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('blogPage.navigation.articleNotFound')}
          </h1>
          <Link href="/blog" className="text-[#00b7ff] hover:underline">
            {t('blogPage.navigation.backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className={`flex items-center gap-2 text-[#00b7ff] hover:text-[#00a0d1] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {t('blogPage.navigation.backToBlog')}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <ScrollBasedAnimation direction="up" delay={0} duration={0.6}>
            <div className={`flex items-center gap-6 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#00b7ff]" />
                <span className="text-[#00b7ff] font-semibold">{article.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </ScrollBasedAnimation>

          {/* Article Title */}
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              {isRTL ? article.titleAr : article.title}
            </h1>
          </ScrollBasedAnimation>

          {/* Article Excerpt */}
          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {isRTL ? article.introductionAr : article.introduction}
            </p>
          </ScrollBasedAnimation>

          {/* Author Info - Placeholder since not in schema */}
          <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
            <div className={`flex items-center gap-4 pb-8 border-b border-gray-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-[#00b7ff] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{isRTL ? 'المحرر' : 'Author'}</h3>
                <p className="text-sm text-gray-600">{isRTL ? 'محرر محتوى متخصص' : 'Content Specialist'}</p>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <ScrollBasedAnimation direction="up" delay={0.4} duration={0.6}>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src={article.images?.[0] ? urlFor(article.images[0]).width(800).height(400).url() : "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"}
            alt={isRTL ? article.titleAr : article.title}
            fill
            className="object-cover"
          />
        </div>
      </ScrollBasedAnimation>

      {/* Article Content */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <ScrollBasedAnimation direction="up" delay={0.5} duration={0.6}>
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-blockquote:border-[#00b7ff] prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:rounded-none"
              dangerouslySetInnerHTML={{ __html: isRTL ? article.contentAr : article.content }}
            />
          </ScrollBasedAnimation>

          {/* Tags - Placeholder since not in schema */}
          <ScrollBasedAnimation direction="up" delay={0.6} duration={0.6}>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isRTL ? 'العلامات' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-none">
                  {article.category}
                </span>
              </div>
            </div>
          </ScrollBasedAnimation>

          {/* Share Buttons */}
          <ScrollBasedAnimation direction="up" delay={0.7} duration={0.6}>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-900 font-semibold">
                  {isRTL ? 'مشاركة' : 'Share'}
                </span>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-[#00b7ff] hover:text-[#00b7ff] transition-colors duration-300">
                  <Share2 className="w-4 h-4" />
                  {isRTL ? 'مشاركة' : 'Share'}
                </button>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollBasedAnimation direction="up" delay={0.8} duration={0.6}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isRTL ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>
          </ScrollBasedAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((relatedArticle, index) => (
              <ScrollBasedAnimation key={relatedArticle._id} direction="up" delay={0.9 + index * 0.1} duration={0.6}>
                <Link href={`/blog/${relatedArticle.slug.current}`}>
                  <div className="group bg-white border border-gray-200 hover:border-[#00b7ff] transition-colors duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedArticle.images?.[0] ? urlFor(relatedArticle.images[0]).width(800).height(400).url() : "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"}
                        alt={isRTL ? relatedArticle.titleAr : relatedArticle.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00b7ff] transition-colors duration-300">
                        {isRTL ? relatedArticle.titleAr : relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {(isRTL ? relatedArticle.introductionAr : relatedArticle.introduction).substring(0, 100)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{new Date(relatedArticle.publishedAt).toLocaleDateString()}</span>
                        <BookOpen className="w-4 h-4 text-[#00b7ff]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}