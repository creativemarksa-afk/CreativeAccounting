export const metadata = {
  title: "اتصل بنا | محاسب قانوني | استشارات تأسيس الشركات | تسجيل ضريبة القيمة المضافة | Creative Accounting",
  description: "تواصل مع محاسب قانوني معتمد لتأسيس الشركات في السعودية، التسجيل في ضريبة القيمة المضافة، وجميع خدمات المحاسبة. احجز استشارة مجانية اليوم.",
  keywords: [
    // Company Formation Keywords
    "تأسيس الشركات في السعودية", "تأسيس شركة", "فتح شركة في السعودية", "شروط تأسيس شركة في السعودية", "خطوات تأسيس شركة", "إجراءات تأسيس شركة", "تكاليف تأسيس شركة", "رسوم تأسيس شركة", "تأسيس شركة ذات مسؤولية محدودة", "إنشاء شركة في السعودية", "متطلبات تأسيس شركة", "نظام تأسيس الشركات", "استشارات تأسيس الشركات",
    "Company Formation", "Saudi Company Formation", "Register Company Saudi Arabia", "Company Registration Saudi", "LLC Formation Saudi Arabia",

    // VAT & Tax Keywords
    "التسجيل في الضريبة", "التسجيل في ضريبة القيمة المضافة", "التسجيل في الضريبة المضافة", "شهادة تسجيل في ضريبة القيمة المضافة", "حد التسجيل في ضريبة القيمة المضافة", "الاشتراك في ضريبة القيمة المضافة", "التسجيل الإلزامي في ضريبة القيمة المضافة", "تسجيل الشركات في ضريبة القيمة المضافة", "تسجيل المنشآت في ضريبة القيمة المضافة", "تقديم إقرار ضريبة القيمة المضافة", "تقديم الإقرار الضريبي", "طريقة التسجيل في ضريبة القيمة المضافة", "كيفية التسجيل في القيمة المضافة", "طريقة تقديم إقرار ضريبة القيمة المضافة", "موعد تقديم الإقرار", "مستشار ضريبة القيمة المضافة",
    "VAT Registration Saudi Arabia", "ZATCA Registration", "VAT Compliance Saudi", "Tax Registration Saudi", "VAT Return Filing", "Saudi VAT Consultant",

    // Accounting Services Keywords
    "شركة محاسبة في السعودية", "شركة محاسبة في الرياض", "شركة محاسبة في جدة", "شركة محاسبة في الخبر", "أكبر شركات المحاسبة", "أفضل شركات المحاسبة", "محاسب قانوني", "محاسب شركات", "محاسبة المطاعم", "محاسبة العيادات", "محاسبة المقاولات",
    "accounting firm Saudi Arabia", "accounting services Riyadh", "accounting company Jeddah", "accounting services Khobar", "best accounting firms Saudi", "certified accountant Saudi", "corporate accountant", "restaurant accounting", "clinic accounting", "construction accounting",

    // Contact Keywords
    "اتصل بنا", "معلومات الاتصال", "استفسار محاسبي", "محاسبة الرياض", "محاسبة جدة", "محاسبة الدمام", "محاسبة الخبر", "محاسبة مكة", "محاسبة المدينة", "هاتف محاسب", "بريد إلكتروني", "عنوان مكتب", "خريطة موقع", "استفسار خدمات", "استشارة مجانية",
    "contact us", "contact information", "accounting inquiry", "Riyadh accounting", "Jeddah accounting", "Dammam accounting", "Khobar accounting", "Makkah accounting", "Madinah accounting", "accounting phone", "email", "office address", "location map", "service inquiry", "free consultation"
  ],
  openGraph: {
    title: "اتصل بنا | محاسب قانوني | استشارات تأسيس الشركات",
    description: "تواصل مع محاسب قانوني معتمد لتأسيس الشركات في السعودية والتسجيل في ضريبة القيمة المضافة.",
    images: ["/CaLogo.png"],
    locale: "ar_SA",
    type: "website",
    siteName: "Creative Accounting"
  },
  twitter: {
    card: "summary_large_image",
    title: "اتصل بنا | محاسب قانوني | تأسيس الشركات",
    description: "تواصل مع محاسب قانوني معتمد لتأسيس الشركات والامتثال الضريبي في السعودية",
    images: ["/CaLogo.png"]
  },
  alternates: {
    canonical: 'https://creativeeaccounting.com/contact'
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

export default function ContactLayout({ children }) {
  return children;
}