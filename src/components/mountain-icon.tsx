import { cn } from "@/lib/utils";

export const MountainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMax meet"
    className={cn("transition-all duration-300 ease-in-out group-hover:drop-shadow-lg", props.className)}
  >
    <g>
      {/* Mountain Base (Brown) */}
      <path
        d="M50,25,22.23,75.53,1.12,99.93h97.76L77.77,75.53,50,25Z"
        className="fill-[#A16207]" 
      />
      {/* Mountain Shading */}
      <path
        d="M50,25,66.67,58.33,77.77,66.33,50,25Z"
        className="fill-[#854d0e] opacity-60"
      />
      <path
        d="M22.23,75.53,50,25,33.33,58.33,22.23,75.53Z"
        className="fill-[#854d0e] opacity-60"
      />
      
      {/* Snowy Cap (White) */}
      <path
        d="M50,25L33.33,58.33,22.23,75.53,33.33,99.93l12.2-24.4,4.47-8.87Z"
        className="fill-white opacity-20"
      />
      <path
        d="M50,25,33.33,58.33,22.23,75.53,1.12,99.93h97.76L77.77,75.53,66.67,58.33,50,25Z"
        className="fill-white"
      />
      <path
        d="M50,25,66.67,58.33,58.33,55,50,25Z"
        className="fill-white opacity-60"
      />
      <path
        d="M41.67,55,33.33,58.33,50,25,41.67,55Z"
        className="fill-white opacity-60"
      />
      <path
        d="M50,25,58.33,55,50,51.67,50,25Z"
        className="fill-white opacity-40"
      />
      <path
        d="M50,25,50,51.67,41.67,55,50,25Z"
        className="fill-white opacity-40"
      />
    </g>
  </svg>
);