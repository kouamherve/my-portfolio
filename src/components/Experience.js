import { Link } from "react-router-dom";
import CardTech from "./reusable-ui/CardTech";
import Resume from "./Resume";

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="font-Poppins text-center">
        <div className="p-8">
          <h1 className="text-2xl uppercase font-normal mt-8 mb-4">
            Experience
          </h1>
          <p className="text-gray-600 text-center text-md font-normal leading-7 mb-2 p-6">
            I've been doing web development for about 3 years now, and I'm
            always eager to learn more in this fast paced industry.
          </p>
          <hr />
        </div>
        <div>
          <h2 className=" text-lg uppercase mt-5 mb-10 font-medium">
            Some technologies I've worked with:
          </h2>
          <div className=" text-gray-500 text-7xl flex flex-wrap gap-12 items-center justify-center mb-24 mx-2">
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

        <Resume />
      </div>
    </section>
  );
}
