const express = require('express');

const app = express();
const port = 4040;

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, console.log(`Server is turned on ${port} port`));