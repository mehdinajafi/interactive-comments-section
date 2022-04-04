import { styled } from "stitches-config";

const StyledAvatar = styled("img", {
  borderRadius: "$full",
  size: "$20",
});

interface IAvatar
  extends Omit<React.ComponentProps<typeof StyledAvatar>, "src" | "alt"> {
  src: string | null | undefined;
  alt: string | null | undefined;
}

const Avatar: React.FC<IAvatar> = (props) => {
  return (
    <StyledAvatar
      {...props}
      src={props.src || "/images/blank-profile.webp"}
      alt={props.alt || "avatar"}
    />
  );
};

export default Avatar;
