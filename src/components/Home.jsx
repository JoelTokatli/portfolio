import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <section className="" id="home">
        <main className="lg:h-screen h-full pt-32 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly  sm:gap-0  text-white">
          <div className="flex flex-col gap-1 p-4 text-center pt-4 ">
            <h2 className="sm:text-6xl text-3xl">Welcome to my Portfolio!</h2>
            <h3 className="text-xl sm:text-3xl">
              I'm Joel, a Javascript{" "}
              <b className="text-yellow-300">front-end developer </b>
              and web designer
            </h3>
            <p className="text-gray-300">
              Life is a challange, and there is no better way to face
              challanges, than coding.
            </p>
            <div className="flex justify-center gap-12 pt-4">
              <a href="#contact">
                <input
                  type="button"
                  value="Contact Me"
                  className="p-2 border-2 border-white rounded-md text-lg hover:bg-yellow-300 hover:text-black transition-all duration-500 font-bold cursor-pointer"
                />
              </a>
            </div>
          </div>
          <span className=" rounded-lg shadow-lg border-4 border-white border-opacity-20 bg-opacity-20 translate-x-4">
            <img
              src="../src/assets/me-close-wall.jpeg "
              alt="me"
              className="w-40 sm:w-60 rounded-lg shadow-lg -translate-x-4 -translate-y-4 lg:pr-4 "
            />
          </span>
        </main>
      </section>
    </>
  );
};

export default Home;
