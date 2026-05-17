import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects | ${siteConfig.companyName}, New Projects in Ahmedabad` },
      { name: "description", content: "Browse all residential and commercial real estate projects by Saanvi Estates across Ahmedabad, 2 BHK, 3 BHK, 4 BHK flats, villas and offices." },
      { property: "og:title", content: `Projects in Ahmedabad | ${siteConfig.companyName}` },
      { property: "og:description", content: "All ongoing, ready-possession and new launch real estate projects in Ahmedabad by Saanvi Estates." },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Residential", "Villa", "Commercial"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Our Portfolio"
          title="New & Ongoing Projects in Ahmedabad"
          subtitle="Explore our portfolio of luxury apartments, gated villas and Grade-A commercial spaces."
        />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects" }]} />
        </div>
        <section className="container-luxe pb-20">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={filter === c ? "luxe" : "outline"}
                onClick={() => setFilter(c)}
              >
                {c}
              </Button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
          {list.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              No projects found. <Link to="/contact" className="text-gold">Contact us</Link> for upcoming launches.
            </p>
          )}
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
