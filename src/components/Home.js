import { FaAngleDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-home-page bg-cover bg-center bg-black/50 bg-blend-darken bg-fixed overflow-x-hidden"
    >
      <div className=" absolute size-fit font-Poppins flex flex-col items-center gap-3 m-2 -translate-y-14">
        <h1 className="uppercase font-light text-white text-[40px] leading-4 text-nowrap mx-2">
          Hi, I'm{" "}
          <span className="text-black font-medium ">
            <span className=" bg-white mx-0.5 px-1 py-0 rounded-md shadow ">
              h
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow text-violet-600 ">
              e
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow ">
              r
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow ">
              v
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow text-violet-600 ">
              e
            </span>
          </span>{" "}
          <span className="text-black font-medium hidden ">
            <span className=" bg-white mx-0.5 px-1 py-0 rounded-md shadow ">
              k
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow text-violet-600 ">
              o
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow ">
              u
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow ">
              a
            </span>
            <span className=" bg-white mx-0.5 px-2 py-0 rounded-md shadow text-violet-600 ">
              m
            </span>
          </span>{" "}
        </h1>
        <h2 className="text-gray-200 text-md mt-8 capitalize">
          front-end Web developer
        </h2>
        <div className="size-14">
          <Link to="#about" smooth>
            <FaAngleDown className="size-full text-black rounded-full mt-40 cursor-pointer bg-gray-300 hover:bg-gray-400 active:bg-gray-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
