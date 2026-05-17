import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  MapPin, Calendar, IndianRupee, Ruler, Building, ShieldCheck, Download,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import { projectWhatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found" }] };
    return {
      meta: [
        { title: `${p.name}, ${p.configurations.join(", ")} in ${p.location} | ${siteConfig.companyName}` },
        { name: "description", content: `${p.tagline}. Starting ${p.priceFrom}. Possession ${p.possession}. RERA approved. Book a site visit today.` },
        { property: "og:title", content: `${p.name} | ${p.location}` },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: p.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container-luxe flex flex-1 flex-col items-center justify-center py-24 text-center">
        <h1 className="font-display text-4xl">Project not found</h1>
        <p className="mt-3 text-muted-foreground">The project you're looking for may have been moved.</p>
        <Button asChild className="mt-6" variant="luxe">
          <Link to="/projects">Browse all projects</Link>
        </Button>
      </div>
      <Footer />
    </div>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project: p } = Route.useLoaderData();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: typeof p.cover === "string" ? p.cover : undefined,
    brand: { "@type": "Brand", name: siteConfig.companyName },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: p.priceFrom.replace(/[^\d]/g, ""),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate">
          <img
            src={p.cover}
            alt={`${p.name} in ${p.location}`}
            width={1920}
            height={900}
            className="h-[60vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay-gradient" />
          <div className="container-luxe absolute inset-x-0 bottom-0 pb-10 text-primary-foreground">
            <Badge className="bg-gold-gradient text-gold-foreground border-0">{p.status}</Badge>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl text-balance">{p.name}</h1>
            <p className="mt-2 flex items-center gap-2 text-primary-foreground/85">
              <MapPin className="h-4 w-4 text-gold" /> {p.location}
            </p>
          </div>
        </section>

        <div className="container-luxe py-6">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Projects", to: "/projects" },
              { label: p.name },
            ]}
          />
        </div>

        <section className="container-luxe grid gap-10 pb-20 lg:grid-cols-[1fr_380px]">
          <div>
            {/* Quick facts */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: IndianRupee, label: "Starting", value: p.priceFrom },
                { icon: Building, label: "Configuration", value: p.configurations.join(", ") },
                { icon: Ruler, label: "Carpet Area", value: p.carpetArea },
                { icon: Calendar, label: "Possession", value: p.possession },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-border bg-card p-4 shadow-card-luxe">
                  <Icon className="h-5 w-5 text-gold" />
                  <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <Tabs defaultValue="overview" className="mt-10">
              <TabsList className="flex-wrap">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <p className="leading-relaxed text-muted-foreground">{p.description}</p>
                <div>
                  <h2 className="font-display text-2xl font-semibold">Highlights</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-secondary/50 p-4 text-sm">
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                    <span><strong>RERA No:</strong> {p.rera}</span>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {p.amenities.map((a) => (
                    <div key={a} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gold" />
                      {a}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="floor-plans" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {p.floorPlans.map((fp) => (
                    <div key={fp.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-card-luxe">
                      <img src={fp.image} alt={`${fp.name} floor plan`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                      <div className="p-4">
                        <p className="font-display text-lg font-semibold">{fp.name}</p>
                        <p className="text-sm text-muted-foreground">{fp.area}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {p.gallery.map((g, i) => (
                    <img
                      key={i}
                      src={g}
                      alt={`${p.name} gallery image ${i + 1}`}
                      loading="lazy"
                      className="aspect-square w-full rounded-lg object-cover shadow-card-luxe"
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-luxe">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Enquire about</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{p.name}</h3>
              <div className="mt-5">
                <InquiryForm projectName={p.name} compact />
              </div>
              <div className="mt-4 grid gap-2">
                <Button asChild variant="outline" className="w-full">
                  <a href={projectWhatsappLink(p.name)} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <a href="#" download aria-label="Download brochure">
                    <Download /> Download Brochure
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <WhatsAppButton message={`Hi, I'm interested in ${p.name}.`} />
      <StickyCTA />
    </div>
  );
}
