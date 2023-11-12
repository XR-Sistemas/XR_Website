type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: "white" | "black";
  link?: string;
  width?: string;
};

export function Button({
  children,
  icon,
  color = "white",
  link,
  width = "w-full",
}: Props) {
  const colorText = color === "white" ? "text-white" : "text-black";
  return (
    <button
      className={`py-2 px-8 text-[18px] flex items-center justify-center font-microTecni font-bold rounded-[10px] border-[2px] border-primary bg-black hover:bg-white hover:bg-opacity-5 hover:border-red-800 transition-all duration-300 ease-in-out ${colorText} ${width}`}
    >
      <a href={link} className="flex items-center gap-3">
        {children}
        {icon}
      </a>
    </button>
  );
}
