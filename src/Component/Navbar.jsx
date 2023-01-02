import "./Navbar.css"
import Intro from "./Intro/Intro";
import logo from "../Images/Logo.png"
import { BiArrowToBottom } from "react-icons/bi";
import VaishnaviResume from "../Images/VaishnaviResume.pdf"
const Navbar = () => {
    return (
        <>
            <div className="wrapper">

                <div className="logo-side">
                    <div className="name">
                        <img src={logo} className="logo" />

                    </div>
                </div>
                <div className="menu-side">
                    <div className="list">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Project</li>

                            <li>Contacts</li>

                        </ul>
                    </div>


                    <button className="Down-button">
                        <a href={VaishnaviResume} download className="Download">
                            {/* <BiArrowToBottom />  Resume */}
                        </a>
                        <BiArrowToBottom />  Resume
                    </button>



                </div>


            </div>
            <Intro />
        </>

    )
}

export default Navbar;
