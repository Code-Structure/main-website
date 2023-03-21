import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import HomeAboutUSImg from "./assets/about.jpg";
import HeroImg from "./assets/hero-img.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "./assets/img/clients/client-1.png";
import client2 from "./assets/img/clients/client-2.png";
import client3 from "./assets/img/clients/client-3.png";
import client4 from "./assets/img/clients/client-4.png";
import client5 from "./assets/img/clients/client-5.png";
import client6 from "./assets/img/clients/client-6.png";
import client7 from "./assets/img/clients/client-7.png";
import client8 from "./assets/img/clients/client-8.png";
import testimonialimg1 from "./assets/img/testimonials/testimonials-1.jpg";
import testimonialimg2 from "./assets/img/testimonials/testimonials-2.jpg";
import testimonialimg3 from "./assets/img/testimonials/testimonials-3.jpg";
import testimonialimg4 from "./assets/img/testimonials/testimonials-4.jpg";
import testimonialimg5 from "./assets/img/testimonials/testimonials-5.jpg";
import Slider from "react-slick";
function App() {
  var ClientSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
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
  return (
    <div>
      {/* Start Header */}
      <section id="topbar" class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@zenxedu.com</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>+91 8979713423</span>
            </i>
          </div>
          {/* <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
      </div> */}
        </div>
      </section>
      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <h1>
              CodeStructure<span>.</span>
            </h1>
          </a>
          <nav id="navbar" class="navbar">
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
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
      {/* End Header */}

      {/* Start Hero Section */}
      <section id="hero" class="hero">
        <div class="container position-relative">
          <div class="row gy-5" data-aos="fade-in">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2 class="mb-0">
                Grab New <span>Skills.</span>
              </h2>
              <h2 class="mt-0">
                Crack Your Dream <span>Job.</span>
              </h2>
              <p>
                Unlock your coding potential and land your dream job with ZenX.
              </p>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" class="btn-get-started">
                  Explore Our Courses
                </a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2">
              <img
                src={HeroImg}
                class="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
        <div class="icon-boxes position-relative">
          <div class="container position-relative">
            <div class="row gy-4 mt-5">
              <div
                class="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bi bi-easel"></i>
                  </div>
                  <h4 class="title">
                    <a href="" class="stretched-link">
                      Live Classes
                    </a>
                  </h4>
                </div>
              </div>

              <div
                class="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bi bi-gem"></i>
                  </div>
                  <h4 class="title">
                    <a href="" class="stretched-link">
                      Mock Interviews
                    </a>
                  </h4>
                </div>
              </div>

              <div
                class="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <h4 class="title">
                    <a href="" class="stretched-link">
                      Doubt Solving
                    </a>
                  </h4>
                </div>
              </div>

              <div
                class="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bi bi-command"></i>
                  </div>
                  <h4 class="title">
                    <a href="" class="stretched-link">
                      Placement Portal
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Hero Section */}

      {/* Main Start */}
      <main id="main">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h2>About Us</h2>
              <p>
                One stop place for cracking your dream job. We got you covered
                with regular live classes, Mock interviews, Mentorship and much
                more from instructors of top MNC's.
              </p>
            </div>

            <div class="row gy-4">
              <div class="col-lg-6">
                <img
                  src={HomeAboutUSImg}
                  class="img-fluid rounded-4 mb-4"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <div class="content ps-0 ps-lg-5">
                  <p class="fs-5">
                    ZenX offers the best live training courses in the industry,
                    in collaboration with industry professionals, for
                    engineering and management students. Courses are designed to
                    help students excel in all areas, including improving soft
                    skills, technical/hard skills, and networking in the
                    industry with recruiters and hiring managers in order to
                    provide students with opportunities and a head start in
                    their careers.
                    <br />
                    <br />
                    ZenX has a dedicated Placement cell to take care of
                    students' careers off-campus and get them opportunities
                    earlier in time to ensure the best outcome of the courses.
                  </p>
                  {/* <ul>
                    <li>
                      <i class="bi bi-check-circle-fill"></i> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i> Ullamco laboris
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

        <section id="clients" class="clients">
          <div class="container" data-aos="zoom-out">
            <div class="clients-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div>
                  <Slider {...ClientSliderSettings} arrows={false}>
                    <div class="swiper-slide">
                      <img
                        src={client1}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={client2}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={client3}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={client4}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={client5}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={client6}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={client7}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={client8}
                        className="img-fluid clientSliderImg px-3"
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" class="services sections-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h2>Our Courses</h2>
              <p>
                Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                porro incidunt dolores placeat sunt id nobis omnis tiledo stran
                delop
              </p>
            </div>

            <div class="row gy-4" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-4 col-md-6">
                <div class="service-item  position-relative">
                  <div class="icon">
                    <i class="bi bi-activity"></i>
                  </div>
                  <h3>Complete DSA in C++</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a href="#" class="readmore stretched-link">
                    Enroll Now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-broadcast"></i>
                  </div>
                  <h3>Frontend Development with React</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href="#" class="readmore stretched-link">
                    Enroll Now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-easel"></i>
                  </div>
                  <h3>Backend Development with NodeJS</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a href="#" class="readmore stretched-link">
                    Enroll Now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-bounding-box-circles"></i>
                  </div>
                  <h3>Blockchain Development using Rust/Solana</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="#" class="readmore stretched-link">
                    Enroll Now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-calendar4-week"></i>
                  </div>
                  <h3>Build 5 Full Stack Web Projects for your Resume</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href="#" class="readmore stretched-link">
                    Enroll Now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="bi bi-chat-square-text"></i>
                  </div>
                  <h3>Become Open Source Developer</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="#" class="readmore stretched-link">
                    Enroll Now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="stats-counter" class="stats-counter">
          <div class="container" data-aos="fade-up">
            <div class="row gy-4 align-items-center">
              <div class="col-lg-6">
                <img src="assets/img/stats-img.svg" alt="" class="img-fluid" />
              </div>

              <div class="col-lg-6">
                <div class="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="2310"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>
                    <strong>Students enrolled</strong>
                  </p>
                </div>

                <div class="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="24"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>
                    <strong>Mentors</strong>
                  </p>
                </div>

                <div class="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="20"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>
                    <strong>Recruiters</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="testimonials" class="testimonials">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h2>Feedback of Students</h2>
              <p>
                Voluptatem quibusdam ut ullam perferendis repellat non ut
                consequuntur est eveniet deleniti fignissimos eos quam
              </p>
            </div>

            <div
              class="slides-3 swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="swiper-wrapper">
                <Slider {...FeedbackSliderSettings} arrows={false}>
                  <div class="swiper-slide">
                    <div class="testimonial-wrap">
                      <div class="testimonial-item">
                        <div class="d-flex align-items-center">
                          <img
                            src={testimonialimg1}
                            class="testimonial-img flex-shrink-0"
                            alt=""
                          />
                          <div>
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div class="stars">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          Proin iaculis purus consequat sem cure digni ssim
                          donec porttitora entum suscipit rhoncus. Accusantium
                          quam, ultricies eget id, aliquam eget nibh et. Maecen
                          aliquam, risus at semper.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="testimonial-wrap">
                      <div class="testimonial-item">
                        <div class="d-flex align-items-center">
                          <img
                            src={testimonialimg2}
                            class="testimonial-img flex-shrink-0"
                            alt=""
                          />
                          <div>
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div class="stars">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          Export tempor illum tamen malis malis eram quae irure
                          esse labore quem cillum quid cillum eram malis quorum
                          velit fore eram velit sunt aliqua noster fugiat irure
                          amet legam anim culpa.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="testimonial-wrap">
                      <div class="testimonial-item">
                        <div class="d-flex align-items-center">
                          <img
                            src={testimonialimg3}
                            class="testimonial-img flex-shrink-0"
                            alt=""
                          />
                          <div>
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div class="stars">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="testimonial-wrap">
                      <div class="testimonial-item">
                        <div class="d-flex align-items-center">
                          <img
                            src={testimonialimg4}
                            class="testimonial-img flex-shrink-0"
                            alt=""
                          />
                          <div>
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <div class="stars">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          Fugiat enim eram quae cillum dolore dolor amet nulla
                          culpa multos export minim fugiat minim velit minim
                          dolor enim duis veniam ipsum anim magna sunt elit fore
                          quem dolore.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="testimonial-wrap">
                      <div class="testimonial-item">
                        <div class="d-flex align-items-center">
                          <img
                            src={testimonialimg5}
                            class="testimonial-img flex-shrink-0"
                            alt=""
                          />
                          <div>
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div class="stars">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          Quis quorum aliqua sint quem legam fore sunt eram
                          irure aliqua veniam tempor noster veniam enim culpa
                          labore duis sunt culpa nulla illum cillum fugiat legam
                          esse veniam culpa fore.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="faq" class="faq">
          <div class="container" data-aos="fade-up">
            <div class="row gy-4">
              <div class="col-lg-4">
                <div class="content px-xl-5">
                  <h3>
                    Frequently Asked <strong>Questions</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>

              <div class="col-lg-8">
                <div
                  class="accordion accordion-flush"
                  id="faqlist"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="accordion-item">
                    <h3 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >
                        <span class="num">1.</span>
                        Non consectetur a erat nam at lectus urna duis?
                      </button>
                    </h3>
                    <div
                      id="faq-content-1"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div class="accordion-body">
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-2"
                      >
                        <span class="num">2.</span>
                        Feugiat scelerisque varius morbi enim nunc faucibus a
                        pellentesque?
                      </button>
                    </h3>
                    <div
                      id="faq-content-2"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div class="accordion-body">
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-3"
                      >
                        <span class="num">3.</span>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi?
                      </button>
                    </h3>
                    <div
                      id="faq-content-3"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div class="accordion-body">
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-4"
                      >
                        <span class="num">4.</span>
                        Ac odio tempor orci dapibus. Aliquam eleifend mi in
                        nulla?
                      </button>
                    </h3>
                    <div
                      id="faq-content-4"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div class="accordion-body">
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-5"
                      >
                        <span class="num">5.</span>
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat?
                      </button>
                    </h3>
                    <div
                      id="faq-content-5"
                      class="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div class="accordion-body">
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End Start */}

      {/* Start Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>ZenX</span>
              </a>
              <p>
                One stop place for cracking your dream job. We got you covered
                with regular live classNamees, Mock interviews, Mentorship and
                much more from instructors of top MNC's.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
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
                <strong>Email:</strong> contact@zenxedu.com
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>ZenX</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </footer>
      {/* End Footer */}
      <a
        href="#"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
      {/* <div id="preloader"></div> */}
    </div>
  );
}

export default App;
