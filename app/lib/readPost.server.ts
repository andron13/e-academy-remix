import fs from "fs/promises";
import * as path from "path";
import parseFrontMatter from "front-matter";
import { PostData } from "~/lib/type";

export async function readPostByFileName(fileName: string) {
  const file = await fs.readFile(`./content/${fileName}`);
  return file.toString();
}

function isMarkdown(file: string) {
  return path.extname(file) === ".md";
}

async function getFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

export async function readAllPosts(): Promise<PostData[]> {
  const files = await getFiles("./content");
  const mdFiles = files.filter(isMarkdown);

  const posts: PostData[] = [];
  for (const file of mdFiles) {
    const content = await fs.readFile(file);
    const post = parseFrontMatter(content.toString());
    posts.push(post as PostData);
  }
  checkSlugUniqueness(posts);

  return posts;
}

function checkSlugUniqueness(posts: PostData[]): void {
  const slugs: { [key: string]: boolean } = {};

  for (const post of posts) {
    const postSlug = post.attributes.slug;

    if (slugs[postSlug]) {
      throw new Error(`Duplicate slug detected: ${post.attributes.title}`);
    }

    slugs[postSlug] = true;
  }
}
