type Props = {
  children: React.ReactNode;
  color?: "white" | "black" | "red";
};

export function Title({ children, color = "white" }: Props) {
  const colorText =
    color === "white"
      ? "text-white"
      : color === "red"
      ? "text-primary"
      : "text-black";
  return (
    <h1
      className={`${colorText} text-[32px] font-bold tracking-[1.6px] font-microTecni`}
    >
      {children}
    </h1>
  );
}
