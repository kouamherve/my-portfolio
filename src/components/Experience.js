import { Link } from "react-router-dom";
import CardTech from "./reusable-ui/CardTech";
import Resume from "./Resume";

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="font-Poppins text-center">
        <div className="p-8">
          <h1 className="uppercase tracking-wider text-2xl md:text-3xl text-black mt-16 pb-2">
            Experience
          </h1>
          <p className="text-gray-600 text-center text-base leading-7 mb-4 p-6 md:px-10 md:py-6">
            I've been doing web development for about 3 years now, and I'm
            always eager to learn more in this fast paced industry.
          </p>
          <hr className=" border-2 border-gray-300 max-w-[100px] mx-auto md:max-w-[300px] md:mb-2" />
        </div>
        <div className=" md:grid md:grid-cols-2 md:px-10 mt-4 md:gap-6">
          <div>
            <h2 className=" text-md uppercase mt-0 mb-6 md:text-xl">
              Some technologies I've worked with:
            </h2>
            <div className=" text-gray-500 text-5xl grid grid-cols-3 gap-8 mb-6 mx-2 px-5 md:gap-4 md:text-sm md:grid-cols-5">
              <CardTech iconName="html" title="HTML" />
              <CardTech iconName="css" title="CSS" />
              <CardTech iconName="tailwindcss" title="TAILWINDCSS" />
              <CardTech iconName="figma" title="FIGMA" />
              <CardTech iconName="firebase" title="FIREBASE" />
              <CardTech iconName="java" title="JAVA" />
              <CardTech iconName="react-native" title="REACT" />
              <CardTech iconName="trello" title="TRELLO" />
              <CardTech iconName="git" title="GIT" />
              <CardTech iconName="github" title="GITHUB" />
              <CardTech iconName="bootstrap" title="BOOTSTRAP" />
            </div>{" "}
          </div>
          <div className="pt-8 pb-2 flex flex-col items-center md:pt-0">
            <h2 className=" text-md uppercase tracking-wider md:text-xl">
              Where I've worked:
            </h2>
            <Link to="https://www3.startupacademy237.com/">
              <img
                className=" size-44 md:size-52"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUO_z6ZbLsktlQh46D_Ba0CQLmy0nBWVl3p_Orn-eb3H5U8DiRfm5mya_2AjNJ7edYzNQ&usqp=CAU"
                alt="Startup Academy"
              />
            </Link>
          </div>
        </div>
        <Resume />
      </div>
    </section>
  );
}
