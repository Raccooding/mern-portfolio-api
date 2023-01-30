import express from "express";

import { getPersonData } from "../controllers/person.js";

const router = express.Router();

router.get("/", getPersonData);

export default router;
