import React from "react"
import Back from "../common/Back"
import BlogCard from "./BlogCard"
import "./Blog.css"

const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog