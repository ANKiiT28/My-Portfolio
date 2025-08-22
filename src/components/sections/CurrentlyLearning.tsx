import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BrainCircuit, Code, Palette } from 'lucide-react';

const learningTopics = [
  {
    title: 'DSA in C++',
    icon: <Code className="h-8 w-8 text-primary" />,
    description: 'Continuously improving problem-solving and data structure skills using C++ for competitive programming and core software engineering.',
  },
  {
    title: 'Deep Dive into ML & Deep Learning',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    description: 'Exploring advanced ML and Deep Learning concepts, building sophisticated models with Python libraries like TensorFlow, PyTorch, and Scikit-learn.',
  },
  {
    title: 'Generative AI',
    icon: <Bot className="h-8 w-8 text-primary" />,
    description: 'Completing a comprehensive course on Generative AI, focusing on practical applications with LangChain and Hugging Face.',
  },
  {
    title: 'Creative Storytelling & Visual Design',
    icon: <Palette className="h-8 w-8 text-primary" />,
    description: 'Learning to craft compelling narratives from an audience perspective, brought to life through video editing and graphic design for posters, logos, and more.',
  }
];

export function CurrentlyLearning() {
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
    <section id="learning" className="container space-y-12 py-20 sm:py-32" style={backgroundStyle}>
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-gradient">
          Continuous Learning
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          What I'm currently focused on to sharpen my skills and stay at the forefront of technology.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {learningTopics.map((topic) => (
          <Card key={topic.title} className="group relative flex h-full transform flex-col bg-card/50 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
              <CardHeader className="flex flex-row items-center gap-4">
                {topic.icon}
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{topic.description}</p>
              </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
