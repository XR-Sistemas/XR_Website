import { BannerCarousel } from "../BannerCarousel";
import { CardsSlide } from "./CardsSlide";

export default function ProjectsComponent() {
  return (
    <main
      id="projects"
      className="bg-projects bg-cover bg-no-repeat min-h-screen py-[5rem] px-[15%] w-full"
    >
      <BannerCarousel />
      <CardsSlide />
    </main>
  );
}
