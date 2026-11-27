"use client";

import {
  ArrowRightIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

export function DashboardPromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="relative isolate grid min-h-65 overflow-hidden rounded-xl bg-[#09080b] text-white md:grid-cols-[1.15fr_0.85fr]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 18px, rgba(0,0,0,.52) 20px, rgba(0,0,0,.52) 24px), linear-gradient(105deg, #020617 0%, #220814 42%, #a20e22 67%, #45100b 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/60 via-transparent to-black/20"
      />

      <div className="flex flex-col items-start justify-center p-6 sm:p-9 lg:p-10">
        <h2 className="max-w-155 text-4xl leading-[0.98] font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Get your own app,
          <br />
          in your name
        </h2>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#f0efed]"
          >
            Book a founding call
            <ArrowRightIcon className="size-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center rounded-xl border border-white/30 bg-black/20 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* right box */}
      <div className="hidden items-center justify-center p-7 md:flex">
        
      </div>

      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss app promotion"
        className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/55 text-white/90 transition-colors hover:bg-black/80"
      >
        <XIcon className="size-4" />
      </button>
    </section>
  );
}
