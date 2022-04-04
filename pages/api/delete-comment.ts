import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const comment = JSON.parse(req.body);
    const deleteComment = await prisma.comment.delete({
      where: {
        id: comment.id,
      },
    });
    return res.status(200).json(deleteComment);
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
};

export default handler;
