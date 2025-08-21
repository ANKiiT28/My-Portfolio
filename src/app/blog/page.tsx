import { BlogCard } from '@/components/BlogCard';
import { getBlogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Personal Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights, tutorials, and stories about my projects and creative process.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
