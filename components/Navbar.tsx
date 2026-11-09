"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "projects", "contact"];
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md text-white px-10 py-4 flex justify-between items-center">
      <h2 className="font-bold text-lg">AV</h2>

      <div className="flex gap-6 text-sm">
        <a
          href="#hero"
          className={`hover:text-blue-400 transition ${
            active === "hero" ? "text-blue-500" : ""
          }`}
        >
          Sobre Mi
        </a>
        <a
          href="#experience"
          className={`hover:text-blue-400 transition ${
            active === "experience" ? "text-blue-500" : ""
          }`}
        >
          Experiencia
        </a>

        <a
          href="#projects"
          className={`hover:text-blue-400 transition ${
            active === "projects" ? "text-blue-500" : ""
          }`}
        >
          Proyectos
        </a>

        <a
          href="#contact"
          className={`hover:text-blue-400 transition ${
            active === "contact" ? "text-blue-500" : ""
          }`}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
