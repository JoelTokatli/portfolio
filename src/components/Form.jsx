import React from "react";
import { useLang } from "../context/LanguageContext";

const Form = () => {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {c.subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {c.title}
        </h2>
        <p className="text-muted text-center text-sm mb-12">{c.desc}</p>

        <form
          action="https://formsubmit.co/770afde25392c7b06684c5e1dead952e"
          method="POST"
          className="space-y-5"
        >
          <div>
            <label className="text-sm text-muted block mb-2">{c.name}</label>
            <input
              type="text"
              name="name"
              placeholder={c.namePh}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white text-sm placeholder-white/20 outline-none focus:border-accent/50 transition-colors duration-300"
            />
          </div>
          <div>
            <label className="text-sm text-muted block mb-2">{c.email}</label>
            <input
              type="email"
              name="email"
              placeholder={c.emailPh}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white text-sm placeholder-white/20 outline-none focus:border-accent/50 transition-colors duration-300"
            />
          </div>
          <div>
            <label className="text-sm text-muted block mb-2">{c.message}</label>
            <textarea
              placeholder={c.messagePh}
              name="comment"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white text-sm placeholder-white/20 outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            {c.submit}
          </button>
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>

      <footer className="max-w-xl mx-auto mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-muted">
          Joel Briceño Tokatli · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
};

export default Form;
