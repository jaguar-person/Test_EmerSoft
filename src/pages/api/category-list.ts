import type { NextApiRequest, NextApiResponse } from "next";
import { categories } from "./blog.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json(categories);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
