import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../CommonComponents/Heading";
// import { maths } from "../../dummydata";

const ChemistryResources = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const deleteStudyMaterial = async (id) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios.delete(`/studymaterial/${id}`, { headers: headers });
  };

  const getData = async () => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .get("/studymaterial/", { headers: headers })
      .then((response) => {
        setData(response.data);
        console.log(data);
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
                {data &&
                  data
                    .filter((x) => x.title.toLowerCase().includes(query) && x.subject === "chemistry")
                    .map((val) => (
                      <div
                        className="items shadow column11"
                        style={{ marginRight: "1em" }}
                      >
                        <div className="text" key={val.title}>
                          <p>{val.title}</p>
                          {val.fileType.slice(0,5) === "image" &&
                          <img
                            src={`http://localhost:5000/${val.filePath}`}
                            alt= {`PDF of ${val.title}`}
                            height="200"
                            width="300"
                            className="card-img-top img-responsive"
                          />}
                          {val.fileType.slice(0,5) !== "image" &&
                          <img
                            src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                            alt= {`PDF of ${val.title}`}
                            className="card-img-top img-responsive"
                          />}
                          <a href={`http://localhost:5000/${val.filePath}`} target="_blank" style={{color:"black",fontSize:"20px"}}>
                            Click to view
                          </a>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </section>
  );
};

export default ChemistryResources;
