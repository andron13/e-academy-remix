import { useLoaderData } from "@remix-run/react";
import { readPostByFileName } from "~/lib/readPost.server";

export async function loader() {
  return await readPostByFileName("test.md");
}

export default function ArticleComponent() {
  const markdown = useLoaderData<typeof loader>();

  return <div>{markdown}</div>;
}
