import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
