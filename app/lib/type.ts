export type PostAttributes = {
  draft: boolean;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  weight: number;
  slug: string;
};

export type PostData = {
  attributes: PostAttributes;
  body: string;
};
