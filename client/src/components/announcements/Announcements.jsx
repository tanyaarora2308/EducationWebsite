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

  const deleteAnnouncement = async (id) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "",
    }
    axios.delete(`/announcements/${id}`, { headers: headers });
  }


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
        // console.log(response);
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
                      {userType == "admin" && <i class="fa fa-trash" aria-hidden="true" onClick={() => {deleteAnnouncement(a._id)}} ></i>}
                      <br/>
                      <a href="#">
                        Date: {a.createdAt.slice(0, 10)}
                      </a>
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
