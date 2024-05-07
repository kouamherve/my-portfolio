import { FaKeyboard } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

export default function About() {
  return (
    <section className=" w-full mx-auto font-Poppins" id="about">
      <div className=" flex flex-col items-center gap-8 pt-24">
        <h1 className=" uppercase tracking-wider text-2xl md:text-3xl text-gray-600 ">
          A litle bit about me
        </h1>
        <img
          className=" size-44 rounded-full object-cover"
          src="photo.jpg"
          alt="Profile"
        />
        <div className=" text-gray-500 text-center text-md leading-8 space-y-6 my-3 px-8">
          <p>
            Hey! my name is Herve Kouam and I'm a web developer with a passion
            for{" "}
            <span className=" text-violet-600 font-medium capitalize">
              front end development.{" "}
            </span>
            I'm currently a third year student at{" "}
            <span className=" text-violet-600 font-medium capitalize">
              Northeastern University{" "}
            </span>
            pursuing a degree in{" "}
            <span className=" text-violet-600 font-medium capitalize">
              information science{" "}
            </span>
            with a minor in interaction design. I aspire toward a career that
            will allow me to channel my creativity through crafting beautiful
            software and engaging experiences.
          </p>
          <p>
            When I'm not on the computer, I enjoy music production, running and
            petting dogs.
          </p>
        </div>
        <div className="flex items-center justify-center w-full px-8 md:px-40">
          <div className=" bg-gray-100 mx-4 py-6 text-gray-500 rounded w-full">
            <h2 className=" uppercase text-center font-light text-base md:text-xl">
              tl;dr? self proclamations:
            </h2>
            <div className="flex items-center justify-between mt-10 mx-4">
              <div className="flex flex-col gap-1 items-center">
                <FaKeyboard className=" text-3xl md:text-4xl " />
                <h4 className=" text-sm md:text-md ">web developer</h4>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <MdLibraryMusic className=" text-3xl md:text-4xl " />
                <h4 className=" text-sm md:text-md ">music producer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
