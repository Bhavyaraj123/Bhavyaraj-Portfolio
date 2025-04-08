import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import info from "../assets/info.png";
import resume from "../resume/Bhavyaraj_resume.pdf";
import Model from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const About = () => {
  const [visible, setVisible] = useState(false);
  const [heyname, setName] = useState("");
  const [cname, setCname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

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
    setName("");
    setCname("");
    setEmail("");
    setNumber("");
    setMessage("");
    toast.success("Thank you for Submitting, Bhavyaraj will reach you soon!");

    const formData = new FormData(event.target);
    formData.append("access_key", "25c2997b-942a-466e-9f2a-8fe4042cea27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <>
      <div className="md:mx-16 mx-0 pt-5">
        <h2
          className="text-center md:text-4xl flex flex-row  font-bold  justify-center mt-5 text-2xl py-3"
          data-aos="fade-in"
          data-aos-delay="300"
          id="about"
        >
          About Me{" "}
          <i
            class="fa-regular fa-address-card ml-2 "
            style={{ color: "#B197FC" }}
          ></i>
        </h2>

        <section>
          <div
            className="text-white flex flex-col md:flex-row md:items-center justify-center w-full p-10 md:p-20"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {/* Timeline Section */}
            <section className="text-gray-600 body-font md:w-1/2">
              <div className="container px-2 py-5 flex flex-col">
                <h1 className="text-2xl  text-white ">Education</h1>
                {/* Timeline Item 1 */}
                <div className="flex relative pb-10 sm:items-center">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    1
                  </div>
                  <div className="flex-grow pl-6 flex flex-col sm:flex-row items-start">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-bold title-font text-transparent bg-clip-text bg-tsecondary mb-1 text-xl ">
                        Bechlor Of Vocation In Information Technology
                      </h2>
                      <p className="text-white"> 2022-2025 -Undergraduate</p>
                      <p className="leading-relaxed text-white ">
                        Currently I am pursuing Bachelor Of Vocation in the
                        Information Technology at Silver Oak.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex relative pb-10 sm:items-center">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    2
                  </div>
                  <div className="flex-grow pl-6 flex flex-col sm:flex-row items-start">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-bold title-font text-transparent bg-clip-text  bg-tsecondary mb-1 text-xl">
                        HSC - Commerce
                      </h2>
                      <p className="text-md text-white"> Year-2022</p>
                      <p className="text-md text-white"> Percentage : 85 %</p>
                      <p className="text-md text-white"> Percentile : 97.16</p>
                      <p className="leading-relaxed  text-md text-white">
                        I successfully completed my Higher Secondary Education
                        (HSC) in Commerce from Satyam Vidhyalaya, Naroda{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex relative pb-10 sm:items-center">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    3
                  </div>
                  <div className="flex-grow pl-6 flex flex-col sm:flex-row items-start">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-bold title-font text-transparent bg-clip-text bg-tsecondary mb-1 text-xl">
                        SSC{" "}
                      </h2>
                      <p className="text-md text-white"> Year-2020</p>
                      <p className="text-md text-white"> Percentage : 76.67%</p>
                      <p className="text-md text-white"> Percentile : 94.73</p>
                      <p className="leading-relaxed text-md text-white ">
                        I successfully completed my Secondary Education (SSC)
                        from Satyam Vidhyalaya, Naroda{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Me Text Section */}
            <div
              className="md:w-1/2 md:pl-10 md:pt-0 pt-10"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h1 className="text-2xl md:text-4xl font-semibold mt-3 tracking-tighter bg-clip-text text-transparent bg-tsecondary">
              Full-Stack Developer
                <i
                  className="fa-solid fa-code"
                  style={{ color: "#B197FC" }}
                ></i>
              </h1>

              <p className="text-md md:text-xl text-justify tracking-tight mt-4">
                I am Bhavyaraj Bihola, a passionate Full-Stack Developer
                dedicated to building dynamic, scalable, and visually engaging
                web applications. With expertise in HTML, CSS, and JavaScript, I
                craft seamless user experiences using modern libraries and
                frameworks like React.js. On the backend, I develop efficient,
                secure, and high-performing server-side applications with
                Node.js, Express.js, and database technologies like MongoDB.
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt- justify-center sm:justify-start .">
                <ul
                  className="flex flex-row rounded mt-4"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-14 h-14 mr-2 cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105">
                    <a
                      href="https://www.linkedin.com/in/bhavyaraj-bihola-176862276/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa-brands fa-linkedin-in"
                        style={{ color: "#0A66C2" }}
                      ></i>
                    </a>
                  </div>
                  <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-14 h-14   cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105">
                    <a
                      href="https://github.com/Bhavyaraj123"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa-brands fa-github"
                        style={{ color: "#020203" }}
                      ></i>
                    </a>
                  </div>
                  <div className="bg-white rounded-xl flex text-3xl items-center justify-center w-14 h-14 ml-2 cursor-pointer transition-all duration-300 p-1 md:p-2 hover:scale-105">
                    <a
                      href="https://www.instagram.com/bhavyraj_sinh_2605/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "#FE02BB" }}
                      ></i>
                    </a>
                  </div>
                </ul>
              </span>
              <div className="flex flex-col md:flex-row items-center md:space-x-3 w-full">
                <button
                  onClick={() => setVisible(true)}
                  className="button w-full md:w-auto mt-8 py-2 mb-5 px-4 text-sm md:text-lg md:py-3 md:px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center"
                >
                  Hire me
                  <i className="fa-duotone fa-solid fa-briefcase ml-2 text-xl"></i>
                </button>

                <button className="button w-full md:w-auto mt-8 py-2 mb-5 px-4 text-sm md:text-lg md:py-3 md:px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:opacity-90 hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
                  <a
                    href={resume}
                    download="resume"
                    className="flex items-center justify-center w-full h-full"
                  >
                    Resume{" "}
                    <i
                      className="fa-solid fa-file ml-2"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                </button>
                <Model
                  isOpen={visible}
                  className="modal-content"
                  overlayClassName="modal-overlay"
                  onRequestClose={() => setVisible(false)} // Allow closing on overlay click or ESC key
                  ariaHideApp={false}
                  style={{ content: {} }} // Disable hiding the main app content from screen readers
                >
                  <div className="modal-inner p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto text-center relative z-50">
                    <button
                      onClick={() => setVisible(false)}
                      className="close-modal absolute top-2 right-2 text-2xl"
                    >
                      &times;
                    </button>
                    <form className="w-full mx-auto" onSubmit={onSubmit}>
                      <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">
                          Name:
                        </label>
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
                        <label className="block text-black font-bold mb-2">
                          Company Name:
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={cname}
                          onChange={hcname}
                          className="w-full px-3 py-2 border rounded-lg text-black"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-black font-bold mb-2">
                          Email:
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={hemail}
                          className="w-full px-3 py-2 border rounded-lg text-black"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-black font-bold mb-2">
                          Mobile Number:
                        </label>
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
                        <label className="block text-black font-bold mb-2">
                          Message:
                        </label>
                        <textarea
                          name="message"
                          value={message}
                          onChange={hmessage}
                          className="w-full px-3 py-2 border rounded-lg text-black"
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
                </Model>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
