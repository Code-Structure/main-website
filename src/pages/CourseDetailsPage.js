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

  let img1 = "https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg";
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
                <div className="courseheading mb-5">
                  <h3>{data?.courseTitle}</h3>
                  <p>{data?.courseDescription}</p>
                </div>
                <div className="listcourse">
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
                              <ul>
                                {ele.subTitles.map((ele) => (
                                  <li>{ele}</li>
                                ))}
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))
                      : ""}{" "}
                  </Accordion>
                </div>
                <div className="courseincludediv my-5">
                  <h3> Course Includes</h3>
                  {data?.courseIncludes.map((ele) => (
                    <p>{ele}</p>
                  ))}{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricecarddiv">
                <div className="cards px-5">
                  <div className="card active">
                    <img
                      src={img1}
                      alt="courseimg"
                      className="border-rounded"
                    />
                    <ul className="">
                      <li className="">Price</li>
                      <li className="">
                        <p>MRP : {data?.courseMRP}</p>
                        <p>MRP : {data?.courseCurrentPrice}</p>
                      </li>

                      <button className="btn active-btn w-100">Pay</button>
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
