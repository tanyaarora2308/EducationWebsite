import "./Form.css";
import Back from "../common/Back";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

const blogForm = () => {
  return (
    <>
      <Back title="Post Blogs" />
      <div className="announcementForm">
        <div id="loginform">
          <h2 id="headerTitle">Post Blogs</h2>
          <Form />
        </div>
      </div>
    </>
  );
};

const Form = (props) => {
  const initialState = {
    id: "",
    title: "",
    link: "",
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    // console.log(data);
    e.preventDefault();
    setData(initialState);
    axios
      .post("http://localhost:5000/blogs/", data)
      .then((response) => {
        if (response.status == 200) 
        // console.log(response);
        swal("Blog Posted!", {
          buttons: false,
          timer: 1000,
        });
        else if (response.status == 400) {
          throw new Error(response.status);
        }
      })
      .catch((error) => {
        console.log(error);
        // swal(error.response.data, {
        //   buttons: false,
        //   timer: 1000,
        // });
      });
  };
  return (
    <>
      <form>
        <div className="row">
          <label>Index no.</label>
          <input
            type="text"
            name="id"
            value={data.id}
            placeholder="Enter id"
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            placeholder="Enter title"
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label>Link</label>
          <input
            type="text"
            name="link"
            value={data.link}
            placeholder="Enter link"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          title="Submit"
          id="button"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default blogForm;
