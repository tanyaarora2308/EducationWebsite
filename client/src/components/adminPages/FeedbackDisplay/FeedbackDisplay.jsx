import axios from "axios";
import { React, useEffect, useState } from "react";

const FeedbackDisplay = () => {
  const [data, setData] = useState([]);

  const getData = async () => {

    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .get("/feedback", { headers: headers })
      .then((response) => {
        console.log(response);
        setData(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

  };

  useEffect(() => {
    getData();
  }, [data]);

  

  return (
    <>
      <div className="row11">
        {[...data].reverse().map((val, key) => (
          <div className="items shadow column11" style={{marginRight:"1em"}}>
            <div className="text" key={val.id}>
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
