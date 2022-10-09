import React from "react";
import Heading from "../../common/Heading";
import {JackInTheBox } from "react-awesome-reveal";
import "./HMain.css";

const HMain = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
          <JackInTheBox duration="2000" triggerOnce>
            <Heading
              subtitle="COACHIFY"
              title="Fostering brilliance and hard work in young minds."
            />
            <p>
            Unique in its kind, providing Text and Video Solutions for the NEET 2022, JEE MAIN,
              and Advanced Exams.
            </p>
            </JackInTheBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default HMain;
