import { SiMinutemailer } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" bg-gray-100 flex flex-col items-center justify-center mt-10 mb-0 p-4 rounded"
    >
      <SiMinutemailer className=" text-7xl text-gray-500 mt-2 mb-4" />
      <h1 className=" text-3xl uppercase tracking-wider">Get in touch!</h1>
      <p className=" text-gray-600 py-6 px-1 font-normal leading-8">
        Whether you have an idea for a project or just want to chat, feel free
        to shoot me an email!
      </p>
      <button className=" font-medium mb-2 text-black hover:text-white shadow bg-transparent capitalize text-md px-6 py-2.5 border-2 border-black hover:border-violet-600 hover:bg-violet-600 rounded-md">
        Say hello
      </button>
    </section>
  );
}
