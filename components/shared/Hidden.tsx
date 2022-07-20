import { styled } from "stitches-config";

const Hidden = styled("div", {
  variants: {
    mdDown: {
      true: {
        display: "none",
        "@md": {
          display: "flex",
        },
      },
    },
    mdUp: {
      true: {
        "@md": {
          display: "none",
        },
      },
    },
  },
});

export default Hidden;
