import express from 'express';

const app = express();
require('../database/db');

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
