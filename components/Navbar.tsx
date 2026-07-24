"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { images, navLinks, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Home has a light hero the nav can float over transparently.
  const overHero = pathname === "/";
  // "island" = the floating rounded dark pill (on scroll, or on inner pages).
  const island = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (link: (typeof navLinks)[number]) =>
    link.match ? pathname === link.match : false;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-all duration-300 ${
          island ? "px-3 sm:px-5 pt-3" : ""
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            island
              ? "max-w-6xl mx-auto rounded-2xl bg-ink/85 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_-20px_rgba(6,51,59,0.65)]"
              : "bg-transparent"
          }`}
        >
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              island
                ? "px-5 lg:px-7 h-[64px]"
                : "max-w-7xl mx-auto px-5 lg:px-8 h-[92px]"
            }`}
          >
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src={images.logo}
                alt={site.name}
                width={240}
                height={44}
                className={`w-auto transition-all duration-300 ${
                  island ? "h-9 brightness-0 invert" : "h-12"
                }`}
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
              {navLinks.map((l) => {
                const active = isActive(l);
                const base = island
                  ? active
                    ? "text-mint"
                    : "text-white/75 hover:text-white"
                  : active
                    ? "text-teal"
                    : "text-ink/80 hover:text-teal";
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative transition-colors ${base}`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1.5 right-0 h-0.5 rounded-full bg-gradient-to-l from-aqua to-mint transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full hidden sm:inline-flex items-center gap-2 transition-all duration-300 ${
                island
                  ? "bg-gradient-to-l from-mint to-aqua text-ink hover:shadow-[0_10px_24px_-10px_rgba(33,199,192,0.7)]"
                  : "btn-primary text-white shadow-sm"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-4.5-7.79L21 3l-1.21 4.5A8.96 8.96 0 0121 12z"
                />
              </svg>
              طلب عرض سعر
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden p-2 ${island ? "text-white" : "text-ink"}`}
              aria-label="القائمة"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className={`lg:hidden ${
            island
              ? "mx-3 sm:mx-5 mt-2 rounded-2xl bg-ink/95 backdrop-blur-md border border-white/10"
              : "glass border-b border-white/40"
          }`}
        >
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1 font-medium">
            {navLinks.map((l, i) => {
              const active = isActive(l);
              const color = island
                ? active
                  ? "text-mint"
                  : "text-white/85"
                : active
                  ? "text-teal"
                  : "text-ink/85";
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 ${
                    i < navLinks.length - 1
                      ? island
                        ? "border-b border-white/10"
                        : "border-b border-ink/5"
                      : ""
                  } ${color}`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`text-center font-semibold px-5 py-3 rounded-full mt-2 ${
                island
                  ? "bg-gradient-to-l from-mint to-aqua text-ink"
                  : "btn-primary text-white"
              }`}
            >
              طلب عرض سعر
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
