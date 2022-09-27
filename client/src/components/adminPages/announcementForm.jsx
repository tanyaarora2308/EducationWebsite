import "./Form.css";
import Back from "../common/Back";
import { useState } from "react";
import swal from 'sweetalert';
import axios from "axios";

const announcementForm = () => {
  return (
    <>
      <Back title="Post Announcements" />
      <div className="announcementForm">
        <div id="loginform">
          <h2 id="headerTitle">Post Announcement</h2>
          <Form />
        </div>
      </div>
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
    axios
      .post("http://localhost:5000/announcements/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const announcementSubmit = () =>{
    setData(initialState);
    swal("Posted Successfully!", {
      buttons: false,
      timer: 1000,
    });
  }
  return (
    <>
      <form onSubmit={submitHandler}>
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
        <button type="submit" title="Submit" id="button" onClick={announcementSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};


export default announcementForm;
