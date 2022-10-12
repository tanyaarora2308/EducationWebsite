import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTeacher from "../TeacherPages/header/Header";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import Nav from "./Nav/Nav";
import HeaderStudent from "../CommonComponents/header/Header";
import "./Announcements.scss";
import MathsAnnouncements from "./MathsAnnouncements";
import ChemistryAnnouncements from "./ChemistryAnnouncements";

const Announcements = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  return (
    <>
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "admin" && <HeaderTeacher />}
      {(JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "student" ||
        !authenticated) && <HeaderStudent />}
      {authenticated ? (
        <>
          <Router>
            <Back title="ANNOUNCEMENTS" />
            <div style={{ backgroundColor: "#f8f8f8", padding: "2rem 1rem" }}>
              <Nav />
              <Switch>
                <Route
                  exact
                  path="/announcements/mathsannouncements"
                  component={MathsAnnouncements}
                />
                <Route
                  exact
                  path="/announcements/chemistryannouncements"
                  component={ChemistryAnnouncements}
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
};

export default Announcements;
