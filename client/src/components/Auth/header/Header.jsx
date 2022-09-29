import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header_auth.css";

const Header = () => {
  return (
    <>
      <header className="header_admin">
        <nav className="flexSB">
            <h3 className="headerTitle">Coachify</h3>
            <ul>
            <li>
              <Link to="/Auth">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
