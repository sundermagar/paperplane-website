import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Paperplane",
  description: "Insights on clinic automation, WhatsApp-first healthcare, and building systems for Indian clinics.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#04110d] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Blog</h1>
        <p className="text-lg text-[#9CA3AF] mb-16 leading-relaxed">
          Insights on clinic automation, WhatsApp-first healthcare, and building systems that work for real clinics.
        </p>

        <div className="flex flex-col gap-8">
          {/* Placeholder posts */}
          <article className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-300 hover:border-[#7ED957]/40">
            <span className="text-xs text-[#7ED957] font-semibold uppercase tracking-widest">Coming Soon</span>
            <h2 className="text-xl font-bold text-white mt-3 mb-2">
              Why 40% of WhatsApp Messages to Clinics Go Unread
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              An analysis of after-hours patient communication patterns and what clinics can do about it.
            </p>
          </article>

          <article className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-300 hover:border-[#7ED957]/40">
            <span className="text-xs text-[#7ED957] font-semibold uppercase tracking-widest">Coming Soon</span>
            <h2 className="text-xl font-bold text-white mt-3 mb-2">
              The Case for WhatsApp-First Clinic Infrastructure
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Why building on WhatsApp is the fastest path to clinic automation in India.
            </p>
          </article>

          <article className="bg-[#061a14] border border-[#0B3D2E] rounded-2xl p-8 transition-all duration-300 hover:border-[#7ED957]/40">
            <span className="text-xs text-[#7ED957] font-semibold uppercase tracking-widest">Coming Soon</span>
            <h2 className="text-xl font-bold text-white mt-3 mb-2">
              How AI Can Structure Clinical Notes Without Replacing Doctors
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              A practical look at AI-assisted documentation that keeps the doctor in control.
            </p>
          </article>
        </div>

        <div className="border-t border-[#0B3D2E] mt-16 pt-10 text-center">
          <p className="text-sm text-[#9CA3AF]">
            More articles coming soon. Follow us for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
