import { projects } from "@/constants";
import useBreakpoints from "@/hooks/useBreakpoints";
import dynamic from "next/dynamic";
const CarouselMobile = dynamic(() =>
  import("./CaroulselMobile").then((mod) => mod.CarouselMobile)
);
const CarouselDesktop = dynamic(() =>
  import("./CarouselDesktop").then((mod) => mod.CarouselDesktop)
);

export const BannerCarousel = () => {
  const { isSm, isXs } = useBreakpoints();
  const isMobile = isSm || isXs;

  return (
    <div className={`w-full`}>
      <div className="mt-[3rem]">
        {isMobile ? (
          <CarouselMobile data={projects} />
        ) : (
          <CarouselDesktop data={projects} />
        )}
      </div>
    </div>
  );
};
