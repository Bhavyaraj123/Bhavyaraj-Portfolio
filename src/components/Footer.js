import React, { useEffect } from 'react'
import portfolio from "../assets/portfolio.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#0e244167]">
        <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between">
          <a href="#home"className="flex title-font font-medium items-center justify-center text-gray-900"  >
            <img src={portfolio} className="w-12" alt="portfolio" />
            <span className="ml-3 bg-clip-text text-transparent bg-tsecondary font-semibold text-3xl">Portfolio</span>
          </a>

          <p className="text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center text-xl">
            Feel free to reach us out...
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start" >
            <ul className="flex flex-row rounded " >
              <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-14 h-14 mr-2 cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105">
                <a href="https://www.linkedin.com/in/bhavyaraj-bihola-176862276/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in" style={{ color: "#0A66C2" }}></i>
                </a>
              </div>
              <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-14 h-14   cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105" >
                <a href="https://github.com/Bhavyaraj123" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github" style={{ color: "#020203" }}></i>
                </a>
              </div>
              <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-14 h-14 ml-2 cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105">
                <a href="https://www.instagram.com/bhavyraj_sinh_2605/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram" style={{ color: "#FE02BB" }}></i>
                </a>
              </div>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
