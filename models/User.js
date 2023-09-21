const mongoose = require("mongoose");

const UserSChema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    location: { type: String, required: false },
    isAdmin: { type: Boolean, required: false },
    isAgent: { type: Boolean, required: false },
    skills: { type: Array, default: false },
    profile: {
      type: String,
      required: false,
      default:
        "https://www.online-image-editor.com/styles/2019/images/power_girl_editor.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSChema);
