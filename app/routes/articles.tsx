import { useLoaderData } from "@remix-run/react";
import { readPost } from "~/readPost.server";

export async function loader() {
  return await readPost("test.md");
}

export default function ArticleComponent() {
  const markdown = useLoaderData<typeof loader>();

  return <div>{markdown}</div>;
}
