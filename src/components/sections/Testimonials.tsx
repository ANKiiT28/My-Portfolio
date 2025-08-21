import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Video } from 'lucide-react';
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
  const [creativeLead, reelsEditor] = experiences;

  return (
    <section id="experience" className="bg-accent">
      <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-gradient">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Where I've applied my skills in creative and technical roles.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12">
            {/* Creative Lead - Featured Card */}
            <Card className="flex flex-col overflow-hidden rounded-lg bg-background/50 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/40 md:flex-row">
              <div className="relative h-64 w-full md:h-auto md:w-2/5 lg:w-1/3">
                  <Image 
                      src={creativeLead.imageUrl!}
                      alt={`${creativeLead.role} at ${creativeLead.company}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      data-ai-hint={creativeLead.imageHint}
                  />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <div>
                        <h3 className="text-2xl font-bold">{creativeLead.role}</h3>
                        <p className="text-lg text-muted-foreground">{creativeLead.company}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-4">
                    <p className="text-lg">{creativeLead.description}</p>
                    {creativeLead.link && creativeLead.linkLabel && (
                       <div className="mt-4">
                         <Link href={creativeLead.link} target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline">
                            {creativeLead.linkLabel}
                         </Link>
                       </div>
                    )}
                </CardContent>
              </div>
            </Card>

            {/* Reels Editor - Secondary Card */}
            <Card className="transform rounded-lg border-2 border-dashed border-primary/30 bg-background/20 p-8 text-center shadow-lg transition-all duration-300 hover:border-primary/50 hover:bg-background/40">
                <div className="flex flex-col items-center gap-4">
                    <Video className="h-10 w-10 text-primary" />
                    <div>
                        <h3 className="text-2xl font-bold">{reelsEditor.role}</h3>
                        <p className="text-lg text-muted-foreground">{reelsEditor.company}</p>
                    </div>
                </div>
                <p className="mt-4 text-lg">{reelsEditor.description}</p>
            </Card>
        </div>
      </div>
    </section>
  );
}
