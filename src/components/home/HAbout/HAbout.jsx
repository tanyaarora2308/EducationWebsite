import React from "react"
import Heading from "../../common/heading/Heading"
import "./HAbout.css"
import  HStats  from "./HStats"
import { hAbout } from "../../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB1'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {hAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
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