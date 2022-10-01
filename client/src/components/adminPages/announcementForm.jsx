import "./Form.css";
import Back from "../common/Back";
import { React, useEffect, useState } from "react";
import Error from "../common/Error"
import Header from "./header/Header"
import swal from "sweetalert";
import axios from "axios";

const announcementForm = () => {
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
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setData(initialState);
    axios
      .post("http://localhost:5000/announcements/", data)
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

export default announcementForm;
