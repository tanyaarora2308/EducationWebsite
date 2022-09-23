import React from "react"
import Back from "../../common/Back"
import Heading from "../../common/heading/Heading"
import FeedbackDisplay from "./FeedbackDisplay"
import "./FeedbackDisplay.css"

const Feedback = () => {
  return (
    <>
      <Back title='Feedbacks' />
      <section className='blog padding'>
      <Heading title='Feedbacks'/>
        <div className='container grid2'>
        
          <FeedbackDisplay />
        </div>
      </section>
    </>
  )
}

export default Feedback