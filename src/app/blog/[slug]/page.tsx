import { getBlogPost, getBlogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-4xl py-20">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>
          <div className="flex items-center justify-center text-muted-foreground">
            <Calendar className="mr-2 h-5 w-5" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          </div>
        </div>
        <div className="relative mb-8 h-80 w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={post.imageHint}
          />
        </div>
        <div className="text-lg text-foreground">
            {post.content}
        </div>
      </article>
    </div>
  );
}
