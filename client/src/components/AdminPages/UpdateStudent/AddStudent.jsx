import axios from "axios";
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import swal from "sweetalert";
// import "./UploadQues.css";

const AddTeacher = () => {
  const initialState = {
    name: "",
    email: "",
    userType: "student",
    courses:[]
  };
  const [courses, setCourses] = useState([]);

  const handleCheckboxChange = event => {
    let newArray = [...courses, event.target.value];
    if (courses.includes(event.target.value)) {
      newArray = newArray.filter(c => c !== event.target.value);
    } 
    setCourses(newArray);
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    data.courses = courses;
    // data = [...data, courses];
    console.log(data);
    
    axios
      .post("http://localhost:5000/enrolledStudents/", data)
      .then((response) => {
        swal("Student added!", {
          buttons: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <div
        style={{ display: "flex", padding: "20px", flexDirection: "column" }}
      >
        <div>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            style={{
              width: "50%",
              display: "inline-block",
              border: "1px solid #1eb2a6",
              padding: "8px",
              fontSize: "17px",
              outline: "none",
            }}
          />
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            style={{
              width: "50%",
              display: "inline-block",
              border: "1px solid #1eb2a6",
              padding: "8px",
              fontSize: "17px",
              outline: "none",
            }}
          />
          <span style={{ color: "grey", paddingRight: "20px" }}>
            Select Courses:{" "}
          </span>
          <FormControlLabel
            control={<Checkbox />}
            label="Maths"
            onChange={handleCheckboxChange}
            value="maths"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Chemistry"
            onChange={handleCheckboxChange}
            value="chemistry"
          />
{/* <div>
      {courses.map((a) => {
        return <p>{a}</p>;
      })}
    </div> */}
          <div className="QuesShareOptions">
            <button
              className="button ps-button"
              type="submit"
              onClick={submitHandler}
              style={{ padding: "10px 40px", marginTop: "10px" }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTeacher;
