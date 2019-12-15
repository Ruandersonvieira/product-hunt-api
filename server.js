const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');
require('./src/config/db/Mongo');

requireDir('./src/models');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', require('./src/routes'));

app.listen(3338, () => {
  console.log(`Server started`);
});