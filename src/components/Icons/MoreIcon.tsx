export function MoreIcon({ active }: { active?: boolean }) {
  return (
    <svg
      className={`${
        active && "rotate-180"
      } transition-all duration-1000 ease-in-out`}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.00195"
        width="14"
        height="2"
        transform="rotate(90 8.00195 0)"
        fill={`${active ? "#F40303" : "#000"}`}
      />
      <rect
        x="14.002"
        y="8"
        width="14"
        height="2"
        transform="rotate(-180 14.002 8)"
        fill={`${active ? "#F40303" : "#000"}`}
      />
    </svg>
  );
}
