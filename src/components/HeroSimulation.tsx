"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";

export default function HeroSimulation() {
  const simCardRef = useRef<HTMLDivElement>(null);
  const simContainerRef = useRef<HTMLDivElement>(null);
  const simTimeRef = useRef<HTMLSpanElement>(null);
  const aiBarsRef = useRef<HTMLDivElement>(null);
  const aiResultRef = useRef<HTMLDivElement>(null);
  const aiLabelRef = useRef<HTMLSpanElement>(null);
  const aiIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const simCard = simCardRef.current;
    const simContainer = simContainerRef.current;
    const timeEl = simTimeRef.current;
    const aiBars = aiBarsRef.current;
    const aiResult = aiResultRef.current;
    const aiLabel = aiLabelRef.current;
    const aiIcon = aiIconRef.current;

    if (!simCard || !simContainer || !timeEl || !aiBars || !aiResult || !aiLabel || !aiIcon) return;

    const steps = simContainer.querySelectorAll(".sim-step");
    const particles = simCard.querySelectorAll(".sig-particle");

    const stepGroups = [
      [0],
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ];
    const stepTimes = ["11:47 PM", "11:47 PM", "11:49 PM", "8:00 AM", "8:01 AM", "8:01 AM"];
    const AI_STEP = 2;
    let current = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function resetAI() {
      aiBars!.style.opacity = "1";
      aiResult!.style.opacity = "0";
      aiLabel!.textContent = "Intake received in Paperplane";
      aiIcon!.style.boxShadow = "none";
      simCard!.classList.remove("ai-active");
    }

    function triggerAI() {
      simCard!.classList.add("ai-active");
      aiIcon!.style.boxShadow = "0 0 12px rgba(126,217,87,0.4)";
      aiIcon!.style.transition = "box-shadow 0.6s ease-out";
      aiBars!.style.opacity = "1";

      timeoutId = setTimeout(() => {
        aiBars!.style.opacity = "0";
        aiBars!.style.transition = "opacity 0.4s ease-out";
        aiResult!.style.opacity = "1";
        aiLabel!.textContent = "Triaged & structured \u2713";
        aiIcon!.style.boxShadow = "0 0 6px rgba(126,217,87,0.2)";
      }, 900);
    }

    function showStep() {
      for (let g = 0; g < current; g++) {
        stepGroups[g].forEach((i) => {
          steps[i].classList.remove("active");
          steps[i].classList.add("past");
        });
      }

      if (current < stepGroups.length) {
        stepGroups[current].forEach((i) => {
          steps[i].classList.add("active");
          steps[i].classList.remove("past");
        });
        timeEl!.textContent = stepTimes[current];

        if (current === AI_STEP) {
          triggerAI();
          current++;
          timeoutId = setTimeout(showStep, 2000);
        } else {
          current++;
          timeoutId = setTimeout(showStep, 1400);
        }
      } else {
        timeoutId = setTimeout(() => {
          steps.forEach((s) => {
            s.classList.remove("active");
            s.classList.add("past");
          });

          timeoutId = setTimeout(() => {
            steps.forEach((s) => s.classList.remove("active", "past"));
            resetAI();
            current = 0;
            timeEl!.textContent = "11:47 PM";
            timeoutId = setTimeout(showStep, 600);
          }, 1200);
        }, 2800);
      }
    }

    // Signal particles
    const particleTimeouts: ReturnType<typeof setTimeout>[] = [];
    particles.forEach((p, i) => {
      const el = p as HTMLElement;
      function drift() {
        const dur = 6000 + Math.random() * 4000;
        const yShift = 15 + Math.random() * 25;
        const xShift = (Math.random() - 0.5) * 10;
        const peakOp = 0.1 + Math.random() * 0.15;

        el.style.transition = `transform ${dur}ms ease-in-out, opacity ${dur * 0.4}ms ease-in-out`;
        el.style.opacity = String(peakOp);
        el.style.transform = `translate(${xShift}px, -${yShift}px)`;

        const t = setTimeout(() => {
          el.style.opacity = "0";
          el.style.transform = "translate(0, 0)";
          const t2 = setTimeout(drift, 800 + Math.random() * 1200);
          particleTimeouts.push(t2);
        }, dur);
        particleTimeouts.push(t);
      }
      const t = setTimeout(drift, 1000 + i * 1800);
      particleTimeouts.push(t);
    });

    // Start simulation after hero animation
    timeoutId = setTimeout(showStep, 1500);

    return () => {
      clearTimeout(timeoutId);
      particleTimeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className="gsap-fade relative w-full max-w-[400px] sm:max-w-[480px] mx-auto lg:mx-0"
      style={{ animationDelay: "0.3s" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(126,217,87,0.05) 0%, transparent 65%)",
          filter: "blur(30px)",
          animation: "breathe 5s ease-in-out infinite",
        }}
      />

      <div
        ref={simCardRef}
        className="sim-card bg-[#0C2418] border border-[#1a5c3a]/80 rounded-2xl relative overflow-hidden shadow-[0_0_60px_rgba(126,217,87,0.04)]"
      >
        {/* Signal particles */}
        <div className="sig-particle" style={{ left: "12%", top: "20%", opacity: 0 }} />
        <div className="sig-particle" style={{ left: "85%", top: "35%", opacity: 0 }} />
        <div className="sig-particle" style={{ left: "45%", top: "60%", opacity: 0 }} />
        <div className="sig-particle" style={{ left: "70%", top: "80%", opacity: 0 }} />

        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a5c3a] relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse shadow-[0_0_8px_#7ED957]" />
            <span className="text-[#7ED957] font-mono text-[11px] font-extrabold tracking-widest uppercase">
              Live — Paperplane
            </span>
          </div>
          <span ref={simTimeRef} className="text-[#A8A8A8] font-mono text-[11px]">
            11:47 PM
          </span>
        </div>

        {/* Simulation Steps */}
        <div ref={simContainerRef} className="flex flex-col gap-0 relative z-10 px-5 py-4">
          {/* Step 1: Patient messages on WhatsApp */}
          <div className="sim-step" data-step="1">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <img src="/assets/icons/whatsapp.svg" alt="" width={20} height={20} className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#E8E8E8] text-sm font-semibold">Priya Sharma &middot; WhatsApp</span>
                  <span className="text-[#A8A8A8] font-mono text-[11px]">11:47 PM</span>
                </div>
                <div className="bg-[#04110d] border border-[#0B3D2E] rounded-lg px-3 py-2">
                  <p className="text-sm text-[#E8E8E8]">&quot;Hi doctor, my child has had fever since yesterday&quot;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="sim-step py-1 pl-4" data-step="2">
            <div className="w-px h-4 bg-[#1a5c3a] ml-3.5 flow-connector" />
          </div>

          {/* Step 2: Instant intake link sent */}
          <div className="sim-step" data-step="2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7ED957]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#7ED957]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#7ED957] text-sm font-semibold">Paperplane auto-reply</span>
                  <span className="text-[#A8A8A8] font-mono text-[11px]">11:47 PM</span>
                </div>
                <div className="bg-[#04110d] border border-[#7ED957]/30 rounded-lg px-3 py-2">
                  <p className="text-sm text-[#E8E8E8]">Intake form link sent to Priya</p>
                  <span className="text-xs text-[#A8A8A8] mt-0.5 block">
                    &#x1F4CB; &quot;Click to share details with Dr. Mehta&apos;s clinic&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="sim-step py-1 pl-4" data-step="3">
            <div className="w-px h-4 bg-[#1a5c3a] ml-3.5 flow-connector" />
          </div>

          {/* Step 3: Patient fills intake in Paperplane */}
          <div className="sim-step" data-step="3">
            <div className="flex items-start gap-3">
              <div
                ref={aiIconRef}
                className="w-8 h-8 rounded-full bg-[#0B3D2E] flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <img src="/assets/icons/brain-head-1--Streamline-Ultimate.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span ref={aiLabelRef} className="text-[#7ED957] text-sm font-semibold">
                    Intake received in Paperplane
                  </span>
                  <span className="text-[#A8A8A8] font-mono text-[11px]">11:49 PM</span>
                </div>
                <div className="bg-[#04110d] border border-[#7ED957]/40 rounded-lg px-3 py-2">
                  {/* Processing bars */}
                  <div ref={aiBarsRef} className="flex items-end gap-[3px] h-[16px]">
                    <span className="ai-bar" style={{ height: "5px", animation: "aiBar 0.7s ease-in-out infinite", animationDelay: "0s" }} />
                    <span className="ai-bar" style={{ height: "12px", animation: "aiBar 0.7s ease-in-out infinite", animationDelay: "0.08s" }} />
                    <span className="ai-bar" style={{ height: "8px", animation: "aiBar 0.7s ease-in-out infinite", animationDelay: "0.16s" }} />
                    <span className="ai-bar" style={{ height: "14px", animation: "aiBar 0.7s ease-in-out infinite", animationDelay: "0.24s" }} />
                    <span className="ai-bar" style={{ height: "6px", animation: "aiBar 0.7s ease-in-out infinite", animationDelay: "0.32s" }} />
                    <span className="ai-bar" style={{ height: "10px", animation: "aiBar 0.7s ease-in-out infinite", animationDelay: "0.40s" }} />
                  </div>
                  {/* Result after delay */}
                  <div ref={aiResultRef} style={{ opacity: 0, transition: "opacity 0.5s ease-out" }}>
                    <div className="flex items-center gap-2 bg-[#7ED957]/10 rounded px-2 py-1.5">
                      <svg className="w-4 h-4 text-[#7ED957] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-white font-medium">
                        Urgent — <span className="text-[#7ED957] font-bold">Pediatric fever</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="sim-step py-1 pl-4" data-step="4">
            <div className="w-px h-4 bg-[#1a5c3a] ml-3.5 flow-connector" />
          </div>

          {/* Step 4: Doctor reviews in Paperplane app */}
          <div className="sim-step" data-step="4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0B3D2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                <img src="/assets/icons/checkup-diagnostic--Streamline-Ultimate.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#E8E8E8] text-sm font-semibold">Dr. Mehta &middot; Paperplane app</span>
                  <span className="text-[#A8A8A8] font-mono text-[11px]">8:00 AM</span>
                </div>
                <div className="bg-[#04110d] border border-[#0B3D2E] rounded-lg px-3 py-2">
                  <p className="text-sm text-[#E8E8E8]">
                    Summary ready — <span className="text-[#7ED957] font-medium">Approve &amp; send Rx</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="sim-step py-1 pl-4" data-step="5">
            <div className="w-px h-4 bg-[#1a5c3a] ml-3.5 flow-connector" />
          </div>

          {/* Step 5: Rx delivered to patient via WhatsApp */}
          <div className="sim-step" data-step="5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7ED957]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <img src="/assets/icons/Prescription-Px--Streamline-Ultimate.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#E8E8E8] text-sm font-semibold">Rx &rarr; Priya via WhatsApp</span>
                  <span className="text-[#A8A8A8] font-mono text-[11px]">8:01 AM</span>
                </div>
                <div className="bg-[#04110d] border border-[#7ED957]/20 rounded-lg px-3 py-2">
                  <p className="text-sm text-[#E8E8E8]">Paracetamol 500mg — 3 days</p>
                  <span className="text-[#7ED957] text-[11px] mt-1 block font-medium">&#x2713; Approved &amp; delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="sim-step py-1 pl-4" data-step="6">
            <div className="w-px h-4 bg-[#1a5c3a] ml-3.5 flow-connector" />
          </div>

          {/* Step 6: Follow-up auto-scheduled */}
          <div className="sim-step" data-step="6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7ED957]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <img src="/assets/icons/pill-clock--Streamline-Ultimate.svg" alt="" width={20} height={20} className="w-5 h-5 icon-light" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#E8E8E8] text-sm font-semibold">Follow-up queued</span>
                  <span className="text-[#A8A8A8] font-mono text-[11px]">Auto</span>
                </div>
                <div className="bg-[#04110d] border border-[#0B3D2E] rounded-lg px-3 py-2">
                  <span className="text-sm text-[#E8E8E8]">Tomorrow 10 AM via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom flow label */}
        <div className="px-5 py-2.5 border-t border-[#1a5c3a]">
          <div className="flex items-center justify-center gap-2 text-[10px] text-[#A8A8A8]/70 flex-wrap">
            <span className="text-[#25D366]">Patient on WhatsApp</span>
            <span>&rarr;</span>
            <span className="text-[#7ED957]">Paperplane captures &amp; triages</span>
            <span>&rarr;</span>
            <span className="text-[#E8E8E8]">Doctor approves in app</span>
            <span>&rarr;</span>
            <span className="text-[#25D366]">Rx back via WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
