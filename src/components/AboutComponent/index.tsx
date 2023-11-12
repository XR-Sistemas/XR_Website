import { useState } from "react";
import { Title } from "../Title";
import { WhoWeAre } from "./WhoWeAre";
import { ManagerSections } from "./ManagerSections";
import { OurObjectives } from "./OurObjectives";
import { OurValues } from "./OurValues";
import { OurVision } from "./OurVision";

export enum AboutEnum {
  WhoWeAre = "Who we are",
  OurObjectives = "Our objectives",
  OurVision = "Our vision",
  OurValues = "Our values",
}

export default function AboutComponent() {
  const [section, setSection] = useState(AboutEnum.WhoWeAre);
  return (
    <main
      id="about"
      className="bg-about bg-cover bg-no-repeat min-h-[70vh] flex items-start justify-between py-[5rem] px-[15%]"
    >
      <div className="w-[30%] space-y-6">
        <Title color="black">
          About <span className="text-primary">Us</span>
        </Title>
        <ManagerSections setSection={setSection} section={section} />
      </div>

      <div className="w-3/5 space-y-6">
        {section === AboutEnum.WhoWeAre ? (
          <WhoWeAre />
        ) : section === AboutEnum.OurObjectives ? (
          <OurObjectives />
        ) : section === AboutEnum.OurVision ? (
          <OurVision />
        ) : section === AboutEnum.OurValues ? (
          <OurValues />
        ) : null}
      </div>
    </main>
  );
}
