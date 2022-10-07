import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Maths from "./Maths";
// import Nav from "./Nav";
// import Chemistry from "./Chemistry";
import Heading from "../common/Heading";
import Error from "../common/Error/Error";
import Back from "../common/Back";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Main.scss";
import HeaderStudent from "../common/header/Header";
import HeaderAdmin from "../adminPages/header/Header";

function StudyMaterial() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const deleteAssignments = async (id) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios.delete(`/assignments/${id}`, { headers: headers });
  };

  const getData = async () => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .get("/assignments", { headers: headers })
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

  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType;
  return (
    <>
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "admin" && <HeaderAdmin />}
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "student" && <HeaderStudent />}
      {authenticated ? (
        <>
          {/* <Router>
        <Back title="STUDY MATERIAL" />
        <div style={{backgroundColor:"#f8f8f8",padding:"2rem 1rem"}}>
        <Nav />
        <Switch>
          <Route exact path="/maths" component={Maths} />
          <Route exact path="/chemistry" component={Chemistry} />
        </Switch>
        </div>
      </Router> */}
          <Back title="STUDY MATERIAL" />
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
            <Heading title="YOUTUBE PLAYLISTS" />
            <div className="container">
              <div className="row11">
                {data
                  .filter((x) => x.title.toLowerCase().includes(query))
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
                          {userType == "admin" && (
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
        </>
      ) : (
        <Error />
      )}
    </>
  );
}

export default StudyMaterial;
