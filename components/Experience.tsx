import { experience } from "@/data/experience";
import { education } from "@/data/profile";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <SectionTitle
          route="/experiencia"
          title="Experiencia"
          subtitle="Proyectos reales, equipos ágiles y entregas iterativas."
        />

        <ol className="space-y-12">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <p className="font-mono text-sm text-muted md:pt-1">
                {item.period}
              </p>

              <div>
                <h3 className="text-xl font-semibold">
                  {item.role}{" "}
                  <span className="italic text-accent">· {item.company}</span>
                </h3>

                <ul className="mt-3 space-y-2 text-fg/85">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed">
                      <span
                        className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Tecnologías usadas"
                >
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 border-t border-line pt-12">
          <SectionTitle
            route="/educacion"
            title="Educación"
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <li
                key={item.school}
                className="rounded-lg border border-line bg-soft p-5"
              >
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <p className="mt-2 text-lg font-semibold">{item.school}</p>
                <p className="mt-1 text-sm italic text-muted">{item.program}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
