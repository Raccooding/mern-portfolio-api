import mongoose from "mongoose";

const PersonSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  currentRole: String,
  photo: String,
  about: String,
  education: String,
  yearsOfExperience: String,
  projects: String,
  volunteering: String,
});

var Person = mongoose.model("Person", PersonSchema);

export default Person;
