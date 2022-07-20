import { Comment, User } from "@prisma/client";

export type IComment = Omit<Comment, "replies"> & {
  user: User;
  replies: Comment & {
    user: User;
  };
};
