/* eslint-disable @next/next/no-img-element */
"use client";

import HeroSimulation from "@/components/HeroSimulation";
import ScrollAnimations from "@/components/ScrollAnimations";
import DemoForm from "@/components/DemoForm";
import { FadeIn, FadeInUp, StaggerChildren, StaggerItem } from "@/components/MotionSection";
import { motion } from "framer-motion";
import Accordion from "@/components/Accordion";

export default function Home() {
  const faqItems = [
    { question: '"I don\'t want another app."', answer: 'Neither do we. Paperplane works over WhatsApp — the app your patients already use. Your staff doesn\'t learn anything new.' },
    { question: '"My staff already handles this."', answer: 'Your staff handles it during clinic hours. What about 8 PM? Weekends? Holidays? Paperplane covers the gaps they can\'t.' },
    { question: '"Will patients actually use this?"', answer: 'They already message you on WhatsApp. Paperplane just makes sure those messages get a response — and a follow-up.' },
    { question: '"Is this complicated to set up?"', answer: 'Setup takes days, not months. No workflow changes. No training required. We configure everything around how you already practice.' },
    { question: '"What about patient data safety?"', answer: 'All data is encrypted, stored on secure cloud infrastructure, and ISO 27001 certified. Your patient data never leaves your control.' },
    { question: '"How much does it cost?"', answer: 'Plans start at ₹3,000/month for small clinics. No per-patient fees, no commissions on consultations. We\'ll walk through pricing in your demo based on your clinic size.' },
    { question: '"Can I integrate with my existing EMR?"', answer: 'Yes. Paperplane works alongside your existing systems — not replacing them. Patient data can be exported or synced. We configure the integration during setup.' },
  ];

  return (
    <>
      <ScrollAnimations />

      {/* ====== 1. HERO ====== */}
      <section id="hero" className="min-h-screen pt-24 pb-16 px-6 flex items-center hero-glow relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center relative z-10">
          {/* LEFT: Copy (60%) */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="hero-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] animate-pulse" />
                Built for Indian clinics
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-extrabold leading-[1.15] text-[#E8E8E8] mb-6">
              24&times;7 WhatsApp front desk
              <br className="hidden sm:block" />
              for your clinic
            </h1>
            <p className="text-base md:text-lg text-[#A8A8A8] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Patients message your WhatsApp. Paperplane captures, triages, and structures everything. You consult,
              approve prescriptions, and schedule follow-ups — even at 2 AM.
            </p>

            {/* Bullets */}
            <div className="flex flex-col gap-3 mb-8 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-3">
                <span className="text-[#7ED957] mt-0.5">&#x2713;</span>
                <p className="text-sm text-[#A8A8A8]">
                  Patients message your WhatsApp. Paperplane handles triage and structure. No extra app for patients.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7ED957] mt-0.5">&#x2713;</span>
                <p className="text-sm text-[#A8A8A8]">AI handles intake and follow-ups; you approve what matters.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7ED957] mt-0.5">&#x2713;</span>
                <p className="text-sm text-[#A8A8A8]">
                  No aggregators, no commissions, your branding and your number.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7ED957] mt-0.5">&#x2713;</span>
                <p className="text-sm text-[#A8A8A8]">Setup done with your real workflows in under 7 days.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-6">
              <a
                href="#demo-form"
                className="cta-btn bg-[#7ED957] text-[#04110d] px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_4px_20px_rgba(126,217,87,0.3)] active:scale-95 text-sm"
                style={{ minWidth: "200px", textAlign: "center" }}
              >
                See it in action
              </a>
              <a
                href="#pipeline"
                className="text-[#7ED957] font-medium px-4 py-3.5 flex items-center gap-2 text-sm group"
              >
                See how the flow works{" "}
                <span className="group-hover:translate-x-1 transition-transform duration-150">&rarr;</span>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
                <span className="text-xs text-[#E8E8E8] font-semibold">60+ clinics</span>
                <span className="text-[#0B3D2E]">&middot;</span>
                <span className="text-xs text-[#E8E8E8] font-semibold">2,000+ consultations/mo</span>
                <span className="text-[#0B3D2E]">&middot;</span>
                <span className="text-xs text-[#E8E8E8] font-semibold">15,000+ follow-ups automated</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#A8A8A8]/50">Delhi &middot; Mumbai &middot; Bangalore &middot; Pune &middot; Hyderabad</span>
                <span className="text-[10px] text-[#A8A8A8]/40 border border-[#0B3D2E] rounded px-1.5 py-0.5">
                  ISO 27001
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Live System Flow (40%) */}
          <HeroSimulation />
        </div>
      </section>

      {/* ====== 1.5 MICRO-PROOF STRIP ====== */}
      <section className="py-6 px-6 ">
        <StaggerChildren className="max-w-[800px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <StaggerItem>
            <span className="text-sm text-[#9CA3AF] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#7ED957]" />
              Built for real clinical workflows
            </span>
          </StaggerItem>
          <StaggerItem>
            <span className="text-sm text-[#9CA3AF] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#7ED957]" />
              Used by growing clinics
            </span>
          </StaggerItem>
          <StaggerItem>
            <span className="text-sm text-[#9CA3AF] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#7ED957]" />
              No change in how you practice
            </span>
          </StaggerItem>
        </StaggerChildren>
      </section>

      {/* ====== 1.75 PRESS / AS SEEN IN ====== */}
      <section className="py-10 px-6">
        <FadeInUp>
          <div className="max-w-[900px] mx-auto">
            <p className="text-[10px] text-[#9CA3AF]/40 uppercase tracking-[0.2em] text-center mb-8 font-medium">As featured in</p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              <a
                href="https://yourstory.com/2022/04/bengaluru-healthtech-startup-paperplane-digital-clinics-whatsapp/amp"
                target="_blank"
                rel="noopener noreferrer"
                className="press-logo"
              >
                <img src="/assets/press/yourstory.png" alt="YourStory" className="h-8 md:h-10 w-auto" />
              </a>
              <a
                href="https://economictimes.indiatimes.com/tech/funding/digital-clinic-paperplane-raises-rs-3-crore-from-cornerstone-venture-partners-others/articleshow/90519313.cms"
                target="_blank"
                rel="noopener noreferrer"
                className="press-logo"
              >
                <img src="/assets/press/economic-times.png" alt="The Economic Times" className="h-6 md:h-8 w-auto" />
              </a>
              <a
                href="https://www.entrepreneur.com/article/423344"
                target="_blank"
                rel="noopener noreferrer"
                className="press-logo"
              >
                <img src="/assets/press/entrepreneur.png" alt="Entrepreneur" className="h-5 md:h-7 w-auto" />
              </a>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* ====== 2. REALITY CHECK ====== */}
      <section id="reality" className="py-24 px-6 section-alt">
        <FadeInUp>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-12 leading-tight">
              This is already happening
              <br />
              in your clinic.
            </h2>

            <StaggerChildren className="flex flex-col gap-7 mb-16">
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-[#9CA3AF]">Patients message after hours — no response</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-[#9CA3AF]">Follow-ups are missed</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-[#9CA3AF]">Staff forgets, patients don&apos;t return</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-[#9CA3AF]">You handle everything manually</p>
                </div>
              </StaggerItem>
            </StaggerChildren>

            <div className=" pt-10">
              <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                You&apos;re not losing patients because of demand.
                <br />
                <span className="text-[#7ED957] text-2xl md:text-3xl">
                  You&apos;re losing them because of operations.
                </span>
              </p>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* ====== 3. PROBLEM CARDS ====== */}
      <section id="problem" className="py-24 px-6 ">
        <StaggerChildren className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* BIG card (left) */}
          <StaggerItem>
          <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-12 flex flex-col justify-between transition-all duration-500 hover:border-[#7ED957] hover:-translate-y-1 min-h-[310px] shadow-[0_0_40px_rgba(126,217,87,0.04)] hover:shadow-[0_0_50px_rgba(126,217,87,0.1)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0B3D2E]/30 border border-[#0B3D2E] flex items-center justify-center mb-6">
                <img src="/assets/icons/Emergency-Call--Streamline-Sharp.svg" alt="" width={24} height={24} className="w-6 h-6 icon-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Capture patients after hours</h3>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                Automatically responds when your clinic is closed. 40% of WhatsApp messages go unread — each one is a
                patient who goes somewhere else.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-5xl font-extrabold text-[#7ED957]">40%</span>
              <span className="text-[#9CA3AF] text-sm ml-2">messages unread</span>
            </div>
          </div>

          </StaggerItem>
          {/* Smaller cards (right) */}
          <StaggerItem>
          <div className="flex flex-col gap-8">
            <div className="bg-[#061a14] border border-[#0B3D2E]/80 rounded-2xl p-8 transition-all duration-500 hover:border-[#7ED957]/60 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-[#0B3D2E]/30 border border-[#0B3D2E] flex items-center justify-center mb-4">
                <img src="/assets/icons/Checkup-Medical-Report-Clipboard--Streamline-Sharp.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Save 2.5 hours daily</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                AI structures clinical notes from consultations automatically. No manual transcription into outdated
                systems.
              </p>
            </div>
            <div className="bg-[#061a14] border border-[#0B3D2E]/80 rounded-2xl p-8 transition-all duration-500 hover:border-[#7ED957]/60 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-[#0B3D2E]/30 border border-[#0B3D2E] flex items-center justify-center mb-4">
                <img src="/assets/icons/nurse-without-cap-cloth--Streamline-Ultimate.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Remove single points of failure</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Follow-ups run on autopilot. One staff member leaving doesn&apos;t break your patient retention.
              </p>
            </div>
            <div className="bg-[#061a14] border border-[#0B3D2E]/80 rounded-2xl p-8 transition-all duration-500 hover:border-[#7ED957]/60 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-[#0B3D2E]/30 border border-[#0B3D2E] flex items-center justify-center mb-4">
                <img src="/assets/icons/Hospital-First-Aid--Streamline-Ultimate.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero training required</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Patients use WhatsApp. Doctors get a simple dashboard. No new software for anyone to learn.
              </p>
            </div>
          </div>
          </StaggerItem>
        </StaggerChildren>
      </section>

      {/* ====== 3.5 REFRAME — WHY NOT THE ALTERNATIVES ====== */}
      <section className="py-24 px-6 section-alt section-glow relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <FadeInUp>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-14 leading-tight text-center">
              You&apos;ve tried fixing this before.
            </h2>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT: What exists */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 hover:border-[#7ED957]/40 hover:-translate-y-0.5 transition-all duration-400">
              <span className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest block mb-6">
                What clinics try
              </span>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <img src="/assets/icons/x-mark.svg" alt="" width={16} height={16} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">Aggregator platforms</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      You lose your brand. Patients see competitors. Revenue gets cut.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src="/assets/icons/x-mark.svg" alt="" width={16} height={16} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">More staff</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      Inconsistent. Expensive. One person leaves, the system breaks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src="/assets/icons/x-mark.svg" alt="" width={16} height={16} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">Generic SaaS tools</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      Complex setup. Not built for clinical workflows. Staff won&apos;t adopt it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            </StaggerItem>
            {/* RIGHT: Paperplane */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#7ED957]/20 rounded-2xl p-8 hover:border-[#7ED957]/40 hover:-translate-y-0.5 transition-all duration-400">
              <span className="text-xs font-bold text-[#7ED957] uppercase tracking-widest block mb-6">
                What Paperplane does
              </span>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <img src="/assets/icons/checkmark.svg" alt="" width={16} height={16} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">Your brand, your patients</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      Patients interact with your clinic. We&apos;re invisible infrastructure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src="/assets/icons/checkmark.svg" alt="" width={16} height={16} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">Automated operations</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      Triage, queue, prescriptions, follow-ups — run without extra staff.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src="/assets/icons/checkmark.svg" alt="" width={16} height={16} className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">System-driven clinic</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      Patients use WhatsApp. Doctors get a dashboard app. No patient downloads needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ====== 4. PIPELINE — PREMIUM AI ILLUSTRATION ====== */}
      <section id="pipeline" className="py-28 px-6 section-glow relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">The Active Clinical Pipeline</h2>
              <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
                Paperplane runs your entire clinic flow — automatically.
              </p>
              <p className="text-sm text-[#9CA3AF]/70 mt-3 max-w-xl mx-auto">
                Patient messages in &rarr; AI structures the consultation &rarr; Doctor signs off &rarr; Follow-up sent.
                Every step tracked.
              </p>
              <p className="text-sm text-[#7ED957]/60 mt-2 font-medium">
                No missed patients. No lost follow-ups. No manual chaos.
              </p>
            </div>
          </FadeInUp>

          {/* Premium Pipeline Illustration (desktop only) */}
          <div className="relative w-full hidden lg:block" style={{ height: "820px" }}>
            {/* Background Glows */}
            <div
              className="absolute rounded-full pointer-events-none z-0"
              style={{
                width: "420px",
                height: "420px",
                background: "radial-gradient(circle,rgba(126,217,87,0.1) 0%,transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                filter: "blur(80px)",
                animation: "breathe 4s ease-in-out infinite",
              }}
            />

            {/* Section Tags */}
            <div
              className="absolute z-20 left-1/2 -translate-x-1/2"
              style={{
                top: "30px",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(126,217,87,0.4)",
                fontFamily: "monospace",
              }}
            >
              Input Layer
            </div>
            <div
              className="absolute z-20 left-1/2 -translate-x-1/2"
              style={{
                top: "360px",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(126,217,87,0.4)",
                fontFamily: "monospace",
              }}
            >
              Core Engine
            </div>
            <div
              className="absolute z-20 left-1/2 -translate-x-1/2"
              style={{
                bottom: "100px",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(126,217,87,0.4)",
                fontFamily: "monospace",
              }}
            >
              Output Layer
            </div>

            {/* SVG Flow Paths + Particles */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
              viewBox="0 0 1100 820"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="svgGlow">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Input -> Brain curves */}
              <path d="M 230 150 C 230 260, 440 330, 500 370" fill="none" stroke="#0B3D2E" strokeWidth="1.8" />
              <path d="M 230 150 C 230 260, 440 330, 500 370" fill="none" stroke="#7ED957" strokeWidth="4" opacity="0.04" filter="url(#svgGlow)" />
              <path d="M 550 150 C 550 240, 540 300, 550 370" fill="none" stroke="#0B3D2E" strokeWidth="1.8" />
              <path d="M 550 150 C 550 240, 540 300, 550 370" fill="none" stroke="#7ED957" strokeWidth="4" opacity="0.04" filter="url(#svgGlow)" />
              <path d="M 700 185 C 680 280, 600 340, 570 380" fill="none" stroke="#0B3D2E" strokeWidth="1.7" />
              <path d="M 870 150 C 870 260, 650 330, 600 370" fill="none" stroke="#0B3D2E" strokeWidth="1.7" />
              <path d="M 870 280 C 830 340, 660 370, 610 390" fill="none" stroke="#0B3D2E" strokeWidth="1.7" />

              {/* Brain -> Output curves */}
              <path d="M 460 470 C 380 530, 260 570, 230 630" fill="none" stroke="#0B3D2E" strokeWidth="1.8" />
              <path d="M 460 470 C 380 530, 260 570, 230 630" fill="none" stroke="#7ED957" strokeWidth="4" opacity="0.04" filter="url(#svgGlow)" />
              <path d="M 550 480 C 550 550, 550 590, 550 640" fill="none" stroke="#0B3D2E" strokeWidth="1.8" />
              <path d="M 550 480 C 550 550, 550 590, 550 640" fill="none" stroke="#7ED957" strokeWidth="4" opacity="0.04" filter="url(#svgGlow)" />
              <path d="M 640 470 C 720 530, 830 570, 860 630" fill="none" stroke="#0B3D2E" strokeWidth="1.8" />
              <path d="M 640 470 C 720 530, 830 570, 860 630" fill="none" stroke="#7ED957" strokeWidth="4" opacity="0.04" filter="url(#svgGlow)" />

              {/* Loop-back arcs */}
              <path d="M 230 730 C 100 730, 40 400, 180 150" fill="none" stroke="#7ED957" strokeWidth="1.2" strokeDasharray="5 10" opacity="0.25" />
              <path d="M 860 730 C 1000 730, 1060 400, 920 150" fill="none" stroke="#7ED957" strokeWidth="1.2" strokeDasharray="5 10" opacity="0.15" />

              {/* Animated particles: Input -> Brain */}
              <circle r="3" fill="#7ED957" filter="url(#svgGlow)" opacity="0">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 230 150 C 230 260, 440 330, 500 370" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#7ED957" filter="url(#svgGlow)" opacity="0">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 550 150 C 550 240, 540 300, 550 370" begin="0.5s" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle r="2.5" fill="#7ED957" filter="url(#svgGlow)" opacity="0">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M 870 150 C 870 260, 650 330, 600 370" begin="1s" />
                <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.1;0.85;1" dur="3.2s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle r="2" fill="#7ED957" opacity="0">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 700 185 C 680 280, 600 340, 570 380" begin="1.5s" />
                <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.85;1" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle r="2" fill="#7ED957" opacity="0">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M 870 280 C 830 340, 660 370, 610 390" begin="2s" />
                <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.85;1" dur="2.8s" repeatCount="indefinite" begin="2s" />
              </circle>

              {/* Animated particles: Brain -> Output */}
              <circle r="3" fill="#7ED957" filter="url(#svgGlow)" opacity="0">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 460 470 C 380 530, 260 570, 230 630" begin="1.8s" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur="3s" repeatCount="indefinite" begin="1.8s" />
              </circle>
              <circle r="3" fill="#7ED957" filter="url(#svgGlow)" opacity="0">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 550 480 C 550 550, 550 590, 550 640" begin="2.2s" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur="2.5s" repeatCount="indefinite" begin="2.2s" />
              </circle>
              <circle r="2.5" fill="#7ED957" filter="url(#svgGlow)" opacity="0">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M 640 470 C 720 530, 830 570, 860 630" begin="2.6s" />
                <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.1;0.85;1" dur="3.2s" repeatCount="indefinite" begin="2.6s" />
              </circle>

              {/* Loop-back particles */}
              <circle r="3" fill="#7ED957" filter="url(#svgGlow)" opacity="0">
                <animateMotion dur="6s" repeatCount="indefinite" path="M 230 730 C 100 730, 40 400, 180 150" />
                <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.9;1" dur="6s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* ═══ INPUT LAYER NODES ═══ */}

            {/* WhatsApp Intake */}
            <div className="pn" style={{ left: "21%", top: "150px" }}>
              <div className="pn-ring" style={{ width: "64px", height: "64px", borderColor: "#25D366", borderWidth: "2px" }}>
                <img src="/assets/icons/whatsapp.svg" alt="" width={32} height={32} className="w-8 h-8" />
              </div>
              <div className="pn-label green">
                WhatsApp
                <br />
                Intake
              </div>
              <div className="pn-desc">Patient messages captured</div>
            </div>

            {/* Patient Queue */}
            <div className="pn" style={{ left: "50%", top: "135px" }}>
              <div className="pn-ring" style={{ width: "60px", height: "60px" }}>
                <img src="/assets/icons/Waiting-Appointments-Calendar--Streamline-Plump.svg" alt="" width={28} height={28} className="w-7 h-7 icon-light" />
              </div>
              <div className="pn-label">
                Patient
                <br />
                Queue
              </div>
              <div className="pn-desc">Auto-prioritized by urgency</div>
            </div>

            {/* Audio */}
            <div className="pn" style={{ left: "64%", top: "195px" }}>
              <div className="pn-ring" style={{ width: "48px", height: "48px" }}>
                <img src="/assets/icons/chat-consultation-phone--Streamline-Ultimate.svg" alt="" width={24} height={24} className="w-6 h-6 icon-light" />
              </div>
              <div className="pn-label" style={{ fontSize: "9px" }}>Audio</div>
            </div>

            {/* Video */}
            <div className="pn" style={{ left: "79%", top: "140px" }}>
              <div className="pn-ring" style={{ width: "56px", height: "56px" }}>
                <img src="/assets/icons/Online-Doctor-Desktop-2--Streamline-Ultimate.svg" alt="" width={28} height={28} className="w-7 h-7 icon-light" />
              </div>
              <div className="pn-label">Video</div>
            </div>

            {/* In-Person */}
            <div className="pn" style={{ left: "79%", top: "280px" }}>
              <div className="pn-ring" style={{ width: "48px", height: "48px" }}>
                <img src="/assets/icons/Medical-Instrument-Stethoscope--Streamline-Ultimate.svg" alt="" width={24} height={24} className="w-6 h-6 icon-light" />
              </div>
              <div className="pn-label" style={{ fontSize: "9px" }}>In-Person</div>
            </div>

            {/* ═══ AI BRAIN (CENTER) ═══ */}
            <div className="absolute z-[15] flex flex-col items-center" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
              <div className="brain-outer-ring">
                <div className="brain-orbit-a" />
                <div className="brain-orbit-b" />
                {/* Animated AI Brain SVG */}
                <svg width="150" height="150" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="ai-brain-svg">
                  {/* Left hemisphere */}
                  <path d="M18.5164 9.41034C19.1851 9.18485 19.7787 8.77912 20.2315 8.23787C20.6844 7.69661 20.9791 7.04084 21.0831 6.3428C21.1871 5.64477 21.0964 4.93158 20.8209 4.28181C20.5455 3.63204 20.096 3.07093 19.522 2.6603C18.9481 2.24966 18.2719 2.00545 17.568 1.95457C16.8641 1.90369 16.1598 2.04812 15.5327 2.37194C14.9057 2.69576 14.3802 3.1864 14.0141 3.7898C13.6481 4.3932 13.4558 5.08594 13.4583 5.79167C13.4635 6.13829 13.5158 6.48259 13.6136 6.81517C13.4008 6.79792 13.1957 6.75 12.9791 6.75C11.637 6.74317 10.3201 7.11406 9.17881 7.82028C8.03753 8.5265 7.11796 9.53957 6.52519 10.7437C5.93243 11.9478 5.69039 13.2944 5.82673 14.6296C5.96308 15.9648 6.47231 17.2346 7.29622 18.2941C5.84734 18.3899 4.48907 19.033 3.49676 20.093C2.50445 21.1531 1.95233 22.5508 1.95233 24.0029C1.95233 25.4549 2.50445 26.8526 3.49676 27.9127C4.48907 28.9728 5.84734 29.6159 7.29622 29.7117C6.47323 30.771 5.96478 32.0404 5.82895 33.3749C5.69312 34.7094 5.93539 36.0553 6.52809 37.2587C7.12079 38.462 8.04001 39.4744 9.18074 40.1802C10.3215 40.886 11.6377 41.2567 12.9791 41.25C13.1957 41.25 13.4008 41.2059 13.6136 41.1868C13.4094 41.909 13.4217 42.6753 13.6491 43.3905C13.8764 44.1058 14.3087 44.7386 14.8923 45.2105C15.476 45.6823 16.1853 45.9725 16.9323 46.0449C17.6793 46.1174 18.4312 45.969 19.0946 45.618C19.7581 45.2671 20.3039 44.7292 20.6644 44.0709C21.025 43.4126 21.1843 42.663 21.1227 41.915C21.0612 41.167 20.7814 40.4536 20.3181 39.8631C19.8547 39.2727 19.2283 38.8312 18.5164 38.5935" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="brain-path brain-path-left">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                  </path>
                  {/* Right hemisphere */}
                  <path d="M29.4836 9.41034C28.8149 9.18485 28.2213 8.77912 27.7685 8.23787C27.3156 7.69661 27.0209 7.04084 26.9169 6.3428C26.8129 5.64477 26.9036 4.93158 27.1791 4.28181C27.4545 3.63204 27.904 3.07093 28.478 2.6603C29.0519 2.24966 29.7281 2.00545 30.432 1.95457C31.1359 1.90369 31.8402 2.04812 32.4673 2.37194C33.0943 2.69576 33.6198 3.1864 33.9858 3.7898C34.3519 4.3932 34.5442 5.08594 34.5417 5.79167C34.5365 6.13829 34.4842 6.48259 34.3864 6.81517C34.5992 6.796 34.8043 6.75 35.0209 6.75C36.3626 6.74345 37.6792 7.11443 38.8201 7.82056C39.9611 8.52669 40.8804 9.53949 41.4731 10.7433C42.0658 11.9471 42.308 13.2933 42.1719 14.6281C42.0359 15.963 41.5271 17.2327 40.7038 18.2922C42.1527 18.3879 43.5109 19.031 44.5032 20.0911C45.4955 21.1512 46.0477 22.5489 46.0477 24.001C46.0477 25.453 45.4955 26.8507 44.5032 27.9108C43.5109 28.9709 42.1527 29.614 40.7038 29.7098C41.5273 30.769 42.0363 32.0386 42.1724 33.3735C42.3085 34.7083 42.0664 36.0545 41.4736 37.2582C40.8808 38.462 39.9614 39.4746 38.8203 40.1805C37.6792 40.8864 36.3626 41.257 35.0209 41.25C34.8043 41.25 34.5992 41.2059 34.3864 41.1868C34.5906 41.909 34.5783 42.6753 34.3509 43.3905C34.1236 44.1058 33.6913 44.7386 33.1077 45.2105C32.524 45.6823 31.8147 45.9725 31.0677 46.0449C30.3207 46.1174 29.5688 45.969 28.9054 45.618C28.2419 45.2671 27.6961 44.7292 27.3356 44.0709C26.975 43.4126 26.8157 42.663 26.8772 41.915C26.9388 41.167 27.2186 40.4536 27.6819 39.8631C28.1453 39.2727 28.7717 38.8312 29.4836 38.5935" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="brain-path brain-path-right">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" begin="0.3s" />
                  </path>
                  {/* Left inner folds */}
                  <path d="M12.6418 20.1398C12.7415 20.1398 12.8335 20.1686 12.9351 20.1686C14.587 20.1681 16.1711 19.5116 17.3392 18.3435C18.5073 17.1755 19.1638 15.5913 19.1643 13.9394" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                  </path>
                  <path d="M19.1643 34.0644C19.1643 32.4122 18.508 30.8275 17.3399 29.659C16.1718 28.4905 14.5873 27.8338 12.9351 27.8333C12.8335 27.8333 12.7434 27.8582 12.6418 27.864" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="1s" />
                  </path>
                  {/* Right inner folds */}
                  <path d="M35.3582 20.1398C35.2585 20.1398 35.1665 20.1686 35.0649 20.1686C33.413 20.1681 31.8289 19.5116 30.6608 18.3435C29.4927 17.1755 28.8363 15.5913 28.8358 13.9394" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                  </path>
                  <path d="M28.8358 34.0644C28.8358 32.4122 29.492 30.8275 30.6601 29.659C31.8283 28.4905 33.4127 27.8338 35.0649 27.8333C35.1665 27.8333 35.2566 27.8582 35.3582 27.864" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" begin="1.3s" />
                  </path>
                  {/* Top bridge */}
                  <path d="M21.125 5.6C21.9991 5.09534 22.9907 4.82965 24 4.82965C25.0093 4.82965 26.0009 5.09534 26.875 5.6" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* Bottom bridge */}
                  <path d="M20.9506 43.3583C21.8877 43.8641 22.936 44.1289 24.0009 44.1289C25.0659 44.1289 26.1141 43.8641 27.0513 43.3583" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
                  </path>
                  {/* Center spine */}
                  <path d="M24 14.4186V34.5436" stroke="#7ED957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* Neural pulse nodes along center */}
                  <circle cx="24" cy="18" r="2" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.9;0" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="r" values="1.5;3;1.5" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="24" cy="24" r="2" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.9;0" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
                    <animate attributeName="r" values="1.5;3.5;1.5" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
                  </circle>
                  <circle cx="24" cy="30" r="2" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.9;0" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                    <animate attributeName="r" values="1.5;3;1.5" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                  </circle>
                  {/* Lateral pulse nodes */}
                  <circle cx="13" cy="24" r="1.5" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.2s" />
                  </circle>
                  <circle cx="35" cy="24" r="1.5" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  <circle cx="17" cy="14" r="1.5" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" begin="0.7s" />
                  </circle>
                  <circle cx="31" cy="14" r="1.5" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" begin="2s" />
                  </circle>
                  <circle cx="17" cy="34" r="1.5" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
                  </circle>
                  <circle cx="31" cy="34" r="1.5" fill="#7ED957" opacity="0">
                    <animate attributeName="opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" begin="0.4s" />
                  </circle>
                </svg>
              </div>
              <div className="mt-6 text-[13px] font-extrabold text-[#7ED957] tracking-[0.15em] uppercase text-center">
                Clinical AI Brain
              </div>
              <div className="text-[11px] text-[#9CA3AF] tracking-wide mt-1 font-medium">
                Structures. Decides. Executes.
              </div>
              <div className="text-[9px] text-[#9CA3AF]/60 mt-1 text-center">
                Transcription &rarr; Clinical notes &rarr; Rx draft
              </div>
            </div>

            {/* ═══ OUTPUT LAYER CARDS ═══ */}

            {/* Digital Prescription */}
            <div
              className="glass-out"
              style={{
                left: "21%",
                top: "83%",
                width: "235px",
                borderColor: "rgba(126,217,87,0.2)",
                boxShadow: "0 0 30px rgba(126,217,87,0.05)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#04110d] border border-[#0B3D2E] flex items-center justify-center">
                  <img src="/assets/icons/Prescription-Px--Streamline-Ultimate.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Digital Prescription</div>
                  <div className="text-[10px] text-[#9CA3AF]">Auto-generated</div>
                </div>
              </div>
              <div className="bg-[#04110d] border border-[#0B3D2E] rounded-xl px-3 py-2.5">
                <div className="text-[11px] font-semibold text-white mb-0.5">Paracetamol 500mg</div>
                <div className="text-[10px] text-[#9CA3AF]">1 tab &middot; After meals &middot; 3 days</div>
                <span className="inline-block mt-2 text-[9px] font-bold text-[#7ED957] bg-[#7ED957]/10 px-2 py-1 rounded">
                  Awaiting MD Signoff
                </span>
              </div>
            </div>

            {/* Follow-up Reminder */}
            <div className="glass-out" style={{ left: "50%", top: "83%", width: "215px" }}>
              <div className="text-[10px] font-bold text-[#9CA3AF] mb-2 uppercase tracking-widest">Follow-up</div>
              <div className="bg-[#04110d] border border-[#0B3D2E] rounded-xl rounded-bl-sm px-3 py-2.5 mb-2">
                <p className="text-[11px] text-white leading-relaxed">
                  Hi Rahul, how is the fever today? Please reply with an update.
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7ED957] animate-pulse" />
                <span className="text-[9px] text-[#7ED957] font-bold tracking-wide">
                  Scheduled &middot; Tomorrow 10 AM
                </span>
              </div>
            </div>

            {/* Structured Record */}
            <div className="glass-out" style={{ left: "79%", top: "83%", width: "200px" }}>
              <div className="text-[10px] font-bold text-[#9CA3AF] mb-2.5 uppercase tracking-widest">Patient Record</div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#0B3D2E]/50">
                <span className="text-[10px] text-[#9CA3AF]">Name</span>
                <span className="text-[10px] text-white font-semibold">Rahul S.</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#0B3D2E]/50">
                <span className="text-[10px] text-[#9CA3AF]">Chief</span>
                <span className="text-[10px] text-white font-semibold">Fever &middot; 2 days</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#0B3D2E]/50">
                <span className="text-[10px] text-[#9CA3AF]">Rx</span>
                <span className="text-[10px] text-[#7ED957] font-semibold">Issued</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-[10px] text-[#9CA3AF]">Follow-up</span>
                <span className="text-[10px] text-[#7ED957] font-semibold">Queued</span>
              </div>
            </div>
          </div>

          {/* Mobile Pipeline (vertical flow, visible only on mobile/tablet) */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
              {/* WhatsApp */}
              <div className="flex items-center gap-3 w-full bg-[#061a14] border border-[#0B3D2E] rounded-xl px-4 py-3">
                <img src="/assets/icons/whatsapp.svg" alt="" width={32} height={32} className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#E8E8E8]">WhatsApp Intake</p>
                  <p className="text-xs text-[#9CA3AF]">Patient messages your number</p>
                </div>
              </div>
              <div className="w-px h-6 bg-[#0B3D2E]" />

              {/* Queue */}
              <div className="flex items-center gap-3 w-full bg-[#061a14] border border-[#0B3D2E] rounded-xl px-4 py-3">
                <img src="/assets/icons/Waiting-Appointments-Calendar--Streamline-Plump.svg" alt="" width={32} height={32} className="w-8 h-8 flex-shrink-0 icon-light" />
                <div>
                  <p className="text-sm font-semibold text-[#E8E8E8]">Patient Queue</p>
                  <p className="text-xs text-[#9CA3AF]">Auto-prioritized by urgency</p>
                </div>
              </div>
              <div className="w-px h-6 bg-[#0B3D2E]" />

              {/* Consultation */}
              <div className="flex items-center gap-3 w-full bg-[#061a14] border border-[#7ED957]/30 rounded-xl px-4 py-3">
                <img src="/assets/icons/chat-consultation-phone--Streamline-Ultimate.svg" alt="" width={32} height={32} className="w-8 h-8 flex-shrink-0 icon-light" />
                <div>
                  <p className="text-sm font-semibold text-[#7ED957]">Consultation</p>
                  <p className="text-xs text-[#9CA3AF]">Audio, video, or in-person</p>
                </div>
              </div>
              <div className="w-px h-6 bg-[#0B3D2E]" />

              {/* AI Brain */}
              <div className="flex items-center gap-3 w-full bg-[#061a14] border border-[#7ED957]/40 rounded-xl px-4 py-4 shadow-[0_0_20px_rgba(126,217,87,0.06)]">
                <img src="/assets/icons/brain-head-1--Streamline-Ultimate.svg" alt="" width={40} height={40} className="w-10 h-10 flex-shrink-0 icon-light" />
                <div>
                  <p className="text-sm font-bold text-[#7ED957]">Clinical AI Brain</p>
                  <p className="text-xs text-[#9CA3AF]">Structures. Decides. Executes.</p>
                </div>
              </div>
              <div className="w-px h-6 bg-[#0B3D2E]" />

              {/* Prescription */}
              <div className="flex items-center gap-3 w-full bg-[#061a14] border border-[#0B3D2E] rounded-xl px-4 py-3">
                <img src="/assets/icons/Prescription-Px--Streamline-Ultimate.svg" alt="" width={32} height={32} className="w-8 h-8 flex-shrink-0 icon-light" />
                <div>
                  <p className="text-sm font-semibold text-[#E8E8E8]">Digital Prescription</p>
                  <p className="text-xs text-[#9CA3AF]">Doctor approves, patient gets Rx via WhatsApp</p>
                </div>
              </div>
              <div className="w-px h-6 bg-[#0B3D2E]" />

              {/* Follow-up */}
              <div className="flex items-center gap-3 w-full bg-[#061a14] border border-[#0B3D2E] rounded-xl px-4 py-3">
                <img src="/assets/icons/pill-clock--Streamline-Ultimate.svg" alt="" width={32} height={32} className="w-8 h-8 flex-shrink-0 icon-light" />
                <div>
                  <p className="text-sm font-semibold text-[#E8E8E8]">Follow-up</p>
                  <p className="text-xs text-[#9CA3AF]">Auto reminder via WhatsApp next day</p>
                </div>
              </div>

              {/* Loop indicator */}
              <div className="mt-4 text-center">
                <span className="text-[10px] text-[#7ED957]/50 uppercase tracking-widest font-mono">
                  &#x21BB; Continuous loop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MID-PAGE CTA ====== */}
      <section className="py-16 px-6">
        <FadeInUp>
          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-lg text-[#9CA3AF] mb-6">See what changes when your clinic runs on a system.</p>
            <a href="#demo-form" className="cta-btn inline-block bg-[#7ED957] text-[#04110d] px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_20px_rgba(126,217,87,0.3)] active:scale-95">
              See it in action
            </a>
          </div>
        </FadeInUp>
      </section>

      {/* ====== 4.5 FEATURES -> OUTCOMES ====== */}
      <section className="py-28 px-6 section-alt">
        <div className="max-w-[1100px] mx-auto">
          <FadeInUp>
            <div className="mb-16">
              <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
                What Paperplane does for your clinic
              </h2>
              <p className="text-lg text-[#9CA3AF]">Six things that change the moment you go live.</p>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <span className="text-2xl font-extrabold text-[#7ED957]">98%</span>
              <span className="text-xs text-[#9CA3AF] ml-1">capture rate</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2 mb-1" />
              <h3 className="text-lg font-bold text-white mb-2 mt-3">Never miss a patient</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Every WhatsApp message gets captured and triaged — even at 11 PM on a Sunday.
              </p>
            </div>
            </StaggerItem>
            {/* Card 2 */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <span className="text-2xl font-extrabold text-[#7ED957]">3 min</span>
              <span className="text-xs text-[#9CA3AF] ml-1">avg consultation notes</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2 mb-1" />
              <h3 className="text-lg font-bold text-white mb-2 mt-3">Consultations in minutes</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Consult via doctor&apos;s app. AI transcribes, structures notes, drafts the prescription.
              </p>
            </div>
            </StaggerItem>
            {/* Card 3 */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <span className="text-2xl font-extrabold text-[#7ED957]">1 tap</span>
              <span className="text-xs text-[#9CA3AF] ml-1">to approve &amp; send</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2 mb-1" />
              <h3 className="text-lg font-bold text-white mb-2 mt-3">Prescriptions without paperwork</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Digital Rx auto-generated. Doctor approves in dashboard, delivered to patient via WhatsApp.
              </p>
            </div>
            </StaggerItem>
            {/* Card 4 */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <span className="text-2xl font-extrabold text-[#7ED957]">+30%</span>
              <span className="text-xs text-[#9CA3AF] ml-1">repeat visits</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2 mb-1" />
              <h3 className="text-lg font-bold text-white mb-2 mt-3">Follow-ups on autopilot</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                System reminds patients to check in via WhatsApp. No staff chasing. Retention goes up.
              </p>
            </div>
            </StaggerItem>
            {/* Card 5 */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <span className="text-2xl font-extrabold text-[#7ED957]">100%</span>
              <span className="text-xs text-[#9CA3AF] ml-1">structured records</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2 mb-1" />
              <h3 className="text-lg font-bold text-white mb-2 mt-3">Structured patient records</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Every consultation creates a searchable clinical record in the doctor&apos;s dashboard.
              </p>
            </div>
            </StaggerItem>
            {/* Card 6 */}
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <span className="text-2xl font-extrabold text-[#7ED957]">3-5</span>
              <span className="text-xs text-[#9CA3AF] ml-1">patients recovered/day</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2 mb-1" />
              <h3 className="text-lg font-bold text-white mb-2 mt-3">Revenue you were losing</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                After-hours patients, missed follow-ups, and unstructured workflows — all recovered.
              </p>
            </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ====== 5. DAY IN CLINIC ====== */}
      <section id="day" className="py-28 px-6 ">
        <div className="max-w-[800px] mx-auto">
          <FadeInUp>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-16">A day in your clinic.</h2>
          </FadeInUp>

          <div className="flex flex-col gap-0">
            {/* Entry 1 */}
            <FadeIn delay={0}>
              <div className="log-entry active-log pl-8 pb-14 relative">
                <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#7ED957] shadow-[0_0_10px_#7ED957]" />
                <span className="text-[#7ED957] font-mono text-base font-bold block mb-2">8:32 PM</span>
                <h3 className="text-xl font-bold text-white mb-1">Patient messages</h3>
                <p className="text-[#9CA3AF] text-sm">
                  &quot;Hi, child has high fever.&quot; WhatsApp captured. Intent extracted. Priority flagged.
                </p>
              </div>
            </FadeIn>

            {/* Entry 2 */}
            <FadeIn delay={0.1}>
              <div className="log-entry active-log pl-8 pb-14 relative">
                <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#7ED957] shadow-[0_0_6px_rgba(126,217,87,0.5)]" />
                <span className="text-[#7ED957] font-mono text-base font-bold block mb-2">9:10 PM</span>
                <h3 className="text-xl font-bold text-white mb-1">Consultation done</h3>
                <p className="text-[#9CA3AF] text-sm">
                  Doctor finishes audio consult. Transcription complete. Clinical notes structured.
                </p>
              </div>
            </FadeIn>

            {/* Entry 3 */}
            <FadeIn delay={0.2}>
              <div className="log-entry active-log pl-8 pb-14 relative">
                <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#7ED957] shadow-[0_0_6px_rgba(126,217,87,0.5)]" />
                <span className="text-[#7ED957] font-mono text-base font-bold block mb-2">9:12 PM</span>
                <h3 className="text-xl font-bold text-white mb-1">Prescription sent</h3>
                <p className="text-[#9CA3AF] text-sm">
                  Formatted, signed Rx delivered directly to patient via WhatsApp.
                </p>
              </div>
            </FadeIn>

            {/* Entry 4 */}
            <FadeIn delay={0.3}>
              <div className="log-entry pl-8 pb-2 relative">
                <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#0B3D2E] border-2 border-[#7ED957]" />
                <span className="text-[#9CA3AF] font-mono text-base font-bold block mb-2">Next day</span>
                <h3 className="text-xl font-bold text-white mb-1">Follow-up triggered</h3>
                <p className="text-[#9CA3AF] text-sm">
                  System checks fever status automatically. No human intervention needed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== 6. CONTROL ====== */}
      <section id="control" className="py-32 px-6 section-bold section-glow relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-4">
                Nothing happens without your approval.
              </h2>
              <p className="text-lg text-[#9CA3AF]">AI assists. You stay in control.</p>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 text-center transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-xl bg-[#0B3D2E]/30 border border-[#0B3D2E] flex items-center justify-center mx-auto mb-5">
                <img src="/assets/icons/Hospital-Shield--Streamline-Ultimate.svg" alt="" width={28} height={28} className="w-7 h-7 icon-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No auto-send</h3>
              <p className="text-sm text-[#9CA3AF]">Nothing reaches your patient without you seeing it first.</p>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 text-center transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-xl bg-[#0B3D2E]/30 border border-[#0B3D2E] flex items-center justify-center mx-auto mb-5">
                <img src="/assets/icons/checkup-diagnostic--Streamline-Ultimate.svg" alt="" width={28} height={28} className="w-7 h-7 icon-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Every Rx reviewed</h3>
              <p className="text-sm text-[#9CA3AF]">
                Every prescription requires explicit doctor signoff before delivery.
              </p>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 text-center transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-xl bg-[#0B3D2E]/30 border border-[#0B3D2E] flex items-center justify-center mx-auto mb-5">
                <img src="/assets/icons/Checkup-Medical-Report-Clipboard--Streamline-Plump.svg" alt="" width={28} height={28} className="w-7 h-7 icon-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Every action traceable</h3>
              <p className="text-sm text-[#9CA3AF]">Full audit trail. Every decision logged and accessible.</p>
            </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ====== 7. POSITIONING ====== */}
      <section id="positioning" className="py-28 px-6 ">
        <div className="max-w-[1000px] mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
                We build your clinic&apos;s system.
                <br />
                <span className="text-[#9CA3AF] font-bold">Not our platform.</span>
              </h2>
              <p className="text-lg text-[#9CA3AF]">No marketplaces. No competitors. No revenue cuts.</p>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5 border-l-4 border-l-[#7ED957]">
              <h3 className="text-lg font-bold text-white mb-3">No Aggregation</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                We don&apos;t list you alongside competitors. Your patients stay yours.
              </p>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5 border-l-4 border-l-[#7ED957]">
              <h3 className="text-lg font-bold text-white mb-3">Zero Commissions</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                No cuts from your revenue. No per-transaction fees. Ever.
              </p>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-400 hover:border-[#7ED957] hover:-translate-y-0.5 border-l-4 border-l-[#7ED957]">
              <h3 className="text-lg font-bold text-white mb-3">Full Ownership</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Your data, your patients, your brand. We&apos;re invisible infrastructure.
              </p>
            </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ====== 7.2 CLINIC LOGOS MARQUEE ====== */}
      <section className="py-12 px-6 overflow-hidden">
        <FadeInUp>
          <p className="text-xs text-[#9CA3AF]/50 uppercase tracking-widest text-center mb-8 font-medium">Trusted by clinics across India</p>
        </FadeInUp>
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <div key={`a${n}`} className="logo-marquee-slide">
                <img src={`/assets/clients/client${n}.png`} alt="" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
            <div className="logo-marquee-slide">
              <img src="/assets/clients/oh-logo.png" alt="" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="logo-marquee-slide">
              <img src="/assets/clients/ic_logo.png" alt="" className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            </div>
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <div key={`b${n}`} className="logo-marquee-slide">
                <img src={`/assets/clients/client${n}.png`} alt="" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
            <div className="logo-marquee-slide">
              <img src="/assets/clients/oh-logo.png" alt="" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="logo-marquee-slide">
              <img src="/assets/clients/ic_logo.png" alt="" className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== 7.25 TESTIMONIALS ====== */}
      <section className="py-28 px-6 section-bold section-glow relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="hero-badge">What doctors say</span>
              <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
                Real doctors. Real results.
              </h2>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="card-gradient-border p-8 h-full flex flex-col justify-between transition-all duration-400 hover:-translate-y-1">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#E8E8E8] leading-relaxed mb-6">
                    &quot;Paperplane WhatsApp Clinic helps me create my own <span className="text-[#7ED957] font-semibold">social media brand</span>. I can provide my patients with best care by sending them <span className="text-[#7ED957] font-semibold">personalised and automated medicine &amp; follow up reminders</span> while maintaining a proper patient database.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#0B3D2E]/50">
                  <img src="/assets/doctors/mohita.png" alt="Dr. Mohita Mehrotra" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-white">Dr. Mohita Mehrotra</p>
                    <p className="text-xs text-[#9CA3AF]">Growing Smiles, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-gradient-border p-8 h-full flex flex-col justify-between transition-all duration-400 hover:-translate-y-1">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#E8E8E8] leading-relaxed mb-6">
                    &quot;<span className="text-[#7ED957] font-semibold">Website delivery was super fast</span> adding on to which my <span className="text-[#7ED957] font-semibold">Paperplane&apos;s WhatsApp Assistant</span> never forgets to send follow up reminders to my patients so they never miss out on any vaccination.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#0B3D2E]/50">
                  <img src="/assets/doctors/nidhika.png" alt="Dr. Nidhika Pandey" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-white">Dr. Nidhika Pandey</p>
                    <p className="text-xs text-[#9CA3AF]">SS Pedia Ortho Care, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-gradient-border p-8 h-full flex flex-col justify-between transition-all duration-400 hover:-translate-y-1">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#E8E8E8] leading-relaxed mb-6">
                    &quot;I can manage patients from <span className="text-[#7ED957] font-semibold">multiple offline clinics</span> through Paperplane WhatsApp Clinic and also <span className="text-[#7ED957] font-semibold">start my own teleconsultation</span> service for reaching out to patients <span className="text-[#7ED957] font-semibold">Pan India.</span>&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#0B3D2E]/50">
                  <img src="/assets/doctors/paramjeet.png" alt="Dr. Paramjit Singh Juneja" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-white">Dr. Paramjit Singh Juneja</p>
                    <p className="text-xs text-[#9CA3AF]">Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-gradient-border p-8 h-full flex flex-col justify-between transition-all duration-400 hover:-translate-y-1">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#E8E8E8] leading-relaxed mb-6">
                    &quot;Paperplane WhatsApp Clinic provides a <span className="text-[#7ED957] font-semibold">unique OPD Management solution</span> over WhatsApp which enables me to schedule future appointments and provide patients with <span className="text-[#7ED957] font-semibold">best digital care</span> and maintain a <span className="text-[#7ED957] font-semibold">systematic patient database.</span>&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#0B3D2E]/50">
                  <img src="/assets/doctors/viral.png" alt="Dr. Viralsinhraj" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-white">Dr. Viralsinhraj</p>
                    <p className="text-xs text-[#9CA3AF]">Raj Diabetes Care, Gujarat</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card-gradient-border p-8 h-full flex flex-col justify-between transition-all duration-400 hover:-translate-y-1">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#E8E8E8] leading-relaxed mb-6">
                    &quot;Paperplane provides a <span className="text-[#7ED957] font-semibold">smooth digital prescription writing</span> interface and I can directly share all those <span className="text-[#7ED957] font-semibold">prescriptions over WhatsApp</span> to give my patients a <span className="text-[#7ED957] font-semibold">seamless consultation experience!</span>&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#0B3D2E]/50">
                  <img src="/assets/doctors/naman.png" alt="Dr. Naman Kanodia" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-white">Dr. Naman Kanodia</p>
                    <p className="text-xs text-[#9CA3AF]">SS Pedia Ortho Centre, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ====== 7.5 MARKET VALIDATION ====== */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-[1000px] mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
                Built for the reality of Indian clinics
              </h2>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StaggerItem>
            <div className="flex flex-col items-center gap-2">
              <span className="text-6xl md:text-7xl font-black text-[#7ED957] leading-none tracking-tight">80%</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2" />
              <p className="text-sm text-[#9CA3AF] mt-1 max-w-[200px]">of Indian clinics have no digital patient follow-up system</p>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="flex flex-col items-center gap-2">
              <span className="text-6xl md:text-7xl font-black text-[#7ED957] leading-none tracking-tight">500M+</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2" />
              <p className="text-sm text-[#9CA3AF] mt-1 max-w-[200px]">
                WhatsApp users in India — already where patients reach out
              </p>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="flex flex-col items-center gap-2">
              <span className="text-6xl md:text-7xl font-black text-[#7ED957] leading-none tracking-tight">2.5hrs</span>
              <div className="w-8 h-px bg-[#7ED957]/30 mt-2" />
              <p className="text-sm text-[#9CA3AF] mt-1 max-w-[200px]">average daily time lost on manual clinical documentation</p>
            </div>
            </StaggerItem>
          </StaggerChildren>

          <div className=" mt-14 pt-10 text-center">
            <p className="text-lg text-[#9CA3AF]">
              Clinics don&apos;t need more patients. They need a system that doesn&apos;t lose the ones they already
              have.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 8. OUTCOME ====== */}
      <section id="outcome" className="py-28 px-6 ">
        <div className="max-w-[800px] mx-auto">
          <FadeInUp>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-12">What changes immediately</h2>
          </FadeInUp>

          <StaggerChildren className="flex flex-col gap-5 mb-14">
            <StaggerItem>
            <div className="flex items-start gap-4">
              <img src="/assets/icons/checkmark.svg" alt="" width={20} height={20} className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-[#E8E8E8]">
                  Response time: <span className="text-[#7ED957] font-bold">under 5 minutes</span> vs 30+ minutes
                </p>
                <p className="text-sm text-[#9CA3AF] mt-0.5">
                  Every after-hours message gets a response — even at 2 AM
                </p>
              </div>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="flex items-start gap-4">
              <img src="/assets/icons/checkmark.svg" alt="" width={20} height={20} className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-[#E8E8E8]">
                  Documentation: <span className="text-[#7ED957] font-bold">3 minutes</span> vs 25+ minutes
                </p>
                <p className="text-sm text-[#9CA3AF] mt-0.5">
                  AI structures notes from consultation — doctor reviews, not writes
                </p>
              </div>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="flex items-start gap-4">
              <img src="/assets/icons/checkmark.svg" alt="" width={20} height={20} className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-[#E8E8E8]">
                  Follow-up rate: <span className="text-[#7ED957] font-bold">98%</span> vs ~20% manual
                </p>
                <p className="text-sm text-[#9CA3AF] mt-0.5">
                  Every patient gets a follow-up — automatically via WhatsApp
                </p>
              </div>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="flex items-start gap-4">
              <img src="/assets/icons/checkmark.svg" alt="" width={20} height={20} className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-[#E8E8E8]">
                  Repeat visits: <span className="text-[#7ED957] font-bold">+30%</span> within 90 days
                </p>
                <p className="text-sm text-[#9CA3AF] mt-0.5">
                  Patients return because the system reminds them at the right time
                </p>
              </div>
            </div>
            </StaggerItem>
          </StaggerChildren>

          <div className=" pt-10">
            <p className="text-2xl font-bold text-white">
              Same clinic. <span className="text-[#7ED957]">More output.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ====== 8.5 OBJECTION HANDLING ====== */}
      <section className="py-24 px-6 ">
        <div className="max-w-[800px] mx-auto">
          <FadeInUp>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white mb-14 leading-tight">
              Questions doctors ask us.
            </h2>
          </FadeInUp>

          <Accordion items={faqItems} />
        </div>
      </section>

      {/* ====== 9. FINAL CTA ====== */}
      <section id="final-cta" className="py-24 px-6 section-glow relative overflow-hidden">
        <FadeInUp className="max-w-[700px] mx-auto text-center relative z-10">
          <div className="bg-[#061a14] border border-[#0B3D2E] rounded-3xl p-10 md:p-14 shadow-[0_0_80px_rgba(126,217,87,0.06)]">
            <p className="text-sm text-[#7ED957] font-semibold mb-4">
              The average clinic loses 3-5 patients every day to unreplied messages.
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white mb-4 leading-tight">
              How many patients messaged you today&hellip;
              <br />
              <span className="text-[#9CA3AF]">and never got a reply?</span>
            </h2>
            <p className="text-lg text-[#7ED957] font-semibold mb-8">Tomorrow runs differently.</p>
            <a
              href="#demo-form"
              className="cta-btn inline-block bg-[#7ED957] text-[#04110d] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95 shadow-[0_0_30px_rgba(126,217,87,0.2)] hover:shadow-[0_0_50px_rgba(126,217,87,0.35)]"
            >
              Talk to our team
            </a>
            <p className="text-sm text-[#9CA3AF] mt-6">Setup in days. No workflow change.</p>
            <p className="text-xs text-[#7ED957]/70 mt-2 font-medium">20 demo spots available this month</p>
            <p className="text-xs text-[#9CA3AF]/60 mt-1">Built for real clinics. Not theory.</p>
          </div>
        </FadeInUp>
      </section>

      {/* ====== DEMO FORM ====== */}
      <DemoForm />
    </>
  );
}
