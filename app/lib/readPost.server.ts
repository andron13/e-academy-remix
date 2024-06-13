import fs from "fs/promises";
import * as path from "path";

export async function readPost(fileName: string) {
  const file = await fs.readFile(`./content/${fileName}`);
  return file.toString();
}

export async function readAllPosts() {
  const files = await fs.readdir("./content");
  const mdFiles = files.filter((file) => path.extname(file) === ".md");

  const fileContents = [];
  for (const file of mdFiles) {
    const content = await fs.readFile(path.join("./content", file));
    fileContents.push(content.toString());
  }

  return fileContents;
}
