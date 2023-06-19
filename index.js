// require express
const express = require('express');

//execute express
const app = express();

// Tell your app to use EJS as its view engine
app.set('view engine', 'ejs')

// add home route
app.get('/', (req,res) => {
    // send a home ejs template
    res.render('home')
})


// listen at port 3000
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})