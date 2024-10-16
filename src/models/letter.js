import mongoose, { Schema } from "mongoose"

const letterSchema = new Schema(
  {
    title: String,
    description: String,
    letter: String,
  },
  {
    timestamps: true,
  }
)

letterSchema.index({ createdAt: -1 }) // Sorting

const Letter = mongoose.models.Letter || mongoose.model("Letter", letterSchema)

export default Letter
