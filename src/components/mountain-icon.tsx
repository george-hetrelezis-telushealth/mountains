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
      <path
        d="M33.33,99.93l-12.2-24.4a8.33,8.33,0,0,1,1.1-9.2L50,25,77.77,66.33a8.33,8.33,0,0,1,1.1,9.2l-12.2,24.4"
        className="fill-current"
      />
      <path
        d="M50,25,66.67,58.33,77.77,66.33,50,25Z"
        className="fill-current opacity-60"
      />
      <path
        d="M22.23,75.53,50,25,33.33,58.33,22.23,75.53Z"
        className="fill-current opacity-60"
      />
      <path
        d="M63.33,45,50,25,50,25l13.33,20Z"
        className="fill-current opacity-40"
      />
      <path d="M50,25,36.67,45,50,25Z" className="fill-current opacity-40" />
      <path
        d="M50,25,22.23,75.53,1.12,99.93H33.33l12.2-24.4,4.47-8.87Z"
        className="fill-current opacity-20"
      />
      <path
        d="M50,25l-4.47,20.53L33.33,58.33,22.23,75.53,1.12,99.93h97.76L77.77,75.53,66.67,58.33,54.47,45.53Z"
        className="fill-current opacity-80"
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
      <path
        d="M50,25,33.33,58.33,22.23,75.53,33.33,99.93l12.2-24.4,4.47-8.87Z"
        className="fill-white opacity-20"
      />
    </g>
  </svg>
);
