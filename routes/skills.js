import express from "express";

import {
  getAllSkills,
  getSkillSet,
  createSkillSet,
} from "../controllers/skills.js";

const router = express.Router();

router.get("/", getAllSkills);
router.get("/:id", getSkillSet);
router.post("/", createSkillSet);

export default router;
