import React from "react";
import "./Question.css";
import Comment from "../../images/comment.png";

const Question = ({ data }) => {
  return (
    <div className="Question">
      <div className="detail">
        <span style={{borderBottom:"1px solid black"}}>
          <b>Question by {data.name}: </b>
        </span><br/><br/>
        <span>{data.desc}</span>
      </div>
      {data.img && <><img src={data.img} alt="Question" /><br/></>}

      <div className="QuestionReact">
        <img src={Comment} alt="" />
      </div>
    </div>
  );
};

export default Question;
