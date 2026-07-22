import Image from "next/image";
import { images, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src={images.logo}
              alt={site.name}
              width={200}
              height={38}
              className="h-10 w-auto mb-5 brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed text-white/55">
              شريكك الموثوق في تجهيز عيادات الأسنان بأحدث التقنيات العالمية في
              الزراعة والتبييض، لدعم نجاح ورضا مرضاك.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 9H16l.5-3h-3V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.5 0 14.3 0 11.8 0 10 1.5 10 4.3V6H7v3h3v9h3.5V9z" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.7 0 3 0 4.1.06 1 .05 1.6.2 2 .4.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.35 1 .4 2 .06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1-.2 1.6-.4 2a3.5 3.5 0 01-.9 1.3c-.4.4-.8.7-1.3.9-.4.2-1 .35-2 .4-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1-.05-1.6-.2-2-.4a3.5 3.5 0 01-1.3-.9 3.5 3.5 0 01-.9-1.3c-.2-.4-.35-1-.4-2C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1 .2-1.6.4-2 .2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.35 2-.4C8 2 8.3 2 12 2zm0 3.2A6.8 6.8 0 1018.8 12 6.8 6.8 0 0012 5.2zm0 11.2A4.4 4.4 0 1116.4 12 4.4 4.4 0 0112 16.4zm6.4-11.6a1.6 1.6 0 11-1.6-1.6 1.6 1.6 0 011.6 1.6z" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.8-2.05 3.7-2.05 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-mint transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2 hover:text-mint transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-teal"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                    />
                  </svg>
                  <span dir="ltr">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 hover:text-mint transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-teal"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M3 6h18v12H3z"
                    />
                  </svg>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-teal"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {site.location}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">النشرة البريدية</h4>
            <p className="text-sm text-white/55 mb-4">
              اشترك ليصلك كل جديد من منتجاتنا والعروض الحصرية.
            </p>
            <form className="flex gap-2" action="#" method="post">
              <input
                type="email"
                required
                placeholder="بريدك الإلكتروني"
                aria-label="بريدك الإلكتروني"
                className="flex-1 min-w-0 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <button
                type="submit"
                className="btn-primary text-white font-semibold px-5 py-2.5 rounded-full text-sm whitespace-nowrap"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/45">
          <p>© 2026 مؤسسة الخيارات الذكية الطبية. جميع الحقوق محفوظة.</p>
          {/* <p>
            تصميم وتطوير بواسطة{" "}
            <span className="text-mint font-semibold">Artl Studio</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
