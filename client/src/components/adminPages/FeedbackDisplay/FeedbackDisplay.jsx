import { React, useEffect, useState } from "react";
import axios from "axios";

const FeedbackDisplay = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const returnedData = await axios.get("http://localhost:5000/feedback/");
    console.log(returnedData);
    setData(returnedData.data);
  };

  useEffect(() => {
    getData();
  }, [data]);
  return (
    <>
      <div className="row11">
        {data.map((val) => (
          <div className="items shadow column11">
            <div className="text">
              <h1>{val.name}</h1>
              <p>{val.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeedbackDisplay;
