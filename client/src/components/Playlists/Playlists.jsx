import MathsPlaylists from "./MathsPlaylists.jsx";
import Nav from "./Nav";
import ChemistryPlaylists from "./ChemistryPlaylists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderTeacher from "../TeacherPages/header/Header";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import HeaderStudent from "../CommonComponents/header/Header";
import "./Main.scss";

function Playlists() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  return (
    <>
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "teacher" && <HeaderTeacher />}
      {(JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "student" ||
        !authenticated) && <HeaderStudent />}
      {authenticated ? (
        <>
          <Router>
            <Back title="LECTURE RECORDINGS" />
            <div style={{ backgroundColor: "#f8f8f8", padding: "2rem 1rem" }}>
              <Nav />
              <Switch>
                <Route
                  exact
                  path="/playlists/mathsplaylists"
                  component={MathsPlaylists}
                />
                <Route
                  exact
                  path="/playlists/chemistryplaylists"
                  component={ChemistryPlaylists}
                />
              </Switch>
            </div>
          </Router>
        </>
      ) : (
        <Error />
      )}
    </>
  );
}

export default Playlists;
