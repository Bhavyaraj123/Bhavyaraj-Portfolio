import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'Bootstrap', level: 85 },
  { name: 'jQuery', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Github', level:80 },
  { name: 'Webflow', level:70 },
  { name: 'Express ', level:50 },
];

const SkillBar = ({ name, level }) => {
    
    
    return (
    
    
  
  <div className='mb-4 '  >
    <div className='flex justify-between items-center mb-2 '>
      <span className='font-semibold md:text-2xl text-lg  text-transparent bg-clip-text bg-tsecondary'>{name}</span>
      <span className='text-white'  >{level}%</span>
    </div>
    <div className='relative w-full bg-gray-600 rounded h-3'>
      <div
        className='absolute top-0 left-0 h-full bg-blue-400 rounded'
        style={{ width: `${level}%` }}
        
      ></div>
    </div>
  </div>
)};

const Profskills = () => {
    useEffect(() => {
        AOS.init();
       }, [])
        
    return(
   
  <div className='bg-custom-bg md:mx-24 mx-16 py-10 'id='skills' data-aos='fade-up' data-aos-delay="300" >
    <h2 className='text-4xl font-bold pb-7 text-center text-white' data-aos="fade-in" data-aos-delay="300">
      Professional Skills
      <i className="fa-solid ml-2 fa-code" style={{ color: "#B197FC" }}></i>
    </h2>
    <div className='container mx-auto px-1  w-full border rounded-xl border-[#cca8e9] p-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {skills.map(skill => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  </div>
)};

export default Profskills;


