import express from 'express';
import { connectdb } from '../database/db.js';

const app = express();

const port = 4000;

connectdb();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
