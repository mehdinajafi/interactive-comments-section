import { createContext, useReducer } from "react";
import { IComment } from "@/types/comment";

export enum ActionsType {
  "SET" = "SET",
  "SEND" = "SEND",
  "DELETE" = "DELETE",
  "EDIT" = "EDIT",
}

interface ISetAction {
  type: ActionsType.SET;
  payload: IComment[];
}

interface ISendAction {
  type: ActionsType.SEND;
  payload: IComment;
}

interface IDeleteAction {
  type: ActionsType.DELETE;
  payload: string;
}

interface IEditAction {
  type: ActionsType.EDIT;
  payload: IComment;
}

type Action = ISetAction | ISendAction | IDeleteAction | IEditAction;

export const CommentsContext = createContext<{
  comments: IComment[];
  dispatch: React.Dispatch<Action>;
  setComments: (comments: IComment[]) => void;
  sendNewComment: (comment: INewComment) => Promise<void>;
  editComment: (comment: IComment) => Promise<void>;
  deleteComment: ({ id }: { id: string }) => Promise<void>;
}>({
  comments: [],
  dispatch: () => {},
  setComments: () => {},
  sendNewComment: async () => {},
  editComment: async () => {},
  deleteComment: async () => {},
});

const reducer = (state: IComment[], action: Action): IComment[] => {
  switch (action.type) {
    case ActionsType.SET: {
      return [...state, ...action.payload];
    }
    case ActionsType.SEND: {
      return [...state, action.payload];
    }
    case ActionsType.DELETE: {
      const newComments = state.filter(
        (comment) => comment.id !== action.payload
      );
      return newComments;
    }
    case ActionsType.EDIT: {
      const newComments = state.map((comment) => {
        if (comment.id === action.payload.id) {
          return action.payload;
        }
        return comment;
      });
      return newComments;
    }
    default: {
      return state;
    }
  }
};

interface INewComment {
  authorId: string;
  content: string;
  replyTo?: string;
}

interface ICommentsProvider {
  comments: IComment[];
}

const CommentsProvider: React.FC<ICommentsProvider> = (props) => {
  const [store, dispatch] = useReducer(reducer, props.comments);

  const setComments = (comments: IComment[]) => {
    dispatch({ type: ActionsType.SET, payload: comments });
  };

  const sendNewComment = async (comment: INewComment) => {
    try {
      const res = await fetch("/api/send-new-comment", {
        method: "POST",
        body: JSON.stringify(comment),
      });
      const newComment = await res.json();
      dispatch({ type: ActionsType.SEND, payload: newComment });
    } catch (error) {
      console.log(error);
    }
  };

  const editComment = async (comment: IComment) => {
    try {
      const res = await fetch("/api/edit-comment", {
        method: "POST",
        body: JSON.stringify(comment),
      });
      const newComment = await res.json();

      dispatch({ type: ActionsType.EDIT, payload: newComment });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async ({ id }: { id: string }) => {
    try {
      await fetch("/api/delete-comment", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
      });
      dispatch({ type: ActionsType.DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        comments: store,
        setComments,
        sendNewComment,
        editComment,
        deleteComment,
        dispatch,
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
