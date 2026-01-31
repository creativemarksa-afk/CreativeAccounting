export const metadata = {
  title: "خدمات محاسبة شاملة في السعودية | محاسب قانوني | محاسبة الشركات | محاسبة المطاعم | Creative Accounting",
  description: "أفضل شركات المحاسبة في السعودية - خدمات شاملة تشمل محاسبة الشركات، محاسبة المطاعم، محاسبة العيادات، محاسبة المقاولات. محاسب قانوني معتمد مع خبرة في الامتثال الضريبي والمحاسبة السعودية.",
  keywords: [
    // Company Formation Keywords
    "تأسيس الشركات في السعودية", "تأسيس شركة", "فتح شركة في السعودية", "شروط تأسيس شركة في السعودية", "خطوات تأسيس شركة", "إجراءات تأسيس شركة", "تكاليف تأسيس شركة", "رسوم تأسيس شركة", "تأسيس شركة ذات مسؤولية محدودة", "إنشاء شركة في السعودية", "متطلبات تأسيس شركة", "نظام تأسيس الشركات", "استشارات تأسيس الشركات",
    "Company Formation", "Saudi Company Formation", "Register Company Saudi Arabia", "Company Registration Saudi", "LLC Formation Saudi Arabia",

    // VAT & Tax Keywords
    "التسجيل في الضريبة", "التسجيل في ضريبة القيمة المضافة", "التسجيل في الضريبة المضافة", "شهادة تسجيل في ضريبة القيمة المضافة", "حد التسجيل في ضريبة القيمة المضافة", "الاشتراك في ضريبة القيمة المضافة", "التسجيل الإلزامي في ضريبة القيمة المضافة", "تسجيل الشركات في ضريبة القيمة المضافة", "تسجيل المنشآت في ضريبة القيمة المضافة", "تقديم إقرار ضريبة القيمة المضافة", "تقديم الإقرار الضريبي", "طريقة التسجيل في ضريبة القيمة المضافة", "كيفية التسجيل في القيمة المضافة", "طريقة تقديم إقرار ضريبة القيمة المضافة", "موعد تقديم الإقرار", "مستشار ضريبة القيمة المضافة",
    "VAT Registration Saudi Arabia", "ZATCA Registration", "VAT Compliance Saudi", "Tax Registration Saudi", "VAT Return Filing", "Saudi VAT Consultant",

    // Accounting Services Keywords
    "شركة محاسبة في السعودية", "شركة محاسبة في الرياض", "شركة محاسبة في جدة", "شركة محاسبة في الخبر", "أكبر شركات المحاسبة", "أفضل شركات المحاسبة", "محاسب قانوني", "محاسب شركات", "محاسبة المطاعم", "محاسبة العيادات", "محاسبة المقاولات", "محاسبة كتب", "خدمات محاسبة كتب", "تسجيل المعاملات", "تقارير مالية", "محاسبة الرياض", "محاسبة كتب جدة", "محاسبة كتب الدمام", "محاسبة كتب الخبر", "محاسبة كتب مكة", "محاسبة كتب المدينة", "امتثال محاسبي", "إدارة السجلات المالية", "محاسبة سعودية", "خدمات محاسبية",
    "accounting firm Saudi Arabia", "accounting services Riyadh", "accounting company Jeddah", "accounting services Khobar", "best accounting firms Saudi", "certified accountant Saudi", "corporate accountant", "restaurant accounting", "clinic accounting", "construction accounting", "bookkeeping", "bookkeeping services", "transaction recording", "financial reports", "Riyadh bookkeeping", "Jeddah bookkeeping", "Dammam bookkeeping", "Khobar bookkeeping", "Makkah bookkeeping", "Madinah bookkeeping", "accounting compliance", "financial record management", "Saudi bookkeeping", "accounting services"
  ],
  openGraph: {
    title: "خدمات محاسبة شاملة في السعودية | محاسب قانوني | محاسبة الشركات",
    description: "أفضل شركات المحاسبة في السعودية - خدمات شاملة تشمل محاسبة الشركات، محاسبة المطاعم، محاسبة العيادات، محاسبة المقاولات.",
    images: ["/CaLogo.png"],
    locale: "ar_SA",
    type: "website",
    siteName: "Creative Accounting"
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات محاسبة شاملة في السعودية | محاسب قانوني",
    description: "أفضل شركات المحاسبة في السعودية - محاسبة الشركات، محاسبة المطاعم، محاسبة العيادات",
    images: ["/CaLogo.png"]
  },
  alternates: {
    canonical: 'https://creativeeaccounting.com/services'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicesLayout({ children }) {
  return children;
}