const Blog = require("../models/blog");

//Fetch all blog posts

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      message: "Posts get successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch posts",
      error: error.message,
    });
  }
};

//get a single post by ID
exports.getBlogsById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.status(200).json({
        success: true,
        message: "Post get successfully",
        data: blog,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving blog post",
      error: error.message,
    });
  }
};

// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, description, content } = req.body;

    if (!title || !description || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, description, and content are required",
      });
    }

    const blog = new Blog({ title, description, content });
    const createdBlog = await blog.save();

    res.status(201).json({
      success: true,
      message: "Blog post created successfully",
      data: createdBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create blog post",
      error: error.message,
    });
  }
};
