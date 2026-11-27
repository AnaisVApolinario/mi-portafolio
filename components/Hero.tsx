import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile, stack } from "@/data/profile";

const backend = stack.find((g) => g.label === "Backend")?.items ?? [];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <p className="mb-4 flex items-center gap-2 font-mono text-xs text-muted sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Anais
            <br />
            <span className="italic text-accent">Valverde</span>
            <span className="cursor ml-2" aria-hidden="true" />
          </h1>

          <p className="mt-6 font-mono text-sm text-muted sm:text-base">
            {profile.role} · {profile.focus}
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg/90">
            Desarrollo aplicaciones web, servicios backend y gestiono bases de datos creando soluciones funcionales y escalables. Aunque tengo un fuerte enfoque en Java y Spring Boot, me adapto fácilmente a distintas tecnologías según el proyecto. Busco mi próxima oportunidad como Software Developer para seguir aportando y creciendo profesionalmente.

          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded bg-accent px-4 py-2.5 font-semibold text-bg transition-opacity hover:opacity-85"
            >
              <Mail size={16} /> Escríbeme
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-line px-4 py-2.5 transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={16} /> GitHub
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-line px-4 py-2.5 transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Respuesta de "API" */}
        <div
          className="overflow-hidden rounded-lg border border-line bg-soft font-mono text-[13px] shadow-2xl shadow-black/20 sm:text-sm"
          role="img"
          aria-label={`Respuesta JSON con los datos de ${profile.name}: ${profile.role}, ${profile.location}`}
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-xs">
            <span>
              <span className="font-semibold text-accent">GET</span>{" "}
              <span className="text-muted">/api/anais</span>
            </span>
            <span className="text-ok">200 OK</span>
          </div>
          <pre className="overflow-x-auto p-4 leading-relaxed" aria-hidden="true">
            <code>
              {"{\n"}
              {"  "}
              <span className="text-key">&quot;nombre&quot;</span>:{" "}
              <span className="text-str">&quot;{profile.name}&quot;</span>,{"\n"}
              {"  "}
              <span className="text-key">&quot;rol&quot;</span>:{" "}
              <span className="text-str">&quot;{profile.role}&quot;</span>,{"\n"}
              {"  "}
              <span className="text-key">&quot;ubicacion&quot;</span>:{" "}
              <span className="text-str">&quot;{profile.location}&quot;</span>,
              {"\n"}
              {"  "}
              <span className="text-key">&quot;backend&quot;</span>: [{"\n"}
              {backend.map((item, i) => (
                <span key={item}>
                  {"    "}
                  <span className="text-str">&quot;{item}&quot;</span>
                  {i < backend.length - 1 ? "," : ""}
                  {"\n"}
                </span>
              ))}
              {"  "}],{"\n"}
              {"  "}
              <span className="text-key">&quot;buscando&quot;</span>:{" "}
              <span className="text-num">true</span>,{"\n"}
              {"  "}
              <span className="text-key">&quot;idiomas&quot;</span>: [
              <span className="text-str">&quot;es&quot;</span>,{" "}
              <span className="text-str">&quot;en-A2&quot;</span>]{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Ir a experiencia"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent md:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
