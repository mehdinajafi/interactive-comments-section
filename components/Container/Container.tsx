import { styled } from "stitches-config";

const Container = styled("div", {
  flexDirection: "column",
  size: "$full",
  mx: "auto",
  pb: "$10",
  px: "$5",

  "@sm": {
    maxWidth: "$sm",
  },
  "@md": {
    maxWidth: "$md",
  },
  "@lg": {
    maxWidth: "$lg",
  },
  "@xl": {
    maxWidth: "$xl",
  },
  "@xxl": {
    maxWidth: "$xxl",
  },
});

export default Container;
