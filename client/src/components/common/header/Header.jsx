import { useState,useEffect } from "react";
import Switch from '@mui/material/Switch';
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
    <nav className="navigation">
      <a href="/" className="brand-name">
        Coachify
      </a>
      <a
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {isNavExpanded ? (
          <i className="fa fa-times"> </i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </a>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
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
          <li className="switch">
          <Switch defaultChecked onClick={() => invert()} style={{ color: "#1eb2a6",paddingRight:"-10px",paddingTop:"-0.7em"}}/>
          </li>
          {authenticated && (
            <li>
            <Link to="/Auth">
              <button
                className="button1 ps-button1"
                onClick={() => sessionStorage.removeItem("UserDetails")}
              >
                Logout
              </button>
            </Link>
            </li>
          )}
          {!authenticated && (
            <li>
            <Link to="/Auth">
              <button className="button1 ps-button1">Register!</button>
            </Link>
            </li>
          )}
        </ul>
        
      </div>
    </nav>
  );
}
