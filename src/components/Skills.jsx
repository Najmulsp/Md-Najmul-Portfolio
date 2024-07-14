import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import Js from "../assets/JavaScript_logo_2.svg.png";
import React from "../assets/react.png";
import Node from "../assets/nodejs-1.jpg";
import Mongo from "../assets/mongodb.png";
import Next from "../assets/next js logo2.png";
import Express from "../assets/express js 1.jpg";


const Skills = () => {
  return (
    <section id="skills" className="dark:bg-gray-900 dark:text-gray-800">
    
      <h1 className="text-4xl text-center primary-color pt-6">
        <span className="text-white">My</span> Skills
      </h1>
      <div className="container flex flex-col  p-6 mx-auto  lg:flex-row lg:justify-between">
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1500"
          className="flex items-center justify-center p-6  mt-8 lg:mt-0  border border-[#a5079d] lg:ml-16  rounded-lg"
        >
          <div className="">
            <h2 className="text-2xl text-center text-white py-4">
              Front-End Development
            </h2>
            <div className="grid grid-cols-3 gap-4 ">
              <div className="image">
                <img src={HTML} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white">
                  HTML
                </p>
              </div>
              <div className="image">
                <img src={CSS} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white">
                  CSS
                </p>
              </div>
              <div className="image">
                <img src={Tailwind} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white text-center">
                  TAILWIND CSS
                </p>
              </div>
              <div className="image">
                <img src={React} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white text-center">
                  REACT JS
                </p>
              </div>
              <div className="image">
                <img src={Js} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-2xl font-bold text-white">
                  JAVASCRIPT
                </p>
              </div>
              <div className="image">
                <img src={Next} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white">
                  NEXT JS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1600"
          className="flex flex-col justify-center px-6 py-8 text-center  lg:text-left border border-[#a5079d] lg:mr-16 mt-8 lg:mt-0  rounded-lg"
        >
          <div>
            <h2 className="text-2xl text-center text-white py-4">
              Back-End Development
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="image">
                <img src={Node} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white">
                  NODE JS
                </p>
              </div>
              <div className="image">
                <img src={Mongo} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white text-center">
                  MONGO DB
                </p>
              </div>
              <div className="image">
                <img src={Express} alt="" className="w-32 h-32" />
                <p className="content flex justify-center items-center text-3xl font-bold text-white text-center">
                  EXPRESS JS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
