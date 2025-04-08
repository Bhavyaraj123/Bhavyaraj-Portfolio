import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = (props) => {
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState('home');

    const handleToggle = () => {
        setMenu(!menu);
    };

    const handleActiveLink = (section) => {
        setActive(section);
        setMenu(false); // Close menu on link click (for mobile)
    };

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'skills', 'project', 'contact'];
            for (let sec of sections) {
                const el = document.getElementById(sec);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const offset = window.innerHeight / 2;
                    if (rect.top <= offset && rect.bottom >= offset) {
                        setActive(sec);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { About, Experience, Skills, Contact, Project, Home } = props;

    return (
        <div className='relative'>
            {/* Optional Dark Backdrop */}
            {menu && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30 md:hidden"></div>}

            <nav
                className='fixed w-full flex items-center justify-between px-6 pt-4 md:px-14 backdrop-blur-lg bg-opacity-30 bg-custom-bg z-50'
                data-aos='fade-in'
                data-aos-delay='300'
            >
                {/* Logo */}
                <a href="#home" className='no-underline' style={{ textDecoration: "none" }}>
                    <span className='text-3xl bg-clip-text text-transparent bg-tsecondary font-bold tracking-wide py-2 md:mt-6 text-clip flex items-center'>
                        Portfolio <i className="fa-solid ml-2 fa-code" style={{ color: "#B197FC" }}></i>
                    </span>
                </a>

                {/* Navigation Links */}
                <ul className={`
                    ${menu ? "flex" : "hidden"}
                    md:flex flex-col md:flex-row gap-4 md:gap-6 py-4 px-6 font-semibold 
                    absolute md:static top-full left-0 w-full md:w-auto 
                    bg-[#1c1c1e] md:bg-transparent text-center 
                    md:rounded-none rounded-b-2xl transition-all duration-500 ease-in-out z-40
                `}>
                    <a href="#home" onClick={() => handleActiveLink('home')}>
                        <li className={`text-xl p-2 rounded-md hover:bg-white hover:text-dark ${active === 'home' ? 'bg-white text-dark' : 'text-white'}`}>{Home}</li>
                    </a>
                    <a href="#about" onClick={() => handleActiveLink('about')}>
                        <li className={`text-xl p-2 rounded-md hover:bg-white hover:text-dark ${active === 'about' ? 'bg-white text-dark' : 'text-white'}`}>{About}</li>
                    </a>
                    <a href="#experience" onClick={() => handleActiveLink('experience')}>
                        <li className={`text-xl p-2 rounded-md hover:bg-white hover:text-dark ${active === 'experience' ? 'bg-white text-dark' : 'text-white'}`}>{Experience}</li>
                    </a>
                    <a href="#skills" onClick={() => handleActiveLink('skills')}>
                        <li className={`text-xl p-2 rounded-md hover:bg-white hover:text-dark ${active === 'skills' ? 'bg-white text-dark' : 'text-white'}`}>{Skills}</li>
                    </a>
                    <a href="#project" onClick={() => handleActiveLink('project')}>
                        <li className={`text-xl p-2 rounded-md hover:bg-white hover:text-dark ${active === 'project' ? 'bg-white text-dark' : 'text-white'}`}>{Project}</li>
                    </a>
                    <a href="#contact" onClick={() => handleActiveLink('contact')}>
                        <li className={`text-xl p-2 rounded-md hover:bg-white hover:text-dark ${active === 'contact' ? 'bg-white text-dark' : 'text-white'}`}>{Contact}</li>
                    </a>
                </ul>

                {/* Hamburger Icon */}
                <button className='md:hidden absolute right-6 top-5 z-50' onClick={handleToggle}>
                    <i className={`fa-solid ${menu ? 'fa-xmark' : 'fa-bars'} text-white text-2xl`}></i>
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
