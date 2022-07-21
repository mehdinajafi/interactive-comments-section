import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { styled } from "stitches-config";
import { CommentsContext } from "@/contexts/Comments";
import Avatar from "@/components/shared/Avatar";
import Button from "@/components/shared/Button";
import Textarea from "@/components/shared/Textarea";
import Modal from "@/components/shared/Modal";
import SignOut from "@/components/Signout";

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

const Buttons = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
});

interface ICommentForm {
  replyTo?: string;
  setIsReplying?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentForm: React.FC<ICommentForm> = (props) => {
  const [loading, setLoading] = useState(false);
  const [isSignoutModalOpen, setIsSignoutModalOpen] = useState(false);
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
      <Avatar size="sm" src={session?.user?.image} alt={session?.user?.name} />
      <Modal
        show={isSignoutModalOpen}
        onClose={() => setIsSignoutModalOpen(false)}
      >
        <SignOut close={() => setIsSignoutModalOpen(false)} />
      </Modal>
      <Textarea css={{ minHeight: "$32" }} name="comment" />

      <Buttons>
        <Button variant="primary" size="lg" disabled={loading}>
          {props.replyTo ? "REPLY" : "SEND"}
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => setIsSignoutModalOpen(true)}
        >
          Setiings
        </Button>
      </Buttons>
    </StyledForm>
  );
};

export default CommentForm;
