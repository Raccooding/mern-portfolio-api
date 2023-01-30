import express from "express";

import {
  getProjects,
  getProject,
  createProject,
} from "../controllers/projects.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", createProject);

export default router;
