"use client";

import Image from "next/image";
import HeroText from "../../components/landing/ui/Hero-shutter-text";

const HeroSection = () => {
  return (
    <main className="h-dvh w-full">
      <div className="h-[55%] w-full overflow-hidden bg-white dark:bg-zinc-950">
        <HeroText />
      </div>

      {/* hero-section bottom*/}
      <div className="relative flex h-[45%] w-full overflow-hidden bg-blue-700/75 ">
        <div className="absolute inset-0">
          <Image
            src="/images/landing/hero-section-bottom.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full lg:w-1/2 md:p-10 p-5">
          <div className="flex flex-col justify-center h-full">
            <p className="lg:text-[1.5rem] text-[1rem] leading-relaxed text-white">
              Offer calls, CV reviews, guides and courses from one page at
              zyntra.in/yourname. Share the link with the people who ask. Zyntra
              handles the booking, the payment and the reminders.
            </p>
            <p className="lg:text-[1.25rem] text-[1rem] text-gray-300 lg:py-6 py-4">
              Free to start. No card needed.
            </p>
            <div className="flex justify-between lg:gap-10 gap-4">
              <button className="w-full h-17 bg-black rounded-2xl text-xl font-bold text-white border-2 cursor-pointer">
                Start selling
              </button>
              <button className="w-full h-17 bg-blue-300 rounded-2xl text-xl font-bold text-black cursor-pointer">
                Book an expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
