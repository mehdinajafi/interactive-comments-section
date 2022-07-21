import { styled } from "stitches-config";

const StyledTypography = styled("div", {
  variants: {
    variant: {
      subtitle1: {
        fontSize: "$xs",
        color: "$ntrl-lt",
        "@md": {
          fontSize: "@sm",
        },
      },
      body1: {
        color: "$ntrl-dk",
        fontSize: "$sm",
        "@md": {
          fontSize: "@base",
        },
      },
    },
    weight: {
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      base: {
        fontSize: "$base",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
    },
    align: {
      start: {
        textAlign: "start",
      },
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
      justify: {
        textAlign: "justify",
      },
    },
  },
});

interface ITypography extends React.ComponentProps<typeof StyledTypography> {}

const Typography: React.FC<ITypography> = ({
  children,
  color,
  css,
  ...props
}) => {
  return (
    <StyledTypography {...props} css={{ color: `$${color}`, ...css }}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
