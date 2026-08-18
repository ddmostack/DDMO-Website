"use client";

import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import "./homepage.css";
import CustomCursor from "./components/CustomCursor";
import WelcomePopup from "./components/WelcomePopup";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import Trust from "./components/sections/Trust";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

const SPLASH_DURATION = 1800;

export default function Home() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sticky note toggle (hero)
    const note = document.getElementById("stickyNote");
    const onNoteClick = () => note?.classList.toggle("opened");
    note?.addEventListener("click", onNoteClick);

    // Contact form (no backend yet — swap for a real submit handler, e.g. Resend)
    const contactForm = document.getElementById(
      "contactForm"
    ) as HTMLFormElement | null;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const btn = contactForm?.querySelector(
        ".contact-submit"
      ) as HTMLButtonElement | null;
      if (!btn || !contactForm) return;
      const originalText = btn.innerHTML;
      btn.innerHTML = "Thanks — we'll be in touch! ✓";
      btn.style.pointerEvents = "none";
      setTimeout(() => {
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.style.pointerEvents = "auto";
      }, 2600);
    };
    contactForm?.addEventListener("submit", onSubmit);

    // Billboard chain + swinging contact board — cursor and scroll reactive tilt
    const hang = document.getElementById("contactHang");
    const chain = document.getElementById("billboardChain");
    const contactSection = document.querySelector<HTMLElement>(
      ".contact-form-section"
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let removeTiltListeners = () => {};

    if (hang && contactSection && !prefersReducedMotion) {
      const setTilt = (deg: number) => {
        hang.style.setProperty("--js-tilt", `${deg}deg`);
        if (chain) chain.style.setProperty("--js-tilt", `${deg * 0.5}deg`);
      };

      const onTiltMouseMove = (e: MouseEvent) => {
        const rect = contactSection.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        let offset = (e.clientX - centerX) / (rect.width / 2);
        offset = Math.max(-1, Math.min(1, offset));
        setTilt(offset * 5.5);
      };
      const onTiltMouseLeave = () => {
        setTilt(0);
      };
      contactSection.addEventListener("mousemove", onTiltMouseMove);
      contactSection.addEventListener("mouseleave", onTiltMouseLeave);

      let lastScrollY = window.scrollY;
      let scrollTilt = 0;
      let ticking = false;
      const onTiltScroll = () => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
        scrollTilt = Math.max(-9, Math.min(9, scrollTilt + delta * 0.22));
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const rect = contactSection.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (inView) setTilt(scrollTilt);
            scrollTilt *= 0.82;
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onTiltScroll, { passive: true });

      removeTiltListeners = () => {
        contactSection.removeEventListener("mousemove", onTiltMouseMove);
        contactSection.removeEventListener("mouseleave", onTiltMouseLeave);
        window.removeEventListener("scroll", onTiltScroll);
      };
    }

    return () => {
      note?.removeEventListener("click", onNoteClick);
      contactForm?.removeEventListener("submit", onSubmit);
      removeTiltListeners();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <WelcomePopup />
      <CustomCursor />
      <motion.div
        initial={false}
        animate={{ opacity: revealed ? 1 : 0.98, scale: revealed ? 1 : 0.98 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "center top" }}
      >
        <Hero />
        <About />
        <div className="section-blend"></div>
        <Services />
        <Portfolio />
        <Process />
        <Trust />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
        <Footer />
      </motion.div>
    </MotionConfig>
  );
}
