import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../common/header/Header";
import swal from "sweetalert";
import "./Auth.css";
import axios from "axios";
import FormInput from "../common/formInput";

const Auth = () => {
  const history = useHistory();

  //Disables back arrow key in browser
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  const registerInitialState = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    userType: "",
  };
  const loginInitialState = {
    email: "",
    password: "",
  };
  const [registerData, setRegisterData] = useState(registerInitialState);
  const [loginData, setLoginData] = useState(loginInitialState);

  const SignUpInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za -z0-9]{3,16}$",
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
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: registerData.password,
      required: true,
    },
  ];
  const SignInInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
  ];
  const [containerActive, setContainerActive] = useState(false);

  const signUpButton = () => {
    setContainerActive(true);
  };
  const signInButton = () => {
    setContainerActive(false);
  };

  const handleRegisterInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const RegisterHandler = (e) => {
    e.preventDefault();
    // if (
    //   registerData.name &&
    //   registerData.password &&
    //   registerData.confirmpassword &&
    //   registerData.email &&
    //   registerData.userType
    // ) {
    axios
      .post("http://localhost:5000/auth/register", registerData)
      .then((response) => {
        console.log(response);
        if (response.status == 201)
          swal("Signed Up Successfully!", {
            buttons: false,
            timer: 1000,
          });
        else if (response.status == 400) {
          throw new Error(response);
        }
      })
      .catch((error) => {
        swal(error.response.data.message, {
          buttons: false,
          timer: 1000,
        });
      });
    // }
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    axios
      .post("http://localhost:5000/auth/login", loginData)
      .then((response) => {
        if (response.data.userType == "admin") history.push("/adminHome");
        else history.push("/");
        if (response.status == 200) {
          console.log(response);
          // sessionStorage.setItem("token",`Bearer ${response.data.token}`)
          sessionStorage.setItem("UserDetails", JSON.stringify(response.data));
          swal("Logged in Successfully!", {
            buttons: false,
            timer: 1000,
          });
        } else throw new Error(response.message);
      })
      .catch((error) => {
        swal(error.response.data, {
          buttons: false,
          timer: 1000,
        });
        console.log(error.response.data);
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
                  <form>
                    <h1 className="font-effect-anaglyph">Create Account</h1>
                    {SignUpInputs.map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={registerData[input.name]}
                        onChange={handleRegisterInputChange}
                      />
                    ))}
                    <select
                      name="userType"
                      value={registerData.userType}
                      onChange={handleRegisterInputChange}
                      placeholder="User Type"
                      style={{ padding: "10px 20px" }}
                      className="selectBox"
                    >
                      <option value="student">Student</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button
                      className="signup"
                      type="submit"
                      onClick={RegisterHandler}
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
                <form>
                  <h1 className="font-effect-anaglyph">Sign in</h1>
                  {SignInInputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={loginData[input.name]}
                      onChange={handleLoginInputChange}
                    />
                  ))}
                  <a href="#">Forgot your password?</a>
                  <Link>
                    <button
                      className="signin"
                      onClick={LoginHandler}
                      type="submit"
                    >
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
