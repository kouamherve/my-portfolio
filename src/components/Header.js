import { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";
import Navbar from "./Navbar";

export default function Header() {
  const [isShow, setIsShow] = useState(false);

  const onShowMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <div className=" w-full fixed z-50">
      <Navbar isShow={isShow} onShowMenu={onShowMenu} />
      <div className={`bg-black ${isShow ? "" : "hidden"}`}>
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
