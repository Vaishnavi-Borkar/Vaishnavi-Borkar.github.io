import "./AboutMe.css";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const AboutMe = () => {
  return (
    <div id="about">
      <div className="about-me">
        <p className="about-title">About Me</p>

        <div className="about-grid">
          <div className="about-allcard">
            <div className="about-card">
              <FiUsers className="about-logo" />
              <h5 className="about-text">Coding Practice</h5>
              <p className="about-p">1000+ Hours</p>
            </div>
            <div className="about-card">
              <VscFolderLibrary className="about-logo" />
              <h5 className="about-text">Projects</h5>
              <p className="about-p"> 4 Completed</p>
            </div>
          </div>
        </div>
        <p className="meee">
          Strong in design and integration with intuitive problem-solving
          skills. Proficient in JavaScript, React.js, HTML and CSS. Passionate
          about implementing and launching new projects. Looking to start my
          career as an entry-level web developer with a reputed firm driven by
          technology.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
