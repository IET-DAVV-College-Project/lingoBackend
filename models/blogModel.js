import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: true,
  },
  Cdate: {
     type:String,
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
  },
  likesArray:{
    type:[String],
    default:[]
  }
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;