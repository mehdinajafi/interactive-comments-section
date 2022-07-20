import { styled } from "stitches-config";

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  px: "$6",
  py: "$3",

  fontFamily: "$base",
  fontSize: "$sm",
  fontWeight: "$regular",

  backgroundColor: "inherit",
  border: "1px solid transparent",
  borderRadius: "$base",
  boxShadow: "none",

  cursor: "pointer",
  transition: `
  color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out,
  box-shadow .15s ease-in-out`,

  "@md": {
    fontSize: "$base",
  },

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  "> svg": {
    "&:only-child": {},
    "&:not(:only-child)": {
      marginRight: "$3",
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "$ntrl-min",
        borderColor: "$primary",
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
      "lite-primary": {
        color: "$primary",
        borderColor: "transparent",
        backgroundColor: "transparent",
      },
      "lite-danger": {
        color: "$danger",
        borderColor: "transparent",
        backgroundColor: "transparent",
      },
    },
    size: {
      sm: {
        px: "$4",
        py: "$2",
        fontSize: "$xs",

        "@md": {
          fontSize: "$sm",
        },
      },
      lg: {
        px: "$8",
        py: "$4",
        fontSize: "$md",

        "@md": {
          fontSize: "$lg",
        },
      },
    },
  },
});

export default Button;
