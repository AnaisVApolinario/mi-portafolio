import { profile, stack } from "@/data/profile";
import SectionTitle from "./SectionTitle";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-soft/60">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <SectionTitle
          route="/stack"
          title="Tecnologías y habilidades"
          subtitle="Mi base está en el backend con Java y Spring Boot; en el frontend uso React y Next.js para darle cara a las APIs."
        />

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-fg/90">
          {profile.summary}
        </p>

        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {stack.map((group) => (
            <div
              key={group.label}
              className={`rounded-lg border p-5 ${
                group.highlight
                  ? "border-accent/60 bg-bg"
                  : "border-line bg-bg"
              }`}
            >
              <dt className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-line px-2.5 py-1 font-mono text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
