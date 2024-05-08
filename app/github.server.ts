export const config = {
  githubToken: process.env.GITHUB_TOKEN,
  githubUsername: process.env.GITHUB_USERNAME,
  githubRepo: process.env.GITHUB_REPO,
  yourAppName: "md-test",
};

export async function fetchMarkdownFile(fileName: string) {
  const accessToken = config.githubToken;
  const accountName = config.githubUsername;
  const repoName = config.githubRepo;
  const yourAppName = config.yourAppName;
  const headers = new Headers();
  headers.set("Accept", "application/vnd.github.v3.raw");
  headers.set("Authorization", `token ${accessToken}`);
  headers.set("User-Agent", yourAppName);

  const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
  const dir: string = "/contents/articles/";
  const url = new URL(repo + dir + fileName);

  const response = await fetch(url, { headers });
  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // File not found
    }
    throw Error(
      `Fetching Markdown file from GitHub failed with ${response.status}: ${response.statusText}`
    );
  }
  return response.text();
}
