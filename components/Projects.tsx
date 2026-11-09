import { projects } from "@/data/projects";
import { Code } from "lucide-react";
import { Github, ExternalLink } from "lucide-react";
export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-10 py-20"
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <Code className="text-blue-500" size={32} />
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300"
            >
              {/* Imagen */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

              <p className="text-slate-400 mb-4">{project.description}</p>

              <div className="flex gap-2 text-sm text-blue-400">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={18} />
                    Preview
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
