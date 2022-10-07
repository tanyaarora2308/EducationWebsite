import React from "react"
import Heading from "../../common/Heading"
import "./HAbout.css"
import  HStats  from "./HStats"
import { hAbout } from "../../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB1'>
          <div className='left row'>
            <img src='https://www.westend61.de/images/0001411499pw/portrait-of-smiling-male-student-in-corridor-of-university-MASF19099.jpg' />
          </div>
          <div className='right'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Our Learning Expertise' />
            <div className='items'>
              {hAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src="https://static.thenounproject.com/png/372615-200.png" alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <HStats />
    </>
  )
}

export default HAbout