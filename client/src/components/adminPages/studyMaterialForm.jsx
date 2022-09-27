import "./Form.css";
import { useState } from "react";
import swal from 'sweetalert';
import axios from "axios";
import Back from "../common/Back";

const studyMaterialForm = () => {
  return (
    <>
      <Back title="Post Study Material" />
      <div className="announcementForm">
        <div id="loginform">
          <h2 id="headerTitle">Post Study Material</h2>
          <Form />
        </div>
      </div>
    </>
  );
};

const Form = (props) => {
  const initialState = {
    title: "",
    videoUrl: "",
    assignmentUrl: "",
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/assignments/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const studyMaterialSubmit = () => {
    setData(initialState);
    swal("Posted Successfully!", {
      buttons: false,
      timer: 1000,
    });
  };
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
          <label>Video URL</label>
          <input
            type="text"
            name="videoUrl"
            value={data.videoUrl}
            placeholder="Enter video key"
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>File URL</label>
          <input
            type="text"
            name="assignmentUrl"
            value={data.assignmentUrl}
            placeholder="Enter Assignment Drive Link"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          title="Submit"
          id="button"
          onClick={studyMaterialSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default studyMaterialForm;
