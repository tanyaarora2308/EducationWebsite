import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../CommonComponents/Heading";
// import { maths } from "../../dummydata";

const ChemistryPlaylists = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const deleteAssignments = async (id) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios.delete(`/playlists/${id}`, { headers: headers });
  };
  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType;

   const deleteAnnouncement = async (id) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios.delete(`/playlists/${id}`, { headers: headers });
  };

  const getData = async () => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .get("/playlists", { headers: headers })
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
    <section
    className="studyMaterialSection"
    style={{
      backgroundColor: "#f8f8f8",
      padding: "2rem 1rem",
      textAlign: "center",
    }}
  >
    <div class="box">
      <form name="search">
        <label>Search: </label>
        <input
          type="text"
          class="input"
          name="txt"
          onmouseout="this.value = ''; this.blur();"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </form>
    </div>
    <Heading title="CHEMISTRY" />
    <div className="container">
      <div className="row11">
        {data
          .filter((x) => x.title.toLowerCase().includes(query) && x.subject === "chemistry")
          .map((val) => (
            <div className="items column11">
              <figure className="image-block">
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="100%"
                  height="405"
                  src={`https://www.youtube.com/embed/?listType=playlist&list=${val.videoUrl}`}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <figcaption>
                  <p>{val.title}</p>
                  {userType == "teacher" && (
                    <p
                      onClick={() => {
                        deleteAssignments(val._id);
                      }}
                      style={{ color: "red", cursor: "pointer" }}
                    >
                      Delete
                    </p>
                  )}
                </figcaption>
              </figure>
            </div>
          ))}
      </div>
    </div>
  </section>
  );
};

export default ChemistryPlaylists;



