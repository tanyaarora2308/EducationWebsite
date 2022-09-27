import React, { useState, useEffect } from "react";
import "./contact.css";
import swal from 'sweetalert';
import axios from"axios";
import Back from "../common/Back";

const Contact = () => {
  const initialState = {
    userId:"",
    name: "",
    email: "",
    message:""
  };
  const [data, setData] = useState(initialState);

  const handleInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    swal("Your feedback has been submitted!", {
      buttons: false,
      timer: 1000,
    });

    e.preventDefault();
    axios
      .post("http://localhost:5000/feedback", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <Back title="Feedback" />
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <span
                style={{ color: "#1eb2a6", fontSize: "1rem", paddingTop: "9%" }}
              >
                We value your feedback an we're always open to suggestions!
              </span>
              <div className="app-contact">CONTACT INFO : +91 7011-301-240</div>
            </div>
            <div className="screen-body-item">
              <form className="mt-3" method="POST">
                <div className="app-form">
                <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="USER ID"
                      value={data.userId}
                      onChange={handleInputs}
                      name="userId"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      value={data.name}
                      name="name"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      value={data.email}
                      name="email"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      value={data.message}
                      onChange={handleInputs}
                      name="message"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button
                      className="app-form-button"
                      type="submit"
                      onClick={submitHandler}
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
