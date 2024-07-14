import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/photo_222-transformed133411.png";
import { IoMdDownload } from "react-icons/io";
import linkedin from "../assets/linked in log22 .png";
import github from "../assets/Github-desktop-logo-symbol.svg.png";
import resume from "../assets/Front-End Developer.pdf";

const Banner = () => {
  return (
    <div className="">
      <section className="dark:bg-gray-800 dark:text-gray-800">
        <div className="container flex flex-col-reverse gap-10 justify-center p-6 mx-auto sm:py-12  lg:flex-row lg:justify-between">
          <div className="flex  flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="lg:ml-36 text-white w-full text-3xl font-bold leading-none sm:text-4xl"
            >
              Hi! I am Md Najmul
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1800"
              className="lg:ml-36 w-96"
            >
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
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="2200"
              className="mt-6 lg:ml-36 text-lg mb-4 text-white mx-auto w-4/5"
            >
              Skilled in creating dynamic, responsive and user-friendly web applications.
            </p>
            <div className="flex gap-10 items-center mx-auto pb-4 lg:ml-36">
              <a
                data-aos="fade-right"
                data-aos-delay="1600"
                data-aos-duration="2400"
                href="www.linkedin.com/in/mdnajmulsarker"
              >
                <img
                  src={linkedin}
                  alt=""
                  className="w-10 h-10 rounded-xl border-2 border-white"
                />
              </a>
              <a
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="2600"
                href="https://github.com/Najmulsp"
              >
                <img src={github} alt="" className="w-12 h-12" />
              </a>
            </div>
            <div
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-duration="3000"
            className="relative mx-auto inline-flex group my-3">
              <div className="absolute w-[195px] transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                
                href={resume}
                download="resume"
                title="Download Resume"
                role="button"
                className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Download Resume
                <IoMdDownload className="text-4xl" />
              </a>
            </div>
          </div>
          <div
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="1500"
           className="flex mx-auto items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[400px] w-96">
            <img
              src={profileImg}
              alt=""
              className="object-contain  w-96 h-[400px] rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
