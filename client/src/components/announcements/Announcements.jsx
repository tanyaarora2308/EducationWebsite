import React, { useEffect, useState } from "react";
import HeaderStudent from "../common/header/Header";
import HeaderAdmin from "../adminPages/header/Header"
import Error from "../common/Error";
import "./Announcements.scss";
import axios from "axios";
import Back from "../common/Back";

const Announcements = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  const [data, setData] = useState([]);

  // const deleteAnnouncement = async () = {
  //   const headers = {
  //     authorization:
  //       "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "",
  //   }
  //   axios.delete("localhost:5000/announcements/6332ef058c9259a2b163c1c0", {
  //     { headers: headers }
  //     data: {
  //       source: source
  //     }
  //   });
  // }


  const getData = async () => {
    // const returnedData = await axios.get("/announcements");
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .get("/announcements", { headers: headers })
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
    // sessionStorage.setItem("token", token);
    getData();
  }, [data]);
  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType || "";
  return (
    <>
    {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType === "admin" && <HeaderAdmin />}
    {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType === "student" &&  <HeaderStudent/>}
      {authenticated ? (
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
                        Date: {a.createdAt.slice(0, 10)}
                        <i className="fa fa-long-arrow-right"></i>
                      </a><br/>
                      {userType == "admin" && <a href = "#" 
                      onClick={() => {deleteAnnouncement(a._id)}}
                      >Delete</a>}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Announcements;
