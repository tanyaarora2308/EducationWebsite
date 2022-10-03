import React, { useEffect, useState } from "react";
import Back from "../common/Back";
import Error from "../common/Error";
import BlogCard from "./BlogCard";
import "./Blog.css";
import HeaderStudent from "../common/header/Header";
import HeaderAdmin from "../adminPages/header/Header";

const Blog = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  return (
    <>
    {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType === "admin" && <HeaderAdmin />}
    {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType === "student" &&  <HeaderStudent/>}
      {authenticated ? (
        <>
          <Back title="Blog Posts" />
          <section className="blog padding">
            <div className="container grid2">
              <BlogCard />
            </div>
          </section>
        </>
      ) : (
        <Error />
        // <p>Tanya</p>
      )}
    </>
  );
};

export default Blog;
