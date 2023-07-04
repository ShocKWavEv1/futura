import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisSmoothScroll() {
  const elementRef: any = useRef(null);
  const initialX: any = useRef(null);

  useEffect(() => {
    let lenis: any;
    let rafId: any;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const translateX = scrollTop - initialX.current; // Calculate the relative translation

      elementRef.current.style.transform = `translateX(${translateX}px)`;
    };

    const scrollLoop = () => {
      handleScroll();
      rafId = requestAnimationFrame(scrollLoop);
    };

    const initLenis = () => {
      lenis = new Lenis({
        smooth: true,
      });

      initialX.current = elementRef.current.getBoundingClientRect().left; // Store the initial x-axis position
      rafId = requestAnimationFrame(scrollLoop);
    };

    const destroyLenis = () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenis = null;
    };

    initLenis();

    return destroyLenis;
  }, []);

  return (
    <div>
      {/* Your page content */}
      <div style={{ height: "2000px", background: "#f0f0f0" }}>
        {/* Scrollable content */}
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "red",
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          ref={elementRef}
        >
          {/* Translating element */}
        </div>
      </div>
    </div>
  );
}
