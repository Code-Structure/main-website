import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
function App() {
  /**
   * Template Name: Impact - v1.2.0
   * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
   * Author: BootstrapMade.com
   * License: https://bootstrapmade.com/license/
   */
  document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /**
     * Sticky Header on Scroll
     */
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;

      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeader.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeader.classList.remove("sticked");
          if (nextElement)
            nextElement.classList.remove("sticked-header-offset");
        }
      };
      window.addEventListener("load", headerFixed);
      document.addEventListener("scroll", headerFixed);
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll("#navbar a");

    function navbarlinksActive() {
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        let position = window.scrollY + 200;

        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    }
    window.addEventListener("load", navbarlinksActive);
    document.addEventListener("scroll", navbarlinksActive);

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");

    document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        mobileNavToogle();
      });
    });

    function mobileNavToogle() {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavShow.classList.toggle("d-none");
      mobileNavHide.classList.toggle("d-none");
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navbar a").forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

    navDropdowns.forEach((el) => {
      el.addEventListener("click", function (event) {
        if (document.querySelector(".mobile-nav-active")) {
          event.preventDefault();
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("dropdown-active");

          let dropDownIndicator = this.querySelector(".dropdown-indicator");
          dropDownIndicator.classList.toggle("bi-chevron-up");
          dropDownIndicator.classList.toggle("bi-chevron-down");
        }
      });
    });

    /**
     * Initiate glightbox
     */
    // const glightbox = GLightbox({
    //   selector: ".glightbox",
    // });

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      };
      window.addEventListener("load", togglescrollTop);
      document.addEventListener("scroll", togglescrollTop);
      scrollTop.addEventListener(
        "click",
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    }

    /**
     * Initiate Pure Counter
     */
    // new PureCounter();

    /**
     * Clients Slider
     */
    // new Swiper(".clients-slider", {
    //   speed: 400,
    //   loop: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   slidesPerView: "auto",
    //   pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     clickable: true,
    //   },
    //   breakpoints: {
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 40,
    //     },
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 60,
    //     },
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 80,
    //     },
    //     992: {
    //       slidesPerView: 6,
    //       spaceBetween: 120,
    //     },
    //   },
    // });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    // new Swiper(".slides-1", {
    //   speed: 600,
    //   loop: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   slidesPerView: "auto",
    //   pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    // new Swiper(".slides-3", {
    //   speed: 600,
    //   loop: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   slidesPerView: "auto",
    //   pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   breakpoints: {
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 40,
    //     },

    //     1200: {
    //       slidesPerView: 3,
    //     },
    //   },
    // });

    /**
     * Porfolio isotope and filter
     */
    // let portfolionIsotope = document.querySelector(".portfolio-isotope");

    // if (portfolionIsotope) {
    //   let portfolioFilter = portfolionIsotope.getAttribute(
    //     "data-portfolio-filter"
    //   )
    //     ? portfolionIsotope.getAttribute("data-portfolio-filter")
    //     : "*";
    //   let portfolioLayout = portfolionIsotope.getAttribute(
    //     "data-portfolio-layout"
    //   )
    //     ? portfolionIsotope.getAttribute("data-portfolio-layout")
    //     : "masonry";
    //   let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
    //     ? portfolionIsotope.getAttribute("data-portfolio-sort")
    //     : "original-order";

    //   window.addEventListener("load", () => {
    //     let portfolioIsotope = new Isotope(
    //       document.querySelector(".portfolio-container"),
    //       {
    //         itemSelector: ".portfolio-item",
    //         layoutMode: portfolioLayout,
    //         filter: portfolioFilter,
    //         sortBy: portfolioSort,
    //       }
    //     );

    //     let menuFilters = document.querySelectorAll(
    //       ".portfolio-isotope .portfolio-flters li"
    //     );
    //     menuFilters.forEach(function (el) {
    //       el.addEventListener(
    //         "click",
    //         function () {
    //           document
    //             .querySelector(
    //               ".portfolio-isotope .portfolio-flters .filter-active"
    //             )
    //             .classList.remove("filter-active");
    //           this.classList.add("filter-active");
    //           portfolioIsotope.arrange({
    //             filter: this.getAttribute("data-filter"),
    //           });
    //           if (typeof aos_init === "function") {
    //             aos_init();
    //           }
    //         },
    //         false
    //       );
    //     });
    //   });
    // }

    /**
     * Animation on scroll function and init
     */
    // function aos_init() {
    //   AOS.init({
    //     duration: 1000,
    //     easing: "ease-in-out",
    //     once: true,
    //     mirror: false,
    //   });
    // }
    // window.addEventListener("load", () => {
    //   aos_init();
    // });
  });
  return (
    <div>
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
