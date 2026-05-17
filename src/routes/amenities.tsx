import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { amenities } from "@/data/amenities";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: `World-Class Amenities | ${siteConfig.companyName}` },
      { name: "description", content: "Resort-style pools, sky lounges, smart-home automation, clubhouses and more, see the premium amenities at Saanvi Estates projects in Ahmedabad." },
      { property: "og:title", content: `Amenities | ${siteConfig.companyName}` },
      { property: "og:description", content: "Premium amenities across Saanvi Estates projects." },
    ],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Lifestyle"
          title="World-class amenities at every Saanvi address"
          subtitle="From infinity pools and sky lounges to smart-home automation, every amenity is designed to elevate everyday living."
        />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Amenities" }]} />
        </div>
        <section className="container-luxe pb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="rounded-xl border border-border bg-card p-6 shadow-card-luxe transition hover:-translate-y-1 hover:shadow-luxe">
                <Icon className="h-8 w-8 text-gold" />
                <p className="mt-4 font-display text-lg font-semibold">{name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
