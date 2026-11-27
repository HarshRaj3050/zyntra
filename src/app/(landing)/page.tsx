import { DuoSection } from "@/components/landing/DuoSection";
import HeroSection from "@/components/landing/HeroSection";
import Flowing from "@/components/landing/Flowing";

const HomePage = () => {
  return (
    <>
      <div className="h-dvh">
        <HeroSection />
      </div>
      <div className="h-dvh ">
        <div className="flex h-full w-full">
          <div className="flex w-[60%] bg-amber-50">
            <DuoSection />
          </div>
          <div className="flex h-full w-[40%] flex-col items-center justify-center bg-blue-800">
            <h2 className="mb-4 w-full text-center text-5xl font-bold text-white">
              Why Choose Zyntra?
            </h2>
            <h3 className="mb-3 text-lg  text-white">
              There are multiple ways to generate income.
            </h3>
            <Flowing className="z-10 w-full" />
          </div>
        </div>
      </div>
      <div className="h-dvh">Home page</div>
    </>
  );
};

export default HomePage;
