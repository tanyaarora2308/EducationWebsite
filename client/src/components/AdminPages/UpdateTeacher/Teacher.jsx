import axios from "axios";
import React, { useState } from "react";
// import "./Question.css";

const Teacher = ({ data }) => {
  const deleteTeacher = async (TeacherID) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "",
    }
    axios.delete(`/auth/teacher/${TeacherID}`, { headers: headers });
  }
  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType || "";
  return (
    <div className="Question">
      <div className="detail">
        <span>
          <br />
          <br />
          <b>Teacher ID: </b>{data._id}: 
        </span>
        <br />
        <span><b>Teacher Name: </b>{data.name} </span><br/>
        <span><b>Teacher Email: </b>{data.email} </span><br/>
        <span><b>Teacher Subject: </b>{data.subject} </span><br/>
        <span><b>Teacher Name: </b>{data.name}</span><br/>
      </div>
      <div className="QuestionReact">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 20,
            cursor: "pointer",
          }}
        >
          {(userType === "admin")  && <i class="fa fa-trash" aria-hidden="true" onClick={() => {deleteTeacher(data._id)}} />}
        </div>
      </div>
    </div>
  );
};

export default Teacher;