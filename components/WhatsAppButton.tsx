import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.5 14.4c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15s-.78 1-.96 1.2c-.18.2-.35.22-.65.08a8.3 8.3 0 01-2.45-1.5 9.2 9.2 0 01-1.7-2.1c-.18-.3 0-.47.13-.62.13-.13.28-.35.42-.52.14-.18.18-.3.28-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.15 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35zM12 2a10 10 0 00-8.5 15.28L2 22l4.85-1.47A10 10 0 1012 2z" />
      </svg>
    </a>
  );
}
