import React, { useEffect, useState } from "react";
import "./Announcements.scss";
import axios from "axios";
import Back from "../common/Back";

const Announcements = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const returnedData = await axios.get("http://localhost:5000/announcements");
    console.log(returnedData);
    setData(returnedData.data);
  };
  

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <Back title="ANNOUNCEMENTS" />
      <section className="announcements">
        <div className="container">
          {data &&
            [...data].reverse().map((a) => (
              <div className="item">
                <div className="item-in" key={a._id}>
                  <h4>{a.title}</h4>
                  <div className="seperator"></div>
                  <p>{a.description}</p>
                  <a href="#">
                    Date: {a.createdAt.slice(0,10)}
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
