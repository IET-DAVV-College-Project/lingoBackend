import express from "express";
import {toggleQLike,putDislikes,putLikes,createQuestion, deleteQuestion, getQuestionById, getAllQuestions, updateQuestion, getQuestionByEmail, getQuestionByFilter}  from "../controllers/questionController.js";
const router = express.Router();

router.put('/api2/likes/toggle',toggleQLike);
router.put('/questions/:id/like',putLikes);
router.put('/questions/:id/dislike',putDislikes);
router.get('/questions',getAllQuestions);
router.get('/Email',getQuestionByEmail);
router.get('/question',getQuestionByFilter);
router.post('/questions',createQuestion);
router.get('/questions/:id',getQuestionById);
// router.get('/blogs?writer=:email',getBlogByEmail);
// router.get('/blogs?category=:category&campus=:campus&round=:round',getBlogByFilter);
router.put('/questions/:id',updateQuestion);
router.delete('/questions/:id',deleteQuestion);
export default router;