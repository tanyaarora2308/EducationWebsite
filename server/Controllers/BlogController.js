import blogModel from "../Models/blogModel.js";

// Create new blog
export const postBlog = async (req, res) => {
  const newBlog = new blogModel(req.body);
  const { id, title, link } = req.body;
  if (!id || !title || !link)
    return res.status(400).json("Please fill in all the fields.");
  try {
    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a Blog
export const getBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const Blog = await blogModel.findById(id);
    res.status(200).json(Blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a query
export const deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const blog = await blogModel.findById(id);
    await blog.deleteOne();
    res.status(200).json("Blog deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

//Show all Blogs
export const showAllBlogs = async (req, res) => {
  blogModel
    .find({})
    .then((Blog) => {
      res.status(200).json(Blog);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
