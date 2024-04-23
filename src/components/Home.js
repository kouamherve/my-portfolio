import { FaAngleDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-[760px] w-full flex items-center justify-center"
    >
      <img
        className="h-full w-full object-cover brightness-50"
        src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg"
        alt="About"
      />
      <div className=" absolute size-fit font-Poppins flex flex-col items-center gap-3 m-2 -translate-y-14">
        <h1 className=" uppercase font-light text-white text-6xl">
          Hi, I'm{" "}
          <span className=" text-black font-medium">
            <span className=" bg-white mx-1 px-2 py-0 rounded-md shadow ">
              h
            </span>
            <span className=" bg-white mx-1 px-2 py-0 rounded-md shadow text-indigo-600 ">
              e
            </span>
            <span className=" bg-white mx-1 px-2 py-0 rounded-md shadow ">
              r
            </span>
            <span className=" bg-white mx-1 px-2 py-0 rounded-md shadow ">
              v
            </span>
            <span className=" bg-white mx-1 px-2 py-0 rounded-md shadow text-indigo-600 ">
              e
            </span>
          </span>{" "}
        </h1>
        <h2 className=" text-gray-300 text-md mt-6 capitalize">
          front-end Web developer
        </h2>
        <div className="size-12 ">
          <Link to="#about" smooth>
            <FaAngleDown className="size-full text-black rounded-full mt-44 cursor-pointer bg-gray-300 hover:bg-gray-400 active:bg-gray-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
