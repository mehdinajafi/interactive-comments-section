import { styled } from "stitches-config";

const Textarea = styled("textarea", {
  color: "$ntrl-dk",

  boxShadow: "none",
  border: "1px solid $ntrl-lt",
  borderRadius: "$lg",
  px: "$8",
  py: "$4",
  width: "$full",

  fontSize: "$base",
  fontFamily: "$base",

  resize: "none",

  "&:focus": {
    outline: "none",
    borderColor: "$primary",
  },
});

export default Textarea;
