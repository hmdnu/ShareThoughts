import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: String,
    required: [true, "Cant post empty value"],
  },
});

const Post = models.Post || model("Post", PostSchema);
export default Post;
