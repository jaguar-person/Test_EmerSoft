export type BlogType = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
};

export type CategoryType = {
  id: number;
  name: string;
  slug: string;
};
