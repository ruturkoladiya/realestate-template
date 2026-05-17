import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d\s-]{8,16}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

export function InquiryForm({
  projectName,
  compact = false,
}: { projectName?: string; compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate submit, wire to backend later.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card-luxe">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-4 font-display text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our sales expert will reach out to you shortly. For an instant response, please WhatsApp us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {projectName && (
        <input type="hidden" name="project" value={projectName} />
      )}
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" placeholder="Your full name" maxLength={80} required />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+91 98XXX XXXXX" maxLength={16} required />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={120} />
        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          maxLength={800}
          placeholder={
            projectName
              ? `I'd like more details about ${projectName}.`
              : "Tell us what you're looking for…"
          }
        />
      </div>
      <Button type="submit" variant="luxe" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending…" : "Request a Callback"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. Your details will never be shared.
      </p>
    </form>
  );
}
