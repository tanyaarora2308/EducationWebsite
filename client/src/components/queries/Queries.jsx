import React, { useEffect, useState } from "react";
import HeaderTeacher from "../TeacherPages/header/Header";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import HeaderStudent from "../CommonComponents/header/Header";
import "./Queries.css";
import Questions from "./Questions";
import UploadQues from "./UploadQues";

const Queries = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);
  return (
    <>
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "admin" && <HeaderTeacher />}
      {(JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "student" ||
        !authenticated) && <HeaderStudent />}
      {authenticated ? (
        <>
          <Back title="QUERIES" />
          <div className="Queries">
            <div className="container">
              <UploadQues />
              <Questions />
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Queries;