import React from "react";

const Form = () => {
  return (
    <section
      id="contact"
      className="lg:h-screen h-full grid items-center justify-center text-white  pt-32 pb-40 text-xs w-full bg-slate-900"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl pb-10 sm:text-4xl">Contact Me</h2>
        <form
          action="https://formsubmit.co/770afde25392c7b06684c5e1dead952e"
          method="POST"
          className="flex flex-col w-80 p-3 gap-y-2 sm:min-w-[560px] bg-cyan-700 rounded"
        >
          <p className="sm:text-base">Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Jhon Doe"
            required
            className="p-1 outline-none text-gray-700 rounded sm:p-2"
          />
          <p className="sm:text-base">Email:</p>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
            className="p-1 outline-none text-gray-700 rounded sm:p-2"
          />
          <p className="sm:text-base">Message:</p>
          <textarea
            placeholder="Type your message here..."
            name="comment"
            cols="20"
            rows="3"
            className="resize-none p-1 outline-none text-gray-700 rounded sm:p-2"
          ></textarea>
          <input
            type="submit"
            value="Submit message"
            className="bg-cyan-500 w-min my-0 mx-auto p-2 sm:text-base rounded cursor-pointer hover:bg-cyan-600 transition-all active:translate-y-1"
          />
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
      <footer>
        <p className="pt-8">
          Icons used are from:{" "}
          <a href="https://icons8.com/" target={"_blank"} className="font-bold">
            www.icons8.com
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Form;
