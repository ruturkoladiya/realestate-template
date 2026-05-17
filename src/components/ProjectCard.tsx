import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, IndianRupee, Calendar } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectWhatsappLink } from "@/lib/whatsapp";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card-luxe transition hover:-translate-y-1 hover:shadow-luxe">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={project.cover}
          alt={`${project.name} - ${project.tagline}`}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-overlay-gradient opacity-70" />
        <Badge className="absolute left-4 top-4 bg-gold-gradient text-gold-foreground border-0">
          {project.status}
        </Badge>
        <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
          <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-primary-foreground/85">
            <MapPin className="h-3.5 w-3.5" /> {project.location}
          </p>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-muted-foreground">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.configurations.map((c) => (
            <Badge key={c} variant="secondary" className="rounded-full">{c}</Badge>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Starting</p>
            <p className="mt-1 flex items-center font-display text-lg font-semibold text-foreground">
              <IndianRupee className="h-4 w-4" /> {project.priceFrom.replace("₹ ", "")}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Possession</p>
            <p className="mt-1 flex items-center gap-1 text-sm font-medium">
              <Calendar className="h-3.5 w-3.5 text-gold" /> {project.possession}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <Button asChild className="flex-1" variant="luxe" size="sm">
            <Link to="/projects/$slug" params={{ slug: project.slug }}>
              View Details <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a
              href={projectWhatsappLink(project.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={`WhatsApp enquiry for ${project.name}`}
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
