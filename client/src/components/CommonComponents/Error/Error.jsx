import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <JackInTheBox duration={2000}>
    <div className="error">
      
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <p>Oops! Looks like our developer fell asleep :(</p><br/>
      <p>Just kidding, You need to login to access this page. </p>
      <div class="link-container">
        <Link
          to="/auth"
          class="more-link"
        >
          <button>Login</button>
        </Link>
      </div>
      
    </div></JackInTheBox>
  );
};

export default Error;
