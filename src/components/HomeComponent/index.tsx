import { Button } from "../Button";
import { EvolveIcon } from "../Icons";
import { Title } from "../Title";

export default function HomeComponent() {
  return (
    <main
      id="home"
      className="bg-home bg-cover bg-no-repeat h-screen flex items-center px-[15%]"
    >
      <div className="w-1/2 space-y-6">
        <Title>
          <span className="text-primary">Improve</span> your projects
        </Title>
        <p className="text-[22px] font-bold text-white font-helvetica">
          Discover our services and find out why XR Tech is the best at what it
          does!
        </p>
        <p className="text-[22px] font-normal text-white font-helvetica">
          Development beyond limits, turning your ideas into powerful
          technological solutions. Innovation starts here, with XR Tech,
          propelling your digital success.
        </p>
        <Button
          children={"EVOLVE"}
          icon={<EvolveIcon />}
          link={"/#about"}
          width="w-1/3"
        />
      </div>
    </main>
  );
}
