const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
  {
    reviewID: {
      required: true,
      type: String
    },
    userID: {
      required: true,
      type: String
    },
    message: {
      required: true,
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Comments = model("comments", commentsSchema);

module.exports = Comments;