import mongoose from "mongoose";

const SocialSchema = mongoose.Schema({
  name: String,
  link: String,
});

var Social = mongoose.model("Social", SocialSchema);

export default Social;
