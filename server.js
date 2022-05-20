// require dependencies in our file

const express = require("express");
const app = express();
const poke = require('./models/pokemon.js')
const morgan = require('morgan');
const methodOverride = require("method-override");

// initialize express framework



// configure application settings
const port = 3000;


// mount our middleware
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(methodOverride("_method"))

// mount our routes

//I(ndex)
app.get("/pokemon", (req, res) => {
    res.render('index.ejs', { poke: poke });
});

//N(ew)

//D(elete)

//U(pdate)

//C(reate)

//E(dit)

//S(how)
app.get("/pokemon/:id", (req, res) => {
    res.render('show.ejs', {
        poke: poke[req.params.id],
    });
});

// tell application to listen for requests

app.listen(port, () => {
    console.log(`Listening on port`, port)
});