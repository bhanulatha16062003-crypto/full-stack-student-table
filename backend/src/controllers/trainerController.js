import {
  createTrainerService,
  getTrainersByInstituteService, // ✅ updated
  updateTrainerService,
  deleteTrainerService
} from "../services/trainerService.js";

// ✅ CREATE
export const createTrainer = async (req, res) => {
  try {
    const result = await createTrainerService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET by institute ⭐ (UPDATED)
export const getTrainersByInstitute = async (req, res) => {
  try {
    const data = await getTrainersByInstituteService(req.params.institute_id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATE
export const updateTrainer = async (req, res) => {
  try {
    const result = await updateTrainerService(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE
export const deleteTrainer = async (req, res) => {
  try {
    const result = await deleteTrainerService(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};