import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maths from "./Maths";
import Nav from "./Nav";
import Chemistry from "./Chemistry";
import Main from "./Main";
import "./Main.css"


function StudyMaterial() {
  return (
    <>
      <Router>
        <Main/>
        <Nav />
        <Switch>
          <Route exact path="/maths" component={Maths} />
          <Route exact path="/chemistry" component={Chemistry} />
        </Switch>
      </Router>
    </>
  );
}

export default StudyMaterial;
