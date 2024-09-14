import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = (props) => {
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState('home'); // Track the active link

    const handleToggle = () => {
        setMenu(!menu);
    }

    const handleActiveLink = (section) => {
        setActive(section); // Set the active link when clicked
    }

    useEffect(() => {
        AOS.init();
    }, [])

    const { About, Experience, Skills, Contact, Home } = props;

    return (
        <div>
            <nav 
                className='fixed w-full flex flex-wrap items-center justify-between px-8 pt-2 md:px-20 backdrop-blur-lg bg-opacity-30 bg-custom-bg z-50' 
                data-aos='fade-in' 
                data-aos-delay='300'
            >
                {/* Portfolio Link */}
                <a href="#home" className='no-underline' style={{ textDecoration: "none" }}>
                    <span className='text-3xl bg-clip-text text-transparent bg-tsecondary font-bold tracking-wide py-2 md:mt-6 text-clip flex items-center'>
                        Portfolio <i className="fa-solid ml-2 fa-code" style={{ color: "#B197FC" }}></i>
                    </span>
                </a>

                {/* Navbar menu */}
                <ul className={`${menu ? "block" : "hidden"} md:flex flex-wrap gap-6 mx-24 py-2 font-semibold md:mt-5 md:justify-center md:items-center bg-custom-bg px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static`}>
                <a href="#home" onClick={() => handleActiveLink('home')}>
                        <li className={`text-xl transition-all duration-300 p-1 md:p-2 ${active === 'home' ? 'bg-white text-dark py-2 px-2 rounded-lg' : ''}`}>{Home}</li>
                    </a>
                    <a href="#about" onClick={() => handleActiveLink('about')}>
                        <li className={`text-xl transition-all duration-300 p-1 md:p-2 ${active === 'about' ? 'bg-white text-dark py-2 px-2 rounded-lg' : ''}`}>{About}</li>
                    </a>
                    <a href="#experience" onClick={() => handleActiveLink('experience')}>
                        <li className={`text-xl transition-all duration-300 p-1 md:p-2 ${active === 'experience' ? 'bg-white text-dark py-2 px-2 rounded-lg' : ''}`}>{Experience}</li>
                    </a>
                    <a href="#skills" onClick={() => handleActiveLink('skills')}>
                        <li className={`text-xl transition-all duration-300 p-1 md:p-2 ${active === 'skills' ? 'bg-white text-dark py-2 px-2 rounded-lg' : ''}`}>{Skills}</li>
                    </a>
                    <a href="#contact" onClick={() => handleActiveLink('contact')}>
                        <li className={`text-xl transition-all duration-300 p-1 md:p-2 ${active === 'contact' ? 'bg-white text-dark py-2 px-2 rounded-lg' : ''}`}>{Contact}</li>
                    </a>
                </ul>

                {/* Toggle button */}
                <button className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={handleToggle}>
                <i className={`fa-solid ${menu ? 'fa-xmark' : 'fa-bars'} text-white`}></i>
                </button>
            </nav>
        </div>
    )
}

export default Navbar;
