import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const certificates = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    imageUrl: '/Screenshot 2025-08-22 185922.png',
    link: 'https://coursera.org/share/1fc0d16c2d1b8b6b55d1679e26413ce7',
    imageHint: 'Ai certificate'
  },
  {
    title: 'Python for A.I',
    issuer: 'Programing hub',
    imageUrl: '/Screenshot 2025-08-22 191214.png',
    link: 'https://drive.google.com/file/d/1ivSxTzazUdizO-LUlVhNfQ_YNKK-TK18/view?usp=sharing',
    imageHint: 'tech certificate'
  },
  {
    title: 'Programming Fundamentals',
    issuer: 'Programing hub',
    imageUrl: '/Screenshot 2025-08-22 192204.png',
    link: 'https://storage.googleapis.com/programminghub/certificate%2F1736787638780.pdf',
    imageHint: 'programming'
  },
  {
    title: 'Build a free website with WordPress',
    issuer: 'Coursera Project Network',
    imageUrl: '/Screenshot 2025-08-22 190631.png',
    link: 'https://coursera.org/share/5950975dd4479c87d3bf4ba9a0cedfff',
    imageHint: 'wordPress'
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="container space-y-12 py-20 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-gradient">
          Certificates & Achievements
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A testament to my commitment to continuous learning and skill development.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <Link href={cert.link} key={cert.title} target="_blank" rel="noopener noreferrer">
            <Card className="flex h-full transform flex-col overflow-hidden rounded-lg bg-background/50 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full bg-muted/20">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-t-lg object-contain p-2"
                    data-ai-hint={cert.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="flex items-start gap-2 text-lg">
                  <Award className="h-5 w-5 shrink-0 text-primary mt-1" />
                  <div className="flex flex-col">
                    <span>{cert.title}</span>
                    <CardDescription className="text-sm mt-1">{cert.issuer}</CardDescription>
                  </div>
                </CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
