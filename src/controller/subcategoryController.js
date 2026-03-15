import subcategoryModel from "../models/subcategory.models.js"

export async function createSubCategory(req,res){
  const{name,category,price} = req.body;
  const subcategory = await subcategoryModel.create({
    name,category,price
  })
   const populatedSubcategory = await subcategory.populate("category","name")
  res.status(201).json({
    message:"Subcategory created successfully!",
    subcategory:populatedSubcategory
  })
}

export async function getAllsubcategory(req,res){
  const total = await subcategoryModel.countDocuments()
  const subdata = await subcategoryModel.find().populate("category","name")
  if(subdata.length===0){
    return res.status(400).json({
      message:"There is not subcateogyr"
    })
  }
  res.status(200).json({
    success:true,
    total:total,
    message:"Subcategory fetch successfully!",
    subdata
  })
}

export async function deleteSubcategory(req,res){

  const id = req.params.id

  const deletedData = await subcategoryModel.findByIdAndDelete(id)

  if(!deletedData){
    return res.status(404).json({
      message:"Subcategory not found"
    })
  }

  res.status(200).json({
    success:true,
    message:"Subcategory deleted successfully!"
  })
}