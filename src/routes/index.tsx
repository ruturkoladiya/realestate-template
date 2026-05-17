import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-tower.jpg";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { ProjectCard } from "@/components/ProjectCard";
import { InquiryForm } from "@/components/InquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { siteConfig } from "@/data/site";
import { featuredProjects, locations } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faq";
import { amenities } from "@/data/amenities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.companyName} | Premium Real Estate Builder in Ahmedabad` },
      { name: "description", content: "Discover RERA-approved 2, 3 & 4 BHK luxury flats, villas and commercial spaces by Saanvi Estates across Ahmedabad, SG Highway, Prahlad Nagar, Shilaj & Bopal." },
      { property: "og:title", content: `${siteConfig.companyName} | Luxury Builder in Ahmedabad` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
      { name: "keywords", content: "real estate Ahmedabad, builder projects Ahmedabad, flats for sale Ahmedabad, 2 BHK 3 BHK Ahmedabad, luxury apartments Ahmedabad, new projects Ahmedabad, residential projects Ahmedabad" },
    ],
    links: [{ rel: "canonical", href: siteConfig.url }],
  }),
  component: HomePage,
});

function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.companyName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: "Ahmedabad",
  };

  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Luxury high-rise tower in Ahmedabad at golden hour"
            width={1920}
            height={1080}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-overlay-gradient" />
          <div className="container-luxe flex min-h-[88vh] flex-col justify-center py-24 text-primary-foreground">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" /> {siteConfig.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl text-balance">
              {siteConfig.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
              {siteConfig.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl" variant="luxe">
                <Link to="/projects">{siteConfig.hero.primaryCta} <ArrowRight /></Link>
              </Button>
              <Button asChild size="xl" variant="outlineLight">
                <Link to="/contact">{siteConfig.hero.secondaryCta}</Link>
              </Button>
            </div>

            <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-primary-foreground/15 pt-8 md:grid-cols-4">
              {siteConfig.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">{s.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-semibold text-gold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container-luxe py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Signature Portfolio</p>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl text-balance">
                Featured Projects in Ahmedabad
              </h2>
              <p className="mt-3 text-muted-foreground">
                Hand-picked residential and commercial addresses crafted with uncompromising attention to detail.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/projects">View All Projects <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>

        {/* About strip */}
        <section className="bg-secondary">
          <div className="container-luxe grid gap-12 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About the Builder</p>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl text-balance">
                25 Years of Building Trust in Ahmedabad
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {siteConfig.companyName} is an Ahmedabad-headquartered real estate group with a portfolio
                of 40+ delivered residential and commercial landmarks. Every home we hand over is built on
                three promises: timely possession, transparent dealings and uncompromising construction quality.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "RERA-approved projects",
                  "Vastu-compliant layouts",
                  "On-time possession track record",
                  "Premium specifications",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm">
                    <span className="h-2 w-2 rounded-full bg-gold" /> {x}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8" variant="luxe">
                <Link to="/about">Learn About Us <ArrowRight /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {amenities.slice(0, 6).map(({ icon: Icon, name, desc }) => (
                <div key={name} className="rounded-xl border border-border bg-card p-5 shadow-card-luxe">
                  <Icon className="h-6 w-6 text-gold" />
                  <p className="mt-3 font-medium">{name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="container-luxe py-20 md:py-28">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Where we build</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl text-balance">
              Premium Locations Across Ahmedabad
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to="/locations/$slug"
                params={{ slug: loc.slug }}
                className="group rounded-xl border border-border bg-card p-6 shadow-card-luxe transition hover:-translate-y-1 hover:shadow-luxe"
              >
                <p className="font-display text-xl font-semibold">{loc.name}</p>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{loc.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-primary text-primary-foreground">
          <div className="container-luxe py-20 md:py-28">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Loved by Homeowners</p>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl text-balance">
                Real Stories from Saanvi Families
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
                >
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-primary-foreground/10 pt-4">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-primary-foreground/60">{t.role} · {t.project}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ + Inquiry */}
        <section className="container-luxe grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Frequently Asked</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl text-balance">
              Everything you'd like to know
            </h2>
            <div className="mt-6">
              <FAQAccordion items={faqs} />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-luxe md:p-8">
            <h3 className="font-display text-2xl font-semibold">Request a Callback</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Share your details, our sales expert will reach out within 24 hours.
            </p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-hero-gradient text-primary-foreground">
          <div className="container-luxe flex flex-col items-center gap-6 py-20 text-center md:py-24">
            <h2 className="font-display text-3xl font-semibold md:text-5xl text-balance">
              Find your forever address in Ahmedabad
            </h2>
            <p className="max-w-xl text-primary-foreground/80">
              Schedule a complimentary site visit or chat with our sales experts on WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="xl" variant="luxe">
                <Link to="/contact">Book a Site Visit</Link>
              </Button>
              <Button asChild size="xl" variant="outlineLight">
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
