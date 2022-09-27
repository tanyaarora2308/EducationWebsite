import React, { useEffect } from "react";
import "./Announcements.scss";
import { announcements } from "../../dummydata";
import axios from "axios";
import Back from "../common/Back";
import { useState } from "react";

const Announcements = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const returnedData = await axios.get("http://localhost:5000/announcements");
    console.log(returnedData);
    setData(returnedData.data);
  };

  // console.log(data);

  useEffect(() => {
    getData();
  }, [data]);

  
  return (
    <>
      <Back title="ANNOUNCEMENTS" />
      <section className="announcements">
        <div className="container">
          {data && data.map((a) => (
            <div className="item">
              <div className="item-in">
                <h4>{a.title}</h4>
                <div className="seperator"></div>
                <p>{a.description}</p>
                <a href="#">
                  Date: {a.createdAt}
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Announcements;
