import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <header>
        <nav className="flexSB2">
          <ul
            className={click ? "mobile-nav" : "flexSB2 "}
            onClick={() => setClick(false)}
          >
              <li>
                <Link to="/maths" id="style-2" data-replace="Maths">
                  <span>Maths</span>
                </Link>
              </li>
              <li>
                <Link to="/chemistry" id="style-2" data-replace="Chemistry">
                  <span>Chemistry</span>
                </Link>
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
