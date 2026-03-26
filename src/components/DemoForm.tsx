"use client";

import Script from "next/script";

export default function DemoForm() {
  return (
    <section id="demo-form" className="py-24 px-6 border-t border-[#0B3D2E]">
      <div className="max-w-[600px] mx-auto gsap-scroll">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
            Book your demo
          </h2>
          <p className="text-sm text-[#9CA3AF]">
            We&apos;ll walk you through the system in 20 minutes. No commitment.
          </p>
        </div>
        <div id="sp-form-book-your-demo-x9p6t1" />
        <Script
          src="https://api.connectribe.com/embed.js"
          strategy="lazyOnload"
          data-form="book-your-demo-x9p6t1"
          data-columns="2"
          data-layout="2,2,1,1,1,2"
          data-color="#7ED957"
          data-bg="#061a14"
          data-text-color="#E8E8E8"
          data-font="'Inter', sans-serif"
          data-radius="12"
          data-button-text="Book Your Demo"
          data-hide-branding="true"
        />
      </div>
    </section>
  );
}
