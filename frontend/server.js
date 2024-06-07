const express = require('express');
const app = express();

const port =  3000;
const host = 'localhost';

app.listen(port, host, () => console.log(`server front listening on port http://${host}:${port}`));