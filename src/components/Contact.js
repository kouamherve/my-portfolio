import { SiMinutemailer } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" bg-gray-100 flex flex-col items-center justify-center px-4 pb-12 w-full overflow-x-hidden"
    >
      <div className=" text-6xl pt-14 text-gray-500 md:text-7xl">
        <SiMinutemailer />
      </div>
      <h1 className=" text-xl uppercase tracking-wider md:text-4xl font-thin pt-6 pb-4">
        Get in touch!
      </h1>
      <p className=" text-gray-600 pt-3 pb-6 px-3 text-md text-center leading-8 md:px-36 md:pb-16 md:text-lg">
        Whether you have an idea for a project or just want to chat, feel free
        to shoot me an email!
      </p>
      <button className="mb-4 text-black hover:text-white bg-transparent capitalize text-md px-7 py-3 border-2 border-black hover:border-violet-600 hover:bg-violet-600 md:text-lg">
        Say hello
      </button>
    </section>
  );
}
