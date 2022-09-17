import React from 'react'
import "./Main.css"
import { maths } from "../../dummydata"
import Heading from "../common/heading/Heading"

const Maths = () => {
  return (
    <section className='testimonal padding'>
        <div className='container'>
          <div className='content grid2'>
            {maths.map((val) => (
              <>
              <p>{val.title}</p>
              </>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Maths