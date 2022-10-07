import React, { useState, useRef } from "react";
import "./UploadQues.css";
import swal from 'sweetalert';
import axios from "axios";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import HelpIcon from "@mui/icons-material/Help";

const UploadQues = () => {
  const initialState = {
    userId: JSON.parse(sessionStorage.getItem("UserDetails"))?._id,
    desc: "",
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    setData(initialState);
    e.preventDefault();
    axios
      .post("http://localhost:5000/query/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <form>
    <div className="QuesShare">
      <HelpIcon sx={{ color: "#1eb2a6" }} fontSize="large" className="questionShareIcon"/>
      <div>
        {/* <input
          type="text"
          placeholder="Your User ID"
          name="userId"
          value={data.userId}
          onChange={handleInputChange}
        /> */}
        <textarea
          type="text"
          placeholder="Your question here"
          // style={{ padding: "3rem" }}
          name="desc"
          value={data.desc}
          onChange={handleInputChange}
        />
        <div className="QuesShareOptions">
          {/* <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery sx={{ color: "#1eb2a6" }} />
            Add Question Picture
          </div> */}
          <button className="button ps-button" type="submit" onClick={submitHandler}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
    </form>
  );
};

export default UploadQues;
