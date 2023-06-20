// require express
const express = require('express');

//execute express
const app = express();

//require path
const path = require('path')

// Tell your app to use EJS as its view engine
app.set('view engine', 'ejs')
//this line allows us to run the app from anywhere
app.set('views', path.join(__dirname, '/views'))

// add home route
app.get('/', (req,res) => {
    // send a home ejs template
    res.render('home')
})

// path to a route that generates a random number
app.get('/rand', (req,res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {num})
})


// listen at port 3000
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})