import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/floor-plans")({
  head: () => ({
    meta: [
      { title: `Floor Plans | ${siteConfig.companyName} Projects` },
      { name: "description", content: "Detailed floor plans for 2 BHK, 3 BHK, 4 BHK flats and villas across Saanvi Estates projects in Ahmedabad." },
      { property: "og:title", content: `Floor Plans | ${siteConfig.companyName}` },
      { property: "og:description", content: "Floor plans of all our Ahmedabad real estate projects." },
    ],
  }),
  component: FloorPlansPage,
});

function FloorPlansPage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Layouts"
          title="Floor Plans across our projects"
          subtitle="Vastu-compliant, efficient layouts designed for modern Indian families."
        />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Floor Plans" }]} />
        </div>
        <section className="container-luxe space-y-16 pb-20">
          {projects.map((p) => (
            <div key={p.slug}>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl font-semibold md:text-3xl">{p.name}</h2>
                  <p className="text-sm text-muted-foreground">{p.location}</p>
                </div>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="text-sm font-medium text-gold hover:underline"
                >
                  View project →
                </Link>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {p.floorPlans.map((fp) => (
                  <div key={fp.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-card-luxe">
                    <img src={fp.image} alt={`${p.name} - ${fp.name} floor plan`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <div className="p-4">
                      <p className="font-display text-lg font-semibold">{fp.name}</p>
                      <p className="text-sm text-muted-foreground">{fp.area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
