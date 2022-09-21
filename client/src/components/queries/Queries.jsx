import React from "react";
import UploadQues from "./UploadQues";
import Questions from "./Questions";
import "./Queries.css"

const Queries = () => {
  return (
    <div className="Queries container">
      <UploadQues />
      <Questions />
    </div>
  );
};

export default Queries;
