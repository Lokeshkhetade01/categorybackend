import categoryModel from "../models/category.models.js"

export async function createCategory(req,res){
  const{name,price} = req.body;
  const alreadyCategory = await categoryModel.findOne({name})
  if(alreadyCategory){
    return res.status(400).json({
      message:"This category is already exists"
    })
  }
  const data = await categoryModel.create({
    name,price
  })
  res.status(201).json({
    success:true,
    message:"Category Create successfully!",
    data
  })

}

export async function getAllCategory(req,res){
  const total = await categoryModel.countDocuments()
  const data = await categoryModel.find()
  if(data.length===0){
    return res.json({
      message:"There is not Category"
    })
  }
  res.status(200).json({
    message:"Category fetch successfully",
    total:total,
    data
  })
}


export async function getCategoryDropdown(req, res) {
  try {
    const total = await categoryModel.countDocuments()
    const categories = await categoryModel.find().select("name")

    res.status(200).json({
      success: true,
      total,
      categories
    })

  } catch (error) {
    res.status(500).json({
      message: "Error fetching categories"
    })
  }
}


export async function updateCategory(req,res){

  const {id} = req.params
  const {name,price} = req.body

  const updatedCategory = await categoryModel.findByIdAndUpdate(
    id,
    {name,price},
    {new:true}
  )

  if(!updatedCategory){
    return res.status(404).json({
      message:"Category not found"
    })
  }

  res.status(200).json({
    success:true,
    message:"Category updated successfully!",
    updatedCategory
  })

}