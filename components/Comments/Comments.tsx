import { useContext } from "react";
import { styled } from "stitches-config";
import { CommentsContext } from "@/contexts/Comments";
import CommentWrapper from "../CommentWrapper";

const Container = styled("div", {
  flexGrow: 1,
  overflowY: "scroll",
});

const Comments: React.FC = () => {
  const { comments } = useContext(CommentsContext);
  const mainComments = comments.filter((comment) => !comment.replyTo);
  const replies = comments.filter((comment) => comment.replyTo);

  return (
    <Container>
      {mainComments.map((comment) => (
        <CommentWrapper key={comment.id} comment={comment} replies={replies} />
      ))}
    </Container>
  );
};

export default Comments;
