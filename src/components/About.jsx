import React from "react";
import { useLang } from "../context/LanguageContext";
import meBikes from "../assets/me-bikes.jpeg";

const About = () => {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {a.subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {a.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden">
                <img
                  src={meBikes}
                  alt="Joel Briceño Tokatli"
                  className="w-full h-full object-cover object-[center_20%] scale-105"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border border-accent/20 -z-10" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-muted leading-relaxed">{a.p1}</p>
            <p className="text-muted leading-relaxed">{a.p2}</p>
            <div className="flex gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-white">{a.lang1}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-white">{a.lang2}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {a.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-dark-800 border border-white/5 hover:border-accent/20 transition-colors duration-300"
            >
              <p className="text-3xl sm:text-4xl font-bold text-accent-light mb-2">
                {stat.value}
              </p>
              <p className="text-muted text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
