import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ | ${siteConfig.companyName}` },
      { name: "description", content: "Frequently asked questions about Saanvi Estates real estate projects in Ahmedabad, RERA, home loans, NRI buying, possession and site visits." },
      { property: "og:title", content: `FAQ | ${siteConfig.companyName}` },
      { property: "og:description", content: "Common questions about buying property with Saanvi Estates in Ahmedabad." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-1">
        <PageHeader eyebrow="Help Center" title="Frequently Asked Questions" subtitle="Quick answers to the questions our buyers ask most often." />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "FAQ" }]} />
        </div>
        <section className="container-luxe max-w-3xl pb-20">
          <FAQAccordion items={faqs} />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
