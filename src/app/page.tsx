import { mountains } from '@/lib/data';
import { MountainRow } from '@/components/mountain-row';

export default function Home() {
  // Data is pre-sorted, but sorting here ensures correctness.
  const sortedMountains = [...mountains].sort((a, b) => b.height - a.height);
  const maxHeight = sortedMountains[0]?.height || 1;

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4 py-12 sm:p-8 sm:py-16 md:p-12 md:py-24">
      <div className="w-full max-w-5xl space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl font-headline">
            World's 10 Tallest Mountains
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A visualization of the world's highest peaks, scaled to represent their staggering heights relative to each other.
          </p>
        </header>

        <div className="space-y-4">
          {sortedMountains.map((mountain, index) => (
            <MountainRow
              key={mountain.name}
              rank={index + 1}
              mountain={mountain}
              maxHeight={maxHeight}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
