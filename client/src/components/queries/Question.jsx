import React from "react";
import "./Question.css";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Comment from "../../images/comment.png";

const Question = ({ data }) => {
  return (
    <div className="Question">
      <div className="detail">
        <span>
        <span className="date">Posted on: {data.createdAt.slice(0,10)}</span><br/><br/>
          <b>Question by user {data.userId}: </b>
        </span><br/><br/>
        <span>{data.desc}</span>
      </div>
      {data.img && <><img src={data.img} alt="Question" /><br/></>}

      <div className="QuestionReact">
        <b>Answer:</b>
        <QuestionAnswerIcon sx={{
            cursor:"pointer"
          }}/>
        {/* <img src={Comment} alt="" /> */}
        
      </div>
    </div>
  );
};

export default Question;
