import React from "react";
import { AboutEnum } from ".";
import { MoreIcon } from "../Icons";

type Props = {
  section: AboutEnum;
  setSection: (section: AboutEnum) => void;
};

export function ManagerSections({ section, setSection }: Props) {
  const isWhoWeAre = section === AboutEnum.WhoWeAre;
  const isOurObjectives = section === AboutEnum.OurObjectives;
  const isOurValues = section === AboutEnum.OurValues;
  const isOurVision = section === AboutEnum.OurVision;

  const classRow = "w-full bg-black h-[1px]";

  return (
    <div className="flex flex-col gap-2">
      {[
        { label: AboutEnum.WhoWeAre, active: isWhoWeAre },
        { label: AboutEnum.OurObjectives, active: isOurObjectives },
        { label: AboutEnum.OurVision, active: isOurVision },
        { label: AboutEnum.OurValues, active: isOurValues },
      ].map((e, i) => (
        <React.Fragment key={i}>
          <div className={classRow} />
          <h1
            className={`${
              e.active ? "text-primary" : "text-black"
            } text-[22px] cursor-pointer font-bold font-helvetica flex items-center justify-between transition-all duration-500 ease-in-out w-full`}
            onClick={() => setSection(e.label)}
          >
            {e.label}
            <MoreIcon active={e.active} />
          </h1>
        </React.Fragment>
      ))}
      <div className={classRow} />
    </div>
  );
}
