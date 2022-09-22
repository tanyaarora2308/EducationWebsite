import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [userType,setUserType] = useState("student");
  const [containerActive, setContainerActive] = useState(false);
  const signUpButton = () => {
    setContainerActive(true);
  };
  const signInButton = () => {
    setContainerActive(false);
  };

  const handleChange = (e) => {
    const userType = e.target.value;
    setUserType(e.target.value);
    console.log(userType);
    // if(userType === "admin") setAdmin(true);
  };

  return (
    <div className="signForms">
      <div
        className={`box  ${containerActive && "right-panel-active"}`}
        id="container"
      >
        {containerActive ? (
          <>
            <div className="sign-up-container">
              <div>
                <form action="#">
                  <h1 className="font-effect-anaglyph">Create Account</h1>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button className="signup">Sign Up</button>
                  <a
                    onClick={() => {
                      setContainerActive(false);
                    }}
                    className="mobile-auth"
                  >
                    Account already exists? Login!
                  </a>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1 className="font-effect-anaglyph">Sign in</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <label
                  for="userType"
                  style={{
                    textAlign: "left",
                    color: "grey",
                    paddingTop: " 10px",
                    paddingBottom: "10px",
                  }}
                >
                  Choose user type:
                </label>
                <select
                  name="userType"
                  value={userType}
                  onChange={handleChange}
                  placeholder="User Type"
                  style={{ padding: "10px 20px" }}
                  class="selectBox"
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
                <a href="#">Forgot your password?</a>
                <Link to = {userType === "admin"?  "/adminHome" : "/"} >
                  <button className="signin">
                    Sign In
                  </button>
                </Link>
                <a onClick={() => setContainerActive(!containerActive)} className="mobile-auth">
                  New user? Register!
                </a>
              </form>
            </div>
          </>
        )}

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-effect-3d">Come On!</h1>
              <p className="font-effect-emboss">Start Your Journey With Us</p>
              <button className="ghost" onClick={signInButton} id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-effect-3d">No Account?</h1>
              <p className="font-effect-emboss mobile-auth">
                No Problem! Just Sign Up Here
              </p>
              <button className="ghost " onClick={signUpButton} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
