import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";

const ScrollContext = createContext({
  lenis: null,
});

export const ScrollProvider = ({ children }) => {
  const [lenis, setLenis] = useState();
  const reqIdRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const animate = (time) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenis);

    return () => {
      lenis.reset();
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  const memoedValue = useMemo(
    () => ({
      lenis,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ScrollContext.Provider value={memoedValue}>
      {children}
    </ScrollContext.Provider>
  );
};
export default function usePage() {
  return useContext(ScrollContext);
}
