import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:h-screen h-full flex flex-col justify-center items-center text-white pt-32 pb-40 text-xs"
    >
      <h2 className="pb-10 lg:text-4xl sm:3xl text-2xl sm:pt-14">
        What I Use For Programming
      </h2>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-start lg:justify-evenly sm:gap-8 bg-cyan-700 px-6 w-80 sm:w-4/5 sm:min-w-[620px] lg:min-w-fit lg:max-w-3xl py-8">
        <div className="grid grid-cols-2 gap-5 text-gray-600">
          <h3 className="col-span-2 text-center text-white text-lg ">
            Programming Core
          </h3>
          <article className="hover:translate-y-1 flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 cursor-pointer w-24 sm:w-20 lg:w-28 text-base  transition-all">
            <img
              src="../src/assets/icons/html-5.svg"
              alt=""
              className="sm:w-20"
            />
            <p className="">Html</p>
          </article>
          <article className="hover:translate-y-1 lg:w-28 transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 cursor-pointer  sm:w-20 text-base">
            <img
              src="../src/assets/icons/css3.svg"
              alt=""
              className="sm:w-20"
            />
            <p className="">Css</p>
          </article>
          <article className="hover:translate-y-1  transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 cursor-pointer  text-base  col-span-2">
            <img
              src="../src/assets/icons/javascript.svg"
              alt=""
              className="sm:w-20"
            />
            <p className="">Javascript</p>
          </article>
        </div>
        <div className="grid grid-cols-2 gap-5 text-gray-600 ">
          <h3 className="col-span-2 text-center text-white text-lg  pt-4 sm:pt-0">
            Frameworks/Libraries
          </h3>
          <article className="hover:translate-y-1 lg:w-28 transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 cursor-pointer sm:w-20 text-base w-24 ">
            <img
              src="../src/assets/icons/react-native.svg"
              alt=""
              className="sm:w-20"
            />
            <p className="">React</p>
          </article>
          <article className="hover:translate-y-1 lg:w-28 transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 cursor-pointer sm:w-20 text-base ">
            <img
              src="../src/assets/icons/tailwind-css.svg"
              alt=""
              className="sm:w-20"
            />
            <p className="">Tailwind</p>
          </article>
          <article className="hover:translate-y-1 transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 cursor-pointer text-base col-span-2 ">
            <img
              src="../src/assets/icons/leaf.png"
              alt=""
              className="sm:w-20"
            />
            <p className="">LeafletJs</p>
          </article>
        </div>
        <div className="grid grid-cols-2 gap-5 text-gray-600">
          <h3 className="col-span-2 text-center text-white text-lg  pt-4 sm:pt-0">
            Usefull Technologies
          </h3>
          <article className="lg:w-28 transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 hover:translate-y-1 cursor-pointer sm:w-20 text-base w-24">
            <img src="../src/assets/icons/git.svg" alt="" className="sm:w-20" />
            <p className="">Git</p>
          </article>
          <article className="lg:w-28 transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 hover:translate-y-1  cursor-pointer sm:w-20 text-base">
            <img
              src="../src/assets/icons/github.svg"
              alt=""
              className="sm:w-20"
            />
            <p className="">Github</p>
          </article>
          <article className=" transition-all flex flex-col items-center bg-white p-1  rounded shadow-md hover:bg-gray-200 hover:translate-y-1 cursor-pointer text-base col-span-2">
            <img src="../src/assets/icons/npm.svg" alt="" className="sm:w-20" />
            <p className="">Npm</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
