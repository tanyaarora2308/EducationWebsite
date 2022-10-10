import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../CommonComponents/header/Header.css";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [theme, setTheme] = useState("130");
  function invert() {
    if (theme === "130") setTheme("0");
    else setTheme("130");

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
            <Link to="/queries">Queries</Link>
          </li>
          <li>
            <Link to="/announcements">Announcements</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/blog">Journal</Link>
          </li>
          <li>
            <Link to="/feedbackdisplay">View Feedbacks</Link>
          </li>
          <li>
            <Link to="/announcementForm">Add Announcement</Link>
          </li>
          <li>
            <Link to="/playlistForm">Add Playlists</Link>
          </li>
          <li>
            <Link to="/blogForm">Add Blogs</Link>
          </li>
          <li>
            <Link to="/studymaterialForm">Add Study Material</Link>
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
