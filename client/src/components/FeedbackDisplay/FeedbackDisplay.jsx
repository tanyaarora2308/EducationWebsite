import React from "react"
import { feedbacks } from "../../dummydata"

const FeedbackDisplay = () => {
  return (
    <>
    <div class="row11">
      {feedbacks.map((val) => (
        <div className='items shadow column11'>
          <div className='text'>
            <h1>{val.name}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
        
      ))}
      </div>
    </>
  )
}

export default FeedbackDisplay