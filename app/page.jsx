import SolutionsSection from "../components/home/SolutionFeatures";
import Hero from "../components/Hero";
import About from "../components/home/About";
import Services from "../components/Services";
import TestimonialSection from "@/components/home/Testimonial";
import Contact from "../components/home/Contact";
export const metadata = {
  title: "شركة محاسبة في السعودية | تأسيس الشركات | ضريبة القيمة المضافة | محاسب قانوني | Creative Accounting",
  description: "شركة محاسبة محترفة في الرياض، جدة، الدمام. خدمات شاملة: تأسيس الشركات في السعودية، التسجيل في ضريبة القيمة المضافة، محاسبة الشركات، محاسبة المطاعم، محاسبة العيادات. أفضل شركات المحاسبة في السعودية.",
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

    // Legacy Keywords
    "محاسبة", "خدمات محاسبة", "محاسبة في السعودية", "ضريبة القيمة المضافة", "مراجعة حسابات", "محاسبة كتب", "رواتب", "استشارات مالية", "محاسبة الرياض", "محاسبة جدة", "محاسبة الدمام", "محاسبة الخبر", "محاسبة مكة", "محاسبة المدينة", "خدمات محاسبية سعودية",
    "accounting", "accounting services", "Saudi Arabia accounting", "VAT", "audit", "bookkeeping", "payroll", "financial consulting", "Riyadh accounting", "Jeddah accounting", "Dammam accounting", "Khobar accounting", "Makkah accounting", "Madinah accounting", "Saudi accounting services"
  ],
  openGraph: {
    title: "شركة محاسبة في السعودية | تأسيس الشركات | ضريبة القيمة المضافة | محاسب قانوني",
    description: "شركة محاسبة محترفة في الرياض، جدة، الدمام. خدمات شاملة: تأسيس الشركات في السعودية، التسجيل في ضريبة القيمة المضافة، محاسبة الشركات، محاسبة المطاعم، محاسبة العيادات.",
    images: ["/CaLogo.png"],
    locale: "ar_SA",
    type: "website",
    siteName: "Creative Accounting"
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة محاسبة في السعودية | تأسيس الشركات | ضريبة القيمة المضافة",
    description: "أفضل شركات المحاسبة في السعودية - خدمات شاملة لتأسيس الشركات والامتثال الضريبي",
    images: ["/CaLogo.png"]
  },
  alternates: {
    canonical: 'https://creativeeaccounting.com'
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



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Hero Section */}
      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen bg-gradient-to-br from-[#000814] to-[#001d3d] text-white">
          <Hero />
        </div>
      </div>

      {/* About scrolls over Hero */}
      <section id="about" className="relative z-10 bg-white">
        <div className="text-gray-900">
          <About />
        </div>
      </section>

      {/* Rest of the site */}
      <section id="services" className="bg-gray-50">
        <div className="text-gray-900">
          <Services />
        </div>
      </section>

      <section id="solutions" className="bg-white">
        <div className="text-gray-900">
          <SolutionsSection />
        </div>
      </section>

      <section id="testimonials" className="bg-gray-50">
        <div className="text-gray-900">
          <TestimonialSection />
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-[#000814] to-[#001d3d]">
        <div className="text-white">
          <Contact />
        </div>
      </section>
    </div>
  );
}
