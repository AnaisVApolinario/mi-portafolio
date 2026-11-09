import { experience } from "../data/experience";
import { Briefcase } from "lucide-react";
export default function Experience() {
  return (
    <section className="bg-slate-900 text-white px-10 py-20" id="experience">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
          <Briefcase className="text-blue-500" size={32} />
          Experiencia
        </h2>

        <div className="relative border-l border-slate-700 ml-4">
          {experience.map((item, index) => (
            <div key={index} className="mb-12 ml-6">
              <span className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"></span>

              <h3 className="text-2xl font-semibold text-blue-400">
                {item.role}
              </h3>

              <p className="text-lg font-medium">{item.company}</p>

              <p className="text-sm text-slate-400 mb-3">{item.date}</p>

              <p className="text-slate-300 max-w-2xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
