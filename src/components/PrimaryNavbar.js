import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSpinner,
} from "@fortawesome/free-brands-svg-icons";
function PrimaryNavbar() {  
  return (
    <div>
      <section id="topbar" className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">
                contact@thecodestructure.com
              </a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+91 8979713423</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a
              href="https://www.instagram.com/thecodestructure/"
              className="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/codestructure"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <h1>
              CodeStructure<span>.</span>
            </h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#faq">FAQ's</a>
              </li>
            </ul>
          </nav>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </div>
  );
}

export default PrimaryNavbar;
