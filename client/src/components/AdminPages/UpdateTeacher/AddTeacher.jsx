
import axios from "axios";
import React, {useState } from "react";
// import "./UploadQues.css";

const AddTeacher = () => {
  const initialState = {
    name: "",
    email: "",
    password:"",
    userType:"teacher",
    subject:""
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    setData(initialState);
    e.preventDefault();
    axios
      .post("http://localhost:5000/teachers/", data)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <div style={{display:"flex",padding:"20px",flexDirection:"column",}}>
        <div>
          <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          style={{width:"50%",display:"inline-block",
          border:"1px solid #1eb2a6",
          padding: "8px",
          fontSize: "17px",
          outline: "none"}}
        />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          style={{width:"50%",display:"inline-block",
          border:"1px solid #1eb2a6",
          padding: "8px",
          fontSize: "17px",
          outline: "none"}}
        />
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
          style={{width:"50%",display:"inline-block",
          border:"1px solid #1eb2a6",
          padding: "8px",
          fontSize: "17px",
          outline: "none"}}
        />
        <input
          type="text"
          placeholder="Enter subject"
          name="subject"
          value={data.subject}
          onChange={handleInputChange}
          style={{width:"50%",display:"inline-block",
          border:"1px solid #1eb2a6",
          padding: "8px",
          fontSize: "17px",
          outline: "none"}}
        />
          <div className="QuesShareOptions">
            <button
              className="button ps-button"
              type="submit"
              onClick={submitHandler}
              style={{padding:"10px 40px",marginTop:"10px"}}
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
