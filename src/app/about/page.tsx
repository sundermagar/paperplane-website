import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Paperplane",
  description: "Learn about Paperplane — the 24x7 AI clinic infrastructure built for real doctors in India.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#04110d] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          About Paperplane
        </h1>
        <p className="text-lg text-[#9CA3AF] mb-12 leading-relaxed">
          We build invisible infrastructure that lets clinics run 24&times;7 — without changing how doctors practice.
        </p>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-[#9CA3AF] leading-relaxed">
              Every day, thousands of patients message clinics after hours and never hear back. Follow-ups fall through
              the cracks. Clinical documentation eats into consultation time. Paperplane exists to fix the operational
              layer of healthcare — so doctors can focus on what they do best: treating patients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-[#9CA3AF] leading-relaxed">
              Paperplane captures every patient message on WhatsApp, structures clinical consultations with AI, generates
              digital prescriptions, and automates follow-ups — all while keeping the doctor in full control. We are not
              an aggregator. We do not list clinics on a marketplace. We are invisible infrastructure that works behind
              the scenes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Built for India</h2>
            <p className="text-[#9CA3AF] leading-relaxed">
              With over 500 million WhatsApp users and 80% of clinics lacking digital follow-up systems, India needs
              clinic infrastructure that works with existing behaviour — not against it. Paperplane is built from the
              ground up for the reality of Indian clinics: WhatsApp-first, mobile-first, zero training required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-[#9CA3AF] leading-relaxed">
              We are a team of engineers, designers, and healthcare professionals based across India. We work closely
              with real clinics to build systems that actually work in practice — not just in demos. Every feature we
              ship has been tested in real clinical environments.
            </p>
          </section>

          <div className="border-t border-[#0B3D2E] pt-10">
            <p className="text-xl font-bold text-white">
              Same clinic. <span className="text-[#7ED957]">Better systems.</span>
            </p>
            <p className="text-sm text-[#9CA3AF] mt-3">
              Want to learn more?{" "}
              <a href="mailto:hello@ppclinics.com" className="text-[#7ED957] hover:underline">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
