import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { locations, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = locations.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    const projectsHere = projects.filter((p) => p.locationSlug === params.slug);
    return { location, projectsHere };
  },
  head: ({ loaderData }) => {
    const l = loaderData?.location;
    if (!l) return { meta: [{ title: "Location not found" }] };
    return {
      meta: [
        { title: `Real Estate Projects in ${l.name}, Ahmedabad | ${siteConfig.companyName}` },
        { name: "description", content: `${l.description} Explore Saanvi Estates projects in ${l.name}, Ahmedabad.` },
        { property: "og:title", content: `Projects in ${l.name}, Ahmedabad` },
        { property: "og:description", content: l.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container-luxe flex flex-1 flex-col items-center justify-center py-24 text-center">
        <h1 className="font-display text-4xl">Location not found</h1>
        <Button asChild className="mt-6" variant="luxe"><Link to="/projects">Browse projects</Link></Button>
      </div>
      <Footer />
    </div>
  ),
  component: LocationPage,
});

function LocationPage() {
  const { location, projectsHere } = Route.useLoaderData();
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow={`${location.name}, Ahmedabad`}
          title={`Premium Real Estate in ${location.name}`}
          subtitle={location.description}
        />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Locations" }, { label: location.name }]} />
        </div>
        <section className="container-luxe pb-20">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Projects in {location.name}
          </h2>
          {projectsHere.length === 0 ? (
            <p className="mt-6 text-muted-foreground">
              No active projects right now. <Link to="/contact" className="text-gold">Contact us</Link> for upcoming launches.
            </p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectsHere.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          )}
          <div className="mt-16 rounded-2xl border border-border bg-secondary p-8">
            <h3 className="font-display text-xl font-semibold">Why buy in {location.name}?</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {location.name} is one of Ahmedabad's most sought-after addresses, offering a perfect mix of
              connectivity, social infrastructure, lifestyle conveniences and steady property appreciation.
              Our projects in {location.name} are designed to make the most of this prime location.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
