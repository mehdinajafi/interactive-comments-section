import { CommentsContext } from "@/contexts/Comments";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { styled } from "stitches-config";
import Avatar from "../Avatar";
import Button from "../Button";
import Textarea from "../Textarea";

const StyledForm = styled("form", {
  display: "flex",
  alignItems: "start",
  gap: "$5",
  padding: "$5",
  my: "$5",
  borderRadius: "$lg",
  backgroundColor: "$ntrl-min",
  "@md": {
    gap: "$10",
    padding: "$10",
  },
});

interface ICommentForm {
  replyTo?: string;
  setIsReplying?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentForm: React.FC<ICommentForm> = (props) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const { sendNewComment } = useContext(CommentsContext);

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const comment: string = form.comment.value;

    if (comment.trim() === "" || !session) {
      return;
    } else {
      setLoading(true);

      try {
        await sendNewComment({
          authorId: session.user.id,
          content: comment,
          replyTo: props.replyTo,
        });
        if (props.setIsReplying) {
          props.setIsReplying(false);
        }
        form.reset();
      } catch (error) {
        throw new Error("In send message");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <StyledForm onSubmit={submit}>
      <Avatar src={session?.user?.image} alt={session?.user?.name} />
      <Textarea css={{ minHeight: "$30" }} name="comment" />
      <Button variant="primary" size="lg" disabled={loading}>
        {props.replyTo ? "REPLY" : "SEND"}
      </Button>
    </StyledForm>
  );
};

export default CommentForm;
