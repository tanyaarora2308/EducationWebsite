import "./App.css";
import swal from 'sweetalert';
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Announcements from "./components/announcements/Announcements";
import StudyMaterial from "./components/studyMaterial/StudyMaterial";
import Queries from "./components/queries/Queries";
import Contact from "./components/contact/contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Auth from "./components/Auth/Auth";
import Blog from "./components/blog/Blog";
import announcementForm from "./components/adminPages/announcementForm";
import studyMaterialForm from "./components/adminPages/studyMaterialForm";
import Feedback from "./components/adminPages/FeedbackDisplay/Feedback";
import AdminHome from "./components/adminPages/AdminHome";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/studyMaterial" component={StudyMaterial} />
          <Route exact path="/queries" component={Queries} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Auth" component={Auth} />
          <Route exact path="/announcementForm" component={announcementForm} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/studyMaterialForm" component={studyMaterialForm} />
          <Route exact path="/feedbackdisplay" component={Feedback} />
          <Route exact path="/adminHome" component={AdminHome} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
