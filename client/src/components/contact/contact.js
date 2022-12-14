import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import Header from "../CommonComponents/header/Header";
import "./contact.css";

const Contact = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  const initialState = {
    name: JSON.parse(sessionStorage.getItem("UserDetails"))?.name,
    email: JSON.parse(sessionStorage.getItem("UserDetails"))?.email,
    message: "",
  };
  const [data, setData] = useState(initialState);

  const handleInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    console.log(data);
    swal("Your feedback has been submitted!", {
      buttons: false,
      timer: 1000,
    });

    e.preventDefault();
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .post("http://localhost:5000/feedback", data, { headers: headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      {authenticated ? (
        <>
          <div className="background">
            <Back title="FEEDBACK" />
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
                      style={{
                        color: "#1eb2a6",
                        fontSize: "1rem",
                        paddingTop: "9%",
                      }}
                    >
                      We value your feedback and we're always open to
                      suggestions!
                    </span>
                    <div className="app-contact">
                      CONTACT INFO : +91 7011-301-240
                    </div>
                  </div>
                  <div className="screen-body-item">
                    <form className="mt-3" method="POST">
                      <div className="app-form">
                        <div className="app-form-group message">
                          <textarea
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
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Contact;
