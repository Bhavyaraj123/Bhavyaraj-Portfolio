import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Profskills from "./components/Profskills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import  Footer from "./components/Footer"

function App() {
  return (
      <div className="bg-custom-bg text-white w-full h-full overflow-hidden">
        <Navbar Home="Home" About="About" Experience="Experience" Skills="Skills" Contact="Contact" Project="Project"/>
        <Home/>
        <Skills />
        <About/>
        <Experience/>
        <Profskills/>
        <Project/>
       
       <Contact/>
       <Footer/>
    </div>    

  );
}

export default App;
