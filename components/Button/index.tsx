import { styled } from "stitches-config";

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  px: "$6",
  py: "$3",

  fontFamily: "$base",
  fontSize: "$base",
  fontWeight: "$regular",

  border: "1px solid $primary",
  borderRadius: "$base",
  boxShadow: "none",

  cursor: "pointer",
  transition: `
  color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out,
  box-shadow .15s ease-in-out`,

  "&:focus": {
    outline: "none",
  },

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
        color: "$ntrl-min",
        "&:hover": {
          backgroundColor: "$primary-dk",
          border: "1px solid $primary-dk",
        },
        "&:focus": {
          boxShadow: "0 0 0 $space$2 $colors$primary-lt",
        },
        "&:focus-visible": {
          outline: "1px dashed $primary",
          outlineOffset: "$space$2",
        },
        "&:disabled": {
          backgroundColor: "$primary-lt",
          borderColor: "$primary-lt",
          cursor: "not-allowed",
        },
      },
    },
    size: {
      sm: {
        px: "$4",
        py: "$2",

        fontSize: "$sm",
      },
      lg: {
        px: "$8",
        py: "$4",

        fontSize: "$lg",
      },
    },
  },
});

export default Button;
