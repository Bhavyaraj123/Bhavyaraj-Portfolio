import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#0e244167] overflow-x-hidden" id='project'>
      <h2 className="text-center py-5 text-4xl font-bold text-white" data-aos="fade-in" data-aos-delay="300">
        Latest Work <i className="fa-solid ml-2 fa-laptop-code" style={{ color: "#B197FC" }}></i>
      </h2>
      <div className="container mx-auto flex flex-wrap justify-center items-center px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center">
{/* project of trendy trips */}
<div className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="300">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">TrendyTrips</h2>
            <p className="text-gray-700">Travel Management Website</p>
            <div className="flex flex-row gap-2 mt-4">
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Express</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">MongoDB</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">React</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Tailwind</span>
            </div>
            <a href="https://trendytrips-1.onrender.com/" target="_blank" rel="noreferrer noopener">
              <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </a>
          </div>




        <div className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="300">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">Jal-Researve</h2>
            <p className="text-gray-700">Bottle selling website</p>
            <div className="flex flex-row gap-2 mt-4">
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Express</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">MongoDB</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">EJS</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Tailwind</span>
            </div>
            <a href="https://jal-reserve.onrender.com/" target="_blank" rel="noreferrer noopener">
              <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </a>
          </div>





          <div className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="300">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">Learning Management System</h2>
            <p className="text-gray-700">Hubspot Learning Management System</p>
            <div className="flex flex-row gap-2 mt-4">
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">React</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Tailwind</span>
            </div>
            <a href="https://lmsfrontend-rouge.vercel.app/psychometrictest" target="_blank" rel="noreferrer noopener">
              <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </a>
          </div>
          <div className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="300">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">Employee Management System </h2>
            <p className="text-gray-700">ems to assign task to employees </p>
            <div className="flex flex-row gap-2 mt-4">
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">React</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Tailwind</span>
            </div>
            <a href="https://ems-system-black.vercel.app/" target="_blank" rel="noreferrer noopener">
              <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </a>
          </div>

          <div className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md" data-aos="fade-in" data-aos-delay="300">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">Text Utils-text editor website</h2>
            <p className="text-gray-700">Text Editor Website</p>
            <div className="flex flex-row gap-2 mt-4">
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">React</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Tailwind</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Bootstrap</span>
            </div>
          <a href="https://text-utils-bice-pi.vercel.app/" target="_blank" rel="noreferrer noopener">
            <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
              View Project <i className="fas fa-arrow-right ml-2"></i>
            </button>
            </a>
          </div>

          <div className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="300">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">Weather Application</h2>
            <p className="text-gray-700">Weather application which show us weather and wind </p>
            <div className="flex flex-row gap-2 mt-4">
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">HTML</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">CSS</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">JAVASCRIPT</span>
            </div>
        
            <a href="https://weather-two-lac.vercel.app/" target="_blank" rel="noreferrer noopener">
              <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </a>
          </div>


          <div className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="300">
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">penny pinch</h2>
            <p className="text-gray-700">Expense and income tracking website</p>
            <div className="flex flex-row gap-2 mt-4">
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">React</span>
              <span className="badge bg-blue-500 text-white px-3 py-2 rounded-full">Tailwind</span>
            </div>
        
            <a href="https://penny-pinch-ashen.vercel.app/" target="_blank" rel="noreferrer noopener">
              <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
