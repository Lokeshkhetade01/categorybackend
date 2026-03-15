import express from "express"
import { createSubCategory,getAllsubcategory,deleteSubcategory,getByIdSubcategory } from "../controller/subcategoryController.js"
const Router = express.Router()

Router.post("/create-subcategory",createSubCategory)
Router.get("/getAllsubcategory",getAllsubcategory)
Router.delete("/deletesubcategory/:id",deleteSubcategory)
Router.get("/getByIdSubcategory/:id",getByIdSubcategory)
export default Router