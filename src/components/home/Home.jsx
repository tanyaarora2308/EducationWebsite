import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import HMain  from "./HMain/HMain"
import HTestimonal from "./HTestimonal/HTestimonal"

const Home = () => {
  return (
    <>
      <HMain />
      <AboutCard />
      <HAbout />
      <HTestimonal />
    </>
  )
}

export default Home
