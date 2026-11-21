"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const routes = [
  { id: "hero", label: "/anais" },
  { id: "experience", label: "/experiencia" },
  { id: "stack", label: "/stack" },
  { id: "projects", label: "/proyectos" },
  { id: "contact", label: "/contacto" },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    routes.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isDark = resolvedTheme !== "light";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3"
      >
        <a
          href="#hero"
          className="font-mono text-sm font-semibold text-accent"
          aria-label="Ir al inicio"
        >
          AVA<span className="text-muted">@Dev</span>
        </a>

        <ul className="flex items-center gap-1 overflow-x-auto font-mono text-xs sm:gap-3 sm:text-sm">
          {routes.map((route) => (
            <li key={route.id}>
              <a
                href={`#${route.id}`}
                aria-current={active === route.id ? "true" : undefined}
                className={`whitespace-nowrap rounded px-2 py-1 transition-colors hover:text-accent ${
                  active === route.id ? "text-accent" : "text-muted"
                }`}
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={
            mounted
              ? isDark
                ? "Cambiar a tema claro"
                : "Cambiar a tema oscuro"
              : "Cambiar tema"
          }
          className="grid h-8 w-8 shrink-0 place-items-center rounded border border-line text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {mounted ? (
            isDark ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )
          ) : (
            <span className="h-4 w-4" />
          )}
        </button>
      </nav>
    </header>
  );
}