import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { styled } from "stitches-config";
import { CSSTransition } from "react-transition-group";
import usePortal from "@/hooks/usePortal";

const Backdrop = styled("div", {
  position: "fixed",
  inset: "0",
  backgroundColor: "#000",
  opacity: "0.5",
  transition: "opacity 300ms linear",
  zIndex: 1050,

  ".modal-enter &": {
    opacity: 0,
  },
  ".modal-enter-active &": {
    opacity: 0.5,
  },
  ".modal-exit &": {
    opacity: 0.5,
  },
  ".modal-exit-active &": {
    opacity: 0,
  },
});

const StyledModal = styled("div", {
  position: "fixed",
  inset: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  zIndex: 1055,
});

const Dialog = styled("div", {
  height: "auto",
  borderRadius: "$md",
  backgroundColor: "$ntrl-min",
  zIndex: 1060,

  ".modal-enter &": {
    opacity: 0,
    transform: "scale(0.9)",
  },
  ".modal-enter-active &": {
    opacity: 1,
    transform: "translateX(0)",
    transition: "opacity 300ms, transform 300ms",
  },
  ".modal-exit &": {
    opacity: 1,
  },
  ".modal-exit-active &": {
    opacity: 0,
    transform: "scale(0.9)",
    transition: "opacity 300ms, transform 300ms",
  },
});

interface IModal {
  show?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<IModal> = ({ show, onClose, children }) => {
  const portal = usePortal("modal");
  const dialogRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      onClose &&
      dialogRef.current &&
      !dialogRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  if (!portal) {
    return null;
  }

  return createPortal(
    <CSSTransition
      in={show}
      classNames="modal"
      timeout={300}
      nodeRef={wrapperRef}
      unmountOnExit
    >
      <div ref={wrapperRef}>
        <Backdrop />
        <StyledModal onClick={closeModal}>
          <Dialog ref={dialogRef}>{children}</Dialog>
        </StyledModal>
      </div>
    </CSSTransition>,
    portal
  );
};

export default Modal;
