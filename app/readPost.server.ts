import fs from "fs/promises";

export async function readPost(fileName: string) {
  const file = await fs.readFile(`./content/${fileName}`);
  return file.toString();
}
