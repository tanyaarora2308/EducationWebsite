import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // const [click, setClick] = useState(false);

  return (
    <>
      <header className="header_home">
        <nav className="flexSB">
          <h3 className="headerTitle">Coachify</h3>
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
          <Link to="/Auth">
            <button className="button1 ps-button1">Register!</button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
