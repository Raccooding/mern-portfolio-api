import mongoose from "mongoose";

const PublicationSchema = mongoose.Schema({
  title: String,
  summary: String,
  year: String,
  link: String,
  technologies: [String],
  medium: {
    name: String,
    logo: String,
  },
});

var Publication = mongoose.model("Publication", PublicationSchema);

export default Publication;
