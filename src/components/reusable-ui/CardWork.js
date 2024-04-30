import { HashLink as Link } from "react-router-hash-link";
import { RiZoomInFill } from "react-icons/ri";
import { useState } from "react";

export default function CardWork() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="mb-5"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link>
        <div className=" relative w-full h-56 rounded">
          <div>
            <img
              className=" w-full h-full object-cover object-center"
              src="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
              alt="Project1"
            />
          </div>
          <div
            className={`h-[15%] w-full bg-violet-600 text-white ${
              isHover ? "flex" : "hidden"
            } items-center justify-center uppercase py-3 font-medium`}
          >
            <span className=" text-sm">Coursesource</span>
          </div>
          <div
            className={`absolute inset-0 h-[85%] ${
              isHover ? "flex" : "hidden"
            } items-center justify-center bg-black/85 bg-blend-darken`}
          >
            <RiZoomInFill className=" text-white text-2xl " />
          </div>
        </div>
      </Link>
    </div>
  );
}
