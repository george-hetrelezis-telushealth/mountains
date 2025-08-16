import { Card, CardContent } from '@/components/ui/card';
import type { Mountain } from '@/lib/data';

interface MountainRowProps {
  rank: number;
  mountain: Mountain;
  maxHeight: number;
}

const MountainIcon = ({ width, height }: { width: number, height: number }) => {
  const mountainPath = `M0,${height} L${width * 0.2},${height * 0.4} L${width * 0.35},${height * 0.6} L${width * 0.5},${height * 0.2} L${width * 0.65},${height * 0.5} L${width * 0.8},${height * 0.3} L${width},${height} Z`;
  const snowPath = `M${width * 0.5},${height * 0.2} L${width * 0.35},${height * 0.6} L${width * 0.2},${height * 0.4} L${width * 0.25},${height * 0.35} L${width * 0.5},${height * 0.2} L${width * 0.65},${height * 0.5} L${width * 0.8},${height * 0.3} L${width * 0.75},${height * 0.25} Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="transition-all duration-300 ease-in-out group-hover:drop-shadow-lg"
    >
      <path d={mountainPath} className="fill-primary group-hover:fill-accent transition-colors duration-300" />
      <path d={snowPath} className="fill-white" />
    </svg>
  );
};


export function MountainRow({ rank, mountain, maxHeight }: MountainRowProps) {
  const { name, height } = mountain;
  const relativeHeight = (height / maxHeight) * 100;

  return (
    <Card className="group transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      <CardContent className="p-4 md:p-5">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_240px)_1fr_minmax(0,_120px)] md:gap-x-6 items-center">
          
          <div className="flex justify-between items-baseline md:block">
            <p className="text-lg font-medium text-foreground truncate" title={name}>
              <span className="text-base text-muted-foreground mr-3 w-6 inline-block">{rank}.</span>
              {name}
            </p>
            <p className="md:hidden text-lg font-mono font-medium text-foreground">
              {height.toLocaleString()}
              <span className="text-sm text-muted-foreground">m</span>
            </p>
          </div>

          <div className="mt-3 md:mt-0 w-full h-16 flex items-end" role="presentation">
            <div style={{ width: `${relativeHeight}%`, height: '100%'}}>
              <MountainIcon width={300} height={100} />
            </div>
          </div>

          <p className="hidden md:block text-lg font-mono font-medium text-foreground text-right">
            {height.toLocaleString()}
            <span className="text-sm text-muted-foreground">m</span>
          </p>

        </div>
      </CardContent>
    </Card>
  );
}
