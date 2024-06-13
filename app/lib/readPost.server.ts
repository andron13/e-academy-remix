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

  const posts: PostData[] = await Promise.all(
    mdFiles.map(async (file) => {
      const content = await fs.readFile(file);
      const post = parseFrontMatter(content.toString());
      return post as PostData;
    })
  );
  checkSlugUniqueness(posts);
  return posts;
}

function checkSlugUniqueness(posts: PostData[]): void {
  const slugs = new Set<string>();

  for (const {
    attributes: { slug, title },
  } of posts) {
    if (slugs.has(slug)) {
      throw new Error(`Duplicate slug detected: ${title}`);
    }

    slugs.add(slug);
  }
}
