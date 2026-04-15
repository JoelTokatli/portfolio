import React from "react";
import { useLang } from "../context/LanguageContext";
import mePhoto from "../assets/me-close-wall.jpeg";

const Home = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden ring-2 ring-accent/30 ring-offset-4 ring-offset-dark-900">
            <img
              src={mePhoto}
              alt="Joel Briceño Tokatli"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>
        </div>

        <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4">
          {h.role}
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Joel Briceño
          <span className="block text-accent-light">Tokatli</span>
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {h.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            {h.cta1}
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            {h.cta2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
