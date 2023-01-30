import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import corsOptions from "./config/corsOptions.js";
import personRoutes from "./routes/person.js";
import projectRoutes from "./routes/projects.js";
import publicationRoutes from "./routes/publications.js";
import skillRoutes from "./routes/skills.js";
import socialRoutes from "./routes/socials.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

app.use("/projects", projectRoutes);
app.use("/publications", publicationRoutes);
app.use("/skills", skillRoutes);
app.use("/socials", socialRoutes);
app.use("/person", personRoutes);

const CONNECT_STRING = process.env.CONNECTION_STRING;
const PORT = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECT_STRING, {
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running ...`)))
  .catch((error) => console.log(error.message));
