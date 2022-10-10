// import Maths from "./Maths";
// import Nav from "./Nav";
// import Chemistry from "./Chemistry";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderAdmin from "../AdminPages/header/Header";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import HeaderStudent from "../CommonComponents/header/Header";
import Heading from "../CommonComponents/Heading";
import "./Main.scss";

function Playlists() {
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
      {(JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "student" ||
        !authenticated) && <HeaderStudent />}
      {authenticated ? (
        <>
          {/* <Router>
        <Back title="Playlists" />
        <div style={{backgroundColor:"#f8f8f8",padding:"2rem 1rem"}}>
        <Nav />
        <Switch>
          <Route exact path="/maths" component={Maths} />
          <Route exact path="/chemistry" component={Chemistry} />
        </Switch>
        </div>
      </Router> */}
          <Back title="YOUTUBE PLAYLISTS" />
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

export default Playlists;
