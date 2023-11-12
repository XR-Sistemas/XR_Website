import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projects } from "@/constants";
import { CarouselArrowIcon } from "../Icons/CarouselArrowIcon";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export function CardsSlide() {
  const [active, setActive] = useState(0);

  function onPrev() {
    setActive(active - 1);
  }

  function onNext() {
    setActive(active + 1);
  }

  const classArrow = "active:scale-95 hover:scale-105 cursor-pointer";

  return (
    <>
      <div className="flex w-full items-center justify-between my-4 mt-12">
        <h1 className="text-2xl font-bold font-helvetica text-white tracking-wider">
          More projects to show
        </h1>
        <div className="flex items-center gap-4">
          <CarouselArrowIcon onClick={onPrev} className={classArrow} />
          <CarouselArrowIcon
            onClick={onNext}
            className={`${classArrow} rotate-180`}
          />
        </div>
      </div>
      <Carousel
        selectedItem={active}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={30}
        className={`h-[400px] w-full`}
      >
        {projects.map((e, i) => (
          <div key={i} className="h-full flex flex-col justify-between mx-4">
            <Image
              width={10000}
              height={10000}
              src={e.imageUrl}
              alt="imageUrl"
              className="object-cover w-full h-full"
            />
            <div className="h-[20%] w-full">
              <div className="flex flex-col items-start justify-between">
                <h1
                  className="text-lg font-bold font-helvetica text-white tracking-wider"
                  children={e.title}
                />
                <p
                  className="text-sm font-normal font-helvetica text-white tracking-wider"
                  children={e.title}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
