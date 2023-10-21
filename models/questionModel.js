import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  campus: {
    type: String,
    required: true,
  },
  round:{
    type:String,
    required:true,
  },
  question_arr:{
    type: [String],
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
  },
  likes:{
    type: Number,
    default:0,
  }
});

const Question = mongoose.model("Question", questionSchema);

export default Question;