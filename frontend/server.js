const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => console.log(`server front listening on port ${process.env.BASE_URL}`));