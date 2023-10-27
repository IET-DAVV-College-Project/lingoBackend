import express from "express";
import {createBlog, deleteBlog, getBlogById, getAllBlogs, updateBlog, getBlogByEmail, getBlogByFilter, putLikes, putDislikes, toggleLike}  from "../controllers/blogController.js";
const router = express.Router();

router.put('/api/likes/toggle',toggleLike);
router.put('/blogs/:id/like',putLikes);
router.put('/blogs/:id/dislike',putDislikes);
router.get('/blogs',getAllBlogs);
router.get('/Email',getBlogByEmail);
router.get('/blog',getBlogByFilter);
router.post('/blogs',createBlog);
router.get('/blogs/:id',getBlogById);
// router.get('/blogs?writer=:email',getBlogByEmail);
// router.get('/blogs?category=:category&campus=:campus&round=:round',getBlogByFilter);
router.put('/blogs/:id',updateBlog);
router.delete('/blogs/:id',deleteBlog);
export default router;