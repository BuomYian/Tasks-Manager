import mongoose from 'mongoose';

const mongoURI = 'mongodb://127.0.0.1:27017/task-manager';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectdb = () => {
  mongoose
    .connect(mongoURI, options)
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB:`, error);
    });
};
