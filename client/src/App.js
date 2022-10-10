import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Announcements from "./components/Announcements/Announcements";
import Queries from "./components/Queries/Queries";
import Contact from "./components/Contact/contact";
import Footer from "./components/CommonComponents/footer/footer";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Blog from "./components/Blog/Blog";
import AnnouncementForm from "./components/AdminPages/AnnouncementForm";
import PlaylistForm from "./components/AdminPages/PlaylistForm";
import Feedback from "./components/AdminPages/FeedbackDisplay/Feedback";
import AdminHome from "./components/AdminPages/AdminHome";
import BlogForm from "./components/AdminPages/BlogForm";
import Playlists from "./components/Playlists/Playlists";
import StudyMaterialForm from "./components/AdminPages/StudyMaterialForm";
import StudyMaterial from "./components/StudyMaterial/StudyMaterial";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/playlists" component={Playlists} />
          <Route exact path="/queries" component={Queries} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Auth" component={Auth} />
          <Route exact path="/announcementForm" component={AnnouncementForm} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/playlistForm" component={PlaylistForm} />
          <Route exact path="/blogForm" component={BlogForm} />
          <Route exact path="/feedbackdisplay" component={Feedback} />
          <Route exact path="/adminHome" component={AdminHome} />
          <Route exact path="/studymaterialForm" component={StudyMaterialForm} />
          <Route exact path="/studymaterial" component={StudyMaterial} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
