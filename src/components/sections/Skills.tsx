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
  return (
    <section id="skills" className="bg-accent">
        <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Technical & Creative Skills</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            A blend of technology and creativity that drives my work.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
            <Card key={category.title} className="transform transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <ul className="list-disc list-inside space-y-2">
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
