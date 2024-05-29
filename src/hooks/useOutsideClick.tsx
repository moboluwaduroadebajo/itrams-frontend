import React, { useEffect } from "react";

export default function useOutsideClick(
  rootRef: React.RefObject<any>,
  dotRef: React.RefObject<any>,
  unmount: () => void
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node) &&
        dotRef.current &&
        !dotRef.current.contains(event.target as Node)
      ) {
        unmount();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dotRef, rootRef, unmount]);
}
