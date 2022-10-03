import React, { useState } from "react";
import "./Question.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Comment from "../../images/comment.png";

const Question = ({ data }) => {
  const [count,setCount] = useState(0);
  const [Comments, setComments] = useState([]);
  const [commentwriting, setcommentwriting] = useState("");
  const [show, setshow] = useState(false);

  const addComment = () => {
    const comment = {
      id: "61fsbf23123123123123",
      username: "suman",
      title: `${commentwriting}`,
    };
    setComments(Comments.concat(comment));
    setCount(count+1);
  };

  const handleComment = () => {
    addComment();
  };

  console.log(Comments);

  const handleshow = () => {
    if (show === false) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  return (
    <div className="Question">
      <div className="detail">
        <span>
          <span className="date">Posted on: {data.createdAt.slice(0, 10)}</span>
          <br />
          <br />
          <b>Question by user {data.userId}: </b>
        </span>
        <br />
        <br />
        <span>{data.desc}</span>
      </div>
      {data.img && (
        <>
          <img src={data.img} alt="Question" />
          <br />
        </>
      )}

      <div className="QuestionReact">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 20,
            cursor: "pointer",
          }}
        >
          <QuestionAnswerIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={handleshow}
          />
          <span style={{ marginLeft: "6px" }} onClick={handleshow}>{count} Answers</span>
        </div>
      </div>
      {show === true ?
          <div className="answerSection">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="text" className='commentinput' placeholder='Write your answer' onChange={(e) => setcommentwriting(e.target.value)} />
              <button className='addCommentbtn' onClick={handleComment}>Post</button>
            </div>
            {Comments.map((item) => (
              <div className="answer">
                {/* <div style={{display:"flex" , alignItems:"center"}}>  */}
                  <span className="username">{item.username} : </span>
                {/* </div> */}
                <span style={{ marginLeft: "25px" , textAlign:'start' , marginTop:-16 }}>{item.title}</span>
                
              </div>

            ))}
          </div>:''
           }
    </div>
  );
};

export default Question;
