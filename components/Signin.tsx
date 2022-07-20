import { styled } from "stitches-config";
import { signIn } from "next-auth/react";

const Container = styled("div", {
  padding: "$8",
});

const Heading = styled("h2", {
  margin: 0,
  marginBottom: "$8",
  fontFamily: "$base",
  fontSize: "$lg",
});

const Button = styled("button", {
  backgroundColor: "$ntrl-min",
  fontFamily: "$base",
  border: "1px solid $ntrl-lt",
  width: "$full",
  marginBottom: "$5",
  py: "$5",
  transition: `transform 200ms ease-in-out,
  background-color 100ms linear`,
  cursor: "pointer",

  "&:last-child": {
    marginBottom: 0,
  },
  "&:hover": {
    backgroundColor: "$ntrl-lt",
  },
  "&:active": {
    transform: "scale(1.1)",
  },
});

const Signin = () => {
  return (
    <Container>
      <Heading>Sign in</Heading>
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
      <Button onClick={() => signIn("github")}>Sign in with Github</Button>
    </Container>
  );
};

export default Signin;
