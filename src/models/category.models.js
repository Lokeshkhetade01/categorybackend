import mongoose from "mongoose";

const categorySchema =new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name is required"],
    unique:true
  },
  price:{
    type:String,
    required:[true,"Price is required"]
  }
},{timestamps:true})
const categoryModel = mongoose.model("category",categorySchema)
export default categoryModel