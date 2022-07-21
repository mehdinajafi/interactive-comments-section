import React, { useContext } from "react";
import { styled } from "stitches-config";
import { CommentsContext } from "@/contexts/Comments";
import SingleComment from "@/components/SingleComment";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  py: "$8",
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

const NoMessageFound = styled("div", {
  fontFamily: "$base",
  fontSize: "$base",
  color: "$ntrl-dk",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > p": {
    backgroundColor: "$ntrl-min",
    padding: "$3",
    borderRadius: "$md",
  },
});

const Comments = () => {
  const { comments } = useContext(CommentsContext);
  const mainComments = comments.filter((comment) => !comment.replyTo);
  const replies = comments.filter((comment) => comment.replyTo);

  return (
    <Container>
      {mainComments.length === 0 ? (
        <NoMessageFound>
          <p>There are no comments to display. Write one.</p>
        </NoMessageFound>
      ) : (
        mainComments.map((comment) => (
          <React.Fragment key={comment.id}>
            <SingleComment comment={comment} />

            {replies.length !== 0 && (
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
            )}
          </React.Fragment>
        ))
      )}
    </Container>
  );
};

export default Comments;
