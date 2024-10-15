import mongoose from "mongoose"

let isConnected = false

const connectMongoDB = async () => {
  if (isConnected) {
    return console.log("Using existing MongoDB connection")
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    isConnected = connection.connections[0].readyState // Track connection state
    console.log("Connected to MongoDB successfully")
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error)
    throw new Error("Failed to connect to MongoDB")
  }
}

export default connectMongoDB
