import { styled } from "stitches-config";

const STypography = styled("div", {
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
    textAlign: {
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

interface ITypography extends React.ComponentProps<typeof STypography> {
  fontWeight?: string;
}

const Typography: React.FC<ITypography> = ({
  children,
  color,
  fontWeight,
  css,
  ...props
}) => {
  return (
    <STypography
      {...props}
      css={{ color: `$${color}`, fontWeight: `$${fontWeight}`, ...css }}
    >
      {children}
    </STypography>
  );
};

export default Typography;
