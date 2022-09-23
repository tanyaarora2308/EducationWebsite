import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header_admin.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <header className="header_admin">
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <h3 className="headerTitle">Coachify</h3>
            <li>
              <Link to="/Auth">Register</Link>
            </li>
            <li>
              <Link to="/queries">Queries</Link>
            </li>
            <li>
              <Link to="/announcementForm">AnnouncementForm</Link>
            </li>
            <li>
              <Link to="/feedbackdisplay">View Feedbacks</Link>
            </li>
            <li>
              <Link to="/studyMaterialForm">StudyMaterialForm</Link>
            </li>
          </ul>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
