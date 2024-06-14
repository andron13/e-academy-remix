import { readAllPosts } from "~/lib/readPost.server";
import { PostData } from "~/lib/type";

let postsCache: PostData[] | null = null;

async function getCachedPosts() {
  if (!postsCache) {
    postsCache = await readAllPosts();
  }
  return postsCache;
}

export const getTitleByPathSegment = async (
  pathSegment: string
): Promise<string> => {
  const posts = await getCachedPosts();
  const post = posts.find((e) => e.attributes.slug === pathSegment);
  return post?.attributes.title || "";
};
