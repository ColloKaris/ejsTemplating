// require express
const express = require('express');

//execute express
const app = express();

//require path
const path = require('path')

// Require the JSON data file
const redditData = require('./data.json');

//Serving Static Files eg CSS, JS
app.use(express.static(path.join(__dirname, '/public')))


// Tell your app to use EJS as its view engine
app.set('view engine', 'ejs')
//this line allows us to run the app from anywhere
app.set('views', path.join(__dirname, '/views'))

// add home route
app.get('/', (req,res) => {
    // send a home ejs template
    res.render('home')
})

app.get('/cats', (req,res) =>{
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit', {...data}); // spreading it allows you to access
    // individual properties like names, subscribers, post etc
    } else {
        res.render('notfound', { subreddit})
    }
    
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