import React, { useContext } from "react";
import { styled } from "stitches-config";
import { CommentsContext } from "@/contexts/Comments";
import SingleComment from "@/components/SingleComment";

const Container = styled("div", {
  flexGrow: 1,
  overflowY: "scroll",
});

const ReplyContainer = styled("div", {
  borderLeft: "1px solid $ntrl-lt",
  paddingLeft: "$8",
  marginLeft: "$8",

  "@md": {
    paddingLeft: "$18",
    marginLeft: "$18",
  },
});

const Comments = () => {
  const { comments } = useContext(CommentsContext);
  const mainComments = comments.filter((comment) => !comment.replyTo);
  const replies = comments.filter((comment) => comment.replyTo);

  return (
    <Container>
      {mainComments.map((comment) => (
        <React.Fragment key={comment.id}>
          <SingleComment comment={comment} />

          <ReplyContainer>
            {replies
              .filter((comment) => comment.replyTo === comment.id)
              .map((comment) => (
                <SingleComment
                  key={comment.id}
                  comment={comment}
                  replyComment={true}
                />
              ))}
          </ReplyContainer>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Comments;
