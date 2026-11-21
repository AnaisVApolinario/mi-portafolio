import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import SectionTitle from "./SectionTitle";

export default function Footer() {
  return (
    <>
      <section id="contact" className="border-t border-line bg-soft/60">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <SectionTitle
            route="/contacto"
            title="Hablemos"
            subtitle="Estoy buscando una oportunidad en backend con Java o cualquier otro stack, donde pueda aportar y seguir ganando experiencia."
          />

          <a
            href={`mailto:${profile.email}`}
            className="break-all text-2xl font-semibold italic text-accent underline-offset-8 hover:underline sm:text-4xl"
          >
            {profile.email}
          </a>

          <ul className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={16} /> Correo
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={16} /> GitHub
              </a>
            </li>
            {profile.linkedin && (
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </footer>
    </>
  );
}
