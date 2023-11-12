import Link from "next/link";

export function HeaderItems() {
  const classes = "hover:text-primary transition-all duration-300 ease-in-out";
  return (
    <div className="text-white font-microTecni font-bold text-base flex items-center gap-10 ">
      <Link href={"/"} className={classes}>
        Home
      </Link>
      <Link href={"/#about"} className={classes}>
        About
      </Link>
      <Link href={"/services"} className={classes}>
        Services
      </Link>
      <Link href={"/#projects"} className={classes}>
        Projects
      </Link>
      <Link href={"/contact"} className={classes}>
        Contact Us
      </Link>
    </div>
  );
}
