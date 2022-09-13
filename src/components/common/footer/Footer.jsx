import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Coachify</h1><br/>
            <span>EDUCATION & LEARNING WITH COACHIFY</span>
            <p>
              Come Build Your Bright Future with us!
            </p>
          </div>
          <div className="box last">
            <h3>Have any Questions?</h3><br/>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                House No XXX, Housing Board, Ballabgarh, Faridabad, Haryana, 121004
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +91 70113 01240
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@coachify.com
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Tanya Arora
        </p>
      </div>
      </footer>
      
    </>
  );
};

export default Footer;
