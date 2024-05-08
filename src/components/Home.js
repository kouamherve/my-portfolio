import { FaAngleDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export default function Home() {
  return (
    <section
      id="homepage"
      className="relative h-screen w-full overflow-x-hidden flex items-center justify-center bg-home-page bg-cover bg-center bg-black/65 bg-blend-darken bg-fixed "
    >
      <div className=" absolute size-fit font-Poppins flex flex-col items-center gap-3">
        <h1 className="uppercase text-white text-4xl tracking-wider text-nowrap mx-2 md:text-6xl md:mx-0">
          Hi, I'm{" "}
          <span className="text-black md:space-x-2">
            <span className=" bg-white mx-0.5 px-1 py-0 ">h</span>
            <span className=" bg-white mx-0.5 px-2 py-0 text-violet-600 ">
              e
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 ">r</span>
            <span className=" bg-white mx-0.5 px-2 py-0 ">v</span>
            <span className=" bg-white mx-0.5 px-2 py-0 text-violet-600 ">
              e
            </span>
          </span>{" "}
          <span className="text-black hidden ">
            <span className=" bg-white mx-0.5 px-1 py-0 ">k</span>
            <span className=" bg-white mx-0.5 px-2 py-0 text-violet-600 ">
              o
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 ">u</span>
            <span className=" bg-white mx-0.5 px-2 py-0 ">a</span>
            <span className=" bg-white mx-0.5 px-2 py-0 text-violet-600 ">
              m
            </span>
          </span>{" "}
        </h1>
        <h2 className="text-gray-200 text-md mt-5 capitalize">
          front-end Web developer
        </h2>
        <div className=" translate-y-10 md:translate-y-32 md:mt-20">
          <Link to="#about" smooth>
            <FaAngleDown className=" text-5xl text-black/75 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-400 active:bg-gray-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
