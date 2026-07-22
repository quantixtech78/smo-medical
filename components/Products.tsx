import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { products, site } from "@/lib/site";

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

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-champagne text-sm font-semibold justify-center">
            منتجاتنا المميزة
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-5 font-display">
            أجهزة عالمية بمعايير احترافية
          </h2>
          <p className="text-ink/60 mt-4 text-[17px]">
            اخترنا لك نخبة من أنظمة الزراعة والتبييض الأكثر ثقة عالميًا.
          </p>
        </Reveal>

        {products.map((p, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <Reveal
              key={p.slug}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx === 0 ? "mt-16" : "mt-20"
              }`}
            >
              <div className={`relative glow-mint ${reverse ? "lg:order-2" : ""}`}>
                <div className="relative z-10 rounded-[26px] overflow-hidden shadow-glow ring-1 ring-white/60 bg-white">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    width={1024}
                    height={768}
                    className="w-full h-[420px] object-contain bg-white p-6"
                  />
                </div>
                <span className="absolute z-20 top-4 right-4 glass text-xs font-bold text-teal px-3 py-1.5 rounded-full ring-1 ring-white/60">
                  {p.tag}
                </span>
              </div>

              <div className={reverse ? "lg:order-1" : ""}>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-ink font-display tracking-tight">
                  {p.title}
                </h3>
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
                  <Link
                    href="/products"
                    className="btn-ghost inline-flex items-center gap-2 border border-ink/15 text-ink font-semibold px-7 py-3.5 rounded-full transition-colors"
                  >
                    عرض المزيد
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
          >
            استعرض كل المنتجات بالتفصيل
            <svg
              className="w-5 h-5 rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7-7 7M21 12H3"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
