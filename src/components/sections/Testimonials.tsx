import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    role: 'Creative Lead',
    company: 'Vedic Club, Uttaranchal University',
    description: "Spearheaded creative direction for cultural events, leading poster design, reels creation, and content strategy. Mentored a team of junior creatives, fostering a collaborative and high-performing environment.",
    link: 'https://www.instagram.com/p/DBHLNfTyHvm/?hl=en&img_index=1',
    linkLabel: 'See Event Post',
    imageUrl: '/vedic club.jpg',
    imageHint: 'cultural event',
  },
  {
    role: 'Reels Editor',
    company: '@sponsoredtrip (855K+ Followers)',
    description: "Edited and produced viral Reels for a major travel influencer, contributing to content that achieved over 1 million views. Utilized DaVinci Resolve to deliver high-quality, engaging videos on tight deadlines.",
  },
];

export function Testimonials() {
  return (
    <section id="experience" className="bg-accent">
      <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Where I've applied my skills in creative and technical roles.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {experiences.map((exp) => (
              <Card key={exp.role} className="flex h-full flex-col overflow-hidden">
                {exp.imageUrl ? (
                    <div className="relative h-56 w-full">
                        <Image 
                            src={exp.imageUrl}
                            alt={`${exp.role} at ${exp.company}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            data-ai-hint={exp.imageHint}
                        />
                    </div>
                ) : (
                  <div className="h-56 w-full bg-secondary"></div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-md text-muted-foreground">{exp.company}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p>{exp.description}</p>
                    {exp.link && exp.linkLabel && (
                       <div className="mt-4">
                         <Link href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {exp.linkLabel}
                         </Link>
                       </div>
                    )}
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
