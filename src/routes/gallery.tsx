import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery | ${siteConfig.companyName} Projects in Ahmedabad` },
      { name: "description", content: "Explore exteriors, interiors and amenities photos from our luxury real estate projects in Ahmedabad." },
      { property: "og:title", content: `Project Gallery | ${siteConfig.companyName}` },
      { property: "og:description", content: "Photo gallery of our Ahmedabad real estate projects." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const all = projects.flatMap((p) =>
    p.gallery.map((src, i) => ({ src, alt: `${p.name} - photo ${i + 1}` })),
  );
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Visual Tour"
          title="Our Projects in Pictures"
          subtitle="A glimpse into the spaces, finishes and lifestyle we craft."
        />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Gallery" }]} />
        </div>
        <section className="container-luxe pb-20">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {all.map((g, i) => (
              <img
                key={i}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full break-inside-avoid rounded-xl object-cover shadow-card-luxe transition hover:scale-[1.01]"
              />
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
