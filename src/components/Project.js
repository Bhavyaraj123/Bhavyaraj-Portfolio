import React, { useEffect } from 'react';
import Aos from 'aos';

const projects = [
  {
    title: "Cover Mitra",
    description: "Insurance and Finance website",
    tech: ["React","Node","Tailwind"],
    link: "https://cover-mitra.vercel.app/",
    animation: "fade-left"
  },
  {
    title: "TrendyTrips",
    description: "Travel Management Website",
    tech: ["Express", "MongoDB", "React", "Tailwind"],
    link: "https://trendytrips-1.onrender.com/",
    animation: "fade-right"
  },
  {
    title: "Jal-Researve",
    description: "Bottle selling website",
    tech: ["Express", "MongoDB", "EJS", "Tailwind"],
    link: "https://jal-reserve.onrender.com/",
    animation: "fade-right"
  },
  {
    title: "Learning Management System",
    description: "Hubspot Learning Management System",
    tech: ["React", "Tailwind"],
    link: "https://lmsfrontend-rouge.vercel.app/psychometrictest",
    animation: "fade-right"
  },
  {
    title: "Employee Management System",
    description: "EMS to assign task to employees",
    tech: ["React", "Tailwind"],
    link: "https://ems-system-black.vercel.app/",
    animation: "fade-right"
  },
  {
    title: "Text Utils-text editor website",
    description: "Text Editor Website",
    tech: ["React", "Tailwind", "Bootstrap"],
    link: "https://text-utils-bice-pi.vercel.app/",
    animation: "fade-in"
  },
  {
    title: "Weather Application",
    description: "Weather application which shows weather and wind",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://weather-two-lac.vercel.app/",
    animation: "fade-left"
  },
  {
    title: "Penny Pinch",
    description: "Expense and income tracking website",
    tech: ["React", "Tailwind"],
    link: "https://penny-pinch-ashen.vercel.app/",
    animation: "fade-left"
  },
  
];

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
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col justify-center items-center border border-secondary p-4 bg-gray-50 rounded-lg shadow-md"
              data-aos={project.animation}
              data-aos-delay="300"
            >
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-tsecondary mb-4">
                {project.title}
              </h2>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex flex-row gap-2 mt-4 flex-wrap justify-center">
                {project.tech.map((tech, i) => (
                  <span key={i} className="badge bg-blue-500 text-white px-3 py-2 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer noopener">
                <button className="mt-4 py-2 px-4 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
