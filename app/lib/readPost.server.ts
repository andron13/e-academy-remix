// app/lib/readPost.server.ts
import fs from "fs/promises";
import * as path from "path";
import parseFrontMatter from "front-matter";
import { PostData } from "~/lib/type";

export async function readPostByFileName(fileName: string) {
  const file = await fs.readFile(`./content/${fileName}`);
  return file.toString();
}

function isMarkdown(file: string) {
  return path.extname(file) === ".md" || path.extname(file) === ".markdown";
}

async function getFiles(dir: string): Promise<string[]> {
  const directoryEntries = await fs.readdir(dir, { withFileTypes: true });
  const filesOrDirectories = await Promise.all(
    directoryEntries.map(async (dirent) => {
      const resolvedPath = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(resolvedPath) : resolvedPath;
    })
  );
  return filesOrDirectories.flat();
}

export async function readAllPosts(): Promise<PostData[]> {
  const files = await getFiles("./content");
  const mdFiles = files.filter(isMarkdown);

  let posts: PostData[] = await Promise.all(
    mdFiles.map(async (file) => {
      const content = await fs.readFile(file);
      const post = parseFrontMatter(content.toString());
      return post as PostData;
    })
  );

  // TODO we filter draft md files!!!
  posts = checkSlugUniqueness(posts);
  posts = filterOutDrafts(posts);
  return posts;
}

const isDraft = (post: PostData): boolean => post.attributes.draft;

function filterOutDrafts(posts: PostData[]): PostData[] {
  return posts.filter((post) => !isDraft(post));
}

function checkSlugUniqueness(posts: PostData[]): PostData[] {
  const slugMap = new Map<string, PostData>();

  posts.forEach((post) => {
    if (slugMap.has(post.attributes.slug)) {
      throw new Error(`Duplicate slug detected: ${post.attributes.title}`);
    }

    slugMap.set(post.attributes.slug, post);
  });

  return Array.from(slugMap.values());
}

export const findPostBySlug = async (
  slug: string
): Promise<PostData | undefined> => {
  const posts = await readAllPosts();
  const post = posts.find((post) => post.attributes.slug === slug);
  return post;
};
