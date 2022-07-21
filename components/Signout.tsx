import { useSession, signOut } from "next-auth/react";
import Button from "@/components/shared/Button";
import Avatar from "@/components/shared/Avatar";
import Typography from "@/components/shared/Typography";
import { styled } from "stitches-config";
import { useState } from "react";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$7",
  padding: "$10",
});

interface ISignOut {
  close: () => void;
}

const SignOut: React.FC<ISignOut> = (props) => {
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  const onSignout = () => {
    setLoading(true);

    try {
      signOut();
      props.close();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Avatar size="lg" src={data?.user.image} alt={data?.user.name} />
      <Typography weight="bold" size="xl" color="ntrl-dk">
        {data?.user.name}
      </Typography>
      <Button variant="danger" disabled={loading} onClick={onSignout}>
        Sign out
      </Button>
    </Wrapper>
  );
};

export default SignOut;
