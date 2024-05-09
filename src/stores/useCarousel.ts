import { projects } from "@/constants";
import { IProject } from "@/interfaces";
import { create } from "zustand";

export interface ICarousel {
  item: IProject;
  setItem: (item: IProject) => void;
}

export const useCarousel = create<ICarousel>((set) => ({
  item: projects[0],
  setItem: (item) => set({ item }),
}));
