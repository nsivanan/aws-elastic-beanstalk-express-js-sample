const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Testing the CICD! testing teh review option. Adding more options here'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
