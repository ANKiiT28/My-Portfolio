export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  image: string;
  imageHint: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: 'building-an-e-commerce-platform',
    title: 'Building a Modern E-commerce Platform with Next.js',
    date: '2023-10-26',
    description: 'A deep dive into the architecture and technologies used to build a scalable and fast e-commerce website.',
    content: 'This is the full content of the blog post about building an e-commerce platform. It would typically be a longer article written in Markdown format.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'e-commerce website'
  },
  {
    slug: 'mastering-task-management',
    title: 'Mastering Task Management with React and Firebase',
    date: '2023-09-15',
    description: 'How we built a collaborative task management app to boost team productivity.',
    content: 'This is the full content of the blog post about the task management app. It would detail the development process, challenges, and solutions.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'team collaboration'
  },
  {
    slug: 'the-power-of-ai-in-portfolios',
    title: 'The Power of AI: Integrating a Project Description Generator',
    date: '2023-08-01',
    description: 'Exploring the integration of Generative AI to assist in content creation for portfolio websites.',
    content: 'This is the full content of the blog post about integrating AI. It explains how server actions and AI models can be used in a Next.js application.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence'
  },
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
