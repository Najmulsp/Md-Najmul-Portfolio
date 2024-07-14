

const ContactMe = () => {
  return (
    <div className="flex justify-center dark:bg-slate-900 py-6 max-w-screen-xl" id="contact">
      
      <div className="max-w-[1200px] mx-auto">
        <div
        data-aos="zoom-in-right"       
        data-aos-delay="50"
        data-aos-duration="1500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
              <h1 className="text-4xl sm:text-5xl text-white">
                Contact <span> Me</span>
              </h1>
              <p className="text-normal text-lg text-gray-400 mt-2">
                Let's connect on LinkedIn <br /> or send me an Email
              </p>
              <div className="flex items-center mt-2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  <p>Md Najmul</p>
                </div>
              </div>
            </div>
            <form
            data-aos="zoom-in-left"       
            data-aos-delay="100"
            data-aos-duration="1600"
              action="https://getform.io/f/warkkozb"
              method="post"
              className="p-6 flex flex-col justify-center max-w-[700px]"
            >
              <div className="flex flex-col">
                <input
                  type="name"
                  name="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col mt-2">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>
              <button
                type="submit"
                className="md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3"
              >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
