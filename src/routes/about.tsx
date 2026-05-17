import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Building2, HandshakeIcon, Target } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import livingImg from "@/assets/interior-living.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${siteConfig.companyName} | Trusted Real Estate Builder in Ahmedabad` },
      { name: "description", content: "Learn about Saanvi Estates, 25 years of building trust, 40+ delivered projects and 8,500+ happy families across Ahmedabad." },
      { property: "og:title", content: `About ${siteConfig.companyName}` },
      { property: "og:description", content: "Premium real estate builder delivering quality homes across Ahmedabad since 1999." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Quality First", desc: "Premium specifications and rigorous QA on every project." },
  { icon: HandshakeIcon, title: "Transparent Dealings", desc: "Clean documentation, no hidden charges." },
  { icon: Target, title: "On-Time Possession", desc: "A track record of delivering when we promise." },
  { icon: Building2, title: "Iconic Design", desc: "Architecture-led developments that stand the test of time." },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="About Us"
          title={`Building Iconic Homes in ${siteConfig.city} since 1999`}
          subtitle="A legacy of trust, craftsmanship and timely delivery, that's the Saanvi promise."
        />
        <div className="container-luxe py-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
        </div>

        <section className="container-luxe grid gap-12 pb-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl text-balance">Our Story</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founded in 1999, {siteConfig.companyName} has grown from a single-project boutique builder into one of
              Ahmedabad's most respected real estate names. Over 25 years, we have delivered 40+ residential and
              commercial landmarks across SG Highway, Prahlad Nagar, Shilaj, Bopal and beyond, each one engineered
              for longevity and designed for a refined way of life.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We believe a home is the single biggest investment a family makes. That's why every Saanvi project is
              RERA-approved, Vastu-compliant and built to international quality benchmarks.
            </p>
            <Button asChild className="mt-6" variant="luxe">
              <Link to="/projects">Explore Our Projects</Link>
            </Button>
          </div>
          <img
            src={livingImg}
            alt="Luxury interior of a Saanvi Estates apartment in Ahmedabad"
            loading="lazy"
            width={1280}
            height={896}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-luxe"
          />
        </section>

        <section className="bg-secondary">
          <div className="container-luxe py-20">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What We Stand For</p>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Our Values</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card-luxe">
                  <Icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-luxe grid gap-6 py-20 md:grid-cols-4">
          {siteConfig.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center shadow-card-luxe">
              <p className="font-display text-4xl font-semibold text-gold">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
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
