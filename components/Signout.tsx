import { useSession } from "next-auth/react";
import Box from "@/components/shared/Box";

const SignOut = () => {
  const { data } = useSession();

  return <Box direction="column">{data?.user.name}</Box>;
};

export default SignOut;
