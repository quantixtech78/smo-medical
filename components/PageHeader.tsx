import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-[92px]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pearl via-white to-pearl" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full bg-aqua/10 blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20 text-center">
        <Reveal>
          <span className="eyebrow text-champagne text-sm font-semibold justify-center">
            {eyebrow}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-ink mt-5 font-display">
            {title}
          </h1>
          {subtitle && (
            <p className="text-ink/65 mt-4 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
