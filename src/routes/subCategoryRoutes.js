import express from "express"
import { createSubCategory,getAllsubcategory,deleteSubcategory } from "../controller/subcategoryController.js"
const Router = express.Router()

Router.post("/create-subcategory",createSubCategory)
Router.get("/getAllsubcategory",getAllsubcategory)
Router.delete("/deletesubcategory/:id",deleteSubcategory)

export default Router