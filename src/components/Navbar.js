import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Icon from "./reusable-ui/Icon";

export default function Navbar({ isOpen, onClic, navBg, isHeader }) {
  return (
    <nav
      className={`${
        navBg && isHeader ? "bg-black py-3" : "bg-transparent py-5"
      }  px-4  text-white flex items-center justify-between overflow-x-hidden md:px-8`}
    >
      <Link
        to="#homepage"
        smooth
        className=" flex items-center justify-center gap-3 w-fit uppercase tracking-wider hover:text-violet-400"
      >
        <img
          className="size-8 bg-violet-600 rounded-full p-1"
          src="logo.png"
          alt="logo"
        />
        <span>herve kouam</span>
      </Link>
      {isOpen ? (
        <Icon IconName={MdClose} onClic={onClic} />
      ) : (
        <Icon IconName={GiHamburgerMenu} onClic={onClic} />
      )}
      <ul className="hidden  text-white text-sm font-Poppins uppercase items-center justify-center gap-6 md:flex ">
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
    </nav>
  );
}
