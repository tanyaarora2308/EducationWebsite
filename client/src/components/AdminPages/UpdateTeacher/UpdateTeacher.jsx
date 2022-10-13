import React, { useEffect, useState } from "react";
import Back from "../../CommonComponents/Back";
import Error from "../../CommonComponents/Error/Error";
import Heading from "../../CommonComponents/Heading";
import HeaderAdmin from "../Header.jsx";
// import "./Queries.css";
import Teachers from "./Teachers";
import AddTeacher from "./AddTeacher";

const UpdateTeacher = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);
  return (
    <>
      <HeaderAdmin/>
      {authenticated ? (
        <>
          <Back title="ADD OR DELETE A TEACHER" />
          <div className="Queries">
            <div className="container">
              <AddTeacher />
              <Teachers />
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default UpdateTeacher;

