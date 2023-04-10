import "@fortawesome/fontawesome-svg-core/styles.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeAboutUSImg from "../assets/about.jpg";
import HeroImg from "../assets/hero-img.svg";
import testimonialimg1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonialimg2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonialimg3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonialimg4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonialimg5 from "../assets/img/testimonials/testimonials-5.jpg";
import Footer from "../components/Footer";
import PrimaryNavbar from "../components/PrimaryNavbar";
import "../custom.css";

function HomePage() {
  var ClientSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var FeedbackSliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div>
      <div>
        <PrimaryNavbar />

        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2 className="mb-0">
                  Grab New <span>Skills.</span>
                </h2>
                <h2 className="mt-0">
                  Crack Your Dream <span>Job.</span>
                </h2>
                <p>Unlock your coding potential .</p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#courses" className="btn-get-started">
                    Explore Our Courses
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  src={HeroImg}
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-out"
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-easel"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
                      </svg>{" "}
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Live Lectures
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-gem"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
                      </svg>{" "}
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Mock Interviews
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>{" "}
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Doubt Solving
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-command"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z" />
                      </svg>{" "}
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Mentorship Sessions
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>About Us</h2>
                <p>
                  One stop place for cracking your dream job. We got you covered
                  with regular live class, Mock interviews, Mentorship and much
                  more from instructors of top MNC's.
                </p>
              </div>

              <div className="row gy-4">
                <div className="col-lg-6">
                  <img
                    src={HomeAboutUSImg}
                    className="img-fluid rounded-4 mb-4"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <div className="content ps-0 ps-lg-5">
                    <p className="fs-5">
                      &nbsp; &nbsp; CodeStructure offers the best live training
                      courses in the industry, in collaboration with industry
                      professionals, for students of any background. Courses are
                      designed to help students excel in all areas, including
                      improving soft skills, technical/hard skills, and
                      networking in the industry with recruiters and hiring
                      managers in order to provide students with opportunities
                      and a head start in their careers. <br />
                      <br /> &nbsp; &nbsp;We offer courses on DSA with C++/JAVA,
                      Frontend Development, Backend Development, Operating
                      Systems, Database Management, OOPS and much more.
                      CodeStructure provides all in one package to unlock your
                      true potential.
                    </p>
                    {/* <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="courses" className="services sections-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Our Courses</h2>
              </div>

              <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-4 col-md-6">
                  <a className="link">
                    <div className="service-item  position-relative">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          class="bi bi-activity"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                          />
                        </svg>{" "}
                      </div>
                      <h3>Complete DSA in C++</h3>
                      <p>
                        Starting from teaching the C++ language to all the DSA
                        concepts would be picked up to excel at problem solving.
                      </p>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdn2VQS4-jUZtp94QXkc7CUTA7T3EgFVxwGy7lacxWssd7Qjg/viewform"
                        className="readmore stretched-link"
                      >
                        Enroll Now <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-broadcast"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                      </svg>{" "}
                    </div>
                    <h3>Complete DSA in JAVA</h3>
                    <p>
                      Starting from teaching the JAVA language to all the DSA
                      concepts would be picked up to excel at problem solving.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdn2VQS4-jUZtp94QXkc7CUTA7T3EgFVxwGy7lacxWssd7Qjg/viewform"
                      className="readmore stretched-link"
                    >
                      Enroll Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-easel"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
                      </svg>{" "}
                    </div>
                    <h3>Frontend Development with ReactJS</h3>
                    <p>
                      Become a Pro frontend developer by learning all concepts
                      from basic. All the way from HTML/CSS/JS and then moving
                      to React. Also create amazing projects on the go.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdn2VQS4-jUZtp94QXkc7CUTA7T3EgFVxwGy7lacxWssd7Qjg/viewform"
                      className="readmore stretched-link"
                    >
                      Enroll Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-bounding-box-circles"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>{" "}
                    </div>
                    <h3>Backend Development with NodeJS</h3>
                    <p>
                      Become a Pro Backend developer by learning all concepts
                      from basic. All the way from Javascript, ExpressJS,
                      MongoDB, API’s, NodeJS. Also create amazing projects on
                      the go.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdn2VQS4-jUZtp94QXkc7CUTA7T3EgFVxwGy7lacxWssd7Qjg/viewform"
                      className="readmore stretched-link"
                    >
                      Enroll Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          ī
          <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Feedback of Students</h2>
                {/* <p>
                Voluptatem quibusdam ut ullam perferendis repellat non ut
                consequuntur est eveniet deleniti fignissimos eos quam
              </p> */}
              </div>

              <div
                className="slides-3 swiper"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="swiper-wrapper">
                  <Slider {...FeedbackSliderSettings} arrows={true}>
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div className="d-flex align-items-center">
                            <img
                              src={testimonialimg1}
                              className="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Karan</h3>
                              <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                          </div>
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            This course helped me a lot to understand Data
                            structures and algorithms from basics to an advanced
                            level. The course was well mentored and the content
                            was very well presented. Thank you CodeStructure.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div className="d-flex align-items-center">
                            <img
                              src={testimonialimg2}
                              className="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Shivam</h3>
                              <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                          </div>
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>I
                            took Frontend Development course and instructors are
                            amazing. It’s was a very helpful course. I will
                            surely recommend it to my friends and colleagues.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div className="d-flex align-items-center">
                            <img
                              src={testimonialimg3}
                              className="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Sai</h3>
                              <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                          </div>
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Best in Industry course with Affordable prices. The
                            instructors have worked in top MNC’s and have lots
                            of industry experience. Surely would recommend this
                            everyone.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div className="d-flex align-items-center">
                            <img
                              src={testimonialimg4}
                              className="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Sudeep</h3>
                              <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                          </div>
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            The tutors featured in the courses on various
                            frontend subjects are extremely competent, and often
                            from high-profile and prestigious companies. The
                            courses are mostly structured pretty well, and the
                            content tends to be of a professional standard and
                            ready for production environments, which often isn’t
                            the case with other sites I’ve used previously.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div className="d-flex align-items-center">
                            <img
                              src={testimonialimg5}
                              className="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Anshika</h3>
                              <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                          </div>
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>I was
                            able to develop my coding skills through this
                            course. The training had industry oriented problems
                            that required extremely sound logic, but the mentor
                            took his time explaining every line of code and
                            giving homework assignments similar to the training
                            problems. Everyone should take this course, in my
                            opinion.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </section>
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="content px-xl-5">
                    <h3>
                      Frequently Asked <strong>Questions</strong>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-8">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {" "}
                        <span className="num">1.</span>
                        Science Field or Tech Background. Am I eligible?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes! All college students, graduates, and working
                        professionals who are willing to put in the effort to
                        break into the field of computer science, regardless of
                        their degree, graduation percentage, or branch, are
                        eligible for our course.{" "}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        {" "}
                        <span className="num">2.</span>
                        Why is collaborative learning so important?
                      </Accordion.Header>
                      <Accordion.Body>
                        Students often learn from each other, and a majority of
                        learning in an organization is learning – or learning in
                        the flow of work. It’s important to encourage and
                        capture organization-wide collaboration for increased
                        productivity, social learning, and cross-team
                        communication.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        {" "}
                        <span className="num">3.</span>
                        How many mocks, mentorship sessions & live doubt
                        sessions will I get?
                      </Accordion.Header>
                      <Accordion.Body>
                        You can take 15+ mentorship sessions, mock interviews &
                        doubt-solving sessions in total. You can ask as many
                        doubts as you want through our Live Chat Feature :)
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        {" "}
                        <span className="num">4.</span>
                        Are the sessions live or recorded?
                      </Accordion.Header>
                      <Accordion.Body>
                        All the sessions are live online classNamees, which are
                        held thrice a week. The schedule of sessions (days and
                        timings) is shared with the students well in advance.
                        However, if a student is unable to attend a session,
                        recordings are also made available to all the students.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        {" "}
                        <span className="num">5.</span>
                        Is there an installment option?
                      </Accordion.Header>
                      <Accordion.Body>
                        You can request a call back and discuss about the
                        process of installment fee process with our Academic
                        Counselors.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* End Start */}

        <Footer />

        <a
          href="#"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
        {/* <div id="preloader"></div> */}
      </div>
    </div>
  );
}

export default HomePage;
