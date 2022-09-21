import React from "react";
import "./Questions.css";
import { queries } from "../../dummydata";
import Question from "./Question";

const Questions = () => {
  return (
    <div className="Questions">
      {queries.map((query, id) => {
        return <Question data={query} id={id} />;
      })}
    </div>
  );
};

export default Questions;
