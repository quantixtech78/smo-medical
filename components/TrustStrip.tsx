const items = [
  "ASTRA TECH IMPLANT SYSTEM",
  "Flash Whitening System",
  "أجهزة زراعة عالمية",
  "معتمدة ومضمونة",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-ink/5 bg-white/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ink/45 text-sm font-medium">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-10">
            {item}
            {i < items.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-ink/20" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
