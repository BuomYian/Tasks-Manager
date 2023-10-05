import mongoose from 'mongoose';

// MongoDB connection URI
const mongoURI =
  'mongodb+srv://fashion_stylist:kJvoviveyJa5Np9l@cluster0.jsq031p.mongodb.net/Task-Manager?retryWrites=true&w=majority';

// MongoDB connection options
const options = {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
};

// Function to establish a connection to the MongoDB database
export const connectdb = () => {
  mongoose
    .connect(mongoURI, options) // Connect to MongoDB using the provided URI and options
    .then(() => {
      console.log(`Connected to MongoDB`); // Log a success message if the connection is established
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB:`, error); // Log an error message if the connection fails
    });
};
