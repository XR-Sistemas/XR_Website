import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCarousel } from "@/hooks/useCarousel";
import { IProject } from "@/interfaces";

export const CarouselMobile = ({ data }: { data: IProject[] }) => {
  const { getFirstSentence, isExpanded, setIsExpanded } = useCarousel(data);

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.3}
        centeredSlides={true}
        speed={350}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {data.map((e, i) => (
          <SwiperSlide key={i}>
            <div id="image-game" className="w-full relative">
              <div
                className="rounded-lg w-full h-full object-cover bg-center bg-no-repeat image-banner"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('${e.imageUrl}')`,
                  height: "350px",
                  width: "100%",
                  backgroundSize: "cover",
                  position: "relative",
                }}
              />
              <div className="absolute bottom-0 left-0 mb-4 ml-4 mr-4">
                <h3>{e.title}</h3>
                <div className="flex flex-row gap-1 mt-[5px]">
                  <h4 className="max-w-[300px] p-[.5rem]">{e.desc}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination "></div>
    </>
  );
};
