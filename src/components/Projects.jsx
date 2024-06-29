import medicineCare from '../assets/medicine care.png'

const Projects = () => {
  return (
    <div className="dark:bg-gray-800" id="projects">
      <div className="py-6 max-w-screen-lg mx-auto">
        <div className="mx-auto px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl text-white">
                My <span>Projects</span>
              </h2>
              <p className="text-gray-500">These are from my projects</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
			<a href="https://medicine-care-camp.web.app" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 lg:col-span-1">
			<img src={medicineCare} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
			<a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 md:h-80">
			<img src={medicineCare} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
			<a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-2 md:h-80">
			<img src={medicineCare} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
			<a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
			<img src={medicineCare} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />			
			</a>
		</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
