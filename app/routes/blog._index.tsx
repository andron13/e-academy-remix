import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import { readAllPosts } from "~/lib/readPost.server";
import { PostData } from "~/lib/type";

export async function loader() {
  const posts: PostData[] = await readAllPosts();
  return { posts };
}

export default function Index() {
  const { posts }: { posts: PostData[] } = useLoaderData();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Главная страница блога</h1>
      <p className="mb-8">Добро пожаловать в наш блог!</p>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-4">
            <Link
              to={`/blog/${post.attributes.slug}`}
              className="text-blue-500 hover:underline"
            >
              {post.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
