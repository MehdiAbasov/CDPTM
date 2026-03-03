import mongoose from "mongoose"

const contentSchema = new mongoose.Schema({

 type:{
  type:String,
  required:true
 },

 slug:{
  type:String,
  required:true,
  unique:true
 },

 title:{
  az:String,
  en:String
 },

 excerpt:{
  az:String,
  en:String
 },

 content:{
  az:String,
  en:String
 },

 image:String,

 date:Date,

 category:String,

 createdAt:{
  type:Date,
  default:Date.now
 }

})

export default mongoose.model("Content",contentSchema)