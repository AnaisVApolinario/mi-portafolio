import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectMedia from "@/components/ProjectMedia";

type Props = { params: Promise<{ slug: string }> };

const linkClass =
  "inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 font-mono text-xs transition-colors hover:border-accent hover:text-accent";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Proyectos`,
    description: project.description,
  };
}

export default async function ProyectoPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} /> /proyectos
      </Link>

      <header className="mt-10 mb-8">
        <p className="mb-2 font-mono text-sm text-accent">
          <span className="text-muted">GET </span>/proyectos/{project.slug}{" "}
          <span className="ml-2 text-ok">200 OK</span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted">{project.description}</p>
      </header>

      <ProjectMedia project={project} />

      <div className="mt-8 flex flex-wrap gap-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <ExternalLink size={14} /> Ver demo en vivo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <Github size={14} /> Ver código
          </a>
        )}
        {project.docsUrl && (
          <a
            href={project.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <BookOpen size={14} /> API Docs
          </a>
        )}
      </div>

      {project.about && (
        <section className="mt-12">
          <h2 className="font-mono text-sm text-muted">Qué hace</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-fg/85">
            {project.about}
          </p>
        </section>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-sm text-muted">Lo más destacado</h2>
          <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-fg/85">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-mono text-sm text-muted">Tecnologías</h2>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tecnologías">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {project.note && (
        <p className="mt-10 font-mono text-xs text-muted">ⓘ {project.note}</p>
      )}
    </main>
  );
}
