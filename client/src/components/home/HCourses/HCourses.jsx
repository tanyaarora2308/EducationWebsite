import React from "react";
import { Fade } from "react-awesome-reveal";
import swal from "sweetalert";
import { coursesCard } from "../../../dummydata";
import Heading from "../../CommonComponents/Heading";
import "./HCourses.css";

const HCourses = () => {
  const enrollButton = () => {
    swal("To enroll, contact us at +91 70113 01240! ", {
      buttons: false,
      timer: 2000,
    });
  };

  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />

          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val) => (
                <div className="items">
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <Fade duration={1500}>
                      <div className="text">
                        <h1>{val.coursesName}</h1>
                        <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label htmlFor="">(5.0)</label>
                        </div>
                        <div className="details">
                          {val.courTeacher.map((details) => (
                            <>
                              <div className="box">
                                <div className="para">
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </>
                          ))}
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  {/* <button className="outline-btn" onClick={enrollButton}>
                    ENROLL NOW !
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HCourses;
