import axios from "axios";
import { React, useEffect, useState } from "react";
import swal from "sweetalert";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import Header from "./header/Header";
import "./Form.css";

const StudyMaterialForm = () => {
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
          <Back title="Post Study Material" />
          <div className="announcementForm">
            <div id="loginform">
              <h2 id="headerTitle">Post Study Material</h2>
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
  const [title, setTitle] = useState(""); 
  const [file, setFile] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .post("http://localhost:5000/studymaterial/singleFile", formData, {
        headers: headers,
      })
      .then((response) => {
        if (response.status == 201)
          swal(response.data, {
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
            placeholder="Enter title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="row">
          <label>File</label>
          <input
            type="file"
            name="fileUpload"
            onChange={handleFileChange}
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

export default StudyMaterialForm;
