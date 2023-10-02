import express from 'express';
import { connectdb } from '../database/db.js';
import cors from 'cors';
import taskRouter from './routes/taskRoutes.js';
import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan';

const app = express();
connectdb();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
