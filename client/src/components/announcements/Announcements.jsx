import React from "react";
import "./Announcements.scss";
import { announcements } from "../../dummydata";
import Back from "../common/Back";

const Announcements = () => {
  return (
    <>
    <Back title="ANNOUNCEMENTS" />
      <section className="announcements">
        
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
