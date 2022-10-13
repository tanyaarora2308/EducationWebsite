import axios from "axios";
import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";
// import "./Questions.css";

const Teachers = () => {
  const [data, setData] = useState([]);

  const getData = async () => {

    const returnedData = await axios.get("http://localhost:5000/auth/teacher/");
    setData(returnedData.data);
  };


  useEffect(() => {
    getData();
  }, [data]);

  return (
    
    <div className="Questions">
      {[...data].reverse().map((a) => {
        return <Teacher data={a} />;
      })}
    </div>
  );
};

export default Teachers;