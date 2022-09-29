import blogModel from "../Models/blogModel.js";

// Create new blog
export const postBlog = async (req, res) => {
  const newBlog = new blogModel(req.body);

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

//Show all Blogs
export const showAllBlogs = async (req, res) => {
  blogModel.find({})
    .then((Blog) => {
      res.status(200).json(Blog);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
