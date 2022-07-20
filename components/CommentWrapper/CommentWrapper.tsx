import { styled } from "stitches-config";
import SingleComment from "@/components/SingleComment";
import { IComment } from "@/types/comment";

interface ICommentWrapper {
  comment: IComment;
  replies: IComment[];
}

const ReplyContainer = styled("div", {
  borderLeft: "1px solid $ntrl-lt",
  paddingLeft: "$8",
  marginLeft: "$8",

  "@md": {
    paddingLeft: "$18",
    marginLeft: "$18",
  },
});

const CommentWrapper: React.FC<ICommentWrapper> = (props) => {
  return (
    <>
      <SingleComment comment={props.comment} />
      <ReplyContainer>
        {props.replies
          .filter((comment) => comment.replyTo === props.comment.id)
          .map((comment) => (
            <SingleComment
              key={comment.id}
              comment={comment}
              replyComment={true}
            />
          ))}
      </ReplyContainer>
    </>
  );
};

export default CommentWrapper;
