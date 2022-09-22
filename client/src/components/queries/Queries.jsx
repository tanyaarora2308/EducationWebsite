import React from "react";
import UploadQues from "./UploadQues";
import Questions from "./Questions";
import Back from "../common/Back";
import "./Queries.css";

const Queries = () => {
  return (
    <>
      <Back title="QUERIES" />
      <div className="Queries">
        <div className="container">
        <UploadQues />
        <Questions />
        </div>
        
      </div>
    </>
  );
};

export default Queries;
