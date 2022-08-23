import { GetServerSideProps } from "next";
import { AppProviders } from "next-auth/providers";
import { getProviders } from "next-auth/react";
import { styled } from "stitches-config";
import Signin from "@/components/Signin";

interface ISignIn {
  providers: AppProviders;
}

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

const SignIn: React.FC<ISignIn> = ({ providers }) => {
  return (
    <Wrapper>
      <Signin providers={providers} />
    </Wrapper>
  );
};

export default SignIn;
