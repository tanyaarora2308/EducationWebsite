import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTeacher from "./TeacherPages/header/Header";
import Back from "./CommonComponents/Back";
import Error from "./CommonComponents/Error/Error";
import "./Profile.css"
import HeaderStudent from "./CommonComponents/header/Header";

const Profile = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  return (
    <>
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "teacher" && <HeaderTeacher />}
      {(JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "student" ||
        !authenticated) && <HeaderStudent />}
      {authenticated ? (
        <>
          <Back title="YOUR PROFILE" />
          
          {/* <div style={{ backgroundColor: "#f8f8f8", padding: "2rem 1rem" }}>
          <p>UserID: {JSON.parse(sessionStorage.getItem("UserDetails"))?._id}</p>
            <p>Name: {JSON.parse(sessionStorage.getItem("UserDetails"))?.name}</p>
            <p>Email: {JSON.parse(sessionStorage.getItem("UserDetails"))?.email}</p>
            <span>
          <b>
            Student Courses:{" "}</b>
            {JSON.parse(sessionStorage.getItem("UserDetails"))?.courses.map((a) => {
              return <span style={{textTransform:"capitalize"}}>{a} </span>;
            })}
          
        </span>
            
          </div> */}

<div className="profile">
<div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src="https://placeimg.com/640/480/arch/any" alt=""/>
            <h3>{JSON.parse(sessionStorage.getItem("UserDetails"))?.name}</h3>
          </div>
          <div class="card-body">
            <p class="mb-0"><strong class="pr-1">Student ID:</strong>{JSON.parse(sessionStorage.getItem("UserDetails"))?._id}</p>
          </div>
        </div>
      </div>
      <br/>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%">Email</th>
                <td width="2%">:</td>
                <td>{JSON.parse(sessionStorage.getItem("UserDetails"))?.email}</td>
              </tr>
              <tr>
                <th width="30%">Courses	</th>
                <td width="2%">:</td>
                {JSON.parse(sessionStorage.getItem("UserDetails"))?.courses.map((a) => {
              return <td style={{textTransform:"capitalize"}}>{a} </td>;
            })}
                {/* <td></td> */}
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Profile;
