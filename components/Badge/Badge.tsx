import { styled } from "stitches-config";

const Badge = styled("span", {
  borderRadius: "$sm",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "$ntrl-min",
      },
    },
    size: {
      small: {
        fontSize: "$xs",
        py: "$1",
        px: "$3",
        "@md": {
          fontSize: "$sm",
        },
      },
    },
  },
});

export default Badge;
