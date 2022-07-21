import { styled } from "stitches-config";
import { signIn, useSession } from "next-auth/react";
import GoogleLogo from "@/images/google-logo.png";
import GithubLogo from "@/images/github-logo.png";
import Image from "next/image";
import Typography from "./shared/Typography";

const Wrapper = styled("div", {
  padding: "$8",
});

const Heading = styled("h2", {
  margin: 0,
  marginBottom: "$8",
  fontFamily: "$base",
  fontSize: "$lg",
});

const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$ntrl-min",
  fontFamily: "$base",
  border: "1px solid $ntrl-lt",
  borderRadius: "$md",
  width: "$full",
  marginBottom: "$5",
  py: "$5",
  px: "$10",
  transition: `transform 200ms ease-in-out,
  background-color 150ms linear`,
  cursor: "pointer",

  "&:last-child": {
    marginBottom: 0,
  },
  "&:hover": {
    backgroundColor: "$ntrl-lt",
  },
  "&:disabled": {
    cursor: "not-allowed",
  },
});

const Signin = () => {
  const { status } = useSession();
  return (
    <Wrapper>
      <Heading>Sign in</Heading>
      <Button onClick={() => signIn("google")} disabled={status === "loading"}>
        <Image src={GoogleLogo} alt="google" width={30} height={30} />
        <Typography size="sm" weight="regular" css={{ marginLeft: "$10" }}>
          Sign in with Google
        </Typography>
      </Button>
      <Button onClick={() => signIn("github")} disabled={status === "loading"}>
        <Image src={GithubLogo} alt="google" width={30} height={30} />
        <Typography size="sm" weight="regular" css={{ marginLeft: "$10" }}>
          Sign in with Github
        </Typography>
      </Button>
    </Wrapper>
  );
};

export default Signin;
