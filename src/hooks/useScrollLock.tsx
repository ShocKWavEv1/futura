import React, { useCallback, useState } from "react";
export const useScrollLock = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrollPositionSidebars, setScrollPositionSidebars] =
    useState<number>(0);

  const lockScroll = useCallback(() => {
    // Save the current scroll position
    setScrollPosition(window.scrollY);

    const topScroll = `-${window.scrollY}px`;

    console.log(topScroll);

    // Lock the scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = topScroll;
    document.body.style.width = "100%";
  }, []);

  const unlockScroll = useCallback(() => {
    console.log("SHOULD UNLOCK", scrollPosition);
    // Restore the scroll position
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return {
    lockScroll,
    unlockScroll,
  };
};
