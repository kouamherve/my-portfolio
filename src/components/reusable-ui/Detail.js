import { FaWindowClose } from "react-icons/fa";

export default function Detail({
  title,
  onClose,
  type,
  projetDetails,
  projetImage,
}) {
  return (
    <div
      className={`fixed z-50 inset-0 h-full bg-white mx-3 overflow-auto border border-gray-300`}
    >
      <div>
        <div className=" bg-gray-300 uppercase text-center p-4 mb-6">
          <h1 className=" text-xl font-normal text-gray-600">{title}</h1>
          <h3 className=" text-xs italic font-light mt-2 text-gray-500">
            {type}
          </h3>
          <FaWindowClose
            onClick={onClose}
            className=" absolute top-0 right-0 mx-3 mt-1 text-3xl text-gray-600 cursor-pointer"
          />
        </div>
        <div className=" flex flex-col gap-8 h-[100%] mx-3">
          <img
            className="object-cover object-center rounded-md"
            src={projetImage}
            alt={title}
          />
          <p className=" text-center text-sm leading-6 text-gray-500 font-light">
            {projetDetails}
          </p>
          <button className=" text-sm bg-transparent border border-black py-2">
            visit site
          </button>
        </div>
        <div className="bg-gray-300 w-full h-20 flex items-center justify-end p-4 mt-14 overflow-x-hidden">
          <button
            onClick={onClose}
            className=" px-5 py-2 bg-transparent border border-black text-xs"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
