import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const artworks = [
  {
    title: 'Chris Hemsworth',
    imageUrl: '/IMG_20210523_100601.jpg',
    link: 'https://www.instagram.com/p/CPNtJC9DhOS/?hl=en',
    imageHint: 'portrait sketch'
  },
  {
    title: 'Amber Heard',
    imageUrl: '/IMG_20210523_100652.jpg',
    link: 'https://www.instagram.com/p/CPQUrc5DKrt/?hl=en',
    imageHint: 'character drawing'
  },
  {
    title: 'Alexandra Daddario',
    imageUrl: '/IMG_20210221_150746.jpg',
    link: 'https://www.instagram.com/p/CLjhZFVgdW9/?img_index=1',
    imageHint: 'portrait sketch'
  },
  {
    title: 'Shraddha Kapoor',
    imageUrl: '/IMG_20210601_231107.jpg',
    link: 'https://www.instagram.com/p/CPnk4tRjtWU/?img_index=1',
    imageHint: 'portrait sketch'
  },
  {
    title: 'See my drawings – click Here',
    imageUrl: '/IMG_20210213_150342.jpg',
    link: 'https://photos.app.goo.gl/1wKwuKqHxkL3iV7T7',
    imageHint: 'Album'
  },
];

export function ArtisticPortfolio() {
    const svgPattern = `
    <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'>
      <defs>
        <pattern id='ai-pattern' patternUnits='userSpaceOnUse' width='100' height='100'>
          <path d='M 10 10 L 40 10 M 60 10 L 90 10 M 10 40 L 40 40 M 60 40 L 90 40 M 10 60 L 40 60 M 60 60 L 90 60 M 10 90 L 40 90 M 60 90 L 90 90 M 10 10 L 10 40 M 10 60 L 10 90 M 40 10 L 40 40 M 40 60 L 40 90 M 60 10 L 60 40 M 60 60 L 60 90 M 90 10 L 90 40 M 90 60 L 90 90' stroke='hsl(240 5% 64.9%)' stroke-width='0.5' stroke-opacity='0.1' fill='none' />
          <path d='M 50 25 L 75 50 L 50 75 L 25 50 Z' stroke='hsl(240 5% 64.9%)' stroke-width='0.5' stroke-opacity='0.1' fill='none' />
          <circle cx='50' cy='50' r='5' stroke='hsl(240 5% 64.9%)' stroke-width='0.5' stroke-opacity='0.1' fill='none'/>
        </pattern>
      </defs>
      <rect width='100' height='100' fill='url(#ai-pattern)' />
    </svg>
  `;
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgPattern)}")`,
  };

  return (
    <section id="art" className="bg-accent" style={backgroundStyle}>
      <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-gradient">
            Artistic Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my passion for drawing, sketching, and visual storytelling.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((art) => (
            <Link href={art.link} key={art.title} target="_blank" rel="noopener noreferrer">
              <Card className="flex h-full transform flex-col overflow-hidden rounded-lg bg-background/50 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={art.imageUrl}
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-t-lg object-cover"
                      data-ai-hint={art.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Paintbrush className="h-5 w-5 text-primary" />
                    {art.title}
                  </CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
