import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${siteConfig.companyName} | Real Estate Builder in Ahmedabad` },
      { name: "description", content: `Get in touch with ${siteConfig.companyName}. Visit our office in Ahmedabad, call ${siteConfig.phone} or chat on WhatsApp for instant property assistance.` },
      { property: "og:title", content: `Contact ${siteConfig.companyName}` },
      { property: "og:description", content: "Get in touch for site visits, property enquiries and home loan assistance in Ahmedabad." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Get in touch"
          title="Talk to a Sales Expert"
          subtitle="We're here 7 days a week to help you find the right property in Ahmedabad."
        />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
        </div>

        <section className="container-luxe grid gap-10 pb-20 lg:grid-cols-[1fr_460px]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card-luxe"
              >
                <Phone className="h-6 w-6 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Call us</p>
                  <p className="mt-1 font-semibold">{siteConfig.phone}</p>
                </div>
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card-luxe"
              >
                <MessageCircle className="h-6 w-6 text-whatsapp" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                  <p className="mt-1 font-semibold">Chat instantly</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card-luxe"
              >
                <Mail className="h-6 w-6 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="mt-1 font-semibold">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card-luxe">
                <MapPin className="h-6 w-6 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Sales Office</p>
                  <p className="mt-1 text-sm font-medium">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card-luxe">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title={`${siteConfig.companyName} office location`}
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>

            <Button asChild variant="luxe" size="lg" className="w-full sm:w-auto">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6 shadow-luxe md:p-8">
            <h2 className="font-display text-2xl font-semibold">Send an Enquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">We typically respond within an hour.</p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
