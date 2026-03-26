import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Paperplane",
  description: "Paperplane Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#04110d] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Privacy Policy</h1>
        <p className="text-sm text-[#9CA3AF] mb-12">Last updated: March 2026</p>

        <div className="flex flex-col gap-10 text-[#9CA3AF] text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, book a demo, or
              communicate with us. This may include your name, email address, phone number, clinic name, and any other
              information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to personalize your experience. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Patient Data</h2>
            <p>
              Patient data processed through Paperplane is encrypted in transit and at rest. We act as a data processor
              on behalf of the clinic (data controller). Patient data is never shared with third parties, used for
              advertising, or accessed without explicit authorization from the clinic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. Our infrastructure is ISO 27001
              certified and all data is stored on secure cloud servers. We regularly audit our security practices and
              update them as needed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services. If you wish to
              delete your data, you can contact us and we will remove it within 30 days, subject to any legal retention
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Cookies &amp; Analytics</h2>
            <p>
              We use cookies and similar technologies to analyze site usage and improve our services. You can control
              cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              policy on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
