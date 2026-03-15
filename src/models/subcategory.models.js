import mongoose, { mongo } from "mongoose";

const subcategorySchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name is required"]
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category",
    required:[true,"Category is important"]
  },
  price:{
    type:String,
    required:[true,"Price is important"]
  }
})
const subcategoryModel = mongoose.model("subcategory",subcategorySchema)
export default subcategoryModel