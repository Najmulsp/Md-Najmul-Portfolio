import medicineCare from '../assets/medicine care.png';  
import helpsHand from '../assets/helps hand (2).png';  
import artsCrafts from '../assets/arts crafts.png';  
import nestPlaza from '../assets/nest plaza.png';  

const Projects = () => {
  return (
    <div className="dark:bg-gray-800" id="projects">
		
      <div className="py-8 max-w-screen-lg mx-auto">
        <div className="mx-auto px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8">
            <div className="flex flex-col gap-4 text-center w-full">
              <h2 className="text-4xl text-white">
                My <span>Projects</span>
              </h2>
              <p className="text-gray-500 pb-4">These are from my projects</p>
            </div>
          </div>
          <div className="grid  gap-4 sm:grid-cols-3 grid-cols-2 md:gap-6 xl:gap-8">
			<a
			data-aos="fade-down-right"
			data-aos-delay="50"
			data-aos-duration="2000"
			href="https://misty-mrittika.web.app" target='_blank' className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  col-span-2 lg:col-span-1">
			<img src={artsCrafts} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
			<a
			data-aos="fade-down-left"
			data-aos-delay="50"
			data-aos-duration="2000"
			href="https://medicine-care-camp.web.app" target='_blank'  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 md:h-80">
			<img src={medicineCare} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
			<a
			data-aos="fade-up-right"
			data-aos-delay="100"
			data-aos-duration="3000"
			href="https://helps-hand-network.web.app/" target='_blank'  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 md:h-80">
			<img src={helpsHand} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
			<a
			data-aos="fade-up-left"
			data-aos-delay="100"
			data-aos-duration="3000"
			href="https://nest-plaza-residential-web.web.app/" target='_blank'  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 col-span-2 lg:col-span-1">
			<img src={nestPlaza} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
		</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
