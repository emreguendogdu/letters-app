import mongoose, { Schema } from "mongoose"

const letterSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true, // for faster queries
    },
    description: {
      type: String,
      required: true,
    },
    letter: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // for better performance
    toJSON: { virtuals: false },
    toObject: { virtuals: false },
  }
)

// Compound index for sorting by createdAt
letterSchema.index({ createdAt: -1 }, { background: true })

// Add any frequently used query paths to index
letterSchema.index({ title: 1, createdAt: -1 })

const Letter = mongoose.models.Letter || mongoose.model("Letter", letterSchema)

export default Letter
