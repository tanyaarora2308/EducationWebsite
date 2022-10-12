import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <>
      <header>
        <nav className="flexSB2">
          <ul>
              <li>
                <Link to="/announcements/mathsannouncements" id="style-2" data-replace="Maths">
                  <span>Maths</span>
                </Link>
              </li>
              <li>
                <Link to="/announcements/mathsannouncements" id="style-2" data-replace="Chemistry">
                  <span>Chemistry</span>
                </Link>
              </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
