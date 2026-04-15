import React from "react";
import { useLang } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {e.subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {e.title}
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-0 md:right-0 md:mx-auto top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {e.jobs.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-dark-900 z-10 mt-6" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`} />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="p-6 rounded-xl bg-dark-800 border border-white/5 hover:border-accent/20 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-xs text-muted mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-accent-light text-sm mb-4">{exp.role}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted">
                          <span className="text-accent mr-2 mt-0.5 text-xs">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-6 rounded-xl bg-dark-800 border border-white/5 text-center">
          <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-2">
            {e.eduSubtitle}
          </p>
          <h3 className="text-lg font-semibold mb-2">{e.eduTitle}</h3>
          <p className="text-muted text-sm">{e.eduDesc}</p>
          <p className="text-xs text-muted mt-2">{e.eduDate}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
