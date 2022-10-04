import React from "react";
import "./footer2.css";
// import
export default function Footer() {
  return (
    <div className="top">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <p><h3>Have any Questions?</h3><br/>
            <ul>
              <li>
                <i className="fa fa-map" style={{paddingRight:"12px"}}></i>
                House No XXX, Housing Board, Ballabgarh, Faridabad, Haryana, 121004
              </li>
              <li>
                <i className="fa fa-phone-alt" style={{paddingRight:"12px"}}></i>
                +91 70113 01240
              </li>
              <li>
                <i className="fa fa-paper-plane" style={{paddingRight:"12px"}}></i>
                coachify02@gmail.com
              </li>
            </ul></p>
      </footer>
    </div>
  );
}