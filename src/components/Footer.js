import { FaRegCopyright } from "react-icons/fa";

import { BsRocket } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <section className=" w-full h-fit py-3 bg-black/85 text-gray-300 flex flex-col items-center justify-center overflow-x-hidden">
      <div className=" flex gap-1">
        <img
          className="size-9 grayscale hover:grayscale-0"
          src="/assets/icons/icons8-facebook-144.png"
          alt="facebook"
        />
        <img
          className="size-9 grayscale hover:grayscale-0"
          src="/assets/icons/icons8-insta-144.png"
          alt="facebook"
        />
        <img
          className="size-9 grayscale hover:grayscale-0"
          src="/assets/icons/icons8-github-144.png"
          alt="facebook"
        />
        <img
          className="size-9 grayscale hover:grayscale-0"
          src="/assets/icons/icons8-linkedin-circled-144.png"
          alt="facebook"
        />
        <img
          className="size-9 grayscale hover:grayscale-0"
          src="/assets/icons/icons8-twitter-circled-144.png"
          alt="facebook"
        />
      </div>
      <div className=" group/start size-fit flex flex-col items-center justify-center">
        <Link to="#home" smooth>
          <BsRocket className=" text-4xl text-white mt-6 cursor-pointer" />
        </Link>
        <h4 className=" text-[8px] font-light mt-2 invisible group-hover/start:visible">
          Beam me up, Scooty!
        </h4>
      </div>
      <div className="flex items-center justify-center gap-1.5 text-white mt-2">
        <FaRegCopyright className=" text-gray-300 text-xs" />
        <h2 className=" text-sm font-thin capitalize">herve kouam 2023</h2>
      </div>
    </section>
  );
}
