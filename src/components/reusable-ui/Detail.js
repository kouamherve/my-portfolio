export default function Detail({ title, onClose, type, projetDetails }) {
  return (
    <div className={`fixed z-50 inset-0 bg-white h-screen mx-4 overflow-auto`}>
      <div className=" bg-gray-300 uppercase text-center p-4">
        <h1 className=" text-2xl font-normal text-gray-600">{title}</h1>
        <h3 className=" text-xs italic font-light mt-2 text-gray-500">
          {type}
        </h3>
      </div>
      <div className=" flex flex-col items-center justify-center gap-4 h-lvh">
        <img
          className=" h-44 mt-8 object-cover object-center"
          src="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          alt=""
        />
        <p className=" p-5 text-center text-md text-gray-500 font-light">
          {projetDetails}
        </p>
        <button className=" bg-transparent border border-black px-6 py-2.5">
          visit site
        </button>
      </div>
      <div className="bg-gray-300 w-full h-20 flex items-center justify-end p-4 overflow-x-hidden">
        <button
          onClick={onClose}
          className=" px-5 py-2 bg-transparent border border-black text-xs"
        >
          close
        </button>
      </div>
    </div>
  );
}
