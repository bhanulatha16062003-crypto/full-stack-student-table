import express from "express";
import categoryRoutes from "./category.routes.js";
import subcategoryRoutes from "./subcategory.routes.js";
import instituteRoutes from "./instituteRoutes.js";
import trainerRoutes from "./trainerRoutes.js"; 

const router = express.Router();

router.use("/categories", categoryRoutes);
router.use("/subcategories", subcategoryRoutes);
router.use("/institutes", instituteRoutes);
router.use("/trainers", trainerRoutes); 

export default router;