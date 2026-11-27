"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroTextProps {
  text?: string;
  className?: string;
}

export default function HeroText({
  text = "KNOW YOUR PEOPLE\nOWN YOUR MARKET",
  className = "",
}: HeroTextProps) {
  const [count, setCount] = useState(0);
  const characters = text.split("");

  return (
    <div
      className={`relative flex flex-col items-center justify-center pt-5 h-full w-full bg-white text-black transition-colors duration-700 ${className}`}
    >
      {/* Main Text Container */}
      <div className="relative z-10 justify-center w-full flex flex-col items-center ">
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            className="flex flex-wrap justify-center items-center w-full"
          >
            {characters.map((char, i) =>
              char === "\n" ? (
                <div key={i} className="basis-full h-0" aria-hidden="true" />
              ) : (
                <div
                  key={i}
                  className="relative px-[0.1vw] overflow-hidden group"
                >
                {/* Main Character */}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    delay: i * 0.04 + 0.3,
                    duration: 0.8,
                  }}
                  className="text-[9vw] 2xl:text-[9.5vw] leading-none 2xl:leading-30 font-black text-black tracking-tighter"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Top Slice Layer */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 text-[9vw] 2xl:text-[9.5vw] leading-none 2xl:leading-30 font-black tracking-tighter text-indigo-600 z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
                  }}
                >
                  {char}
                </motion.span>

                {/* Middle Slice Layer */}
                <motion.span
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "-100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04 + 0.1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 text-[9vw] 2xl:text-[9.5vw] leading-none font-black tracking-tighter text-black z-10 pointer-events-none"
                  style={{
                    clipPath:
                      "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                  }}
                >
                  {char}
                </motion.span>

                {/* Bottom Slice Layer */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04 + 0.2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 text-[9vw] 2xl:text-[9.5vw] leading-none font-black tracking-tighter text-indigo-600 z-10 pointer-events-none"
                  style={{
                    clipPath:
                      "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                  }}
                >
                  {char}
                </motion.span>
                </div>
              ),
            )}
          </motion.div>
        </AnimatePresence>
      </div>


    </div>
  );
}
