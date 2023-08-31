import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
    } catch (err) {
      throw err;
    }
    res.status(200).json({});
  } else {
    res.status(405).json({});
  }
}
