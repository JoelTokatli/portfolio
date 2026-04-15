import React from "react";
import { useLang } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {s.subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {s.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.categories.map((category, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-dark-800 border border-white/5 hover:border-accent/20 transition-all duration-300 group"
            >
              <h3 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1.5 rounded-lg bg-dark-700 text-muted group-hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
