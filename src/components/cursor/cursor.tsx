import { useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
const Cursor = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const cursor: any = document.getElementById("custom-cursor");
      const links: any = document.querySelectorAll(
        "button, .derpazoid, video, image"
      );
      const cursorText: any = document.querySelector("cursor-text");

      console.log(links);

      const onMouseMove = (event: any) => {
        const { clientX, clientY } = event;
        gsap.to(cursor, { x: clientX, y: clientY });
      };

      const onMouseEnterLink = (event: any) => {
        const link = event.target;
        if (link.classList.contains("view")) {
          gsap.to(cursor, { scale: 4 });
          //cursorText.style.display = "block";
        } else {
          gsap.to(cursor, { scale: 4 });
        }
      };

      const onMouseLeaveLink = () => {
        gsap.to(cursor, { scale: 1 });
        //cursorText.style.display = "none";
      };

      document.addEventListener("mousemove", onMouseMove);

      links.forEach((link: any) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    }, 5000);
  }, [router]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">View</span>
    </div>
  );
};

export default Cursor;
