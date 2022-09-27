import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header_common.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <header className="header_common">
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/announcements">Announcements</Link>
            </li>
            <li>
              <Link to="/studyMaterial">Study Material</Link>
            </li>
            <li>
              <Link to="/blog">Journal</Link>
            </li>
            <li>
              <Link to="/queries">Queries</Link>
            </li>
            <li>
              <Link to="/contact">Feedback</Link>
            </li>
            <li>
              <Link to="/announcementForm">AnnouncementForm</Link>
            </li>
            <li>
              <Link to="/feedbackdisplay">All Feedbacks</Link>
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