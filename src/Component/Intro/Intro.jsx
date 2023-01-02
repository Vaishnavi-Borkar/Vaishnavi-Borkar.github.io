import "./Intro.css"
import resume from "../../Images/resume.png"
const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="name">
                    <span>I Am </span>
                    <span>Vaishnavi Borkar</span>
                    <span>Strong in design and integration with intuitive
                        problem-solving skills. Proficient in JavaScript, React.js,
                        HTML and CSS. Passionate about implementing and
                        launching new projects. Looking to start my career as
                        an entry-level web developer with a reputed firm
                        driven by technology.</span>
                </div>
            </div>
            <div className="profile-img">
                <img src={resume} alt="img" className="my-img" />
            </div>
        </div>
    )
}
export default Intro;