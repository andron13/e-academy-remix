import { readPost } from "~/readPost.server";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/router/utils";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const markdown = await readPost(`${slug}.md`);
  if (!markdown) {
    throw new Response("Not Found", { status: 404 });
  }
  return markdown;
}

export default function ArticleComponent() {
  const markdown = useLoaderData<typeof loader>();
  return (
    <>
      <div>test</div>
      <div>{markdown}</div>
    </>
  );
}
