import React, { useState, useEffect } from "react";
import axios from "axios";
// import { maths } from "../../dummydata";

const MathsAnnouncements = () => {
  const [data, setData] = useState([]);
  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType;

   const deleteAnnouncement = async (id) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios.delete(`/announcements/${id}`, { headers: headers });
  };

  const getData = async () => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .get("/announcements", { headers: headers })
      .then((response) => {
        // console.log(response);
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
    <section className="announcements">
            <div className="container">
            {data &&
                [...data].reverse().filter(
                    (x) =>
                      x.subject === "maths"
                  ).map((a) => (
                  <div className="item">
                    <div className="item-in" key={a._id}>
                      <h4>{a.title}</h4>
                      <div className="seperator"></div>
                      <p>{a.description}</p>
                      {userType == "admin" && (
                        <i
                          class="fa fa-trash"
                          aria-hidden="true"
                          onClick={() => {
                            deleteAnnouncement(a._id);
                          }}
                        ></i>
                      )}
                      <br />
                      <a href="#">Date: {a.createdAt.slice(0, 10)}</a>
                    </div>
                  </div>
                ))}
            </div>
          </section>
  );
};

export default MathsAnnouncements;



