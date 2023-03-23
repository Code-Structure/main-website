import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./../custom.css";
function Footer() {
  return (
    <div>
      {" "}
      <footer id="footer" className="footer ">
        <div className="container ">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>CodeStructure.</span>
              </a>
              <p>
                One stop place for cracking your dream job. We got you covered
                with regular live classNamees, Mock interviews, Mentorship and
                much more from instructors of top MNC's.
              </p>
              <div className="social-links d-flex mt-4">
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
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-1"></div>

            <div className="col-lg-3 col-6 footer-links">
              <h4>Our Courses</h4>
              <ul>
                <li>
                  <a href="#">Frontend Development</a>
                </li>
                <li>
                  <a href="#">Backend Development</a>
                </li>
                <li>
                  <a href="#">DSA with C++</a>
                </li>
                <li>
                  <a href="#">Blockchain Development</a>
                </li>
                <li>
                  <a href="#">Build Full Stack Projects</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                <strong>Phone:</strong> +91 8979713423
                <br />
                <strong>Email:</strong> contact@thecodestructure.com
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Code Structure</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
