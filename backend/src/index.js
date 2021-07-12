const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json()); // Informando que o corpo da requisição será em json
app.use(routes);

app.listen(3333);