"use client";
import { GlassPhoneDuo } from "@/components/glassyui/glass-phone-duo";
import { useEffect, useRef, useState } from "react";

export function DuoSection() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const section = sectionRef.current;

      if (section && currentScrollY !== previousScrollY.current) {
        const scrollingDown = currentScrollY > previousScrollY.current;
        const scrollingUp = currentScrollY < previousScrollY.current;
        const bounds = section.getBoundingClientRect();
        const visibleHeight = Math.max(
          0,
          Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0),
        );
        const sectionVisible =
          bounds.height > 0 && visibleHeight / bounds.height >= 0.7;

        if (sectionVisible) {
          if (scrollingDown) setOpen(true);
          if (scrollingUp) setOpen(false);
        }
        previousScrollY.current = currentScrollY;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="bg-amber-50">
      <GlassPhoneDuo
        className="w-full max-w-4xl bg-amber-50"
        open={open}
        finish="star-white"
        screenSrc="/landing/openDuo.png"
        coverSrc="/landing/closeDuo.png"
      />
    </div>
  );
}
