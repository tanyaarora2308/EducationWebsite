import React from "react"
import Heading from "../common/heading/Heading"
import BlogCard from "./BlogCard"
import "./Blog.css"

const Blog = () => {
  return (
    <>
      <Heading title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog