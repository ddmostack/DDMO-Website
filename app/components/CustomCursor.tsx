"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [role='button'], .stat-card, .service-card, .project-card, .faq-q-row";

export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    let lastX = window.innerWidth / 2;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      const tilt = Math.max(-18, Math.min(18, dx * 1.4));
      wrap.style.opacity = "1";
      wrap.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) rotate(${-28 + tilt}deg)`;
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
        wrap.classList.add("is-hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
        wrap.classList.remove("is-hover");
      }
    };
    const onLeaveWindow = () => {
      wrap.style.opacity = "0";
    };

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={wrapRef} aria-hidden="true">
      <svg className="cursor-icon cursor-icon-pencil" viewBox="0 0 24 24">
        <path
          d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
          fill="#FEBD02"
          stroke="#14162E"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="cursor-icon cursor-icon-hand" viewBox="0 0 24 24">
        <path
          d="M10 21c-1.5 0-2.7-.9-3.4-2.1L4 14.2c-.5-.9-.2-2 .6-2.5.8-.5 1.9-.3 2.5.5l1.4 1.8V6a1.5 1.5 0 0 1 3 0v6h1V4.8a1.5 1.5 0 0 1 3 0V12h1V6.3a1.5 1.5 0 0 1 3 0V15c0 3.3-2.7 6-6 6h-3.5z"
          fill="#FEBD02"
          stroke="#14162E"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
