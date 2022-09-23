import React from "react";
import HCourses from "./HCourses/HCourses";
import HAbout from "./HAbout/HAbout";
import HMain from "./HMain/HMain";
import HTestimonal from "./HTestimonal/HTestimonal";
import Header from "./header/Header";

const Home = () => {
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
