import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Header() {
  const [isShow, setIsShow] = useState(false);

  const onShowMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <div className=" w-full fixed z-30">
      <nav className=" bg-black text-white flex items-center justify-between p-3 ">
        <Link className=" flex items-center justify-center gap-3 w-fit uppercase font-bold tracking-wider hover:text-indigo-400">
          <img
            className="size-8 bg-indigo-600 rounded-full p-1"
            src="logo.png"
            alt="logo"
          />
          <span>herve kouam</span>
        </Link>
        <GiHamburgerMenu
          className=" text-3xl mr-3 cursor-pointer"
          onClick={onShowMenu}
        />
      </nav>
      <div className={`bg-black ${isShow ? "" : "hidden"}`}>
        <ul className="text-white uppercase text-sm font-Poppins font-medium py-5 flex flex-col items-center justify-center gap-8">
          <li className=" hover:text-indigo-400">
            <Link>about</Link>
          </li>
          <li className=" hover:text-indigo-400">
            <Link>passion</Link>
          </li>
          <li className=" hover:text-indigo-400">
            <Link>experience</Link>
          </li>
          <li className=" hover:text-indigo-400">
            <Link>work</Link>
          </li>
          <li className=" hover:text-indigo-400">
            <Link>contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
