import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from "../assets/profile.jpg";
import Model from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [heyname, setName] = useState('');
  const [cname, setCname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  const hname = (e) => {
    setName(e.target.value);
  };
  const hcname = (e) => {
    setCname(e.target.value);
  };
  const hemail = (e) => {
    setEmail(e.target.value);
  };
  const hnumber = (e) => {
    setNumber(e.target.value);
  };
  const hmessage = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Close the modal after form submission
    setVisible(false);

    // Clear form data
    setName('');
    setCname('');
    setEmail('');
    setNumber('');
    setMessage('');
    toast.success('Thank you for Submitting, Bhavyaraj will reach you soon!');

    const formData = new FormData(event.target);
    formData.append('access_key', '25c2997b-942a-466e-9f2a-8fe4042cea27');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
    }
  };

  return (
    <div className='md:mx-16 mx-0 py-14' id='home'>
      <section>
        <div className='text-white flex flex-col md:item-center justify-center items-center md:4xl w-full md:justify-between item-start p-10 md:p-20 md:flex md:flex-row'>
          <div className='md:w-3/5 md:pt-10'>
            <h1 className="text-3xl md:text-5xl font-semibold flex bg-clip-text text-transparent bg-shome tracking-tighter" data-aos="fade-up" data-aos-delay="300">
              Hello, I'm Bhavyaraj Bihola,
            </h1>

            <h1 className="text-2xl md:text-4xl font-semibold flex mt-3 tracking-tighter" data-aos="fade-up" data-aos-delay="400">
            Full-Stack Developer <i className="fa-solid ml-3 fa-code" style={{color: "#B197FC"}}></i>
            </h1>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt- justify-center sm:justify-start ." >
            <ul className="flex flex-row rounded mt-4" data-aos="fade-in" data-aos-delay="300">
              <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-12 h-12 mr-2 cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105">
                <a href="https://www.linkedin.com/in/bhavyaraj-bihola-176862276/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in" style={{ color: "#0A66C2" }}></i>
                </a>
              </div>
              <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-12 h-12   cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105" >
                <a href="https://github.com/Bhavyaraj123" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github" style={{ color: "#020203" }}></i>
                </a>
              </div>
              <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-12 h-12 ml-2 cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105">
                <a href="https://www.instagram.com/bhavyraj_sinh_2605/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram" style={{ color: "#FE02BB" }}></i>
                </a>
              </div>
            </ul>
          </span>
            <p className='text-md md:text-xl text-justify tracking-tight mt-4' data-aos="fade-up" data-aos-delay="400">
            Welcome to my creative corner ! I’m a final year student with 3 months of hands-on experience in React development. I’m passionate about creating dynamic and responsive web applications. Currently, I’m seeking opportunities to apply my skills and contribute to exciting projects. Let’s connect!            </p>
            <button onClick={() => setVisible(true)} className="button w-full md:w-auto mt-8 py-2 mb-5 px-4 text-sm md:text-lg md:py-3 md:px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center" data-aos="fade-up" data-aos-delay="300">
              Hire me
              <i className="fa-duotone fa-solid fa-briefcase ml-2 text-xl"></i>
            </button>

            <Model
              isOpen={visible}
              className="modal-content"
              overlayClassName="modal-overlay"
              onRequestClose={() => setVisible(false)}  // Allow closing on overlay click or ESC key
              ariaHideApp={false}
              style={{content: {
                
               
              },}}  // Disable hiding the main app content from screen readers
            >
              <div className="modal-inner p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto text-center relative z-50">
                <button onClick={() => setVisible(false)} className="close-modal absolute top-2 right-2 text-5xl">&times;</button>
                <form className="w-full mx-auto" onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Name:</label>
                    <input
                      type="text"
                      name="hrName"
                      value={heyname}
                      className="w-full px-3 py-2 border rounded-lg text-black"
                      required
                      onChange={hname}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black font-bold mb-2">Company Name:</label>
                    <input
                      type="text"
                      name="companyName"
                      value={cname}
                      onChange={hcname}
                      className="w-full px-3 py-2 border rounded-lg text-black"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black font-bold mb-2">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={hemail}
                      className="w-full px-3 py-2 border rounded-lg text-black"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black font-bold mb-2">Mobile Number:</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={number}
                      onChange={hnumber}
                      className="w-full px-3 py-2 border rounded-lg text-black"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black font-bold mb-2">Message:</label>
                    <textarea
                      name="message"
                      value={message}
                      onChange={hmessage}
                      className="w-full px-3 py-2 border rounded-lg text-black"
                      rows="4"
                    ></textarea>
                  </div>
                  <ToastContainer autoClose={3000} />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Submit
                  </button>
                </form>
              </div>
            </Model>
          </div>

          <div className='w-64 h-64 rounded-full flex md:w-80 md:h-80 bg-white md:justify-center items-center lg:w-2/2 object-cover object-center mr-4' data-aos="fade-left" data-aos-delay="300">
            <img src={profile} alt="" className='w-full h-full rounded-full object-cover ' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
