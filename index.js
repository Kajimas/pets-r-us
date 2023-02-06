/*
Title: index.js (https://github.com/buwebdev/web-340/blob/master/week-5/fms/index.js)
Author: Richard Krasso 
Date: 2/5/2023
Description: A Javascript example that reminded me how to preform routing
*/

"use strict"

const path = require('path');

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home',
        pageTitle: 'Landing Page'
    })
});

app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding',
        pageTitle: 'Boarding'
    })
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pageTitle: 'Grooming Services'
    })
});

app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us: Training',
        pageTitle: 'Training Services'
    })
});


app.listen(PORT, () => console.log(`Running on ${PORT}`));