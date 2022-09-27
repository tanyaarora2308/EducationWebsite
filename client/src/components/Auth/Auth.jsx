import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import "./Auth.css";
import axios from "axios";

const Auth = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [userType, setUserType] = useState("student");
  const [containerActive, setContainerActive] = useState(false);
  const [data, setData] = useState(initialState);
  // const [confirmpassword, setConfirmPassword] = useState(true);

  const signUpButton = () => {
    setContainerActive(true);
  };
  const signInButton = () => {
    setContainerActive(false);
  };

  const handleChange = (e) => {
    const userType = e.target.value;
    setUserType(e.target.value);
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const PostData = async (e) => {
  //   // setConfirmPass(true);
  //   e.preventDefault();

  //   var options = {
  //     method: "POST",
  //     url: "localhost:5000/auth/register",
  //     headers: {
  //       Accept: "*/*",
  //       "Content-Type": "application/json",
  //     },
  //     data: { name: "Shailender", email: "shail@gmail.com", password: "shail" },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  // };

  const submitHandler=(e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/auth/register", data).then(response =>{
      console.log(response);
    }).catch(error => {
      console.log(error)
    })
    // console.log(data);
  }


  const resetForm = () => {
    setData(initialState);
    // setConfirmPass(confirmPass);
  };

  return (
    <>
      <Header />
      <div className="signForms">
        <div
          className={`box  ${containerActive && "right-panel-active"}`}
          id="container"
        >
          {containerActive ? (
            <>
              <div className="sign-up-container">
                <div>
                  <form method="POST" onSubmit={submitHandler}>
                    <h1 className="font-effect-anaglyph">Create Account</h1>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={data.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      value={data.confirmpassword}
                      onChange={handleInputChange}
                    />
                    <span
                      style={{
                        color: "red",
                        fontWeight: "600",
                        fontSize: "12px",
                        // display: confirmPass ? "none" : "block",
                      }}
                    >
                      {/* *Confirm password is not same */}
                    </span>
                    <button className="signup" type="submit">
                      Sign Up
                    </button>
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
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="userType"
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
                    className="selectBox"
                  >
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                  </select>
                  <a href="#">Forgot your password?</a>
                  <Link to={userType === "admin" ? "/adminHome" : "/"}>
                    <button className="signin">Sign In</button>
                  </Link>
                  <a
                    onClick={() => setContainerActive(!containerActive)}
                    className="mobile-auth"
                  >
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
    </>
  );
};
export default Auth;
