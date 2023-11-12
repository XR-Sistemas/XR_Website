"use client";
import { useEffect, useState } from "react";

export function FloatingMenu() {
  const [currentSection, setCurrentSection] = useState("home");
  const allIDs = ["home", "about", "services", "projects", "footer"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    allIDs.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      allIDs.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="fixed left-10 top-[30vh] z-50 h-[300px] flex flex-col items-center justify-between bg-black bg-opacity-5 border border-black border-opacity-20 rounded-full py-1 px-1">
      {allIDs.map((e) => {
        const active = currentSection === e;
        return (
          <a
            key={e}
            href={`#${e}`}
            className={`${
              active ? "border-primary" : "border-transparent"
            } p-[2px] border rounded-full transition-all duration-300 ease-in-out`}
          >
            <div
              className={`h-2 w-2 rounded-full hover:bg-red-300 transition-all duration-300 ease-in-out ${
                active ? "bg-primary" : "bg-white"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
