import { NextApiRequest, NextApiResponse } from "next";

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("method", req.method);
  return new Response("Hello, there!");
};

export const POST = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("post method", req.method);
  return res.status(201).json({ "message": `The body value ` });
};
