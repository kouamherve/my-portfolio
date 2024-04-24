import { IoLogoCss3, IoLogoFigma } from "react-icons/io5";
import {
  TbBrandJavascript,
  TbBrandVscode,
  TbBrandVercel,
} from "react-icons/tb";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import {
  FaJava,
  FaReact,
  FaGitlab,
  FaGithub,
  FaBootstrap,
  FaHtml5,
  FaTrello,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <section id="experience" className="mt-4">
      <div className="font-Poppins text-center">
        <div className="p-8">
          <h1 className="text-4xl uppercase font-normal mt-5 mb-8">
            Experience
          </h1>
          <p className="text-gray-600 text-center text-md font-normal leading-7 mb-5 p-6">
            I've been doing web development for about 3 years now, and I'm
            always eager to learn more in this fast paced industry.
          </p>
          <hr />
        </div>
        <div>
          <h2 className=" text-lg uppercase mt-24 mb-20 font-medium tracking-wider">
            Some technologies I've worked with:
          </h2>
          <div className=" text-gray-500 text-7xl flex flex-wrap gap-16 items-center justify-center mb-40">
            <div>
              <h4 className="text-[9px]">HTML</h4>
              <FaHtml5 className="hover:text-orange-400" />
            </div>
            <div>
              <h4 className="text-[9px]">CSS</h4>
              <IoLogoCss3 className=" hover:text-sky-400" />
            </div>
            <div>
              <h4 className="text-[9px]">JS</h4>
              <TbBrandJavascript />
            </div>
            <div>
              <h4 className="text-[9px]">JAVA</h4>
              <FaJava />
            </div>
            <div>
              <h4 className="text-[9px]">BOOTSTRAP</h4>
              <FaBootstrap />
            </div>
            <div>
              <h4 className="text-[9px]">GIT</h4>
              <FaGitAlt />
            </div>
            <div>
              <h4 className="text-[9px]">TRELLO</h4>
              <FaTrello />
            </div>
            <div>
              <h4 className="text-[9px]">REACT</h4>
              <FaReact />
            </div>
            <div>
              <h4 className="text-[9px]">FIGMA</h4>
              <IoLogoFigma />
            </div>
            <div>
              <h4 className="text-[9px]">TAILWIND</h4>
              <SiTailwindcss />
            </div>
            <div>
              <h4 className="text-[9px]">GITHUB</h4>
              <FaGithub />
            </div>
            <div>
              <h4 className="text-[9px]">GITLAB</h4>
              <FaGitlab />
            </div>
            <div>
              <h4 className="text-[9px]">FIREBASE</h4>
              <SiFirebase />
            </div>
            <div>
              <h4 className="text-[9px]">VS CODE</h4>
              <TbBrandVscode />
            </div>
            <div>
              <h4 className="text-[9px]">VERCEL</h4>
              <TbBrandVercel />
            </div>
          </div>{" "}
          <div className="mb-10 flex flex-col items-center">
            <h2 className=" text-base uppercase font-medium tracking-wider">
              Where I've worked:
            </h2>
            <Link to="https://www3.startupacademy237.com/">
              <img
                className=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUO_z6ZbLsktlQh46D_Ba0CQLmy0nBWVl3p_Orn-eb3H5U8DiRfm5mya_2AjNJ7edYzNQ&usqp=CAU"
                alt="Startup Academy"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center mb-20 bg-[url('https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg')] bg-cover bg-center bg-black/75 bg-blend-darken h-72 bg-fixed">
          <div className=" text-white  ">
            <h1 className=" text-3xl uppercase font-light tracking-wider">
              Check out my résumé!
            </h1>
            <button className=" bg-transparent hover:bg-gray-600/50 border border-white px-5 hover:px-7 py-3 mt-10 capitalize text-md font-light rounded shadow ">
              Grab a copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
