import React from "react";
import {Link} from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
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
      <p>Just kidding, Please login to access this page. </p>
      <div class="link-container">
        <Link
          to="/auth"
          class="more-link"
        >
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
