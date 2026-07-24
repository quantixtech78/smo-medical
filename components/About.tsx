import Reveal from "./Reveal";

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

const guarantees = [
  "أجهزة أصلية ومعتمدة 100%",
  "دعم فني وصيانة مستمرة",
  "تدريب الفريق على الاستخدام",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT — two designed cards (replaces the two photos) */}
        <Reveal className="order-2 lg:order-1 relative">
          <div className="grid gap-5">
            {/* Card A — global partners (gradient) */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-petrol to-teal p-7 lg:p-8 text-white shadow-soft">
              <div className="absolute inset-0 dot-grid opacity-[.14]" />
              <div className="absolute -top-16 -left-10 w-56 h-56 rounded-full bg-aqua/25 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl">
                      شركاء عالميون معتمدون
                    </h3>
                    <p className="text-white/70 text-sm mt-0.5">
                      توريد رسمي من شركات رائدة عالميًا
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["ASTRA TECH", "fläsh", "WHITEsmile"].map((b) => (
                    <span
                      key={b}
                      className="text-xs font-bold bg-white/12 ring-1 ring-white/15 rounded-full px-3.5 py-1.5"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card B — guarantees (white, offset) */}
            <div className="rounded-3xl bg-white ring-1 ring-ink/5 shadow-card p-7 lg:p-8 lg:mr-12">
              <div className="eyebrow text-champagne text-xs font-bold mb-4">
                لماذا نحن
              </div>
              <h3 className="font-display font-extrabold text-xl text-ink">
                معايير نثق بها
              </h3>
              <ul className="space-y-3 mt-5">
                {guarantees.map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-3 text-ink/80 text-[15px]"
                  >
                    <Check />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* floating stat chip */}
          <div className="glass absolute -bottom-11 right-4 lg:right-8 rounded-2xl shadow-soft ring-1 ring-white/60 px-5 py-4 flex items-center gap-3 animate-bounce">
            <div className="text-3xl font-extrabold text-teal font-display">
              30<span className="text-aqua">+</span>
            </div>
            <div className="text-xs text-ink/60 leading-tight">
              طبيب
              <br />
              يثقون بنا
            </div>
          </div>
        </Reveal>

        {/* RIGHT — copy */}
        <Reveal className="order-1 lg:order-2">
          <span className="eyebrow text-champagne text-sm font-semibold">
            من نحن
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink leading-tight mt-5 font-display">
            شريكك المتخصص في تجهيز عيادات الأسنان
          </h2>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-petrol to-teal px-5 py-4 mt-5 mb-2 shadow-soft ring-1 ring-white/10">
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="relative flex items-center justify-start gap-4 text-right">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-white/15 backdrop-blur text-mint">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 0c-4 0-7 3-7 7h14c0-4-3-7-7-7z"
                  />
                </svg>
              </div>
              <div className="min-w-0 text-right">
                <div className="font-display font-bold text-lg text-mint">
                  الموزّع الحصري
                </div>
                <div className="mt-1 text-sm text-white/80 leading-tight">
                  في المنطقة الشرقية — المملكة العربية السعودية
                </div>
              </div>
            </div>
          </div>

          <p className="text-ink/70 leading-relaxed mt-5 text-[17px]">
            مؤسسة الخيارات الذكية الطبية شركة متخصصة في تجهيز عيادات الأسنان
            وتوفير أحدث الأجهزة والتقنيات العالمية، لدعم أطباء الأسنان بأفضل
            الحلول التي تساعدهم على تقديم نتائج دقيقة ومتميزة.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-card ring-1 ring-ink/5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal to-aqua flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-ink">زراعة الأسنان</h3>
                <p className="text-sm text-ink/60 mt-1">
                  أنظمة زراعة عالمية بثبات ونتائج طويلة المدى.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-card ring-1 ring-ink/5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal to-aqua flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2L3 14h7l-1 8 10-12h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-ink">تبييض الأسنان</h3>
                <p className="text-sm text-ink/60 mt-1">
                  أجهزة تبييض احترافية بنتائج فورية وآمنة.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-2 mt-8 text-teal font-semibold hover:gap-3 transition-all"
          >
            تعرّف على منتجاتنا
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
          </a>
        </Reveal>
      </div>
    </section>
  );
}
