import { Comment } from "@prisma/client";
import { styled } from "stitches-config";

const StyledComments = styled("div", {
  flexGrow: 1,
});

interface IComments {
  comments: Comment[];
}

const Comments: React.FC<IComments> = (props) => {
  return <StyledComments></StyledComments>;
};

export default Comments;
