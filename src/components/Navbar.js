import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Icon from "./reusable-ui/Icon";

export default function Navbar({ isShow, onShowMenu }) {
  return (
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
  );
}
