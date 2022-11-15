import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CommonComponents/header/Header.css";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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
            <Link to="/updateTeacher">Update Teacher</Link>
          </li>
          {/* <li>
            <Link to="/updateStudent">Update Student</Link>
          </li> */}
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
                <button className="button1 ps-button1">Login!</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
