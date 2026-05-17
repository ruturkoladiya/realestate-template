import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions | ${siteConfig.companyName}` },
      { name: "description", content: `Terms and conditions governing the use of the ${siteConfig.companyName} website.` },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader eyebrow="Legal" title="Terms & Conditions" />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
        </div>
        <article className="container-luxe max-w-3xl pb-20 text-muted-foreground space-y-4">
          <p>By accessing or using the {siteConfig.companyName} website, you agree to be bound by these Terms & Conditions.</p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Use of Website</h2>
          <p>The content on this website is for informational purposes only and does not constitute a legal offer. All project specifications, prices and availability are subject to change without notice.</p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Intellectual Property</h2>
          <p>All content, images, logos and trademarks on this site are the property of {siteConfig.companyName} and may not be reproduced without written consent.</p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p>{siteConfig.companyName} shall not be liable for any direct, indirect or consequential loss arising from the use of this website or reliance on its content.</p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Governing Law</h2>
          <p>These terms are governed by the laws of India and any disputes shall be subject to the exclusive jurisdiction of the courts at Ahmedabad, Gujarat.</p>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
