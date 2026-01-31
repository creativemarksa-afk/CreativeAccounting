import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import SmoothScroll from "@/components/SmoothScroll";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SocialLinkButton from "@/components/SocialLink";



const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ['300', '400', '600', '700', '900'], // choose the weights you need
  display: 'swap',                    // Prevent FOIT (flash of invisible text)
})

const GTM_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL('https://creativeeaccounting.com'),
  title: {
    default: "التسجيل في الضريبة | تأسيس الشركات في السعودية | محاسبة إبداعية",
    template: "%s | محاسبة إبداعية الرياض"
  },
  description: "شركة محاسبة رائدة في الرياض، السعودية. خدمات محاسبة خبيرة، امتثال ضريبة القيمة المضافة، مراجعة، إدارة رواتب واستشارات مالية. معتمد من هيئة الزكاة والضريبة والجمارك. اتصل +966 11 123 4567.",
  keywords: [
    // Company Formation Keywords
    "تأسيس الشركات في السعودية", "تأسيس شركة", "فتح شركة في السعودية", "شروط تأسيس شركة في السعودية", "خطوات تأسيس شركة", "إجراءات تأسيس شركة", "تكاليف تأسيس شركة", "رسوم تأسيس شركة", "تأسيس شركة ذات مسؤولية محدودة", "إنشاء شركة في السعودية", "متطلبات تأسيس شركة", "نظام تأسيس الشركات", "استشارات تأسيس الشركات",
    "Company Formation", "Saudi Company Formation", "Register Company Saudi Arabia", "Company Registration Saudi", "LLC Formation Saudi Arabia",

    // VAT & Tax Keywords
    "التسجيل في الضريبة", "التسجيل في ضريبة القيمة المضافة", "التسجيل في الضريبة المضافة", "شهادة تسجيل في ضريبة القيمة المضافة", "حد التسجيل في ضريبة القيمة المضافة", "الاشتراك في ضريبة القيمة المضافة", "التسجيل الإلزامي في ضريبة القيمة المضافة", "تسجيل الشركات في ضريبة القيمة المضافة", "تسجيل المنشآت في ضريبة القيمة المضافة", "تقديم إقرار ضريبة القيمة المضافة", "تقديم الإقرار الضريبي", "طريقة التسجيل في ضريبة القيمة المضافة", "كيفية التسجيل في القيمة المضافة", "طريقة تقديم إقرار ضريبة القيمة المضافة", "موعد تقديم الإقرار", "مستشار ضريبة القيمة المضافة",
    "VAT Registration Saudi Arabia", "ZATCA Registration", "VAT Compliance Saudi", "Tax Registration Saudi", "VAT Return Filing", "Saudi VAT Consultant",

    // Accounting Services Keywords
    "شركة محاسبة في السعودية", "شركة محاسبة في الرياض", "شركة محاسبة في جدة", "شركة محاسبة في الخبر", "أكبر شركات المحاسبة", "أفضل شركات المحاسبة", "محاسب قانوني", "محاسب شركات", "محاسبة المطاعم", "محاسبة العيادات", "محاسبة المقاولات", "محاسبة كتب", "خدمات محاسبة كتب", "تسجيل المعاملات", "تقارير مالية", "محاسبة الرياض", "محاسبة كتب جدة", "محاسبة كتب الدمام", "محاسبة كتب الخبر", "محاسبة كتب مكة", "محاسبة كتب المدينة", "امتثال محاسبي", "إدارة السجلات المالية", "محاسبة سعودية", "خدمات محاسبية",
    "accounting firm Saudi Arabia", "accounting services Riyadh", "accounting company Jeddah", "accounting services Khobar", "best accounting firms Saudi", "certified accountant Saudi", "corporate accountant", "restaurant accounting", "clinic accounting", "construction accounting", "bookkeeping", "bookkeeping services", "transaction recording", "financial reports", "Riyadh bookkeeping", "Jeddah bookkeeping", "Dammam bookkeeping", "Khobar bookkeeping", "Makkah bookkeeping", "Madinah bookkeeping", "accounting compliance", "financial record management", "Saudi bookkeeping", "accounting services",

    // Legacy Keywords
    "accounting services Riyadh", "bookkeeping Saudi Arabia", "VAT compliance Riyadh", "audit services Jeddah", "payroll management Saudi Arabia", "financial advisory Riyadh", "ZATCA compliance", "accounting firm Riyadh", "tax services Saudi Arabia", "business accounting Riyadh", "محاسبة الرياض", "خدمات محاسبية السعودية", "ضريبة القيمة المضافة الرياض", "مراجعة الحسابات جدة", "إدارة الرواتب السعودية"
  ],
  authors: [{ name: "Creative Accounting" }],
  creator: "Creative Accounting",
  publisher: "Creative Accounting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://creativeeaccounting.com',
    languages: {
      'ar': 'https://creativeeaccounting.com',
    }
  },
  openGraph: {
    title: "التسجيل في الضريبة | تأسيس الشركات في السعودية | محاسبة إبداعية الرياض",
    description: "شركة محاسبة رائدة في الرياض، السعودية. خدمات محاسبة خبيرة، امتثال ضريبة القيمة المضافة، مراجعة، إدارة رواتب واستشارات مالية. معتمد من هيئة الزكاة والضريبة والجمارك.",
    url: "https://creativeeaccounting.com",
    siteName: "محاسبة إبداعية",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "شعار محاسبة إبداعية الرياض"
      }
    ],
    locale: "ar_SA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "التسجيل في الضريبة | تأسيس الشركات في السعودية | محاسبة إبداعية الرياض",
    description: "شركة محاسبة رائدة في الرياض، السعودية. خدمات محاسبة خبيرة، امتثال ضريبة القيمة المضافة، مراجعة، إدارة رواتب واستشارات مالية.",
    images: ["/logo.png"],
    creator: "@creativeaccounting"
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code'
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Creative Accounting",
    "description": "شركة محاسبة رائدة في الرياض، السعودية تقدم خدمات محاسبة خبيرة، امتثال ضريبة القيمة المضافة، مراجعة، إدارة رواتب واستشارات مالية.",
    "url": "https://creativeeaccounting.com",
    "logo": "https://creativeeaccounting.com/logo.png",
    "image": "https://creativeeaccounting.com/logo.png",
    "telephone": "+966-11-123-4567",
    "email": "info@creativeeaccounting.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rifah Ibn Rafi Street - Olaya District",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "postalCode": "12345",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.68066,
      "longitude": 46.69795
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Riyadh"
      },
      {
        "@type": "City",
        "name": "Jeddah"
      },
      {
        "@type": "City",
        "name": "Dammam"
      },
      {
        "@type": "City",
        "name": "Khobar"
      },
      {
        "@type": "City",
        "name": "Makkah"
      },
      {
        "@type": "City",
        "name": "Madinah"
      }
    ],
    "serviceType": [
      "Bookkeeping Services",
      "VAT Compliance",
      "Audit Services",
      "Payroll Management",
      "Financial Advisory",
      "Tax Services",
      "ZATCA Compliance",
      "Company Formation",
      "Business Setup",
      "Restaurant Accounting",
      "Clinic Accounting",
      "Construction Accounting",
      "Corporate Accounting",
      "Financial Planning",
      "Tax Planning",
      "VAT Registration",
      "Business Registration",
      "Accounting Consultation",
      "Financial Reporting"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "sameAs": [
      "https://www.facebook.com/creativeaccounting",
      "https://www.linkedin.com/company/creative-accounting",
      "https://twitter.com/creativeacc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Company Formation Services",
            "description": "Complete company registration and formation services in Saudi Arabia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VAT Registration & Compliance",
            "description": "ZATCA VAT registration, compliance, and return filing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bookkeeping Services",
            "description": "Professional bookkeeping and financial record management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restaurant Accounting",
            "description": "Specialized accounting services for restaurants and food businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Clinic Accounting",
            "description": "Accounting services tailored for medical clinics and healthcare facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Accounting",
            "description": "Specialized accounting for construction companies and contractors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Accounting",
            "description": "Comprehensive accounting services for corporations and large businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audit Services",
            "description": "Comprehensive financial auditing and assurance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Management",
            "description": "Complete payroll processing and HR accounting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Advisory",
            "description": "Strategic financial planning and business advisory services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://creativeeaccounting.com" />
        <link rel="alternate" hrefLang="ar" href="https://creativeeaccounting.com" />
      </head>
      <body
        className={`${cairo.variable} antialiased relative font-sans`}
        style={{ backgroundColor: '#000814', color: '#FFFFFF' }}
      >
                <GoogleTagManager GTM_MEASUREMENT_ID={GTM_MEASUREMENT_ID} />
                <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      

        <div className="min-h-screen flex flex-col relative z-10">
          <div className="relative z-10 flex-grow">
            <SocialLinkButton/>
            <Navbar/>
        <SmoothScroll>{children}</SmoothScroll >
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

