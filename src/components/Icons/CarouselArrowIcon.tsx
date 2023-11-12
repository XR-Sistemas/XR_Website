export function CarouselArrowIcon({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        transform="matrix(-1 0 0 1 30 0)"
        fill="#0E0E0E"
      />
      <path
        d="M17.0667 9L18 10L13.0667 15L18 20L17.0667 21L11.0667 15L17.0667 9Z"
        fill="white"
      />
    </svg>
  );
}
