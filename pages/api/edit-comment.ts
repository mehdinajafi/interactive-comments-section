import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const comment = JSON.parse(req.body);
    const newComment = await prisma.comment.update({
      where: {
        id: comment.id,
      },
      data: {
        content: comment.content,
        score: comment.score,
      },
      include: {
        user: true,
        replies: {
          include: {
            user: true,
          },
        },
      },
    });

    return res.status(200).json(newComment);
  } catch (error) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
};

export default handler;
