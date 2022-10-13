import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
// import "./Question.css";

const Student = ({ data }) => {
  console.log(data);
  const deleteStudent = async (StudentID) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios.delete(`/enrolledStudents/${StudentID}`, { headers: headers });
  };
  const userType =
    JSON.parse(sessionStorage.getItem("UserDetails"))?.userType || "";
  return (
    <div className="Question">
      <div className="detail">
        <span>
          <br />
          <br />
          <b>Student ID: </b>
          {data._id}:
        </span>
        <br />
        <span>
          <b>Student Name: </b>
          {data.name}{" "}
        </span>
        <br />
        <span>
          <b>Student Email: </b>
          {data.email}{" "}
        </span>
        <br />
        <span>
          <b>
            Student Courses:{" "}</b>
            {data.courses.map((a) => {
              return <span style={{textTransform:"capitalize"}}>{a} </span>;
            })}
          
        </span>
        <br />
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
          {userType === "admin" && (
            <i
              class="fa fa-trash"
              aria-hidden="true"
              onClick={() => {
                deleteStudent(data._id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
