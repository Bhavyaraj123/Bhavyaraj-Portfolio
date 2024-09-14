import React from 'react';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';

const Contact = () => {
  const [heyname, setname] = useState('');
  const [cname, setcname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [message, setmessage] = useState('');

  useEffect(() => { 
    AOS.init();
  }, [])
  
  const hname = (e) => {
    setname(e.target.value);
  };
  const hcname = (e) => {
    setcname(e.target.value);
  };
  const hemail = (e) => {
    setemail(e.target.value);
  };
  const hnumber = (e) => {
    setnumber(e.target.value);
  };
  const hmessage = (e) => {
    setmessage(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setname('');
    setcname('');
    setemail('');
    setnumber('');
    setmessage('');
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
    <div className="bg-custom-bg w-full px-4 md:px-24" id="contact" >
      <h2 className="md:text-4xl font-bold py-5 text-white text-center">
        Contact Us <i className="fa-sharp fa-solid fa-headset" style={{ color: '#B197FC' }}></i>
      </h2>

      <section data-aos="fade-right" data-aos-delay="300">
        <div className="text-white flex flex-col md:flex-row md:items-center justify-center w-full p-4 md:p-10">
          {/* Timeline Section */}
          <section className="text-gray-600 body-font md:w-1/2">
            <div className="container px-2 py-5 flex flex-col">
              {/* Timeline Item 1 */}
              <div className="flex relative pb-10 sm:items-center">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow pl-6 flex flex-col sm:flex-row items-start">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold title-font text-transparent bg-clip-text bg-tsecondary mb-1 text-xl">
                      Address<i className="fa-solid ml-2 fa-location-dot" style={{ color: '#B197FC' }}></i>
                    </h2>
                    <p className="leading-relaxed text-white w-3/4">
                      F-206, Galaxy Residency, Naroda-Kathwada Road, Naroda Ahmedabad-382330
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex relative pb-10 sm:items-center">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow pl-6 flex flex-col sm:flex-row items-start">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold title-font text-transparent bg-clip-text bg-tsecondary mb-1 text-xl">
                      Contact Number Inquiries
                      <i className="fa-solid fa-phone-volume ml-2" style={{ color: '#B197FC' }}></i>
                    </h2>
                    <p className="text-md text-white">+91 9099884503</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex relative pb-10 sm:items-center">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow pl-6 flex flex-col sm:flex-row items-start">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold title-font text-transparent bg-clip-text bg-tsecondary mb-1 text-xl">
                      Email
                      <i className="fa-solid fa-envelope ml-2" style={{ color: '#B197FC' }}></i>
                    </h2>
                    <p
                      className="text-lg text-white cursor-pointer underline hover:text-blue-500"
                      onClick={() => (window.location.href = 'mailto:bhavyrajbihola6@gmail.com')}
                    >
                      bhavyrajbihola6@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <div className="md:w-1/2 md:pl-10 md:pt-0 pt-10" data-aos="fade-left" data-aos-delay="300">
            <form className="w-full mx-auto p-4" onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-white font-semibold mb-2">Name:</label>
                <input
                  type="text"
                  name="hrName"
                  value={heyname}
                  className="w-full px-3 py-2 border rounded-lg text-gray-900"
                  required
                  onChange={hname}
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2">Company Name:</label>
                <input
                  type="text"
                  name="companyName"
                  value={cname}
                  onChange={hcname}
                  className="w-full px-3 py-2 border rounded-lg text-gray-900"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={hemail}
                  className="w-full px-3 py-2 border rounded-lg text-gray-900"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2">Mobile Number:</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={number}
                  onChange={hnumber}
                  className="w-full px-3 py-2 border rounded-lg text-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2">Message:</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={hmessage}
                  className="w-full px-3 py-2 border rounded-lg text-gray-900"
                  rows="4"
                ></textarea>
              </div>
              <ToastContainer autoClose={3000} />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
