import { FaKeyboard } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

export default function About() {
  return (
    <section className=" max-w-md mx-auto font-Poppins" id="about">
      <div className=" flex flex-col items-center gap-8">
        <h1 className=" uppercase text-2xl font-normal mb-2 mt-16">
          A litle bit about me
        </h1>
        <img
          className=" size-52 rounded-full object-cover"
          src="photo.jpg"
          alt="Profile"
        />
        <div className=" text-gray-600 text-center font-light leading-7 space-y-6 py-6 px-4">
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
        <div className=" bg-gray-100 mx-4 p-4 text-gray-500 rounded">
          <h2 className=" uppercase text-center font-normal text-base">
            tl;dr? self proclamations:
          </h2>
          <div className="flex items-center justify-between mt-10 mx-4">
            <div className="flex flex-col gap-1 items-center">
              <FaKeyboard className=" text-3xl " />
              <h4 className=" text-sm ">web developer</h4>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <MdLibraryMusic className=" text-3xl " />
              <h4 className=" text-sm ">music producer</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
