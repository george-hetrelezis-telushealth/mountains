import { cn } from "@/lib/utils";

export const MountainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className={cn("transition-all duration-300 ease-in-out group-hover:drop-shadow-lg", props.className)}
  >
    <g>
      {/* Mountain Base */}
      <path
        d="M0 100 L50 0 L100 100 Z"
        className="fill-[#96694F]"
      />
      {/* Mountain Highlight */}
      <path
        d="M50 0 L100 100 L75 100 Z"
        className="fill-[#795548] opacity-70"
      />
       {/* Snowy Cap */}
      <path
        d="M50 0 L65 30 L35 30 Z"
        className="fill-white"
      />
    </g>
  </svg>
);
