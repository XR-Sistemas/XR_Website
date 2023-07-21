"use client";
import { Disclosure } from "@headlessui/react";
import { HeaderItems } from "./HeaderItems";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Disclosure
      as="header"
      className="fixed top-0 z-50 px-40 w-full flex items-center justify-between"
    >
      <Link href={"/"}>
        <Image
          alt="logo"
          src={"/logoSimbol_2.png"}
          draggable={false}
          height={100}
          width={100}
        />
      </Link>
      <HeaderItems />
    </Disclosure>
  );
}
