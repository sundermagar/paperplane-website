"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (hash: string) => {
    if (pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/" + hash);
    }
  };

  return (
    <footer className="bg-[#04110d] py-16 px-6 border-t border-[#0B3D2E]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/logo-white.png" alt="Paperplane" className="h-8 w-auto mb-5" loading="lazy" />
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">24x7 AI Clinic Infrastructure for modern doctors.</p>
          </div>
          {/* Product */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Product</h4>
            <nav className="flex flex-col gap-3">
              <button onClick={() => scrollToSection("#pipeline")} className="text-[#9CA3AF] hover:text-white text-sm text-left cursor-pointer transition-colors">System</button>
              <button onClick={() => scrollToSection("#day")} className="text-[#9CA3AF] hover:text-white text-sm text-left cursor-pointer transition-colors">Timeline</button>
              <button onClick={() => scrollToSection("#control")} className="text-[#9CA3AF] hover:text-white text-sm text-left cursor-pointer transition-colors">Control</button>
            </nav>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">About</Link>
              <Link href="/blog" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">Blog</Link>
              <Link href="/careers" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">Careers</Link>
            </nav>
          </div>
          {/* Compliance */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Compliance</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">Terms</Link>
              <a href="mailto:hello@ppclinics.com" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">hello@ppclinics.com</a>
            </nav>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-[#0B3D2E] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#9CA3AF] text-sm">&copy; {new Date().getFullYear()} Paperplane Communication Pvt. Ltd.</span>
          <span className="text-[#9CA3AF] text-xs">ISO Certified · Secure Cloud Infrastructure · Built for real-world clinics in India</span>
        </div>
      </div>
    </footer>
  );
}
