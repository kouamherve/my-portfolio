import {
  FaFacebookF,
  FaInstagram,
  FaGithubSquare,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import { FaXTwitter, FaCodepen, FaSpotify } from "react-icons/fa6";
import { BsRocket } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <section className=" w-full h-fit py-10 bg-black/85 text-gray-300 flex flex-col items-center justify-center">
      <div className=" flex gap-1">
        <div className=" bg-black size-12 flex items-center justify-center">
          <FaFacebookF className=" text-2xl" />
        </div>
        <div className=" bg-black size-12 flex items-center justify-center">
          <FaXTwitter className=" text-2xl" />
        </div>
        <div className=" bg-black size-12 flex items-center justify-center">
          <FaInstagram className=" text-2xl" />
        </div>
        <div className=" bg-black size-12 flex items-center justify-center">
          <FaCodepen className=" text-2xl" />
        </div>
        <div className=" bg-black size-12 flex items-center justify-center">
          <FaGithubSquare className=" text-2xl" />
        </div>
        <div className=" bg-black size-12 flex items-center justify-center">
          <FaLinkedinIn className=" text-2xl" />
        </div>
        <div className=" bg-black size-12 flex items-center justify-center">
          <FaSpotify className=" text-2xl" />
        </div>
      </div>
      <div className=" group/start size-fit flex flex-col items-center justify-center">
        <Link to="#home" smooth>
          <BsRocket className=" text-4xl text-white mt-8 cursor-pointer" />
        </Link>
        <h4 className=" text-[8px] font-light mt-2 invisible group-hover/start:visible">
          Beam me up, Scooty!
        </h4>
      </div>
      <div className="flex items-center justify-center gap-1.5 text-white mt-0.5">
        <FaRegCopyright className=" text-gray-300 text-xs" />
        <h2 className=" text-sm font-thin capitalize">herve kouam 2023</h2>
      </div>
    </section>
  );
}
