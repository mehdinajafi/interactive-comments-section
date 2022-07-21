import React, { useContext, useState } from "react";
import { styled } from "stitches-config";
import { useSession } from "next-auth/react";
import formatDistance from "date-fns/formatDistance";
import { CommentsContext } from "@/contexts/Comments";
import Avatar from "@/components/shared/Avatar";
import Box from "@/components/shared/Box";
import Button from "@/components/shared/Button";
import Typography from "@/components/shared/Typography";
import Textarea from "@/components/shared/Textarea";
import Badge from "@/components/shared/Badge";
import CommentForm from "@/components/CommentForm";
import Hidden from "@/components/shared/Hidden";
import { IComment } from "@/types/comment";
import PlusIcon from "@/images/icon-plus.svg";
import MinusIcon from "@/images/icon-minus.svg";
import ReplyIcon from "@/images/icon-reply.svg";
import DeleteIcon from "@/images/icon-delete.svg";
import EditIcon from "@/images/icon-edit.svg";

const Container = styled("article", {
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  gap: "$5",
  width: "$full",
  padding: "$5",
  borderRadius: "$lg",
  backgroundColor: "$ntrl-min",
  "&:last-child": {
    marginBottom: "$5",
  },
  "@md": {
    flexDirection: "row",
    padding: "$10",
    gap: "$10",
  },
});

const ScoreBtnGroup = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "$ntrl-ltr",
  borderRadius: "$md",
  fontSize: "$sm",
  "@md": {
    flexDirection: "column",
    fontSize: "$base",
  },
});

const UserName = styled("span", {
  fontSize: "$xs",
  fontWeight: "$bold",
  color: "$ntrl-dk",
  mx: "$4",
  "@md": {
    mx: "$8",
    fontSize: "$sm",
  },
});

interface ISingleComment {
  comment: IComment;
  replyComment?: boolean;
}

enum ActiveLoading {
  Delete,
  Edit,
  Vote,
}

const SingleComment: React.FC<ISingleComment> = (props) => {
  const [activeLoading, setActiveLoading] = useState<ActiveLoading | null>(
    null
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const { data: session } = useSession();
  const { deleteComment, editComment } = useContext(CommentsContext);

  const handleDelete = async (id: string) => {
    setActiveLoading(ActiveLoading.Delete);

    try {
      await deleteComment({
        id,
      });
    } catch (error) {
      setActiveLoading(null);
    }
  };

  const submitEditComment = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newContent = form.content.value;
    setActiveLoading(ActiveLoading.Edit);

    try {
      await editComment({
        ...props.comment,
        content: newContent,
      });
      setIsEditing(false);
    } finally {
      setActiveLoading(null);
    }
  };

  const changeScore = async (type: "up" | "down") => {
    setActiveLoading(ActiveLoading.Vote);
    const oldScore = props.comment.score;
    const newScore = type === "up" ? oldScore + 1 : oldScore - 1;

    try {
      await editComment({
        ...props.comment,
        score: newScore,
      });
    } finally {
      setActiveLoading(null);
    }
  };

  const renderOptions = () => {
    if (session?.user.id === props.comment.user.id) {
      return (
        <Box alignItems="center">
          <Button
            variant="lite-danger"
            onClick={() => handleDelete(props.comment.id)}
            disabled={activeLoading === ActiveLoading.Delete}
          >
            <DeleteIcon />
            <span>Delete</span>
          </Button>
          <Button
            variant="lite-primary"
            onClick={() => setIsEditing((isEditing) => !isEditing)}
          >
            <EditIcon />
            <span>{isEditing ? "Disable Edit" : "Edit"}</span>
          </Button>
        </Box>
      );
    } else {
      if (props.replyComment) {
        return;
      }

      return (
        <Button
          variant="lite-primary"
          onClick={() => setIsReplying((isReplying) => !isReplying)}
        >
          <ReplyIcon />
          <span>Reply</span>
        </Button>
      );
    }
  };

  const renderContent = () => {
    return isEditing ? (
      <form onSubmit={submitEditComment}>
        <Textarea name="content" defaultValue={props.comment.content} />
        <Box justifyContent="end" css={{ marginTop: "$3" }}>
          <Button
            variant="primary"
            disabled={activeLoading === ActiveLoading.Edit}
          >
            UPDATE
          </Button>
        </Box>
      </form>
    ) : (
      <Typography variant="body1">{props.comment.content}</Typography>
    );
  };

  const renderScoreBtns = () => {
    return (
      <ScoreBtnGroup>
        <Button
          variant="lite-primary"
          disabled={activeLoading === ActiveLoading.Vote}
          onClick={() => changeScore("up")}
        >
          <PlusIcon />
        </Button>
        <Typography color="primary-dk" weight="bold">
          {props.comment.score}
        </Typography>
        <Button
          variant="lite-primary"
          disabled={activeLoading === ActiveLoading.Vote}
          onClick={() => changeScore("down")}
        >
          <MinusIcon />
        </Button>
      </ScoreBtnGroup>
    );
  };

  return (
    <>
      <Container>
        <Hidden mdDown>{renderScoreBtns()}</Hidden>

        <Box direction="column" width="full">
          <Box
            alignItems="center"
            justifyContent="between"
            css={{ marginBottom: "$5" }}
          >
            <Box alignItems="center">
              <Avatar
                size="sm"
                src={props.comment.user.image}
                alt={props.comment.user.name}
              />
              <UserName>{props.comment.user.name}</UserName>
              {session && props.comment.authorId === session.user.id && (
                <Badge
                  variant="primary"
                  size="small"
                  css={{
                    marginRight: "$4",
                    "@md": {
                      marginRight: "$5",
                    },
                  }}
                >
                  you
                </Badge>
              )}
              <Typography variant="subtitle1">
                {formatDistance(new Date(props.comment.createdAt), new Date())}
              </Typography>
            </Box>

            <Hidden mdDown>
              <Box alignItems="center">{session && renderOptions()}</Box>
            </Hidden>
          </Box>

          {renderContent()}
        </Box>

        <Hidden mdUp css={{ width: "$full" }}>
          <Box justifyContent="between" alignItems="center">
            {renderScoreBtns()}
            {renderOptions()}
          </Box>
        </Hidden>
      </Container>

      {isReplying && (
        <CommentForm replyTo={props.comment.id} setIsReplying={setIsReplying} />
      )}
    </>
  );
};

export default SingleComment;
