import express from "express";
import {
  createInstitute,
  getInstitutesBySubcategory,
  updateInstitute,
  deleteInstitute
} from "../controllers/instituteController.js";

const router = express.Router();

// CREATE
router.post("/", createInstitute);

// GET by subcategory ⭐ (MAIN)
router.get("/:subcategory_id", getInstitutesBySubcategory);

// UPDATE
router.put("/:id", updateInstitute);

// DELETE
router.delete("/:id", deleteInstitute);

export default router;