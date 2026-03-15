import express from "express"
const Router = express.Router()
import { createCategory,getAllCategory,getCategoryDropdown,updateCategory } from "../controller/categoryController.js"

// api/category/create-category
Router.post("/create-category",createCategory)
// api/category/getAllCategory
Router.get("/getAllCategory",getAllCategory)
// api/category/dropdown
Router.get("/dropdown", getCategoryDropdown)
// api/category/update-category/:id
Router.put("/update-category/:id", updateCategory)

export default Router