import type { NextApiRequest, NextApiResponse } from "next";
import { posts, categories } from "./blog.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { keyword, page, category } = req.query;

  const filteredCategory = categories.find(
    (item) => item.slug === String(category)
  );

  const data = posts.filter(
    (post, i) =>
      post.title.includes(String(keyword)) &&
      // @ts-ignore
      post.categories.includes(filteredCategory.id)
  );

  const dataWithPage = data.filter(
    (_, i) => i >= Number(page) * 3 && i < Number(page) * 3 + 3
  );

  if (req.method === "GET") {
    res.status(200).json(dataWithPage);
  } else {
    res.status(404).json({ message: "No Post" });
  }
}
