import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageHint,
  tags,
  liveUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <Card className="group relative flex h-full transform flex-col overflow-hidden rounded-lg bg-background/50 shadow-lg transition-all duration-300 hover:scale-105">
      <div className="absolute -inset-2 z-0 rounded-full bg-primary/20 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-50"></div>
      <div className="relative flex h-full flex-col">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-t-lg object-cover"
              data-ai-hint={imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="mb-2 text-2xl">{title}</CardTitle>
          <p className="text-muted-foreground">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4 p-6 pt-0">
          {sourceUrl && (
            <Link href={sourceUrl} passHref target="_blank">
              <Button variant="outline">Source Code</Button>
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} passHref target="_blank">
              <Button>
                Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
