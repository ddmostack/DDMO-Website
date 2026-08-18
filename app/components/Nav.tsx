"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const noopSubscribe = () => () => {};

export default function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  // True only after hydration — the portal target (document.body) doesn't exist during SSR.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    const targets = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <ul className="nav-links nav-links-left">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? "active" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="logo">
          <span className="logo-dot"></span>
          Doodles Dynamo
        </div>
        <ul className="nav-links nav-links-right">
          {NAV_LINKS.slice(2).map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? "active" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {mounted &&
        createPortal(
          <div
            className={`nav-mobile-overlay${mobileOpen ? " open" : ""}`}
            aria-hidden={!mobileOpen}
          >
            <div
              className="nav-mobile-backdrop"
              onClick={() => setMobileOpen(false)}
            />
            <div className="nav-mobile-drawer">
              <button
                className="nav-mobile-close"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
              <ul className="nav-mobile-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={activeId === link.id ? "active" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="nav-cta nav-mobile-cta"
                onClick={() => {
                  setMobileOpen(false);
                  scrollToContact();
                }}
              >
                Let&apos;s talk
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
