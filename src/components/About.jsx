import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="lg:h-screen h-full  transition-all text-white pt-24"
    >
      <h2 className="lg:text-4xl sm:3xl text-2xl text-center">About Me</h2>
      <div className="flex flex-col gap-3 text-base px-8 lg:flex-row">
        <article className="flex flex-col lg:flex-row p-5 justify-center w-full items-center lg:justify-evenly">
          <span className=" rounded-full shadow-lg bg-opacity-20 bg-white rotate-45">
            <img
              src="../src/assets/me-bikes.jpeg"
              alt="me"
              className="w-40 sm:w-60 rounded-full shadow-lg -rotate-45 init"
            />
          </span>
          <div className="flex flex-col gap-3  text-sm sm:text-base tracking-wider items-center lg:w-4/6">
            <div className="w-full sm:w-4/6 pt-6 lg:pt-0">
              <h3 className="text-center text-xl font-bold">¿Who am I?</h3>
              <p className=" text-center pt-4 text-sm sm:text-base">
                My name is Joel Briceño Tokatli, i'm 25 years old and been
                learning programming since late 2021. I'm a really passionate
                and constant person about the goals i set to myself, that makes
                me always get to complete them, no matter how hard is the task,
                or how much time it will take me.
              </p>
            </div>
            <div className="w-full sm:w-4/6">
              <h3 className="text-center text-lg font-bold">
                ¿Wich is my next goal?
              </h3>
              <p className="text-center pt-4 text-sm sm:text-base">
                Im looking to get my first job as a web developer working with
                javascript while keep working on my skills as a programmer and
                mostly growing as a person, i think is one of the most important
                things in life.
              </p>
            </div>
            <div className="w-full sm:w-4/6">
              <h3 className="text-center text-lg font-bold">
                What i love to do:{" "}
              </h3>
              <p className="text-center pt-4 text-sm sm:text-base">
                Besides programming, video games has always been a really
                important aspect on my life, as well as sports, i love playing
                soccer since im a small kid.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
