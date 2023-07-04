import React, { useCallback } from "react";
export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.height = "auto";
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
