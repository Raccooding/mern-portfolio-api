import express from "express";

import {
  getPublications,
  getPublication,
  createPublication,
} from "../controllers/Publications.js";

const router = express.Router();

router.get("/", getPublications);
router.get("/:id", getPublication);
router.post("/", createPublication);

export default router;
