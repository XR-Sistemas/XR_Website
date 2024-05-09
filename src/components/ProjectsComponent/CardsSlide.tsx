import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { projects } from "@/constants";
import { useCarousel } from "@/stores/useCarousel";

export function CardsSlide() {
  const { setItem } = useCarousel();

  return (
    <>
      <div className="flex w-full items-center justify-between my-4 mt-12">
        <h1 className="text-2xl font-bold font-helvetica text-white tracking-wider">
          More projects to show
        </h1>
      </div>
      <Swiper
        grabCursor={true}
        slidesPerView={2.7}
        spaceBetween={40}
        className={`h-auto w-full`}
      >
        {projects.map((e, i) => (
          <SwiperSlide
            key={i}
            onClick={() => setItem(e)}
            className="h-full w-full  flex flex-col justify-between"
          >
            <Image
              width={1000000}
              height={1000000}
              src={e.imageUrl}
              alt="imageUrl"
              className="object-cover w-full h-[200px] rounded-lg cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
            />
            <div className="h-[20%] mt-2 w-full">
              <div className="flex items-center justify-center">
                <h1
                  className="text-lg font-bold font-helvetica text-white tracking-wider"
                  children={e.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
