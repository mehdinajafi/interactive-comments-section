import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { globalCss } from "stitches-config";

const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Rubik",
      src: "url(/fonts/Rubik-Regular.ttf) format('truetype')",
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      fontFamily: "Rubik",
      src: "url(/fonts/Rubik-Medium.ttf) format('truetype')",
      fontWeight: 500,
      fontStyle: "normal",
    },
    {
      fontFamily: "Rubik",
      src: "url(/fonts/Rubik-Bold.ttf) format('truetype')",
      fontWeight: 700,
      fontStyle: "normal",
    },
  ],
  "*": {
    boxSizing: "border-box",
  },
  "html, body": {
    height: "$full",
    padding: 0,
    margin: 0,
    fontFamily:
      "Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    backgroundColor: "$ntrl-ltr",
  },
  "#__next": {
    height: "$full",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  globalStyles();
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
