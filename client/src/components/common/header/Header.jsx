import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Switch from '@mui/material/Switch';


const Header = () => {
  const [theme,setTheme] = useState("130");
  function invert() {
    if(theme === "130") setTheme("0")
    else setTheme("130")

    document.body.style.filter = `hue-rotate(${theme}deg)`;
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
          <li style={{padding:"30px 10px 30px 0px"}}>
          <Switch defaultChecked onClick={() => invert()} style={{ color: "#1eb2a6",paddingRight:"-10px"}}/>
          </li>
          
        </nav>
      </header>
    </>
  );
};

export default Header;
