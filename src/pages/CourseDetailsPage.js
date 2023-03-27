import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import PrimaryNavbar from "../components/PrimaryNavbar";
import "./CourseDetails.css";
import jsonData from "./data1.json";
import axios from "axios";
import Course from "../components/Course";
function CourseDetailsPage() {
  const [data, setData] = useState();
  const [courseContent, setCourseContent] = useState([]);

  useEffect(() => {
    setData(jsonData);
    setCourseContent(jsonData.courseContent);
  }, []);

  console.log(courseContent);

  return (
    <div>
      <PrimaryNavbar />
      <section className="services">
        <div className="container ">
          <div className="section-header">
            <h2>Curriculum Details</h2>
          </div>

          <div className="row gy-4">
            {" "}
            <div className="col-lg-8 col-md-6">
              <div className=" position-relative">
                <h3>{data?.courseTitle}</h3>
                <p>{data?.courseDescription}</p>

                <h2> Course Includes</h2>
                {data?.courseIncludes.map((ele) => (
                  <p>{ele}</p>
                ))}
                <Accordion>
                  {courseContent
                    ? courseContent.map((ele) => (
                        <Accordion.Item eventKey={ele.id}>
                          <Accordion.Header>
                            {" "}
                            <h5>
                              {ele.id}. {ele.mainTitle}{" "}
                            </h5>
                          </Accordion.Header>
                          <Accordion.Body>
                            {ele.subTitles.map((ele) => (
                              <h6>{ele}</h6>
                            ))}
                          </Accordion.Body>
                        </Accordion.Item>
                      ))
                    : ""}{" "}
                </Accordion>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricecarddiv">
                <div className="cards px-5">
                  <div className="card active">
                    <ul className="priceul">
                      <li className="pack">Price</li>
                      <li id="professional" className="price bottom-bar">
                        <p>MRP : {data?.courseMRP}</p>
                        <p>MRP : {data?.courseCurrentPrice}</p>
                      </li>

                      <li>
                        <button className="btn active-btn w-100">Pay</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CourseDetailsPage;
