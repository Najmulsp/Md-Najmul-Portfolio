import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/prodfile image1.jpg";
import { IoMdDownload } from "react-icons/io";

const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-800">
        <div className="container flex flex-col-reverse gap-10 justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" text-white w-full text-3xl font-bold leading-none sm:text-4xl">
              Hi!
              <span className="dark:text-violet-600"> I am </span>Md Najmul
            </h1>
            <p className="">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Front-End",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "3em", display: "inline-block" }}
                repeat={Infinity}
              />
            </p>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-white">
              with experience in responsive and user friendly Website
              development.
            </p>
            {/* <div className="">
              <button className="btn text-black bg-primary-color ">
                Download Resume
              </button>
            </div> */}
                {/* download button */}
                <div className="relative inline-flex group my-3">
                  <div className="absolute w-[195px] transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                  </div>
                  <a href="/" title="Download Resume" role="button"
                  className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >Download Resume<IoMdDownload className="text-4xl"/> 
                  </a>
                </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={profileImg}
              alt=""
              className="object-contain w-full h-80 sm:h-80 lg:h-80 xl:h-80 2xl:h-128 border rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
