import React from "react"
import HCourses from "./HCourses/HCourses"
import HAbout from "./HAbout/HAbout"
import HMain  from "./HMain/HMain"
import HTestimonal from "./HTestimonal/HTestimonal"

const Home = () => {
  return (
    <>
      <HMain />
      <HAbout />
      <HCourses />
      <HTestimonal />
    </>
  )
}

export default Home
