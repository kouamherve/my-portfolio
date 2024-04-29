import { FaCode } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

export default function Passion() {
  return (
    <section
      id="passion"
      className=" bg-gray-100 font-Poppins pt-20 pb-4 mt-20"
    >
      <div className="max-w-md mx-auto">
        <div className="mx-8 text-center">
          <h1 className=" text-2xl uppercase font-normal">What I do</h1>

          <div className=" p-6 size-fit flex flex-col items-center justify-center my-10">
            <div className=" bg-violet-700 size-44 flex items-center justify-center rounded-full">
              <FaCode className=" text-6xl text-white " />
            </div>
            <div className=" text-center my-6">
              <h2 className=" uppercase font-medium text-lg tracking-wider">
                Development
              </h2>
              <p className="text-gray-600 font-light mt-3 text-sm">
                With a strong foundation in computer science, I'm passionate
                about web development and interested in mobile app development.
                As I grow as a developer, I hope to write clean, readable code
                that can be used by others and leveraged to create beautiful
                software.
              </p>
            </div>
          </div>
          <div className="p-6 size-fit flex flex-col items-center justify-center my-10">
            <div className=" bg-violet-700 size-44 flex items-center justify-center rounded-full">
              <GrPersonalComputer className=" text-6xl text-white " />
            </div>
            <div className=" text-center my-6">
              <h2 className=" uppercase font-medium text-lg tracking-wider">
                Design
              </h2>
              <p className="text-gray-600 font-light mt-3 text-sm">
                Design isn't just what a product looks like and feels like on
                the outside. Design encompasses the internal functionality of a
                product as well as the overall user experience. I strive to
                design interfaces and experiences that people can enjoy on all
                digital mediums.
              </p>
            </div>
          </div>
          <div className="p-6 size-fit flex flex-col items-center justify-center mt-10">
            <div className=" bg-violet-700 size-44 flex items-center justify-center rounded-full ">
              <FaCode className=" text-6xl text-white " />
            </div>
            <div className=" text-center my-6">
              <h2 className=" uppercase font-medium text-lg tracking-wider">
                Development
              </h2>
              <p className="text-gray-600 font-light mt-3 text-sm">
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
