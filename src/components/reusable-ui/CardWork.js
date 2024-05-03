import { RiZoomInFill } from "react-icons/ri";
import { useState } from "react";

export default function CardWork() {
  const [isHover, setIsHover] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const openDetail = (event) => {
    event.stopPropagation();
    setShowDetail(true);
  };
  const closeDetail = (event) => {
    event.stopPropagation();
    setShowDetail(false);
    setIsHover(false);
    console.log(showDetail);
  };

  return (
    <div
      onClick={openDetail}
      className="mb-5"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className=" relative flex w-full h-56 rounded border border-black">
        <div className=" size-full">
          <img
            className=" w-full h-full object-cover object-center"
            src="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
            alt="Project1"
          />
        </div>
        <div
          className={` absolute bottom-0 h-1/4 w-full bg-violet-600 text-white ${
            isHover ? "flex" : "hidden"
          } items-center justify-center uppercase font-medium`}
        >
          <span className=" text-sm">Coursesource</span>
        </div>
        <div
          className={`absolute inset-0 h-3/4 ${
            isHover ? "flex" : "hidden"
          } items-center justify-center bg-black/85 bg-blend-darken`}
        >
          <RiZoomInFill className=" text-white text-2xl " />
        </div>
      </div>

      {showDetail && (
        <div
          className={`fixed z-50 inset-0 bg-white h-screen mx-4 overflow-auto`}
        >
          <div className=" bg-gray-300 uppercase text-center p-4">
            <h1 className=" text-2xl font-normal text-gray-600">
              CourseSource
            </h1>
            <h3 className=" text-xs italic font-light mt-2 text-gray-500">
              Web App
            </h3>
          </div>
          <div className=" flex flex-col items-center justify-center gap-4 h-lvh">
            <img
              className=" h-44 mt-8 object-cover object-center"
              src="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
              alt=""
            />
            <p className=" p-5 text-center text-md text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              libero tempora consequuntur accusamus aspernatur. Cumque dolorem
              laborum nisi, id necessitatibus similique, alias corrupti non iste
              doloremque commodi officiis quibusdam numquam.
            </p>
            <button className=" bg-transparent border border-black px-6 py-2.5">
              visit site
            </button>
          </div>
          <div className="bg-gray-300 w-full h-20 flex items-center justify-end p-4 overflow-x-hidden">
            <button
              onClick={closeDetail}
              className=" px-5 py-2 bg-transparent border border-black text-xs"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
