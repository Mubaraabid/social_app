import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
 
    // comments: [
    //   {
    comment: {
          type: "string",
          required: true,
        },
    //     dateTime: { type: Date, default: Date.now },
    //   },
    // ],
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    posts_id: {
        type:mongoose.Schema.ObjectId,
        ref:"post",
    }
  },
  { timestamps: true }
);

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;
