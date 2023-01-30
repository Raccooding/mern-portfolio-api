import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: String,
  image: String,
  description: String,
  technologies: [String],
  link: String,
});

var Project = mongoose.model("Project", projectSchema);

export default Project;
