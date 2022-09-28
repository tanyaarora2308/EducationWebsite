import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import swal from "sweetalert";
import "./Auth.css";
import axios from "axios";
import FormInput from "../common/formInput";

const Auth = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [focused, setFocused] = useState(false);
  const [data, setData] = useState(initialState);
  const handleFocus = (e) => {
    setFocused(true);
  };
  const SignUpInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: data.password,
      required: true,
    },
  ];
  const SignInInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Incorrect password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];
  const [userType, setUserType] = useState("student");
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
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    // e.preventDefault();
    setData(initialState);
    if (data.name && data.password && data.confirmpassword && data.email)
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
    data.name &&
      data.password &&
      data.confirmpassword &&
      data.email &&
      swal("Signed Up Successfully!", {
        buttons: false,
        timer: 1000,
      });
    // window.location.reload(false);
  };

  const signInClick = () => {
    setData(initialState);
    data.name != "" &&
      data.password != "" &&
      swal("Logged in Successfully!", {
        buttons: false,
        timer: 1000,
      });
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
                    {SignUpInputs.map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={data[input.name]}
                        onChange={handleInputChange}
                      />
                    ))}
                    <button
                      className="signup"
                      type="submit"
                      onClick={signUpClick}
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
                  {SignInInputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={data[input.name]}
                      onChange={handleInputChange}
                    />
                  ))}
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
                    <button className="signin" onClick={signInClick}>
                      Sign In
                    </button>
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
