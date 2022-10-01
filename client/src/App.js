import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Announcements from "./components/announcements/Announcements";
import StudyMaterial from "./components/studyMaterial/StudyMaterial";
import Queries from "./components/queries/Queries";
import Contact from "./components/contact/contact";
import Footer from "./components/common/footer2/footer2";
import Home from "./components/home/Home";
import Auth from "./components/Auth/Auth";
import Blog from "./components/blog/Blog";
import announcementForm from "./components/adminPages/announcementForm";
import StudyMaterialForm from "./components/adminPages/StudyMaterialForm";
import Feedback from "./components/adminPages/FeedbackDisplay/Feedback";
import AdminHome from "./components/adminPages/AdminHome";
import blogForm from "./components/adminPages/blogForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/studyMaterial" component={StudyMaterial} />
          <Route exact path="/queries" component={Queries} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Auth" component={Auth} />
          <Route exact path="/announcementForm" component={announcementForm} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/studyMaterialForm" component={StudyMaterialForm} />
          <Route exact path="/blogForm" component={blogForm} />
          <Route exact path="/feedbackdisplay" component={Feedback} />
          <Route exact path="/adminHome" component={AdminHome} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
