import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/router/utils";
import parseFrontMatter from "front-matter";
import ReactMarkdown from "react-markdown";
import { readPost } from "~/lib/readPost.server";
import { Attributes, Body } from "~/lib/type";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const markdown = await readPost(`${slug}.md`);
  if (!markdown) {
    throw new Response("Not Found", { status: 404 });
  }
  const { attributes, body }: { attributes: Attributes; body: Body } =
    parseFrontMatter(markdown);
  return { attributes, body };
}

export default function ArticleComponent() {
  const { attributes, body } = useLoaderData<typeof loader>();
  return (
    <article>
      <h1>{attributes.title}</h1>
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
  );
}
