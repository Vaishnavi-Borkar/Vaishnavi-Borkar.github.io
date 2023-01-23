import "./Intro.css"
import resume from "../../Images/resume.png"
const Intro = () => {
    return (
        <div className="intro" id="home">
            <div className="intro-left">
                <div className="i-name">
                    <span>I Am </span>
                    <span>Vaishnavi Borkar</span>
                    <span>Full Stack Web Developer</span>
                    {/* <span>Strong in design and integration with intuitive
                        problem-solving skills. Proficient in JavaScript, React.js,
                        HTML and CSS. Passionate about implementing and
                        launching new projects. Looking to start my career as
                        an entry-level web developer with a reputed firm
                        driven by technology.</span> */}
                    <span>
                        <a href="https://github.com/Vaishnavi-Borkar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DNfRoZpiwEK_kRMszR86CIuP_1ILHJCtQGjPk28ccm6r2_6prEa0V7tzQEic5Ygfwhg&usqp=CAU" /></a>
                        <a href="https://www.linkedin.com/in/vaishnavi-borkar21/"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/linkedin-icon-11-256.png" /></a>
                    </span>
                </div>
                {/* <div className="i-links">
                    <a href="https://github.com/Vaishnavi-Borkar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DNfRoZpiwEK_kRMszR86CIuP_1ILHJCtQGjPk28ccm6r2_6prEa0V7tzQEic5Ygfwhg&usqp=CAU" /></a>
                    <a href="https://www.linkedin.com/in/vaishnavi-borkar21/"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/linkedin-icon-11-256.png" /></a>
                </div> */}
            </div>
            {/* <div className="profile-img">

                <img src={resume} alt="img" className="my-img" />
            </div> */}
            <section>
                <div class="profile-box">
                    <img src={resume} alt="img" />

                    <div className="box-content">
                        <h3>Vaishnavi Borkar</h3>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Intro;