import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import level from '../assets/levelup.jpg';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='bg-[#0e244167] py-4'>
      <h2  id='experience' className='text-4xl text-center font-semibold py-5' data-aos="fade-in" data-aos-delay="300">
        Experience <i className="fa-solid ml-2 fa-briefcase" style={{ color: "#B197FC" }}></i>
      </h2>

      <div className='container mx-auto flex items-center justify-center pb-4 px-4 md:px-0' data-aos="fade-up">
        {/* Use Tailwind CSS for responsive sizing */}
        <div className='border border-white p-3 md:p-5 rounded-md flex flex-col md:flex-row justify-center items-center w-full md:w-auto'>
          <div className='flex justify-center'>
            <img src={level} alt="" className='w-16 h-16 md:w-24 md:h-24' />
          </div>

          <div className='mt-3 md:mt-0 md:ml-6 text-center md:text-left'>
            <h2 className='text-xl md:text-2xl bg-clip-text bg-tsecondary text-transparent font-bold'>Level Up Technologies</h2>
            <p className='text-sm md:text-base leading-relaxed'>June-2024 to Sep-2024</p>
            <p className='text-sm md:text-base font-semibold'>Served as a ReactJS Intern</p>
            <p>Live Project: <a href="https://lmsfrontend-rouge.vercel.app/psychometrictest" rel="noreferrer" target='_blank' className='text-blue-500 w-12'>https://lmsfrontend-rouge.vercel.app/psychometrictest </a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;