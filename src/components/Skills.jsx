import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Tailwind from '../assets/tailwind.png';
import Js from '../assets/js.png';
import React from '../assets/react.png';
import Node from '../assets/nodejs.png';
import Mongo from '../assets/mongo.png';
import Next from '../assets/next js logo2.png';
import Express from '../assets/express js.png';


const Skills = () => {
    return (
        <div>
            <section className="dark:bg-gray-900 dark:text-gray-800">
        <h1 className='text-4xl text-center primary-color'>My Skills</h1>
	<div className="container flex flex-col  p-6 mx-auto  lg:flex-row lg:justify-between">
			
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border ml-16">
            <div>
            <h2 className='text-2xl text-center text-white py-4'>Front-End Development</h2>
            <div className='grid grid-cols-3 gap-4'>
                <img src={HTML} alt="" className='w-32 h-32' />
                <img src={CSS} alt="" className='w-32 h-32' />
                <img src={Tailwind} alt="" className='w-32 h-32' />
                <img src={React} alt="" className='w-32 h-32' />
                <img src={Js} alt="" className='w-32 h-32' />
                <img src={Next} alt="" className='w-32 h-32' />
            </div>
            </div>
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left border mr-16">
			<div>
                <h2 className='text-2xl text-center text-white py-4'>Back-End Development</h2>
            <div className='grid grid-cols-3 gap-4'>
                <img src={Node} alt="" className='w-32 h-32' />
                <img src={Mongo} alt="" className='w-32 h-32' />
                <img src={Express} alt="" className='w-32 h-32' />
                
            </div>
            </div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Skills;