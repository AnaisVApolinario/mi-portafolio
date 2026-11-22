import type { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

/** Convierte links de YouTube o Loom a su versión "embed". */
function toEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "loom.com" && u.pathname.startsWith("/share/")) {
      return `https://www.loom.com/embed/${u.pathname.replace("/share/", "")}`;
    }
    return null;
  } catch {
    return null;
  }
}

export default function ProjectMedia({ project }: { project: Project }) {
  const { videoUrl, image, demoUrl, title } = project;

  // 1) Video
  if (videoUrl) {
    if (/\.(mp4|webm)$/i.test(videoUrl)) {
      return (
        <video
          src={videoUrl}
          controls
          playsInline
          poster={image}
          className="aspect-video w-full rounded-lg border border-line bg-black"
        />
      );
    }
    const embed = toEmbedUrl(videoUrl);
    if (embed) {
      return (
        <iframe
          src={embed}
          title={`Demo de ${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full rounded-lg border border-line"
        />
      );
    }
  }

  // 2) Sin video: captura (si hay demo, la captura abre la URL)
  if (!image) return null;

  const picture = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt={`Captura de ${title}`}
      className="aspect-video w-full object-cover"
    />
  );

  if (!demoUrl) {
    return (
      <div className="overflow-hidden rounded-lg border border-line">
        {picture}
      </div>
    );
  }

  return (
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${title} en una pestaña nueva`}
      className="group relative block overflow-hidden rounded-lg border border-line transition-colors hover:border-accent"
    >
      {picture}
      <span className="absolute inset-0 flex items-center justify-center gap-2 bg-black/55 font-mono text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <ExternalLink size={16} /> Abrir sitio
      </span>
    </a>
  );
}
