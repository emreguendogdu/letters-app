import mongoose from "mongoose"

// Global connection object
const connection = {
  isConnected: false,
  conn: null,
  promise: null,
}

const connectMongoDB = async () => {
  // If already connected, reuse the connection
  if (connection.isConnected) {
    return connection.conn
  }

  // If connecting, wait for the existing promise
  if (connection.promise) {
    connection.conn = connection.promise
    return connection.conn
  }

  try {
    // Configure connection options for better performance
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 5,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000,
      family: 4, // Use IPv4, skip IPv6
    }

    // Create new connection
    connection.promise = mongoose.connect(process.env.MONGO_URI, opts)
    connection.conn = await connection.promise
    connection.isConnected = connection.conn.connections[0].readyState === 1

    return connection.conn
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw new Error("Failed to connect to MongoDB")
  }
}

export default connectMongoDB
