import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <Reveal className="relative rounded-[32px] overflow-hidden bg-gradient-to-l from-petrol to-teal shadow-soft">
          <div className="absolute inset-0 dot-grid opacity-[.12]" />
          <div className="absolute -top-16 -right-10 w-72 h-72 bg-aqua/25 blur-3xl rounded-full" />
          <div className="relative px-8 lg:px-16 py-14 lg:py-16 text-center">
            <span className="eyebrow text-mint text-sm font-semibold justify-center">
              جاهز لتطوير عيادتك؟
            </span>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-white leading-tight mt-5 max-w-2xl mx-auto font-display">
              تواصل معنا الآن واحصل على استشارة وسعر خاص
            </h2>
            <p className="text-white/75 mt-4 max-w-xl mx-auto text-[17px]">
              فريقنا جاهز لمساعدتك في اختيار الحل الأنسب لعيادتك.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-9">
              <a
                href={site.whatsapp}
                className="bg-white text-teal font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-mint hover:text-ink transition-all duration-300 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 14.4c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15s-.78 1-.96 1.2c-.18.2-.35.22-.65.08a8.3 8.3 0 01-2.45-1.5 9.2 9.2 0 01-1.7-2.1c-.18-.3 0-.47.13-.62.13-.13.28-.35.42-.52.14-.18.18-.3.28-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.15 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35zM12 2a10 10 0 00-8.5 15.28L2 22l4.85-1.47A10 10 0 1012 2z" />
                </svg>
                تواصل عبر واتساب
              </a>
              <a
                href={`tel:${site.phone}`}
                className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                  />
                </svg>
                اتصل بنا
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
