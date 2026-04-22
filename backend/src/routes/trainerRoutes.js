import express from "express";
import {
  createTrainer,
  getTrainersByInstitute,   // ✅ updated import
  updateTrainer,
  deleteTrainer
} from "../controllers/trainerController.js";

const router = express.Router();

// ✅ CREATE
router.post("/", createTrainer);

// ✅ GET by institute (UPDATED ⭐)
router.get("/:institute_id", getTrainersByInstitute);

// ✅ UPDATE
router.put("/:id", updateTrainer);

// ✅ DELETE
router.delete("/:id", deleteTrainer);

export default router;