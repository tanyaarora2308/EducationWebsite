import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTeacher from "./TeacherPages/header/Header";
import Back from "./CommonComponents/Back";
import Error from "./CommonComponents/Error/Error";
import "./Profile.css";
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
          {/* <Back title="YOUR PROFILE" /> */}

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
<div className="page">
          <div class="main">
            <h2 class="mb-0">
              <i class="far fa-clone pr-1"></i> Your Profile:{" "}
            </h2>
            <br />
            <div class="card">
              <div class="card-body">
                {/* <i class="fa fa-pen fa-xs edit"></i> */}
                <table>
                  <tbody>
                    <tr>
                      <th>Student ID: </th>
                      <td>
                        {JSON.parse(sessionStorage.getItem("UserDetails"))?._id}
                      </td>
                    </tr>
                    <tr>
                      <th>Name:</th>
                      <td>
                        {
                          JSON.parse(sessionStorage.getItem("UserDetails"))
                            ?.name
                        }
                      </td>
                    </tr>
                    <tr>
                      <th>Email:</th>
                      <td>
                        {
                          JSON.parse(sessionStorage.getItem("UserDetails"))
                            ?.email
                        }
                      </td>
                    </tr>

                    <tr>
                      <th>Courses Taken: </th>
                      <td>
                        {JSON.parse(
                          sessionStorage.getItem("UserDetails")
                        )?.courses.map((a) => {
                          return (
                            <span style={{ textTransform: "capitalize" }}>
                              {a}{" "}
                            </span>
                          );
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
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
