import React from "react";
import { blog } from "../../dummydata";

const BlogCard = () => {
  return (
    <>
      <div className="row11">
        {blog.map((val) => (
          <div className="items shadow column11">
            <div className="text">
              <h1>{val.title}</h1>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCard;
