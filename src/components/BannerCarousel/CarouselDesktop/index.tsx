"use client";
import { Button } from "@/components/Button";
import { projects } from "@/constants";
import { useCarousel } from "@/stores/useCarousel";
import Image from "next/image";
import { useEffect } from "react";

export const CarouselDesktop = () => {
  const { item, setItem } = useCarousel();
  const list = projects.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextId = projects.find((project) => project.id === item.id + 1);
      if (!nextId) setItem(projects[0]);
      if (nextId) setItem(nextId!);
    }, 8000);

    return () => clearInterval(interval);
  }, [list.length, item]);

  return (
    <div className="flex items-center flex-row h-[570px]">
      <div className="relative flex justify-start w-full h-full">
        <div
          className="rounded-lg bg-center bg-no-repeat mr-8 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url('${item.imageUrl}')`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="absolute bottom-0 left-0 mb-4 flex flex-col gap-6 text-white ml-[1.75rem]">
            <div className="flex flex-col gap-5">
              <h1
                className="text-3xl font-microTecni font-bold tracking-widest"
                children={item.title}
              />
              <h4
                className="max-w-[600px] font-helvetica text-lg font-medium case mb-10"
                children={item.desc}
              />
            </div>
            <a href={item.website}>
              <Button children={"ACCESS"} width="w-[40%]" />
            </a>
          </div>
        </div>
      </div>

      <ul className="flex flex-col w-1/3 h-full justify-between">
        {list.map((e, i) => {
          return (
            <li
              key={i}
              id={i.toString()}
              onClick={() => setItem(e)}
              className={`flex w-full items-center justify-between cursor-pointer overflow-hidden bg-opacity-50 bg-[#181818] hover:bg-[#59595680] rounded p-2 px-4 h-[70px] transition-all ease-in-out duration-300 ${
                e === item && "animate-progress"
              }`}
            >
              <Image
                height={1000}
                width={1000}
                src={e.logoUrl}
                alt="logoUrl"
                className="w-20 object-cover rounded z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              />
              <div
                className="text-white text-lg font-medium z-10"
                children={e.title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
