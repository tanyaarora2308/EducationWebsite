import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Blog.scss";

const BlogCard = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token ||
        "",
    };
    axios
      .get("/blogs", { headers: headers })
      .then((response) => {
        // console.log(response);
        setData(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // const returnedData = await axios.get("http://localhost:5000/blogs");
    // console.log(returnedData);
    // setData(returnedData.data);
  };


  const deleteBlog = async (id) => {
    const headers = {
      authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "",
    }
    axios.delete(`/blogs/${id}`, { headers: headers });
  }

  useEffect(() => {
    getData();
  }, [data]);

  const userType = JSON.parse(sessionStorage.getItem("UserDetails"))?.userType || "";
  return (
    <>
      <div className="row11 blogCard">
        {data &&
          data.map((val) => (
            <div className=" column11 singleBlog">
              <a href="#" class="data-card" key={val._id}>
                <h3>{val.id}</h3>
                <br/>
                <p>{val.title}</p>
                <span class="link-text">
                  <a href={val.link} style={{color:"#024b45"}}>View Link</a>
                  <svg
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                      fill="#1eb2a6"
                    />
                  </svg>
                </span>
                <br/>
                {userType === "teacher" && <i className="fa fa-trash delete-icon" aria-hidden="true" style={{color:"#024b45",paddingLeft:"10em",fontSize:"20px"}}
                onClick={() => {deleteBlog(val._id)}}
                 />}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default BlogCard;
