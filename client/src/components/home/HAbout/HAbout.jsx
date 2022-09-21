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
            <img src='https://media.istockphoto.com/photos/studying-on-campus-picture-id1318948090?k=20&m=1318948090&s=612x612&w=0&h=-cUbSJGfBNCu8pJQi_2TPRZCGJHaEgjuX9fdg66MaWc=' alt='' />
          </div>
          <div className='right' style={{width:"50%"}}>
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