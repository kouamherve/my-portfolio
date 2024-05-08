import { useEffect, useState } from "react";

import { HashLink as Link } from "react-router-hash-link";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const idName = document.getElementById("header");

  const changeNavBg = () => {
    window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="header" className="header" onScroll={changeNavBg}>
      <Navbar
        isOpen={isOpen}
        onClic={handleClick}
        navBg={navBg}
        isHeader={idName}
      />
      <div className={`bg-black ${isOpen ? "bloc" : "hidden"}`}>
        <ul className="text-white uppercase text-sm font-Poppins font-medium py-5 flex flex-col items-center justify-center gap-8">
          <li className=" hover:text-violet-400">
            <Link to="#about" smooth>
              about
            </Link>
          </li>
          <li className=" hover:text-violet-400">
            <Link to="#passion" smooth>
              passion
            </Link>
          </li>
          <li className=" hover:text-violet-400">
            <Link to="#experience" smooth>
              experience
            </Link>
          </li>
          <li className=" hover:text-violet-400">
            <Link to="#work" smooth>
              work
            </Link>
          </li>
          <li className=" hover:text-violet-400">
            <Link to="#contact" smooth>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
