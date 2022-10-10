import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "./Question";
import "./Questions.css";

const Questions = () => {
  const [data, setData] = useState([]);

  const getData = async () => {


    // const headers = {
    //   authorization:
    //     "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
    //     "",
    // };
    // axios
    //   .get("/assignments", { headers: headers })
    //   .then((response) => {
    //     console.log(response);
    //     setData(response.data);
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

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
      {[...data].reverse().map((a) => {
        return <Question data={a} />;
      })}
    </div>
  );
};

export default Questions;
