export const site = {
  name: "مؤسسة الخيارات الذكية الطبية",
  shortName: "SMO Medical",
  description:
    "مؤسسة الخيارات الذكية الطبية — حلول متكاملة لتجهيز عيادات الأسنان بأحدث تقنيات الزراعة والتبييض في المملكة العربية السعودية.",
  url: "https://smo-medical.com",
  phone: "+966568399219",
  phoneDisplay: "+966 56 839 9219",
  email: "info@smo-medical.com",
  whatsapp: "https://wa.me/966568399219",
  whatsappNumber: "966568399219",
  location: "المملكة العربية السعودية",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

// Route-aware navigation. `match` marks links that map to a full page
// (used for the active-link highlight); hash links scroll within home.
export const navLinks = [
  { href: "/", label: "الرئيسية", match: "/" },
  { href: "/#about", label: "من نحن" },
  { href: "/#services", label: "الخدمات" },
  { href: "/products", label: "المنتجات", match: "/products" },
  { href: "/contact", label: "تواصل معنا", match: "/contact" },
];

export const images = {
  // SMO logo (transparent PNG) — also reused white in the footer.
  logo:
    "https://smo-medical.com/wp-content/uploads/2026/05/IMG-20260521-WA0044-removebg-preview-1024x188.png",
  // Hero: a real dental-clinic scene (swap for a /public asset anytime).
  heroClinic: "/Hero.jpg",
  about1:
    "https://smo-medical.com/wp-content/uploads/2026/05/IMG-20260521-WA0027-685x1024.jpg",
  about2:
    "https://smo-medical.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-23-at-7.11.50-PM-721x1024.jpeg",
};

export type Product = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  features: string[];
  cover: string; // best single photo, used on the home Products section
  gallery: string[]; // carousel images on the /products page
  source: string;
};

export const products: Product[] = [
  {
    slug: "astra-tech",
    tag: "أنظمة الزراعة",
    title: "ASTRA TECH IMPLANT SYSTEM",
    desc: "نظام زراعة أسنان عالمي من Dentsply Sirona يوفّر ثباتًا عاليًا ونتائج طويلة المدى موثّقة سريريًا لأكثر من ٣٠ عامًا.",
    features: [
      "دقة عالية في الزراعة",
      "ثبات ممتاز على المدى الطويل",
      "تقنيات حديثة تقلّل من المضاعفات",
      "نتائج تجميلية طبيعية",
    ],
    cover: "/ASTRA_1.png",
    gallery: [
      "/ASTRA_1.png",
      "/ASTRA_2.jpg",
      "/ASTRA_3.png",
      "/ASTRA_4.png",
    ],
    source:
      "https://www.dentsplysirona.com/en-ae/discover/discover-by-brand/astra-tech-implant-system.html",
  },
  {
    slug: "flash-whitening",
    tag: "تبييض الأسنان",
    title: "Flash Whitening System",
    desc: "جهاز تبييض احترافي ألماني الصنع (fläsh) يعتمد أحدث تقنية LED عالية الأداء لتحقيق نتائج سريعة وآمنة داخل العيادة.",
    features: [
      "نتائج فورية من أول جلسة",
      "آمن على الأسنان واللثة",
      "سهل الاستخدام داخل العيادة",
      "مناسب لجميع الحالات",
    ],
    cover: "/Flash_1.webp",
    gallery: [
      "/Flash_1.webp",
      "/Flash_2.jpg",
      "/Flash_3.jpg",
      "/Flash_4.jpg",
    ],
    source: "https://flaesh.com/",
  },
];
