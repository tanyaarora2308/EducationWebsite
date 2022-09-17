import React from "react";
import Heading from "../common/heading/Heading";
import "./Announcements.scss";
import { announcements } from "../../dummydata";

const Announcements = () => {
  return (
    <>
      <section className="announcements">
        <Heading title="ANNOUNCEMENTS" />

        <div className="container">
          {announcements.map((a) => (
            <div class="item">
              <div class="item-in">
                <h4>{a.title}</h4>
                <div class="seperator"></div>
                <p>
                  {a.description}
                </p>
                <a href="#">
                  Date: {a.date}
                  <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Announcements;
