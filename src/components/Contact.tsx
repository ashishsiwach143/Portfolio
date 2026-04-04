import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/ashish-siwach-01795b328/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — ashish-siwach
              </a>
            </p>
            <p>
              <a
                href="mailto:ashishforwork051@gmail.com"
                data-cursor="disable"
              >
                ashishforwork051@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+918377886639" data-cursor="disable">
                +91 8377886639
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Information Technology, Bharati Vidyapeeth College of
              Engineering, Pune — 2023–Present
            </p>
            <p>
              12th, D.A.V. Public School, Sector 14, Faridabad — 2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ashishsiwach143"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-siwach-01795b328/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/AshishSiwach837"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              X (Twitter) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ashish Siwach</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
