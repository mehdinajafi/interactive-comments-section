import Image from "next/image";
import { AppProviders } from "next-auth/providers";
import { signIn, useSession } from "next-auth/react";
import { styled } from "stitches-config";
import GoogleLogo from "@/images/google-logo.png";
import GithubLogo from "@/images/github-logo.png";
import Typography from "@/components/shared/Typography";

interface ISignin {
  providers: AppProviders;
}

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

const getProviderLogo = (name: string) => {
  switch (name) {
    case "Google":
      return (
        <Image src={GoogleLogo} alt="google-logo" width={30} height={30} />
      );
    case "GitHub":
      return (
        <Image src={GithubLogo} alt="github-logo" width={30} height={30} />
      );
  }
};

const Signin: React.FC<ISignin> = ({ providers }) => {
  const { status } = useSession();

  return (
    <Wrapper>
      <Heading>Welcome</Heading>
      {Object.values(providers).map((provider) => (
        <Button
          key={provider.name}
          onClick={() => signIn(provider.name)}
          disabled={status === "loading"}
        >
          {getProviderLogo(provider.name)}
          <Typography size="sm" weight="regular" css={{ marginLeft: "$10" }}>
            Sign in with {provider.name}
          </Typography>
        </Button>
      ))}
    </Wrapper>
  );
};

export default Signin;
