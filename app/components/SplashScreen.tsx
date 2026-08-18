"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const SPLASH_DURATION = 2200;
const WORDMARK = "Doodles Dynamo";
const NBSP = " ";

const SPARKLES = [
  { top: "-10%", left: "4%", size: 10, delay: 0.9 },
  { top: "0%", left: "94%", size: 8, delay: 1.15 },
  { top: "90%", left: "10%", size: 7, delay: 1.4 },
];

const AMBIENT_SHAPES = [
  {
    className: "splash-ambient-blue",
    x: [0, 36, -18, 0],
    y: [0, -26, 18, 0],
    duration: 9,
    delay: 0,
  },
  {
    className: "splash-ambient-yellow",
    x: [0, -30, 22, 0],
    y: [0, 22, -18, 0],
    duration: 11,
    delay: 0.6,
  },
  {
    className: "splash-ambient-teal",
    x: [0, 26, -28, 0],
    y: [0, -18, 24, 0],
    duration: 10,
    delay: 1.1,
  },
];

const DOT_COLORS = ["#FEBD02", "#10D9AB", "#FF4101"];

const wordmarkContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.25 },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

export default function SplashScreen({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <>
      {children}

      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="splash-ambient" aria-hidden="true">
              {AMBIENT_SHAPES.map((shape) => (
                <motion.div
                  key={shape.className}
                  className={`splash-ambient-shape ${shape.className}`}
                  animate={{ x: shape.x, y: shape.y }}
                  transition={{
                    duration: shape.duration,
                    delay: shape.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="splash-content">
              <div className="splash-mark-wrap">
                {SPARKLES.map((s, i) => (
                  <motion.span
                    key={i}
                    className="splash-sparkle"
                    style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      repeatDelay: 0.3,
                      delay: s.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <motion.div
                  className="splash-giant-wordmark"
                  variants={wordmarkContainer}
                  initial="hidden"
                  animate="visible"
                  aria-label={WORDMARK}
                >
                  {WORDMARK.split("").map((char, i) => (
                    <motion.span
                      className="splash-letter"
                      key={i}
                      variants={letterVariant}
                      aria-hidden="true"
                    >
                      {char === " " ? NBSP : char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="splash-dots"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
              >
                {DOT_COLORS.map((color, i) => (
                  <motion.span
                    key={color}
                    className="splash-dot"
                    animate={{
                      y: [0, -7, 0],
                      backgroundColor: DOT_COLORS,
                    }}
                    transition={{
                      y: {
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.12,
                      },
                      backgroundColor: {
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.12,
                      },
                    }}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
