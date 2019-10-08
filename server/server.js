const express = require('express');
const handle = require('./handlers/server');

const app = express();
const port = 4040;

app.get('/', (req, res) => res.json({servStat: 'Server status'}));

app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`Server working on port ${port}`));