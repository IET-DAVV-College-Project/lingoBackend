import Blog from "../models/blogModel.js";
export const putDislikes=async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    
      blog.likes -= 1;
      
      await blog.save();
    

    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const putLikes=async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.likes += 1;
    
    await blog.save();

    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const getAllBlogs = async (req, res) => {
  try {
    let username = req.query.email;
    let blogs;
    if(username){
      blogs = await Blog.find({ username: username });
    }else{
      blogs = await Blog.find({});
    }
    return res.status(200).json([ blogs ]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const getBlogByEmail = async (req, res) => {
  try {
    let writerEmail = req.query.writer;
    let blogs;

    if (writerEmail) {
      // If writerEmail is provided, filter blogs by writer's email
      blogs = await Blog.find({ writer: writerEmail });
    } else {
      // If no writerEmail provided, retrieve all blogs
      blogs = await Blog.find({});
    }

    return res.status(200).json([ blogs ]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getBlogByFilter = async (req, res) => {
  try {
    // Extract filters from query parameters
    const companyName=req.query.companyName;
    const category=req.query.category;
    const campus=req.query.campus;
    const round=req.query.round;

    // Construct the filter object based on provided parameters
    const filters = {};
    if (companyName) filters.companyName = companyName;
    if (category) filters.category = category;
    if (campus) filters.campus = campus;
    if (round) filters.round = round;

    // Query the database with the constructed filters
    const blogs = await Blog.find(filters);

    if (blogs.length === 0) {
      return res.status(404).json({ msg: 'No blogs found for the specified filters.' });
    }

    return res.status(200).json([blogs]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    console.log(blog);
    return res.status(200).json([ blog ]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const createBlog = async (req, res) => {
  try {
    const blog = req.body;
    const newBlog = new Blog(blog);
    await newBlog.save();
    return res.status(200).json({ msg: `Post created` });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'nahi hua' });
  }
};
export const updateBlog = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      res.status(404).json({ msg: "Post not found" });
    }
    await Blog.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json("post updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndRemove(req.params.id);
    console.log(blog)
    res.status(200).json("blog deleted successfully");
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};
