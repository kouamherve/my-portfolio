import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";
import Icon from "./reusable-ui/Icon";

export default function Header() {
  const [isShow, setIsShow] = useState(false);

  const onShowMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <div className=" w-full fixed z-30">
      <nav className=" bg-black text-white flex items-center justify-between p-3 overflow-x-hidden">
        <Link
          to="#home"
          smooth
          className=" flex items-center justify-center gap-3 w-fit uppercase font-medium tracking-wider hover:text-violet-400"
        >
          <img
            className="size-8 bg-violet-600 rounded-full p-1"
            src="logo.png"
            alt="logo"
          />
          <span>herve kouam</span>
        </Link>
        {isShow ? (
          <Icon IconName={MdClose} onShowMenu={onShowMenu} />
        ) : (
          <Icon IconName={GiHamburgerMenu} onShowMenu={onShowMenu} />
        )}
      </nav>
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
