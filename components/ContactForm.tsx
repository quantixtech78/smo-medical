"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Fields = {
  name: string;
  clinic: string;
  phone: string;
  email: string;
  message: string;
};

const empty: Fields = { name: "", clinic: "", phone: "", email: "", message: "" };

export default function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, boolean>>>(
    {}
  );
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<any>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof Fields, boolean>> = {};
    if (!f.name.trim()) next.name = true;
    if (!f.phone.trim()) next.phone = true;
    if (!f.message.trim()) next.message = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    const text = [
      "طلب تواصل جديد من الموقع:",
      `الاسم: ${f.name}`,
      f.clinic && `العيادة: ${f.clinic}`,
      `الجوال: ${f.phone}`,
      f.email && `البريد: ${f.email}`,
      `الرسالة: ${f.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field =
    "w-full bg-pearl/60 border rounded-xl px-4 py-3 text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-teal transition";
  const ok = "border-ink/10";
  const bad = "border-red-400 focus:ring-red-400";

  if (sent) {
    return (
      <div className="bg-white rounded-3xl ring-1 ring-ink/5 shadow-card p-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto">
          <svg
            className="w-8 h-8 text-teal"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-ink mt-5">تم تجهيز رسالتك</h3>
        <p className="text-ink/60 mt-2">
          فتحنا لك محادثة واتساب بتفاصيل طلبك. أرسلها وسنعاود التواصل معك سريعًا.
        </p>
        <button
          onClick={() => {
            setF(empty);
            setSent(false);
          }}
          className="btn-ghost border border-ink/15 text-ink font-semibold px-6 py-3 rounded-full mt-6 transition-colors"
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl ring-1 ring-ink/5 shadow-card p-7 lg:p-9">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">
            الاسم <span className="text-teal">*</span>
          </label>
          <input
            value={f.name}
            onChange={set("name")}
            placeholder="اسمك الكامل"
            className={`${field} ${errors.name ? bad : ok}`}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">
            اسم العيادة
          </label>
          <input
            value={f.clinic}
            onChange={set("clinic")}
            placeholder="اسم العيادة أو المركز"
            className={`${field} ${ok}`}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">
            رقم الجوال <span className="text-teal">*</span>
          </label>
          <input
            value={f.phone}
            onChange={set("phone")}
            inputMode="tel"
            placeholder="05xxxxxxxx"
            className={`${field} ${errors.phone ? bad : ok}`}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">
            البريد الإلكتروني
          </label>
          <input
            value={f.email}
            onChange={set("email")}
            inputMode="email"
            placeholder="you@example.com"
            className={`${field} ${ok}`}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-ink mb-2">
          رسالتك <span className="text-teal">*</span>
        </label>
        <textarea
          value={f.message}
          onChange={set("message")}
          rows={4}
          placeholder="اكتب تفاصيل طلبك أو استفسارك..."
          className={`${field} resize-none ${errors.message ? bad : ok}`}
        />
      </div>

      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-red-500 mt-3">
          يرجى تعبئة الحقول المطلوبة (الاسم، الجوال، الرسالة).
        </p>
      )}

      <button
        onClick={submit}
        className="btn-primary w-full sm:w-auto text-white font-semibold px-8 py-3.5 rounded-full mt-6 inline-flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.5 14.4c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15s-.78 1-.96 1.2c-.18.2-.35.22-.65.08a8.3 8.3 0 01-2.45-1.5 9.2 9.2 0 01-1.7-2.1c-.18-.3 0-.47.13-.62.13-.13.28-.35.42-.52.14-.18.18-.3.28-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.15 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35zM12 2a10 10 0 00-8.5 15.28L2 22l4.85-1.47A10 10 0 1012 2z" />
        </svg>
        إرسال عبر واتساب
      </button>
    </div>
  );
}
