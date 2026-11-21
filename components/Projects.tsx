import { projects } from "@/data/projects";
import { BookOpen, ExternalLink, Github, PlayCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";

const linkClass =
  "inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 font-mono text-xs transition-colors hover:border-accent hover:text-accent";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <SectionTitle
          route="/proyectos"
          title="Proyectos"
          subtitle="Código, demos y documentación de mis proyectos."
        />

        {projects.length === 0 ? (
          <div className="rounded-lg border border-dashed border-line bg-soft p-8 font-mono text-sm">
            <p className="text-ok">200 OK</p>
            <pre className="mt-3 whitespace-pre-wrap text-muted">
              {`{ "proyectos": [], "mensaje": "Publicando pronto..." }`}
            </pre>
            <a
              href="https://github.com/AnaisVApolinario?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Github size={16} /> Mientras tanto, mira mis repositorios
            </a>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <li
                key={project.title}
                className="flex flex-col overflow-hidden rounded-lg border border-line bg-soft transition-colors hover:border-accent/70"
              >
                {project.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={`Captura de ${project.title}`}
                    loading="lazy"
                    className="aspect-video w-full border-b border-line object-cover"
                  />
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg/85">
                    {project.description}
                  </p>

                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label="Tecnologías"
                  >
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.note && (
                    <p className="mt-4 font-mono text-xs text-muted">
                      ⓘ {project.note}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        <Github size={14} /> Código
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        <ExternalLink size={14} /> Demo
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        <PlayCircle size={14} /> Video
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
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
