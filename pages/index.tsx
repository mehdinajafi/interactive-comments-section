import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import superjson from "superjson";
import prisma from "@/prisma/client";
import CommentsProvider from "@/contexts/Comments";
import CommentForm from "@/components/CommentForm";
import Container from "@/components/shared/Container";
import Comments from "@/components/Comments";
import Modal from "@/components/shared/Modal";
import Auth from "@/components/Auth";
import { IComment } from "@/types/comment";

interface IHome {
  comments: IComment[];
}

const Home: NextPage<IHome> = (props) => {
  const { status } = useSession();

  return (
    <CommentsProvider comments={props.comments || []}>
      <Head>
        <title>Interactive Comments Section</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {status === "unauthenticated" && (
        <Modal>
          <Auth />
        </Modal>
      )}

      <Container>
        <Comments />
        <CommentForm />
      </Container>
    </CommentsProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const comments = await prisma.comment.findMany({
    include: {
      replies: {
        include: {
          user: true,
        },
      },
      user: true,
    },
  });

  return {
    props: {
      comments: superjson.serialize(comments).json,
    },
  };
};

export default Home;
