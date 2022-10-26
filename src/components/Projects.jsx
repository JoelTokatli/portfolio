import React, { useState } from "react";
import data from "./project";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const { title, image, description, technologies, url, githubUrl, id } =
    data[index];
  const [opacity, setOpacity] = useState(false);
  const [next, setNext] = useState(false);
  const nextIndex = () => {
    if (index == data.length - 1) {
      setNext(true);
      setTimeout(() => {
        setIndex(0);
        setNext(false);
      }, 1000);
    } else {
      setNext(true);
      setTimeout(() => {
        setNext(false);
        setIndex(index + 1);
      }, 1000);
    }
  };

  const prevIndex = () => {
    if (index == 0) {
      setOpacity(true);
      setTimeout(() => {
        setOpacity(false);
        setIndex(data.length - 1);
      }, 1100);
    } else {
      setOpacity(true);
      setTimeout(() => {
        setOpacity(false);
        setIndex(index - 1);
      }, 1100);
    }
  };

  return (
    <section
      id="projects"
      className="lg:h-screen h-full flex flex-col lg:gap-10 justify-center items-center transition-all text-white  pt-16 pb-6 text-xs "
    >
      <h2 className="lg:text-4xl sm:3xl text-2xl pb-8 lg:p-0">My Projects</h2>
      <div className={`flex sm:flex-row justify-center items-center`}>
        <input
          type="button"
          value="<"
          title="Previous project"
          className="text-5xl hover:text-yellow-300 cursor-pointer pr-3 sm:pr-5 "
          onClick={prevIndex}
        />
        <div
          className={`flex flex-col-reverse  lg:flex-row w-60 sm:w-8/12 sm:max-w-[550px] lg:w-8/12 lg:max-w-[1200px] items-center justify-center text-center bg-cyan-700 p-5 shadow-md text-white gap-4 rounded-md `}
        >
          <div
            className={`${opacity ? "opacity-0" : ""} ${
              next ? "opacity-0" : ""
            }  flex flex-col gap-3 transition-all duration-1000 w-full`}
          >
            <h3 className="text-xl sm:text-3xl lg:underline-offset-4 lg:underline">
              {title}
            </h3>
            <p className="text-gray-200 text-base tracking-wide">
              {description}
            </p>
            <p className="text-gray-300 text-base">Built with:</p>
            <div className="flex flex-row justify-center  gap-3">
              {technologies.map((icon, index) => {
                return (
                  <img
                    key={index}
                    src={icon}
                    alt="icon"
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />
                );
              })}
            </div>
            <div className="flex justify-center gap-12 pt-4 w-full">
              <a href={githubUrl} target="_blank" rel="noreferrer noopener">
                <input
                  type="button"
                  value="Review Code"
                  className="p-2 border-2 border-white rounded-md sm:text-lg hover:bg-yellow-300 hover:text-black duration-500 font-bold cursor-pointer"
                />{" "}
              </a>
              <a href={url} target="_blank" rel="noreferrer noopener">
                <input
                  type="button"
                  value="View Site"
                  className="p-2 border-2
                border-white rounded-md sm:text-lg hover:bg-yellow-300
                hover:text-black duration-500 font-bold cursor-pointer"
                ></input>
              </a>
            </div>
          </div>
          <img
            src={image}
            className={` ${opacity ? "opacity-0" : ""} ${
              next ? "opacity-0" : ""
            } lg:w-3/6 sm:w-5/6 sm:h-80  duration-1000 w-full h-auto rounded-md `}
            alt="project-img"
          />
        </div>
        <input
          type="button"
          value=">"
          title="Next project"
          className={` pl-3 sm:pl-5 text-white cursor-pointer text-5xl hover:text-yellow-300`}
          onClick={nextIndex}
        />
      </div>
    </section>
  );
};

export default Projects;
