"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Carousel({
  images,
  alt,
  autoPlay = true,
  interval = 3000,
}: {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );
  const to = (i: number) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;
    const t = setInterval(() => go(1), interval);
    return () => clearInterval(t);
  }, [autoPlay, count, interval, go]);

  return (
    <div className="relative glow-mint">
      <div
        className="relative z-10 rounded-[26px] overflow-hidden shadow-glow ring-1 ring-white/60 bg-white"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          // RTL: swipe left (dx<0) → next
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="relative aspect-[4/3] w-full">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-contain bg-white p-6 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="السابق"
              className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full glass ring-1 ring-white/60 flex items-center justify-center text-ink hover:text-teal transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="التالي"
              className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full glass ring-1 ring-white/60 flex items-center justify-center text-ink hover:text-teal transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => to(i)}
              aria-label={`صورة ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-teal" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
