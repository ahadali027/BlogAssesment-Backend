const express = require("express");
const router = express.Router();

const {
  getBlogs,
  getBlogsById,
  createBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.get("/:id", getBlogsById);
router.post("/", createBlog);

module.exports = router;
