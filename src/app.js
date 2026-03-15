import express from "express"
const app = express()
import categoryRouter from "./routes/categoryRoutes.js"
import subcategoryRouter from "./routes/subCategoryRoutes.js"

app.use(express.json())
app.use("/api/category",categoryRouter)
app.use("/api/subcategory",subcategoryRouter)
export default app