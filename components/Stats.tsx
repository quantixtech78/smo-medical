import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { target: 100, suffix: "%", label: "رضا العملاء" },
  { target: 30, suffix: "+", label: "طبيب يثقون بنا" },
  { target: 100, suffix: "+", label: "جهاز تم توريده" },
  { target: 50, suffix: "+", label: "عيادة تم تجهيزها" },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[.15]" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-teal/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-aqua/20 blur-3xl rounded-full" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-champagne text-sm font-semibold justify-center">
            نحن بالأرقام
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-5 font-display">
            ثقة يبنيها الأداء
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="text-5xl lg:text-6xl font-extrabold text-white font-display">
                <CountUp target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-white/60 mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
