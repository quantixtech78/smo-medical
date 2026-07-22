import Reveal from "./Reveal";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "تجهيز العيادات بالكامل",
    desc: "حلول متكاملة لتأسيس وتجهيز عيادات الأسنان بأحدث الأجهزة.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"
      />
    ),
  },
  {
    title: "توريد الأجهزة الطبية",
    desc: "أحدث أجهزة تبييض الأسنان وأنظمة الزراعة من شركات عالمية.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10m0-10L4 7v10l8 4"
      />
    ),
  },
  {
    title: "الدعم الفني",
    desc: "فريق متخصص لتقديم الدعم والصيانة والمتابعة المستمرة.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 4a4 4 0 00-4 4v1a4 4 0 004 4m0-9a4 4 0 014 4v1a4 4 0 01-4 4m0 0v6m-4-3h8"
      />
    ),
  },
  {
    title: "الاستشارات",
    desc: "نساعدك في اختيار أفضل الحلول المناسبة لعيادتك واحتياجاتك.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-4.5-7.79L21 3l-1.21 4.5A8.96 8.96 0 0121 12z"
      />
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-aqua/5 blur-3xl rounded-full" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-champagne text-sm font-semibold justify-center">
            الخدمات
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-5 font-display">
            حلول متكاملة من التأسيس إلى الدعم
          </h2>
          <p className="text-ink/60 mt-4 text-[17px]">
            نرافقك في كل مرحلة لتجهيز عيادة أسنان متكاملة وحديثة.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {services.map((s) => (
            <Reveal key={s.title}>
              <article className="group relative h-full bg-pearl/70 rounded-2xl p-7 ring-1 ring-ink/5 overflow-hidden transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-2 hover:bg-white hover:ring-aqua/30 hover:shadow-[0_30px_60px_-28px_rgba(6,51,59,0.35)]">
                {/* radial sheen on hover */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 50% 0%, rgba(33,199,192,0.12), transparent 55%)",
                  }}
                />
                {/* top accent line grows from center */}
                <span className="absolute top-0 right-1/2 translate-x-1/2 h-0.5 w-10 rounded-full bg-gradient-to-l from-teal to-aqua transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:w-[calc(100%-3.5rem)]" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center mb-5 text-teal transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-aqua group-hover:text-white group-hover:shadow-glow">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      {s.icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-ink">{s.title}</h3>
                  <p className="text-sm text-ink/60 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
