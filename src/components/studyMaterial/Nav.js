import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <header>
        <nav className="flexSB1">
          <ul
            className={click ? "mobile-nav" : "flexSB1 "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/maths">Maths</Link>
            </li>
            <li>
              <Link to="/chemistry">Chemistry</Link>
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

export default Nav;
