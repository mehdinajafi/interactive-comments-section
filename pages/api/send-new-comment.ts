import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const comment = JSON.parse(req.body);
    const newComment = await prisma.comment.create({
      data: comment,
    });
    return res.status(200).json(newComment);
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
};

export default handler;
