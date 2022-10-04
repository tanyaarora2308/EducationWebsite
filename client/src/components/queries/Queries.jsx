import React, { useEffect, useState } from "react";
import UploadQues from "./UploadQues";
import Error from "../common/Error";
import Questions from "./Questions";
import Back from "../common/Back";
import HeaderStudent from "../common/header/Header";
import HeaderAdmin from "../adminPages/header/Header";
import "./Queries.css";

const Queries = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
      if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);
  return (
    <>
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType === "admin" && <HeaderAdmin />}
    {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType === "student" &&  <HeaderStudent/>}
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
