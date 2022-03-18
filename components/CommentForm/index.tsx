import { useSession } from "next-auth/react";
import { useState } from "react";
import { styled } from "stitches-config";
import Avatar from "../Avatar";
import Button from "../Button";
import Textarea from "../Textarea";

const StyledForm = styled("form", {
  display: "flex",
  alignItems: "start",
  gap: "$10",
  p: "$10",
  borderRadius: "$lg",
  backgroundColor: "$ntrl-min",
});

const CommentForm = () => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const comment = form.comment.value;

    if (comment.trim() === "" || !session) {
      return;
    } else {
      setLoading(true);

      try {
        const res = await fetch("/api/send-new-comment", {
          method: "POST",
          body: JSON.stringify({
            authorId: session.user.id,
            content: comment,
          }),
        });
        const data = await res.json();
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
      <Button color="primary" size="lg" disabled={loading}>
        Send
      </Button>
    </StyledForm>
  );
};

export default CommentForm;
