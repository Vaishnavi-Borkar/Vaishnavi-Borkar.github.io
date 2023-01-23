// import logo from './logo.svg';
import "./App.css";
import AboutMe from "./Component/Aboutme/AboutMe";
import Contact from "./Component/Contact/Contact";
import Github from "./Component/Github/Github";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Project from "./Component/Project/Project";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Project />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
