import { styled } from "@stitches/react";

const Box = styled("div", {
  display: "flex",

  variants: {
    width: {
      full: {
        width: "$full",
      },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      "row-reverse": {
        flexDirection: "row-reverse",
      },
      "column-reverse": {
        flexDirection: "column-reverse",
      },
    },
    alignItems: {
      start: {
        alignItems: "start",
      },
      end: {
        alignItems: "end",
      },
      center: {
        alignItems: "center",
      },
      between: {
        alignItems: "space-between",
      },
      around: {
        alignItems: "space-around",
      },
      evenly: {
        alignItems: "space-evenly",
      },
    },
    justifyContent: {
      start: {
        justifyContent: "start",
      },
      end: {
        justifyContent: "end",
      },
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
      evenly: {
        justifyContent: "space-evenly",
      },
    },
  },
});

export default Box;
