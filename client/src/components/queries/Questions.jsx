import React, { useEffect, useState } from "react";
import "./Questions.css";
import axios from "axios";
// import { queries } from "../../dummydata";
import Question from "./Question";

const Questions = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const returnedData = await axios.get("http://localhost:5000/query/");
    // console.log(returnedData);
    setData(returnedData.data);
  };

  // console.log(data);

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className="Questions">
      {[...data].reverse().map((query, id,_id) => {
        return <Question data={query} id={id}/>;
      })}
    </div>
  );
};

export default Questions;
