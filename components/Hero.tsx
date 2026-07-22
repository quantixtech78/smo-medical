import Image from "next/image";
import Reveal from "./Reveal";
import { images, site } from "@/lib/site";

const chips = ["زراعة الأسنان", "تبييض الأسنان", "توريد عالمي", "دعم فني"];

export default function Hero() {
  return (
    <section id="top" className="relative pt-[92px] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pearl via-white to-pearl" />
        <div className="absolute top-24 -left-40 w-[520px] h-[520px] rounded-full bg-aqua/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[460px] h-[460px] rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-50 [mask-image:radial-gradient(60%_50%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <Reveal>
          <span className="eyebrow text-champagne text-sm font-semibold tracking-wide">
            حلول طب الأسنان المتكاملة
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.18] text-ink mt-5 font-display">
            حلول متكاملة لتجهيز{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-l from-teal to-aqua bg-clip-text text-transparent">
                عيادات الأسنان
              </span>
              <span className="absolute -bottom-1 inset-x-0 h-3 bg-aqua/25 rounded-full -z-0" />
            </span>{" "}
            بأحدث التقنيات
          </h1>
          <p className="text-lg text-ink/70 leading-relaxed mt-6 max-w-xl">
            في مؤسسة الخيارات الذكية الطبية نوفّر أحدث أجهزة وتقنيات زراعة وتبييض
            الأسنان، لنساعدك على تقديم خدمة احترافية لمرضاك بأعلى جودة.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#products"
              className="btn-primary text-white font-semibold px-7 py-3.5 rounded-full"
            >
              استعرض المنتجات
            </a>
            <a
              href={site.whatsapp}
              className="btn-ghost border border-ink/15 text-ink font-semibold px-7 py-3.5 rounded-full transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 text-teal"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.5 14.4c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15s-.78 1-.96 1.2c-.18.2-.35.22-.65.08a8.3 8.3 0 01-2.45-1.5 9.2 9.2 0 01-1.7-2.1c-.18-.3 0-.47.13-.62.13-.13.28-.35.42-.52.14-.18.18-.3.28-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.15 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35zM12 2a10 10 0 00-8.5 15.28L2 22l4.85-1.47A10 10 0 1012 2z" />
              </svg>
              تواصل معنا
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-9 text-sm text-ink/60">
            {chips.map((c) => (
              <span key={c} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="relative glow-mint">
            <div className="relative z-10 rounded-[28px] overflow-hidden shadow-glow ring-1 ring-white/60 bg-white">
              <Image
                src={images.heroClinic}
                alt="تجهيز عيادات الأسنان"
                width={1200}
                height={900}
                className="w-full h-[440px] lg:h-[520px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="glass absolute -bottom-6 -right-4 lg:-right-8 z-20 rounded-2xl shadow-soft ring-1 ring-white/60 px-6 py-5">
            <div className="flex items-center gap-5">
              <div>
                <div className="text-3xl font-extrabold text-teal font-display">
                  50<span className="text-aqua">+</span>
                </div>
                <div className="text-xs text-ink/60 mt-0.5">عيادة تم تجهيزها</div>
              </div>
              <div className="w-px h-10 bg-ink/10" />
              <div>
                <div className="text-3xl font-extrabold text-teal font-display">
                  100<span className="text-aqua">%</span>
                </div>
                <div className="text-xs text-ink/60 mt-0.5">رضا العملاء</div>
              </div>
            </div>
          </div>

          <div className="glass absolute -top-4 -left-3 lg:-left-6 z-20 rounded-xl shadow-card ring-1 ring-white/60 px-4 py-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-aqua animate-pulseDot" />
            <span className="text-xs font-semibold text-ink/80">
              تقنيات عالمية معتمدة
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
