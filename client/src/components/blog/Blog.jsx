import React, { useEffect, useState } from "react";
import HeaderAdmin from "../AdminPages/header/Header";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import HeaderStudent from "../CommonComponents/header/Header";
import "./Blog.scss";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  return (
    <>
      {JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "admin" && <HeaderAdmin />}
      {(JSON.parse(sessionStorage.getItem("UserDetails"))?.userType ===
        "student" ||
        !authenticated) && <HeaderStudent />}
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
      )}
    </>
  );
};

export default Blog;
