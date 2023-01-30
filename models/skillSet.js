import mongoose from "mongoose";

const SkillSetSchema = mongoose.Schema({
  title: String,
  skills: [String],
});

var SkillSet = mongoose.model("SkillSet", SkillSetSchema, "skills");

export default SkillSet;
