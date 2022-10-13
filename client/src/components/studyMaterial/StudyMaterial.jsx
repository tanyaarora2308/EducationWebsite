import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import HeaderTeacher from "../TeacherPages/header/Header";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import HeaderStudent from "../CommonComponents/header/Header";
import MathsResources from "./MathsResources";
import ChemistryResources from "./ChemistryResources";
import Heading from "../CommonComponents/Heading";
import "./StudyMaterial.scss";

function StudyMaterial() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

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

  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType;
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
            <Back title="STUDY MATERIAL" />
            <div style={{ backgroundColor: "#f8f8f8", padding: "2rem 1rem" }}>
              <Nav />

              <Switch>
                <Route
                  exact
                  path="/studymaterial/mathsresources"
                  component={MathsResources}
                />
                <Route
                  exact
                  path="/studymaterial/chemistryresources"
                  component={ChemistryResources}
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

export default StudyMaterial;
