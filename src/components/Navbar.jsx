import React, { useState } from "react";

const Navbar = () => {
  return (
    <section className="">
      <header
        className={`sm:bg-opacity-20 bg-black w-full bg-opacity-10 min-h-12  sm:p-5 text-white z-10 fixed py-5 `}
      >
        <nav className="flex flex-col sm:flex-row sm:justify-around items-center text-center sm:pt-0 w-full">
          <h3 className="text-4xl hidden sm:block font-fast tracking-widest">
            {" "}
            Joel Tokatli
          </h3>
          <ul className="flex gap-2 sm:gap-4 text-base items-center sm:text-xl sm:p-0 overflow-hidden">
            <li className="hover:scale-110 hover:text-yellow-300 border-black transition-all duration-300 active:text-yellow-500">
              <a href="#home">Home</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300 hover:text-yellow-300 active:text-yellow-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300 hover:text-yellow-300 active:text-yellow-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300 hover:text-yellow-300 active:text-yellow-500">
              <a href="#skills">Skills</a>
            </li>
            <li className=" hover:scale-110 transition-all duration-300 hover:text-yellow-300 active:text-yellow-500">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300 hover:text-yellow-300 active:text-yellow-500">
              <a href="">
                <img
                  src="../src/assets/icons/linkedin.svg"
                  alt="linkdn-logo"
                  className="w-6 h-6 sm:w-12 sm:h-12"
                />
              </a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
