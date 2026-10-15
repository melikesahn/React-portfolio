import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const DESKTOP_QUERY = "(min-width: 769px) and (pointer: fine)";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // index.css'teki "cursor: none" ile aynı medya sorgusu
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && !window.matchMedia(DESKTOP_QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => setIsMobile(!e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) return; // burada mobile ise hiçbir şey yapmıyoruz

    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    if (!cursor || !cursorBorder) return;

    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
    const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power.out" });
    const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseDown = () => {
      gsap.to([cursor, cursorBorder], { scale: 0.6, duration: 0.2 });
    };
    const handleMouseUp = () => {
      gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.2 });
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile]);

  // render kısmında mobile için null dönüyoruz
  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-white 
        rounded-full pointer-events-none z-[999] mix-blend-difference"
      />
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white 
        rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
      />
    </>
  );
};

export default CustomCursor;
