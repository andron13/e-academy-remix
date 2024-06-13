import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/router/utils";
import ReactMarkdown from "react-markdown";
import { readAllPosts } from "~/lib/readPost.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const post = (await readAllPosts()).find(
    (postData) => postData.attributes.slug === slug
  );

  if (!post) {
    throw new Response("Not Found!", { status: 404 });
  }

  const { attributes, body } = post;

  return { attributes, body };
}

export default function BlogComponent() {
  const { attributes, body } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto p-4">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl mb-4 font-semibold text-blue-600">
          {attributes.title}
        </h1>
        <h2 className="text-xl mb-4 font-light text-gray-500">
          {attributes.subtitle}
        </h2>
        <p className="text-sm mb-4 text-gray-400">
          Автор: {attributes.author} &bull; Дата: {attributes.date}
        </p>
        <ReactMarkdown className="text-black">{body}</ReactMarkdown>
      </article>
    </div>
  );
}
