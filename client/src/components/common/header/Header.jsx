import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';import "./Header.css";

const Header = () => {
  function invert() {
    document.body.style.filter = "hue-rotate(150deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
      mediaItem.style.filter = " hue-rotate(150deg)";
    });
  }

  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

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
          {authenticated && (
            <Link to="/Auth">
              <button
                className="button1 ps-button1"
                onClick={() => sessionStorage.removeItem("UserDetails")}
              >
                Logout
              </button>
            </Link>
          )}
          {!authenticated && (
            <Link to="/Auth">
              <button className="button1 ps-button1">Register!</button>
            </Link>
          )}
          <li>
          <DarkModeIcon onClick={() => invert()} style={{ color: "#1eb2a6" }}/>
          </li>
          
        </nav>
      </header>
    </>
  );
};

export default Header;
