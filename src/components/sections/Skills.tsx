import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, BrainCircuit, Paintbrush, Video, Languages } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & DSA',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ['C++', 'Python', 'Jupyter Notebook', 'Java'],
  },
  {
    title: 'AI/ML',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    skills: ['Machine Learning', 'Prompt Engineering'],
  },
  {
    title: 'Design',
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    skills: ['UI/UX (Certified)', 'Graphic & Poster Design', 'Figma', 'Canva'],
  },
  {
    title: 'Video Editing',
    icon: <Video className="h-8 w-8 text-primary" />,
    skills: ['Cinematic', 'Reels Editing', 'DaVinci Resolve'],
  },
  {
    title: 'Languages',
    icon: <Languages className="h-8 w-8 text-primary" />,
    skills: ['Hindi (Native)', 'English (Professional)'],
  }
];

export function Skills() {
    const svgPattern = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
      <defs>
        <pattern id='learning-pattern' patternUnits='userSpaceOnUse' width='100' height='100'>
          <path d='M 0,50 Q 25,25 50,50 T 100,50' stroke='hsl(240 5% 64.9% / 0.1)' stroke-width='1.5' fill='none' />
          <path d='M 0,60 Q 25,85 50,60 T 100,60' stroke='hsl(240 5% 64.9% / 0.08)' stroke-width='1.5' fill='none' />
        </pattern>
      </defs>
      <rect width='800' height='800' fill='hsl(var(--background))' />
      <rect width='800' height='800' fill='url(#learning-pattern)' />
    </svg>
  `;
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgPattern)}")`,
    backgroundSize: 'cover',
  };

  return (
    <section id="skills" className="bg-background" style={backgroundStyle}>
        <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-gradient">
                Technical & Creative Skills
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
            A blend of technology and creativity that drives my work.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
            <Card key={category.title} className="transform bg-background/50 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                    ))}
                </ul>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </section>
  );
}
