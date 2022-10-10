import React, { useEffect } from "react";
import Header from "../CommonComponents/header/Header";
import HAbout from "./HAbout/HAbout";
import HCourses from "./HCourses/HCourses";
import HMain from "./HMain/HMain";
import HTestimonal from "./HTestimonal/HTestimonal";

const Home = () => {
  //Disables back arrow key in browser
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  return (
    <>
      <Header />
      <HMain />
      <HAbout />
      <HCourses />
      <HTestimonal />
    </>
  );
};

export default Home;
