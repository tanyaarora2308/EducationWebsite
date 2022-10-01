import React, { useEffect, useState } from "react";
import UploadQues from "./UploadQues";
import Error from "../common/Error";
import Questions from "./Questions";
import Back from "../common/Back";
import "./Queries.css";
import Header from "../common/header/Header";

const Queries = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);
  return (
    <>
    <Header />
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
