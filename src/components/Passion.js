import { FaCode } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

export default function Passion() {
  return (
    <section
      id="passion"
      className=" bg-gray-100 font-Poppins pt-28 pb-32 mt-20"
    >
      <div className="w-full mx-auto">
        <div className="mx-8 text-center ">
          <h1 className=" uppercase tracking-wider text-2xl md:text-3xl text-black ">
            What I do
          </h1>

          <div className="size-fit flex flex-col items-center justify-center mt-14 space-y-10 md:px-20">
            <div className=" bg-violet-700 size-32 flex items-center justify-center rounded-full md:size-44">
              <FaCode className=" text-3xl md:text-5xl text-white " />
            </div>
            <div className=" text-center">
              <h2 className=" uppercase  text-base md:text-md tracking-wider">
                Development
              </h2>
              <p className="text-gray-600 font-light mt-4 text-sm">
                With a strong foundation in computer science, I'm passionate
                about web development and interested in mobile app development.
                As I grow as a developer, I hope to write clean, readable code
                that can be used by others and leveraged to create beautiful
                software.
              </p>
            </div>
          </div>
          <div className="size-fit flex flex-col items-center justify-center my-10 space-y-10 md:px-20">
            <div className=" bg-violet-700 size-32 flex items-center justify-center rounded-full md:size-44">
              <GrPersonalComputer className=" text-3xl md:text-5xl text-white " />
            </div>
            <div className=" text-center ">
              <h2 className=" uppercase  text-base md:text-md tracking-wider">
                Design
              </h2>
              <p className="text-gray-600 font-light mt-4 text-sm">
                Design isn't just what a product looks like and feels like on
                the outside. Design encompasses the internal functionality of a
                product as well as the overall user experience. I strive to
                design interfaces and experiences that people can enjoy on all
                digital mediums.
              </p>
            </div>
          </div>
          <div className="size-fit flex flex-col items-center justify-center mt-10 space-y-10 md:px-20">
            <div className=" bg-violet-700 size-32 flex items-center justify-center rounded-full md:size-44 ">
              <FaCode className=" text-3xl md:text-5xl text-white " />
            </div>
            <div className=" text-center ">
              <h2 className=" uppercase  text-base md:text-md tracking-wider">
                Development
              </h2>
              <p className="text-gray-600 font-light mt-4 text-sm">
                With a strong foundation in computer science, I'm passionate
                about web development and interested in mobile app development.
                As I grow as a developer, I hope to write clean, readable code
                that can be used by others and leveraged to create beautiful
                software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
