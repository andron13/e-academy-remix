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
    <article>
      <h1>{attributes.title}</h1>
      <h2>{attributes.slug}</h2>
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
  );
}
