import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Paperplane",
  description: "Paperplane Terms of Service — the rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#04110d] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Terms of Service</h1>
        <p className="text-sm text-[#9CA3AF] mb-12">Last updated: March 2026</p>

        <div className="flex flex-col gap-10 text-[#9CA3AF] text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Paperplane&apos;s services, you agree to be bound by these Terms of Service. If you
              do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>
              Paperplane provides AI-powered clinic infrastructure including patient intake via WhatsApp, consultation
              management, digital prescription generation, follow-up automation, and clinical record management. The
              service is designed to assist healthcare providers and does not replace professional medical judgment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials, ensuring compliance
              with applicable healthcare regulations, reviewing and approving all AI-generated content before it reaches
              patients, and using the service in accordance with all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Medical Disclaimer</h2>
            <p>
              Paperplane is a clinical workflow tool. All medical decisions, prescriptions, and patient communications
              require explicit approval from a licensed healthcare provider. AI-generated suggestions are assistive only
              and must be reviewed before use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Ownership</h2>
            <p>
              You retain full ownership of your patient data and clinical records. Paperplane acts as a data processor
              and does not claim ownership of any data you process through our platform. You may export or delete your
              data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Service Availability</h2>
            <p>
              We strive to maintain high uptime but do not guarantee uninterrupted service. We will notify you of
              planned maintenance in advance. We are not liable for any losses resulting from service interruptions
              beyond our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Payment Terms</h2>
            <p>
              Subscription fees are billed monthly or annually as per your chosen plan. No per-patient fees or
              commission charges apply. Refunds are handled on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Termination</h2>
            <p>
              Either party may terminate the service with 30 days written notice. Upon termination, we will provide you
              with an export of your data. Data will be deleted from our servers within 90 days of termination unless
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. We will notify you of material changes via email or through the
              platform. Continued use of the service after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:hello@ppclinics.com" className="text-[#7ED957] hover:underline">
                hello@ppclinics.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
