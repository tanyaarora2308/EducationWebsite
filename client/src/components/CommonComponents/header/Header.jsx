import Switch from '@mui/material/Switch';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [theme,setTheme] = useState("90");
  function invert() {
    if(theme === "90") setTheme("0")
    else setTheme("90")
    document.body.style.filter = `hue-rotate(${theme}deg)`;
  }
  const handleLogout = () => {
    sessionStorage.removeItem("UserDetails");
    sessionStorage.removeItem("PaymentStatus");
    sessionStorage.removeItem("RegisterData");
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
            <Link to="/playlists">Lecture Recordings</Link>
          </li>
          <li>
            <Link to="/blog">Journal</Link>
          </li>
          <li>
            <Link to="/queries">Queries</Link>
          </li>
          <li>
            <Link to="/studymaterial">Study Material</Link>
          </li>
          <li>
            <Link to="/contact">Feedback</Link>
          </li>
          <li>
            <Link to ="/profile">Profile</Link>
          </li>
          {authenticated && (
            <li>
            <Link to="/Auth">
              <button
                className="button1 ps-button1"
                onClick={handleLogout}
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
          <li className="switch">
          <Switch defaultChecked onClick={() => invert()} style={{ color: "#1eb2a6",paddingRight:"-10px",paddingTop:"-0.7em"}}/>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
