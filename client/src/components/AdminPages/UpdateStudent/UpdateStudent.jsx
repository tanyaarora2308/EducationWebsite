import React, { useEffect, useState } from "react";
import Back from "../../CommonComponents/Back";
import Error from "../../CommonComponents/Error/Error";
import Heading from "../../CommonComponents/Heading";
import HeaderAdmin from "../Header.jsx";
// import "./Queries.css";
import Students from "./Students";
import AddStudent from "./AddStudent";

const UpdateStudent = () => {
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
          <Back title="ADD OR DELETE A STUDENT" />
          <div className="Queries">
            <div className="container">
              <AddStudent />
              <Students />
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default UpdateStudent;

