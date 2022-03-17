import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "hsl(238, 40%, 52%)",
      "primary-lt": "hsl(239, 57%, 85%)",
      danger: "hsl(358, 79%, 66%)",
      "danger-lt": "hsl(357, 100%, 86%)",
      "ntrl-dk": "hsl(212, 24%, 26%)",
      ntrl: "hsl(211, 10%, 45%)",
      "ntrl-lt": "hsl(223, 19%, 93%)",
      "ntrl-ltr": "hsl(228, 33%, 97%)",
      "ntrl-min": "hsl(0, 0%, 100%)",
    },
    fonts: {
      base: "Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    fontSizes: {
      base: "1rem",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  media: {
    sm: "(max-width: 375px)",
  },
  utils: {},
});
