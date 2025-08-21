import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react';
import Link from 'next/link';

// Your actual YouTube video IDs
const videoIds = ['Uv1uHpNhu7M', 'GM9fWFNl4OI', 'iZ6EItTRzx4'];

export function YoutubeChannel() {
  return (
    <section id="youtube" className="bg-accent">
      <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
            <Link href="https://www.youtube.com/@AnkiitMaurya" target='_blank' rel='noopener noreferrer'>
                <h2 className="text-3xl font-bold md:text-4xl flex items-center justify-center gap-2 hover:text-primary transition-colors">
                    <Youtube className="h-8 w-8 text-red-600" /> My YouTube Channel
                </h2>
            </Link>
          <p className="mt-4 text-lg text-muted-foreground">
            This channel is my canvas for storytelling, cinematography, and video production. Explore my creative work beyond the code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoIds.map((id) => (
                <Card key={id} className="overflow-hidden">
                    <div className="aspect-video">
                        <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
