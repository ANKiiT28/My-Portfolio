import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const badges = [
  {
    title: 'Google AI Essentials V1 Issued by Coursera',
    issuer: 'Issued by Coursera',
    imageUrl: '/image.png',
    link: 'https://www.credly.com/badges/f346176e-4eac-4037-b06b-c1d6a5c051ed/linked_in?t=sh6glz',
    imageHint: 'Ai Essentials badge'
  },
  {
    title: 'HackerRank',
    issuer: 'HackerRank',
    imageUrl: '/Screenshot 2025-08-22 205611.png',
    link: 'https://www.hackerrank.com/profile/akm135212',
    imageHint: 'programing'
  },
  {
    title: 'Python Coder',
    issuer: 'Kaggle',
    imageUrl: '/Python Coder.png',
    link: '#',
    imageHint: 'kaggle'
  },
];

export function Badges() {
  return (
    <section id="badges" className="bg-accent">
      <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-gradient">
            Digital Badges & Recognitions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Highlighting my verified skills and contributions in the tech community.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge) => (
            <Link href={badge.link} key={badge.title} target="_blank" rel="noopener noreferrer">
              <Card className="flex h-full transform flex-col overflow-hidden rounded-lg bg-background/50 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                <CardHeader className="p-0">
                  <div className="relative h-52 w-full">
                    <Image
                      src={badge.imageUrl}
                      alt={badge.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-t-lg object-contain p-4"
                      data-ai-hint={badge.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary mt-1" />
                    <div className="flex flex-col">
                      <span>{badge.title}</span>
                      <CardDescription className="text-sm mt-1">{badge.issuer}</CardDescription>
                    </div>
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
