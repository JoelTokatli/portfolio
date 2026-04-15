import React from "react";
import { useLang } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {p.subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {p.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.items.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl bg-dark-800 border border-white/5 overflow-hidden hover:border-accent/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-60" />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techNames.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 text-center text-xs py-2 rounded-lg border border-white/10 text-muted hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {p.codeBtn}
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 text-center text-xs py-2 rounded-lg bg-accent hover:bg-accent-dark text-white transition-all duration-300"
                  >
                    {p.siteBtn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
