import { Card, CardContent } from '@/components/ui/card';
import type { Mountain } from '@/lib/data';

interface MountainRowProps {
  rank: number;
  mountain: Mountain;
  maxHeight: number;
}

export function MountainRow({ rank, mountain, maxHeight }: MountainRowProps) {
  const { name, height } = mountain;
  const barWidth = (height / maxHeight) * 100;

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

          <div className="mt-2 md:mt-0 w-full bg-muted rounded-full h-8 overflow-hidden" role="presentation">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300 ease-in-out group-hover:bg-accent"
              style={{ width: `${barWidth}%` }}
              aria-label={`Bar representing the height of ${name}`}
            />
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
