import { useEffect, useState } from "react";
import useSSR from "./useSSR";

const createElement = (id: string) => {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  return element;
};

const usePortal = (id: string) => {
  const { isBrowser } = useSSR();
  const [element, setElement] = useState<HTMLElement | null>(
    isBrowser ? createElement(id) : null
  );

  useEffect(() => {
    const parentElement = document.body;
    const hasElement = parentElement.querySelector<HTMLElement>(`#${id}`);
    const el = hasElement || createElement(id);

    if (!hasElement) {
      parentElement.appendChild(el);
    }
    setElement(el);
  }, []);

  return element;
};

export default usePortal;
