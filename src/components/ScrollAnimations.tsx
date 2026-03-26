"use client";

import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
function getWindow(): any {
  return window;
}

export default function ScrollAnimations() {
  useEffect(() => {
    const w = getWindow();

    // CTA click tracking
    const ctaBtns = document.querySelectorAll(".cta-btn");
    const handleCtaClick = () => {
      if (typeof w.gtag === "function") w.gtag("event", "cta_click", { event_category: "engagement" });
      if (typeof w.fbq === "function") w.fbq("track", "Lead");
    };
    ctaBtns.forEach((btn) => btn.addEventListener("click", handleCtaClick));

    // Scroll depth tracking
    let fired50 = false, fired90 = false;
    const handleScroll = () => {
      const pct = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (!fired50 && pct > 0.5) {
        fired50 = true;
        if (typeof w.gtag === "function") w.gtag("event", "scroll_50", { event_category: "engagement" });
      }
      if (!fired90 && pct > 0.9) {
        fired90 = true;
        if (typeof w.gtag === "function") w.gtag("event", "scroll_90", { event_category: "engagement" });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Demo form view tracking
    const formSection = document.getElementById("demo-form");
    if (formSection) {
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (typeof w.gtag === "function") w.gtag("event", "demo_form_view", { event_category: "conversion" });
          obs.disconnect();
        }
      }, { threshold: 0.3 });
      obs.observe(formSection);
    }

    return () => {
      ctaBtns.forEach((btn) => btn.removeEventListener("click", handleCtaClick));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
