import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${siteConfig.companyName}` },
      { name: "description", content: `Privacy policy of ${siteConfig.companyName} explaining how we collect, use and protect your personal data.` },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader eyebrow="Legal" title="Privacy Policy" />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
        </div>
        <article className="container-luxe prose prose-neutral max-w-3xl pb-20 text-muted-foreground">
          <p>
            {siteConfig.companyName} respects your privacy. This Privacy Policy explains how we collect, use and
            protect the personal information you provide while interacting with our website and sales team.
          </p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Information We Collect</h2>
          <p>We collect your name, phone number, email address and project preferences when you submit an enquiry, request a callback or download a brochure.</p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p>Your information is used solely to respond to your enquiry, share project details, schedule site visits and provide post-sales support. We never sell or rent your information to third parties.</p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Data Security</h2>
          <p>We employ industry-standard security measures to safeguard your personal information against unauthorized access, alteration or disclosure.</p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Contact Us</h2>
          <p>For any privacy-related queries, please email us at <a href={`mailto:${siteConfig.email}`} className="text-gold">{siteConfig.email}</a>.</p>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
