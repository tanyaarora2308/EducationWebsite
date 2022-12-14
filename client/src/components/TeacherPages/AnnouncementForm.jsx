import axios from "axios";
import { React, useEffect, useState } from "react";
import swal from "sweetalert";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import Header from "./header/Header";
import "./Form.css";

const AnnouncementForm = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  return (
    <>
      <Header />
      {authenticated ? (
        <>
          <Back title="Post Announcements" />
          <div className="announcementForm">
            <div id="loginform">
              <h2 id="headerTitle">Post Announcement</h2>
              <Form />
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

const Form = (props) => {
  const initialState = {
    title: "",
    description: "",
    subject:""
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setData(initialState);
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .post("http://localhost:5000/announcements/", data, { headers: headers })
      .then((response) => {
        if (response.status == 200)
          swal("Announcement Posted!", {
            buttons: false,
            timer: 1000,
          });
        else if (response.status == 400) {
          throw new Error(response.status);
        }
      })
      .catch((error) => {
        console.log(error);
        swal(error.response.data, {
          buttons: false,
          timer: 1000,
        });
      });
  };

  return (
    <>
      <form>
        <div className="row">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            placeholder="Enter title"
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={data.subject}
            placeholder="Enter Subject"
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={data.description}
            placeholder="Enter description"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          title="Submit"
          id="button"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AnnouncementForm;
