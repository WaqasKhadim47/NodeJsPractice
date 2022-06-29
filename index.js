const express = require('express');
// will be use for validation
const joi = require('joi');

const { json } = require('body-parser');


const port = process.env.PORT || 3000;

const app = express();


app.use(json());

const routes = require('./customerRoutes');
app.use('/customerApi', routes());


app.listen(port, () => {
    console.log('Listening to the PORT ===> 3000!');
});

