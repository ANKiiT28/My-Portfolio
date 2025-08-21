import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: 'Land Price Prediction System',
    description: 'Engineered a machine learning model to accurately predict land prices. Developed a modular pipeline for data preprocessing, model training, and prediction, strengthening skills in Python, DSA, and end-to-end ML workflows.',
    imageUrl: '/Screenshot 2025-08-21 162809.png',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Jupyter'],
    sourceUrl: 'https://github.com/ANKiiT28/land-price-prediction',
    imageHint: 'data analysis chart'
  },
  {
    title: 'Food Waste Management System',
    description: 'Designed an intuitive UI/UX in Figma for a mobile application aimed at reducing food waste. The platform connects NGOs, donors, and farmers to streamline food distribution to those in need.',
    imageUrl: '/Screenshot 2024-07-11 193236.png',
    tags: ['UI/UX Design', 'Figma', 'Mobile App', 'Social Impact'],
    liveUrl: 'https://www.figma.com/design/tqOHWqMNbG7ZCiPbuQoK2r/FWMS?node-id=0-1&t=V5CdXh3heSraNz0W-1',
    imageHint: 'mobile application interface'
  },
  {
    title: 'Farmer Sales Platform',
    description: 'Created a user-centric UI design in Figma for a mobile app empowering farmers to sell their products directly to consumers, cutting out intermediaries and increasing their profitability.',
    imageUrl: '/Gemini_Generated_Image_kl1w5kkl1w5kkl1w.png',
    tags: ['UI/UX Design', 'Figma', 'E-commerce', 'Mobile App'],
    liveUrl: 'https://www.figma.com/design/L693ux1dYVEaY0f1b7JFPH/%E2%80%A2Farmer-Sales-Platform?t=V5CdXh3heSraNz0W-1',
    imageHint: 'farm produce market'
  },
];

export function Projects() {
  return (
    <section id="projects" className="container space-y-12 py-20 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of my technical and design work.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
