import { siteConfig } from "@/data/site";

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? `Hi ${siteConfig.companyName}, I'd like to know more about your projects in Ahmedabad.`,
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function projectWhatsappLink(projectName: string) {
  return whatsappLink(
    `Hi ${siteConfig.companyName}, I am interested in *${projectName}*. Please share details, pricing & site visit slots.`,
  );
}
