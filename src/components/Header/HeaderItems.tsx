import Link from "next/link";

export function HeaderItems() {
  return (
    <div className="text-white text-sm flex items-center gap-20">
      <Link href={"/"}>
        <h1>Home</h1>
      </Link>
      <Link href={"/#about"}>
        <h1>About</h1>
      </Link>
      <Link href={"/services"}>
        <h1>Services</h1>
      </Link>
      <Link href={"/#projects"}>
        <h1>Projects</h1>
      </Link>
      <Link href={"/contact"}>
        <h1>Contact Us</h1>
      </Link>
    </div>
  );
}
