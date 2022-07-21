import { styled } from "stitches-config";

const Button = styled("button", {
  "$$btn-padding-x": "$space$6",
  "$$btn-padding-y": "$space$3",
  "$$btn-font-size": "$fontSizes$sm",
  "$$btn-font-weight": "$fontWeights$regular",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  px: "$$btn-padding-x",
  py: "$$btn-padding-y",

  fontFamily: "$base",
  fontSize: "$$btn-font-size",
  fontWeight: "$$btn-font-weight",

  border: "1px solid transparent",
  borderRadius: "$base",
  boxShadow: "none",
  backgroundColor: "$$btn-bg",
  color: "$$btn-color",
  borderColor: "$$btn-border-color",
  cursor: "pointer",
  transition: `
  color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out,
  box-shadow .15s ease-in-out`,
  "@md": {
    fontSize: "$base",
  },
  "&:hover": {
    backgroundColor: "$$btn-hover-bg",
    border: "1px solid $$btn-hover-border-color",
  },
  "&:focus": {
    boxShadow: "0 0 0 $space$2 $$btn-focus-box-shadow",
    outline: "none",
  },
  "&:focus-visible": {
    outline: "1px dashed $$btn-focus-visible-outline",
    outlineOffset: "$space$2",
  },
  "&:disabled": {
    backgroundColor: "$$btn-disabled-bg",
    borderColor: "$$btn-disabled-border-color",
    opacity: "0.7",
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
        "$$btn-bg": "$colors$primary",
        "$$btn-color": "$colors$ntrl-min",
        "$$btn-border-color": "$colors$primary",
        "$$btn-hover-bg": "$colors$primary-dk",
        "$$btn-hover-border-color": "$colors$primary-dk",
        "$$btn-focus-box-shadow": "$colors$primary-lt",
        "$$btn-focus-visible-outline": "$colors$primary-lt",
        "$$btn-disabled-bg": "$colors$primary-lt",
        "$$btn-disabled-border-color": "$colors$primary-lt",
      },
      secondary: {
        "$$btn-bg": "$colors$secondary",
        "$$btn-color": "$colors$ntrl-min",
        "$$btn-border-color": "$colors$secondary",
        "$$btn-hover-bg": "$colors$secondary-dk",
        "$$btn-hover-border-color": "$colors$secondary-dk",
        "$$btn-focus-box-shadow": "$colors$secondary-lt",
        "$$btn-focus-visible-outline": "$colors$secondary-lt",
        "$$btn-disabled-bg": "$colors$secondary-lt",
        "$$btn-disabled-border-color": "$colors$secondary-lt",
      },
      danger: {
        "$$btn-bg": "$colors$danger",
        "$$btn-color": "$colors$ntrl-min",
        "$$btn-border-color": "$colors$danger",
        "$$btn-hover-bg": "$colors$danger-dk",
        "$$btn-hover-border-color": "$colors$danger-dk",
        "$$btn-focus-box-shadow": "$colors$danger-lt",
        "$$btn-focus-visible-outline": "$colors$danger-lt",
        "$$btn-disabled-bg": "$colors$danger-lt",
        "$$btn-disabled-border-color": "$colors$danger-lt",
      },
      "lite-primary": {
        "$$btn-bg": "transparent",
        "$$btn-color": "$colors$primary",
        "$$btn-border-color": "transparent",
        "$$btn-hover-bg": "transparent",
        "$$btn-hover-border-color": "transparent",
        "$$btn-focus-box-shadow": "transparent",
        "$$btn-focus-visible-outline": "$colors$primary-lt",
        "$$btn-disabled-bg": "transparent",
        "$$btn-disabled-border-color": "transparent",
      },
      "lite-danger": {
        "$$btn-bg": "transparent",
        "$$btn-color": "$colors$danger",
        "$$btn-border-color": "transparent",
        "$$btn-hover-bg": "transparent",
        "$$btn-hover-border-color": "transparent",
        "$$btn-focus-box-shadow": "transparent",
        "$$btn-focus-visible-outline": "$colors$danger-lt",
        "$$btn-disabled-bg": "transparent",
        "$$btn-disabled-border-color": "transparent",
      },
    },
    size: {
      sm: {
        "$$btn-padding-x": "$space$4",
        "$$btn-padding-y": "$space$2",
        "$$btn-font-size": "$fontSizes$xs",
        "@md": {
          "$$btn-font-size": "$fontSizes$sm",
        },
      },
      lg: {
        "$$btn-padding-x": "$space$8",
        "$$btn-padding-y": "$space$3",
        "$$btn-font-size": "$fontSizes$md",
        "@md": {
          "$$btn-font-size": "$fontSizes$lg",
        },
      },
    },
  },
});

export default Button;
