// import logo from './logo.svg';
import "./App.css";
import About from "./Component/About";

import Contact from "./Component/Contact";

import Footer from "./Component/Footer";
import Gits from "./Component/Githubs";

import Introduction from "./Component/Intoduction";

import Navbar from "./Component/nav";

import Projects from "./Component/Projects";
import MySkills from "./Component/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Introduction />
      <MySkills />
      <Projects />
      <Gits />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
