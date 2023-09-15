import express from 'express';
import { connectdb } from '../database/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors);
app.use('auth', authRoutes);

const port = 4000;

connectdb();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
