import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maths from "./Maths";
import Nav from "./Nav";
import Chemistry from "./Chemistry";
// import Main from "./Main";
import Back from "../common/Back";
import "./Main.scss"


function StudyMaterial() {
  return (
    <>
      <Router>
        <Back title="STUDY MATERIAL" />
        
        <div style={{backgroundColor:"#f8f8f8",padding:"2rem 1rem"}}>
        <Nav />
        <Switch>
          <Route exact path="/maths" component={Maths} />
          <Route exact path="/chemistry" component={Chemistry} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default StudyMaterial;
