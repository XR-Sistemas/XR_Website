import { MoreWhiteIcon } from "../Icons";

export default function ServicesComponent() {
  const services = [
    {
      image: "/images/systems.png",
      title: "SYSTEMS",
      link: "/services/?service=systems",
    },
    {
      image: "/images/bots.png",
      title: "BOTS",
      link: "/services/?service=bot",
    },
    {
      image: "/images/website.png",
      title: "WEBSITE",
      link: "/services/?service=website",
    },
    {
      image: "/images/design.png",
      title: "DESIGN",
      link: "/services/?service=design",
    },
  ];

  return (
    <main
      id="services"
      className="bg-services bg-cover bg-no-repeat flex items-start py-[5rem] px-[15%]"
    >
      <div className="flex items-center justify-between w-full">
        {services.map((e) => (
          <a href={e.link} key={e.title} className="w-[300px] space-y-7">
            <div className="h-[300px] w-full relative">
              <img
                src={e.image}
                alt="image"
                draggable={false}
                className="object-cover w-full h-full grayscale"
              />
              <div className="absolute bottom-3 right-3">
                <MoreWhiteIcon />
              </div>
            </div>
            <h1
              children={e.title}
              className="font-microTecni text-white font-medium tracking-wider"
            />
          </a>
        ))}
      </div>
    </main>
  );
}
