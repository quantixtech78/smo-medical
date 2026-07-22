import type { Metadata } from "next";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { products, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "المنتجات",
  description:
    "أنظمة زراعة الأسنان ASTRA TECH وأجهزة تبييض Flash Whitening — منتجات عالمية معتمدة من مؤسسة الخيارات الذكية الطبية.",
};

function Check() {
  return (
    <span className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
      <svg
        className="w-3.5 h-3.5 text-teal"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="منتجاتنا المميزة"
        title="أجهزة عالمية بمعايير احترافية"
        subtitle="أنظمة زراعة وتبييض من أكثر الشركات ثقة عالميًا، نوفّرها لعيادتك مع الدعم والتدريب."
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-8">
        {products.map((p, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <Reveal
              key={p.slug}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx === 0 ? "mt-4" : "mt-24"
              }`}
            >
              <div className={reverse ? "lg:order-2" : ""}>
                <Carousel images={p.gallery} alt={p.title} />
              </div>

              <div className={reverse ? "lg:order-1" : ""}>
                <span className="inline-block text-xs font-bold text-teal bg-teal/10 px-3 py-1.5 rounded-full">
                  {p.tag}
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-ink font-display tracking-tight mt-4">
                  {p.title}
                </h2>
                <p className="text-ink/70 leading-relaxed mt-4 text-[17px]">
                  {p.desc}
                </p>
                <ul className="space-y-3 mt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-ink/80">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={site.whatsapp}
                    className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full"
                  >
                    اطلب الآن
                  </a>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 border border-ink/15 text-ink font-semibold px-7 py-3.5 rounded-full transition-colors"
                  >
                    المواصفات الكاملة
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <CTA />
    </main>
  );
}
