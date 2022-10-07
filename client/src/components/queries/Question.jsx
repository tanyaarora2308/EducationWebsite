import React, { useState } from "react";
import "./Question.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import axios from "axios";
import swal from "sweetalert";

const Question = ({ data }) => {
  console.log(data)
  const [count,setCount] = useState(data.answers.length);
  const [Comments, setComments] = useState(data.answers);
  const [commentwriting, setcommentwriting] = useState("");
  const [show, setshow] = useState(false);

  const addComment = () => {
    const comment = {
      quesID: data._id,
      userId: JSON.parse(sessionStorage.getItem("UserDetails"))?._id,
      answer: `${commentwriting}`,
    };
    // setComments(Comments.concat(comment));
    setCount(count+1);

    axios
      .post("http://localhost:5000/query/answer", comment)
      .then((response) => {
        if (response.status == 200)
          swal("Answer Posted!", {
            buttons: false,
            timer: 1000,
          });
        else if (response.status == 400) {
          throw new Error(response);
        }
      })
      .catch((error) => {
        console.log(error);
        swal(error.response.data.message, {
          buttons: false,
          timer: 1000,
        });
      });


  };

  const handleComment = () => {
    addComment();
  };


  const handleshow = () => {
    if (show === false) {
      setshow(true);
    } else {
      setshow(false);
    }
  };



  const deleteQuery = async (queryID,userID) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "",
    }
    axios.delete(`/query/${queryID}/${userID}`, { headers: headers });
  }
  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType || "";
  const userID = JSON.parse(sessionStorage.getItem("UserDetails"))?._id || "";
  return (
    <div className="Question">
      <div className="detail">
        <span>
          {/* <span className="date">Posted on: {data.createdAt.slice(0, 10)}</span> */}
          <br />
          <br />
          <b>Question by user #{data.userId}: </b>
        </span>
        <br />
        <br />
        <span>{data.desc}</span>
      </div>
      {/* {data.img && (
        <>
          <img src={data.img} alt="Question" />
          <br />
        </>
      )} */}

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
          {(data.userId === userID || userType === "admin")  && <i class="fa fa-trash" aria-hidden="true" onClick={() => {deleteQuery(data._id,userID)}} />}
        </div>
      </div>
      {show === true ?
          <div className="answerSection">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="text" className='commentinput' placeholder='Write your answer' onChange={(e) => setcommentwriting(e.target.value)} />
              <button className='addCommentbtn' onClick={handleComment}>Post</button>
            </div>
            {data.answers.map((item) => (
              <div className="answer">
                {/* <div style={{display:"flex" , alignItems:"center"}}>  */}
                  <span className="username">{item.userId}: </span>
                {/* </div> */}
                <span style={{ marginLeft: "15px" , textAlign:'start' , marginTop:-16 }}>{item.answer}</span>
                
              </div>

            ))}
          </div>:''
           }
    </div>
  );
};

export default Question;
