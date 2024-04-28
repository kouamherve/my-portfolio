export default function Resume() {
  return (
    <div className="flex items-center justify-center mb-10 bg-resume-img bg-cover bg-center bg-black/75 bg-blend-darken h-60 bg-fixed overflow-x-hidden">
      <div className=" text-white  ">
        <h1 className=" text-2xl uppercase font-light tracking-wider">
          Check out my résumé!
        </h1>
        <button className=" bg-transparent hover:bg-gray-600/50 border border-white px-5 hover:px-7 py-3 mt-10 capitalize text-md font-light rounded shadow ">
          Grab a copy
        </button>
      </div>
    </div>
  );
}
