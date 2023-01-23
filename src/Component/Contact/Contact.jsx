import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact">
    <div className="contact">
      <h2 className="cont-title"> Contact Me</h2>
      <div className="con-flex">
        <div className="cont-box">
          <div className="cont-email">
            <MdOutlineEmail className="contact-icon" />
            <h4 className="text">Email</h4>
            <h5 className="text">vaishnaviborkar29@gmail.com</h5>
            <a
              href="mailto:vaishnaviborkar29@gmail.com"
              target="_blank"
              className="cont-link"
            >
              Send a message
            </a>
          </div>
          <div className="cont-email">
            <BsFillTelephoneFill className="contact-icon" />
            <h4 className="text">Contact</h4>
            <h5 className="text">+91-8668671404</h5>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              className="cont-link"
            >
              Send a message
            </a>
          </div>
        </div>
        <div className="input">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="nameinput"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="nameinput"
            />
            <input
              name="message"
              placeholder="Your message"
              className="msg-input"
            />
            <input type="submit" className="cont-btn" />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
