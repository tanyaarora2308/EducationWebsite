import React from "react";
import Heading from "../../common/Heading";
import "./HMain.css";

const HMain = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="COACHIFY"
              title="Fostering brilliance and hard work in young minds."
            />
            <p>
            Unique in its kind, providing Text and Video Solutions for the NEET 2022, JEE MAIN,
              and Advanced Exams.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default HMain;
