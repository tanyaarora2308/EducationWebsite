import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Announcements from "./components/announcements/Announcements";
import StudyMaterial from "./components/studyMaterial/StudyMaterial";
import Queries from "./components/queries/Queries";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/studyMaterial" component={StudyMaterial} />
          <Route exact path="/journal" component={Blog} />
          <Route exact path="/queries" component={Queries} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Signup" component={Signup}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
