import axios from "axios";
import { React, useEffect, useState } from "react";
import swal from "sweetalert";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import "./Form.css";
import Header from "./header/Header";

const PlaylistForm = () => {
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
          <Back title="Post Playlists" />
          <div className="announcementForm">
            <div id="loginform">
              <h2 id="headerTitle">Post Playlists</h2>
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
    videoUrl: "",
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .post("http://localhost:5000/playlists/", data, { headers: headers })
      .then((response) => {
        if (response.status == 200)
          swal("Assignment Posted!", {
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
          <label>Video URL</label>
          <input
            type="text"
            name="videoUrl"
            value={data.videoUrl}
            placeholder="Enter video key"
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

export default PlaylistForm;
