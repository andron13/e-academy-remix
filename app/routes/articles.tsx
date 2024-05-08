import { useLoaderData } from "@remix-run/react";
import { readPost } from "~/readPost.server";

export async function loader() {
  return await readPost("test.md");
}

export default function ArticleComponent() {
  const data = useLoaderData<typeof loader>();
  console.log({ data });
  return <div>{data}</div>;
}
