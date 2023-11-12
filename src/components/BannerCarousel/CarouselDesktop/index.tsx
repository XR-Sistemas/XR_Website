import { Button } from "@/components/Button";
import { useCarousel } from "@/hooks/useCarousel";
import { IProject } from "@/interfaces";
import Image from "next/image";

export const CarouselDesktop = ({ data }: { data: IProject[] }) => {
  const { counter, onClick, list } = useCarousel(data);

  return (
    <div className="flex items-center flex-row h-[570px]">
      <div className="relative flex justify-start w-full h-full">
        <div
          className="rounded-lg bg-center bg-no-repeat mr-8"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url('${list[counter].imageUrl}')`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="absolute bottom-0 left-0 mb-4 flex flex-col gap-6 text-white ml-[1.75rem]">
            <div className="flex flex-col gap-5">
              <h1
                className="text-3xl font-microTecni font-bold tracking-widest"
                children={list[counter].title}
              />
              <h4
                className="max-w-[600px] font-helvetica text-lg font-medium mb-10"
                children={list[counter].desc}
              />
            </div>
            <Button children={"ACCESS"} width="w-[40%]" />
          </div>
        </div>
      </div>

      <ul className="flex flex-col w-1/3 h-full justify-between">
        {list.map((e, i) => (
          <li
            key={i}
            id={i.toString()}
            onClick={onClick}
            className={`flex w-full items-center justify-between cursor-pointer overflow-hidden bg-opacity-50 bg-[#181818] hover:bg-[#59595680] rounded p-2 px-4 h-[70px] transition-all ease-in-out duration-300 ${
              i === counter && "animate-progress"
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
              className="text-white text-lg font-medium truncate z-10"
              children={e.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
