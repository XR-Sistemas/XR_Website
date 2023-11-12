"use client";
import { HeaderItems } from "./HeaderItems";
import Image from "next/image";

export function Header() {
  return (
    <nav className="fixed top-0 z-50 px-44 w-full flex items-center justify-between">
      <a href={"/"}>
        <Image
          alt="logo"
          src={"/images/logoSimbol_2.png"}
          draggable={false}
          height={100}
          width={100}
        />
      </a>
      <HeaderItems />
    </nav>
  );
}
