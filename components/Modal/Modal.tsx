import { styled, keyframes } from "stitches-config";

const Container = styled("div", {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
});

const goDown = keyframes({
  "0%": {
    top: "-100%",
  },
  "100%": {
    top: "50%",
  },
});

const Main = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  height: "auto",
  borderRadius: "$md",
  transform: "translate(-50%, -50%)",
  backgroundColor: "$ntrl-min",
  animation: `${goDown} 400ms`,
  animationDelay: "100ms",
});

const Modal: React.FC = (props) => {
  return (
    <Container>
      <Main>{props.children}</Main>
    </Container>
  );
};

export default Modal;
