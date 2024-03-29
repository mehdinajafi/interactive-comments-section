import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

const spacesAndSizes = {
  1: "0.125rem",
  2: "0.25rem",
  3: "0.375rem",
  4: "0.5rem",
  5: "0.625rem",
  6: "0.75rem",
  7: "0.875rem",
  8: "1rem",
  9: "1.125rem",
  10: "1.25rem",
  11: "1.375rem",
  12: "1.5rem",
  13: "1.625rem",
  14: "1.75rem",
  15: "1.875rem",
  16: "2rem",
  17: "2.125rem",
  18: "2.25rem",
  19: "2.375rem",
  20: "2.5rem",
  21: "2.625rem",
  22: "2.75rem",
  23: "2.875rem",
  24: "3rem",
  25: "3.125rem",
  26: "3.25rem",
  27: "3.375rem",
  28: "3.5rem",
  29: "4rem",
  30: "5rem",
  31: "6rem",
  32: "7rem",
  33: "8rem",
  34: "9rem",
  35: "10rem",
  36: "11rem",
  37: "12rem",
  38: "13rem",
  39: "14rem",
  40: "15rem",
  41: "16rem",
  42: "18rem",
  43: "20rem",
  44: "24rem",
};

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
      "primary-dk": "hsl(238,40%, 40%)",
      primary: "hsl(238, 40%, 52%)",
      "primary-lt": "hsl(239, 57%, 85%)",
      "secondary-dk": "hsl(333, 100%, 45%)",
      secondary: "hsl(333, 100%, 52%)",
      "secondary-lt": "hsl(333, 100%, 60%)",
      "danger-dk": "hsl(358, 79%, 50%)",
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
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    space: {
      full: "100%",
      0: "0px",
      px: "1px",
      ...spacesAndSizes,
    },
    sizes: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
      full: "100%",
      0: "0px",
      px: "1px",
      ...spacesAndSizes,
    },
    radii: {
      none: "0px",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1400px)",
  },
  utils: {
    // Abbreviated margin properties
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: Stitches.PropertyValue<"width" | "height">) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});
