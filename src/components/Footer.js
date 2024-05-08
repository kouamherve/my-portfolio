import { FaRegCopyright } from "react-icons/fa";

import { BsRocket } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <section className=" w-full px-4 py-8 bg-black/85 text-gray-300 flex flex-col items-center justify-center overflow-x-hidden md:h-fit md:pb-2 ">
      <div className=" flex gap-1">
        <img
          className="size-12 grayscale hover:grayscale-0 md:size-14"
          src="/assets/icons/icons8-facebook-144.png"
          alt="facebook"
        />
        <img
          className="size-12 grayscale hover:grayscale-0 md:size-14"
          src="/assets/icons/icons8-insta-144.png"
          alt="facebook"
        />
        <img
          className="size-12 grayscale hover:grayscale-0 md:size-14"
          src="/assets/icons/icons8-github-144.png"
          alt="facebook"
        />
        <img
          className="size-12 grayscale hover:grayscale-0 md:size-14"
          src="/assets/icons/icons8-linkedin-circled-144.png"
          alt="facebook"
        />
        <img
          className="size-12 grayscale hover:grayscale-0 md:size-14"
          src="/assets/icons/icons8-twitter-circled-144.png"
          alt="facebook"
        />
      </div>
      <div className=" group/start flex flex-col items-center justify-center mt-8 mb-2">
        <Link to="#homepage" smooth>
          <BsRocket className=" text-4xl text-white cursor-pointer md:text-5xl" />
        </Link>
        <h4 className=" text-[8px] hidden group-hover/start:inline md:text-[10px] italic">
          Beam me up, Scooty!
        </h4>
      </div>
      <div className="text-stone-400 flex items-center justify-center gap-1.5 mt-2">
        <FaRegCopyright className=" text-xs md:text-sm" />
        <h2 className=" text-sm font-thin capitalize md:text-md">
          herve kouam 2023
        </h2>
      </div>
    </section>
  );
}
