import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع مؤسسة الخيارات الذكية الطبية لطلب عرض سعر أو استشارة حول تجهيز عيادتك بأحدث أجهزة الأسنان.",
};

const info = [
  {
    label: "الهاتف",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    ltr: true,
    icon: (
      <path
        strokeLinecap="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
      />
    ),
  },
  {
    label: "البريد الإلكتروني",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l9 6 9-6M3 6h18v12H3z"
      />
    ),
  },
  {
    label: "واتساب",
    value: site.phoneDisplay,
    href: site.whatsapp,
    ltr: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-4.5-7.79L21 3l-1.21 4.5A8.96 8.96 0 0121 12z"
      />
    ),
  },
  {
    label: "الموقع",
    value: site.location,
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z"
        />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="تواصل معنا"
        title="نحن هنا لمساعدتك"
        subtitle="أخبرنا باحتياج عيادتك وسنعاود التواصل معك بأفضل الحلول وعرض سعر مناسب."
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal className="lg:col-span-2 space-y-4">
            {info.map((c) => {
              const inner = (
                <div className="flex items-center gap-4 bg-white rounded-2xl ring-1 ring-ink/5 shadow-card p-5 hover:ring-teal/30 transition">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-aqua flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      {c.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-ink/50">{c.label}</div>
                    <div
                      className="font-semibold text-ink"
                      dir={c.ltr ? "ltr" : undefined}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
