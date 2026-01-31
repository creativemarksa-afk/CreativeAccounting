export const metadata = {
  title: "مدونة محاسبة إبداعية في السعودية",
  description: "اقرأ أحدث المقالات عن المحاسبة، الضرائب، والاستشارات المالية في السعودية. نصائح مفيدة للأعمال في الرياض وغيرها.",
  keywords: [
    "مدونة محاسبة", "مقالات محاسبية", "نصائح ضريبية", "استشارات مالية", "محاسبة سعودية", "أخبار محاسبة", "دليل محاسبي", "تحديثات قوانين", "نصائح أعمال", "محاسبة الرياض", "محاسبة جدة", "محاسبة الدمام", "محاسبة الخبر", "محاسبة مكة", "محاسبة المدينة",
    "accounting blog", "accounting articles", "tax tips", "financial consulting", "Saudi accounting", "accounting news", "accounting guide", "law updates", "business tips", "Riyadh accounting", "Jeddah accounting", "Dammam accounting", "Khobar accounting", "Makkah accounting", "Madinah accounting"
  ],
  openGraph: {
    title: "مدونة محاسبة إبداعية في السعودية",
    description: "اقرأ أحدث المقالات عن المحاسبة، الضرائب، والاستشارات المالية في السعودية.",
    images: ["/CaLogo.png"],
    locale: "ar_SA"
  },
  alternates: {
    canonical: 'https://creativeeaccounting.com/blog'
  }
};

export default function BlogLayout({ children }) {
  return children;
}