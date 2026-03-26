"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    if (!isHome) return;
    const sections = ["reality", "pipeline", "day", "control"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const scrollToSection = useCallback(
    (hash: string) => {
      setMobileOpen(false);
      if (isHome) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push("/" + hash);
      }
    },
    [isHome, router]
  );

  const navItems = [
    { label: "Problem", hash: "#reality" },
    { label: "System", hash: "#pipeline" },
    { label: "Timeline", hash: "#day" },
    { label: "Control", hash: "#control" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 border-b transition-colors duration-500"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        background: scrolled ? "rgba(4, 17, 13, 0.95)" : "rgba(4, 17, 13, 0)",
        backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
        borderBottomColor: scrolled ? "rgba(11, 61, 46, 0.5)" : "transparent",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/logo-white.png"
            alt="Paperplane"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => scrollToSection(item.hash)}
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                activeSection === item.hash
                  ? "text-[#7ED957]"
                  : "text-[#9CA3AF] hover:text-[#7ED957]"
              }`}
            >
              {item.label}
              {activeSection === item.hash && (
                <motion.div
                  layoutId="nav-indicator"
                  className="h-[2px] bg-[#7ED957] mt-1 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection("#demo-form")}
            className="cta-btn bg-[#7ED957] text-[#04110d] px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_20px_rgba(126,217,87,0.3)] active:scale-95 cursor-pointer"
          >
            Book Your Demo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#04110d]/95 backdrop-blur-xl border-t border-[#0B3D2E] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className="text-sm font-medium text-[#9CA3AF] text-left cursor-pointer hover:text-[#7ED957] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#demo-form")}
                className="cta-btn bg-[#7ED957] text-[#04110d] px-6 py-2.5 rounded-full font-semibold text-sm text-center transition-all duration-300 hover:brightness-110 cursor-pointer"
              >
                Book Your Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
