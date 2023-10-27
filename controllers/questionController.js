import Question from "../models/questionModel.js";
export const toggleQLike = async (req, res) => {
  try {
    const { itemId, userId } = req.body;
    let question = await Question.findById(itemId);
    console.log(itemId);
    console.log(userId);
    
    if (!question) {
      return res.status(404).json({ error: 'question not found' });
    }
    
    const likedIndex = question.likesArray.indexOf(userId);
    if (likedIndex === -1) {
      // If user has not liked the blog, add the userId to likes array
      
      question.likesArray.push(userId);
    } else {
      // If user has already liked the blog, remove the userId from likes array
      question.likesArray.splice(likedIndex, 1);
    }
    question.likes=question.likesArray.length;
    // Save the updated blog
    question = await question.save();
    
    return res.status(200).json({ likes: question.likesArray.length });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const putDislikes=async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Question.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Question not found' });
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
    const blog = await Question.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Question not found' });
    }

    blog.likes += 1;
    
    await blog.save();

    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const getAllQuestions = async (req, res) => {
  try {
    let username = req.query.email;
    let questions;
    if(username){
      questions = await Question.find({ username: username });
    }else{
        questions = await Question.find({});
    }
    return res.status(200).json([ questions ]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const getQuestionByEmail = async (req, res) => {
  try {
    let writerEmail = req.query.writer;
    let questions;

    if (writerEmail) {
      // If writerEmail is provided, filter blogs by writer's email
      questions = await Question.find({ writer: writerEmail });
    } else {
      // If no writerEmail provided, retrieve all blogs
      questions = await Question.find({});
    }

    return res.status(200).json([ questions ]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getQuestionByFilter = async (req, res) => {
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
    const questions = await Question.find(filters);

    if (questions.length === 0) {
      return res.status(404).json({ msg: 'No questions found for the specified filters.' });
    }

    return res.status(200).json([questions]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    console.log(question);
    return res.status(200).json([ question ]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const createQuestion = async (req, res) => {
  try {
    const question = req.body;
    const newQuestion = new Question(question);
    await newQuestion.save();
    return res.status(200).json({ msg: `Post created` });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'nahi hua' });
  }
};
export const updateQuestion = async (req, res) => {
  try {
    const post = await Question.findById(req.params.id);
    if (!post) {
      res.status(404).json({ msg: "Post not found" });
    }
    await Question.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json("post updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndRemove(req.params.id);
    console.log(question)
    res.status(200).json("question deleted successfully");
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};
