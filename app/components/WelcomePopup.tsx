"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPLASH_SEEN_KEY = "ddmo-splash-seen";
const DISMISSED_KEY = "ddmo-welcome-dismissed";
const SPLASH_DURATION = 1800;
const DELAY_AFTER_SPLASH = 2500;
const AUTO_DISMISS_AFTER = 9000;

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const splashAlreadyPlayed = sessionStorage.getItem(SPLASH_SEEN_KEY);
    const delay = splashAlreadyPlayed
      ? DELAY_AFTER_SPLASH
      : SPLASH_DURATION + DELAY_AFTER_SPLASH;

    const showTimer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const dismiss = () => setVisible(false);
    const autoDismissTimer = setTimeout(dismiss, AUTO_DISMISS_AFTER);

    const onDocClick = (e: MouseEvent) => {
      if (!popupRef.current?.contains(e.target as Node)) dismiss();
    };
    document.addEventListener("mousedown", onDocClick);

    return () => {
      clearTimeout(autoDismissTimer);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [visible]);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="welcome-popup"
          ref={popupRef}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <svg className="welcome-popup-blob" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 4 C40 4 44 12 40 20 C48 16 56 20 56 28 C56 36 48 40 40 36 C44 44 40 52 32 52 C24 52 20 44 24 36 C16 40 8 36 8 28 C8 20 16 16 24 20 C20 12 24 4 32 4Z" fill="#FEBD02" />
            <ellipse cx="26" cy="27" rx="5" ry="6" fill="#0C2578" />
            <ellipse cx="40" cy="27" rx="5" ry="6" fill="#0C2578" />
            <circle cx="27" cy="29" r="1.8" fill="#F7F2E7" />
            <circle cx="41" cy="29" r="1.8" fill="#F7F2E7" />
            <path d="M25 37 Q32 42 40 37" stroke="#0C2578" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>

          <button
            className="welcome-popup-close"
            aria-label="Dismiss"
            onClick={handleDismiss}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>

          <p className="welcome-popup-text">
            👋 Hey! We&apos;re Doodles Dynamo — got a project in mind? Let&apos;s talk.
          </p>

          <a
            href="#contact"
            className="welcome-popup-cta"
            onClick={handleDismiss}
          >
            Let&apos;s talk
            <svg viewBox="0 0 24 24" fill="none" stroke="#0C2578" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
