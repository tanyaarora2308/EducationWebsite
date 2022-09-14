import React, { useState, useRef } from "react";
import "./UploadQues.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import HelpIcon from '@mui/icons-material/Help';

const UploadQues = () => {
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
    <div className="QuesShare">
      <HelpIcon sx={{color: "#1eb2a6"}} fontSize="large"/>
      <div>
        <input type="text" placeholder="Your question here" />
        <div className="QuesShareOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery sx={{color: "#1eb2a6"}}/> 
            Add Question Picture
          </div>
          {/* <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle sx={{color: "#1eb2a6"}}/>
            Add Question Video
          </div>{" "} */}
          <button className="button ps-button">Share</button>
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
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default UploadQues;
