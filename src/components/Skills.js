import React, { useEffect, useState } from "react";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import jquery from "../assets/jquery.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png"
import mongo from "../assets/MongoDB.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import git from '../assets/github.png'

const Skills = () => {
    useEffect(() => {
      AOS.init({
        duration:1000,
      });
    
      
    }, [])
const[hover,sethover]=useState();
    
  return (
    <>
      <section className=" bg-[#0e244167] body-font cursor-pointer" >
      
        <div className="container mx-auto  py-10  flex flex-row justify-center items-center">
           <div className="grid grid-cols-2 md:grid-cols-8 gap-5 justify-items-center  item-center justify-center ">
         <div  className="relative">
            <div className="p-4 bg-white rounded-3xl w-24 h-24  mx-6 flex justify-center items-center"   data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("HTML")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={html} alt="html" className="w-16 h-16" />
            </div>

            {hover==="HTML" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              HTML
            </div>
            )}
         </div>

<div className="relative">
            <div className="p-4 bg-white rounded-3xl w-24 h-24  mx-6 flex justify-center items-center"  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("CSS")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={css} alt="" className="w-16 h-16" />
            </div>
            {hover==="CSS" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              CSS
            </div>
            )}
</div>

<div className="relative">

            <div className="p-4 bg-white rounded-3xl w-24 h-24  mx-6 flex justify-center items-center "  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("JS")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={js} alt="" className="w-16 h-16" />
            </div>
            {hover==="JS" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              JS
            </div>
            )}
</div>

<div className="relative">

            <div className="p-4 bg-white rounded-3xl w-24 h-24   mx-6 flex justify-center items-center"  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("ReactJS")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={react} alt="" className="w-16 h-16" />
            </div>
            {hover==="ReactJS" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              ReactJS
            </div>
            )}
</div>
<div className="relative">

            <div className="p-4 bg-white rounded-3xl w-24 h-24   mx-6 flex justify-center items-center"  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("jQuery")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={jquery} alt="" className="w-36 h-26 " />
            </div>
            {hover==="jQuery" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              jQuery
            </div>
            )}
</div>
<div className="relative">

            <div className="p-4 bg-white rounded-3xl w-24 h-24  mx-6 flex justify-center items-center "  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("Tailwind")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={tailwind} alt="" className="w-16 h-16" />
            </div>
            {hover==="Tailwind" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              Tailwind
            </div>
            )}
</div>
<div className="relative ">
            <div className=" p-4 bg-white rounded-3xl  w-24 h-24 mx-6 flex justify-center items-center"  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("bt")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={bootstrap} alt="" className="w-16 h-16  " />
            </div>
            {hover==="bt" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              Bootstrap 
            </div>
            )}
            </div>
            
<div className="relative ">
            <div className=" p-4 bg-white rounded-3xl  w-24 h-24 mx-6 flex justify-center items-center"  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("Github")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={git} alt="" className="w-16 h-16  " />
            </div>
            {hover==="Github" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              Github 
            </div>
            )}
            </div>
<div className="relative ">

            <div className=" p-4 bg-white rounded-3xl  w-24 h-24 mx-6 flex justify-center items-center"  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("Express")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={express} alt="" className="w-16 h-16  " />
            </div>
            {hover==="Express" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              Express.js 
            </div>
            )}
            </div>
<div className="relative ">

            <div className=" p-4 bg-white rounded-3xl  w-24 h-24 mx-6 flex justify-center items-center"  data-aos="fade-in" data-aos-delay="300" onMouseEnter={()=>{sethover("MongoDB")}} onMouseLeave={()=>{sethover(" ")}}>
              <img src={mongo} alt="" className="w-16 h-16  " />
            </div>
            {hover==="MongoDB" &&(
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-dark font-semibold  text-sm py-1 px-2 rounded-md">
              MongoDB
            </div>
            )}
            </div>
            

          </div>
 
        </div>
      </section>
    </>
  );
};

export default Skills;
