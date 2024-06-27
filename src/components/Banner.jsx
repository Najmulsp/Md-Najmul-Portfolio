import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/photo_222-transformed133411.png";
import { IoMdDownload } from "react-icons/io";
// import {motion} from 'framer-motion'
import resume from '../assets/Front End Developer resume.pdf'

const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-800">
        <div className="container flex flex-col-reverse gap-10 justify-center p-6 mx-auto sm:py-12  lg:flex-row lg:justify-between">
          <div className="flex  flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="lg:ml-36 text-white w-full text-3xl font-bold leading-none sm:text-4xl">
              Hi! I am Md Najmul
            </h1>
            <p className="lg:ml-36 w-96">
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
            <p className="mt-6 lg:ml-36 mb-8 text-lg sm:mb-12 text-white">
              with experience in responsive and user friendly Website
              development.
            </p>
            {/* <div className="">
              <button className="btn text-black bg-primary-color ">
                Download Resume
              </button>
            </div> */}
                {/* download button */}
                <div className="relative mx-auto inline-flex group my-3">
                  <div className="absolute w-[195px] transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                  </div>
                  <a href={resume} download="resume" title="Download Resume" role="button"
                  className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >Download Resume<IoMdDownload className="text-4xl"/> 
                  </a>
                </div>
          </div>
          <div className="flex mx-auto items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[400px] w-96">
            <img
              src={profileImg}
              alt=""
              className="object-contain  w-96 h-[400px] rounded-full"
            />
          </div>
          {/* <div className="w-full h-full relative">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}>
              <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                <img src={profileImg} alt="" className="object-contain rounded-full w-full"/>
              </div>
            </motion.div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Banner;
