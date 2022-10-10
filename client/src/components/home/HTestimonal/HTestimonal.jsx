import React from "react";
import { Slide } from "react-awesome-reveal";
import { testimonal } from "../../../dummydata";
import Heading from "../../CommonComponents/Heading";
import "./HTestimonial.css";

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

          <div className="content grid2">
            {testimonal.map((val) => (
              <Slide duration={2000} direction="up">
                <div className="items shadow">
                  <div className="box flex">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa fa-quote-left icon"></i>
                    </div>
                    <div className="name">
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
