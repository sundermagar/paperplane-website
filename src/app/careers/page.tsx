import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Paperplane",
  description: "Join Paperplane and help build the future of clinic infrastructure in India.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#04110d] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Careers</h1>
        <p className="text-lg text-[#9CA3AF] mb-16 leading-relaxed">
          We&apos;re building the operating system for Indian clinics. If you want to work on problems that matter,
          we&apos;d love to hear from you.
        </p>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Paperplane</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                <p className="text-[#9CA3AF]">Work on real problems — every feature ships to real clinics</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                <p className="text-[#9CA3AF]">Small team, high autonomy — your work has direct impact</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                <p className="text-[#9CA3AF]">Build AI systems that assist doctors, not replace them</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2.5 flex-shrink-0" />
                <p className="text-[#9CA3AF]">Remote-friendly, async-first culture</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-300 hover:border-[#7ED957]/40">
                <span className="text-xs text-[#7ED957] font-semibold uppercase tracking-widest">
                  No open positions right now
                </span>
                <p className="text-sm text-[#9CA3AF] mt-3 leading-relaxed">
                  We&apos;re not actively hiring at the moment, but we&apos;re always open to hearing from talented
                  people. If you think you can contribute, reach out.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-[#0B3D2E] pt-10">
            <p className="text-xl font-bold text-white mb-3">Interested?</p>
            <p className="text-sm text-[#9CA3AF]">
              Send us an email at{" "}
              <a href="mailto:hello@ppclinics.com" className="text-[#7ED957] hover:underline">
                hello@ppclinics.com
              </a>{" "}
              with what you&apos;ve built and why you want to work on clinic infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
