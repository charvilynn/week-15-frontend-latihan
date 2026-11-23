import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';

export default async function Home() {
  const allPosts = await db.select().from(posts);

  return (
    <main className="container mt-4">
      <h1>Blog Posts</h1>
      <Link href="/create" className="btn btn-primary mb-3">
        Create Post
      </Link>
      <ul className="list-group">
        {allPosts.map((post) => (
          <li
            key={post.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <Link href={`/post/${post.id}`}>{post.title}</Link>
            <span className="text-muted">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString('id-ID')
                : ''}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}