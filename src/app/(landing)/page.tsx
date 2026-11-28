import { DuoSection } from "@/components/landing/DuoSection";
import HeroSection from "@/components/landing/HeroSection";
import Flowing from "@/components/landing/Flowing";

const HomePage = () => {
  return (
    <>
      <div className="h-dvh">
        <HeroSection />
      </div>

      {/* Duo Section */}
      <div className="h-dvh rounded-b-4xl ">
        <div className="flex h-auto lg:h-full w-full lg:flex-row flex-col-reverse">
          <div className="flex w-full lg:w-[60%] bg-blue-700">
            <DuoSection />
          </div>
          <div className="flex h-full w-full lg:w-[40%] pt-10 lg:pt-0 flex-col items-center justify-center bg-blue-700">
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
      <div className="h-dvh bg-[#0E0E0E] text-white ">Home page</div>
    </>
  );
};

export default HomePage;
