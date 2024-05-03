import { RiZoomInFill } from "react-icons/ri";
import { useState } from "react";
import Detail from "./Detail";

export default function CardWork({ title, imageProjet }) {
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
            src={imageProjet}
            alt="Project1"
          />
        </div>
        <div
          className={` absolute bottom-0 h-1/4 w-full bg-violet-600 text-white ${
            isHover ? "flex" : "hidden"
          } items-center justify-center uppercase font-medium`}
        >
          <span className=" text-sm">{title}</span>
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
        <Detail
          title={title}
          onClose={closeDetail}
          type="web app"
          projetDetails="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil libero
        tempora consequuntur accusamus aspernatur. Cumque dolorem laborum
        nisi, id necessitatibus similique, alias corrupti non iste doloremque
        commodi officiis quibusdam numquam."
        />
      )}
    </div>
  );
}
