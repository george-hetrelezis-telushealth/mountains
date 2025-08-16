import { Mountain } from '@/lib/data';
import { mountains } from '@/lib/data';
import { MountainIcon } from '@/components/mountain-icon';

export default function Home() {
  const sortedMountains = [...mountains].sort((a, b) => b.height - a.height);
  const maxHeight = sortedMountains[0]?.height || 1;

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden bg-background">
      <div className="w-full max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl font-headline">
            World's 10 Tallest Mountains
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A visualization of the world's highest peaks, scaled to represent their staggering heights relative to each other.
          </p>
        </header>

        <div className="w-full h-[60vh] flex items-end border-b-2 border-foreground/20 pb-4">
            <div className="flex items-end h-full w-full overflow-x-auto" role="presentation">
              <div className="flex items-end justify-start h-full flex-shrink-0 gap-4 md:gap-8 px-4">
                {sortedMountains.map((mountain) => (
                  <MountainDisplay
                    key={mountain.name}
                    mountain={mountain}
                    maxHeight={maxHeight}
                  />
                ))}
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}

interface MountainDisplayProps {
  mountain: Mountain;
  maxHeight: number;
}

function MountainDisplay({ mountain, maxHeight }: MountainDisplayProps) {
  const { name, height } = mountain;
  const relativeHeight = (height / maxHeight) * 100;

  return (
    <div className="flex flex-col items-center justify-end h-full gap-2 group" style={{ height: `${relativeHeight}%` }}>
       <div className="w-32 md:w-48 h-full">
         <MountainIcon className="w-full h-full drop-shadow-lg transition-transform duration-300 group-hover:scale-105" />
       </div>
      <div className="text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-bold text-sm md:text-base">{name}</p>
        <p className="text-xs md:text-sm text-muted-foreground">{height.toLocaleString()}m</p>
      </div>
    </div>
  )
}
