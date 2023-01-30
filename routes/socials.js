import express from "express";

import { getSocials, getSocial, createSocial } from "../controllers/socials.js";

const router = express.Router();

router.get("/", getSocials);
router.get("/:id", getSocial);
router.post("/", createSocial);

export default router;
