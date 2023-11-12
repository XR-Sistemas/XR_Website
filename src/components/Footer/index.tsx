import Image from "next/image";

export function Footer() {
  const collumClass = "text-lg tracking-wider flex flex-col gap-2 w-3/5";
  const titleClass = "text-[22px] font-bold pb-6";
  const ancorClass =
    "hover:text-primary w-max transition-all duration-300 ease-in-out";

  return (
    <footer id="footer" className="flex flex-col w-full bg-home bg-cover bg-no-repeat px-[15%] py-20 text-white">
      <div className="flex items-center justify-between gap-[10%] w-full pb-20">
        <p className="text-lg tracking-wider w-full">
          Development beyond limits, turning your ideas into powerful
          technological solutions. Innovation starts here, with XR Tech,
          propelling your digital success.
        </p>
        <div className={collumClass}>
          <h1 className={titleClass}>Agency info</h1>
          <a href="#about" className={ancorClass}>
            About us
          </a>
          <a href="#services" className={ancorClass}>
            Our services
          </a>
          <a href="#projects" className={ancorClass}>
            Our projects
          </a>
        </div>
        <div className={collumClass}>
          <h1 className={titleClass}>Follow us</h1>
          <a
            href="https://www.linkedin.com/company/xr-techno/"
            className={ancorClass}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/xrsistemas/"
            className={ancorClass}
          >
            Instagram
          </a>
          <a href="https://github.com/XR-Sistemas" className={ancorClass}>
            Github
          </a>
        </div>
        <div className={collumClass}>
          <h1 className={titleClass}>Legal</h1>
          <a>Terms of use</a>
          <a
            href="/docs/politica_de_privacidade_XR_TECH.docx"
            download={"Politica de Privacidade - XR Tech"}
          >
            Privacy policy
          </a>
          <a>Cookie policy</a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-3">
        Copyright © 2023 - All right reserved by
        <Image
          src={"/logos/logo_horizontal.png"}
          alt="logo"
          height={10000}
          width={10000}
          draggable={false}
          className="w-[15%]"
        />
      </div>
    </footer>
  );
}
