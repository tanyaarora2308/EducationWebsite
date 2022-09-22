import React from "react"
import Heading from "../common/heading/Heading"
import FeedbackDisplay from "./FeedbackDisplay"
import "./FeedbackDisplay.css"

const Feedback = () => {
  return (
    <>
      <Heading title='Feedbacks' />
      <section className='blog padding'>
        <div className='container grid2'>
          <FeedbackDisplay />
        </div>
      </section>
    </>
  )
}

export default Feedback