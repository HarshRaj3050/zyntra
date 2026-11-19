"use client";

import Image from "next/image";
import { useRef } from "react";
import HeroText from "../../components/landing/ui/Hero-shutter-text";
import VariableProximity from "../../components/landing/ui/VariableProximity";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <main className="h-dvh w-full">
      <div className="h-[55%] w-full overflow-hidden bg-white dark:bg-zinc-950">
        <HeroText />
      </div>

      {/* hero-section bottom*/}
      <div className="h-[45%] w-full bg-blue-700 flex ">
        <div className="w-1/2 p-10">
          <div className="flex flex-col justify-center h-full">
            <div ref={containerRef} className="relative">
              <VariableProximity
                label={
                  "Offer calls, CV reviews, guides and courses from one page at zyntra.in/yourname. Share the link with the people who ask. Zyntra handles the booking, the payment and the reminders."
                }
                className="text-[1.5rem] leading-relaxed text-white"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                fromColor="white"
                toColor="white"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
                smoothing={0.2}
                scale={1}
                lift={0}
                idleWave={false}
                fontSize={23}
              />
            </div>
            <p className="text-[1.25rem] text-gray-300 py-6">
              Free to start. No card needed.
            </p>
            <div className="flex justify-between gap-10 ">
              <button className="w-full h-17 bg-black rounded-2xl text-xl font-bold text-white cursor-pointer">
                Start selling
              </button>
              <button className="w-full h-17 bg-blue-300 rounded-2xl text-xl font-bold text-black cursor-pointer">
                Book an expert
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            src="/images/landing/hero-section-bottom-image.jpg"
            alt="Hero Image"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
