import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import swal from "sweetalert";
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
    axios
      .post("http://localhost:5000/auth/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signUpClick = () => {
    setData(initialState);
    {
      isSubmit &&
        swal("Signed Up Successfully!", {
          buttons: false,
          timer: 1000,
        });
    }
  };

  const signInClick = () => {
    setData(initialState);
    swal("Logged in Successfully!", {
      buttons: false,
      timer: 1000,
    });
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
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
                    <span>{formErrors.name}</span>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
                    />
                    <span>{formErrors.email}</span>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      onChange={handleInputChange}
                    />
                    <span>{formErrors.password}</span>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      pattern={data.password}
                      value={data.confirmpassword}
                      onChange={handleInputChange}
                    />
                    {/* <span className="errorMessage">Passwords don't match!</span> */}
                    <button
                      className="signup"
                      type="submit"
                      // onClick={signUpClick}
                    >
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
