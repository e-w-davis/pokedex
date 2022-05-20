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

app.put("/pokemon/:id", (req, res) => {
    poke[req.params.id] = req.body
    res.redirect("/pokemon")
})

//D(elete)

app.delete("/pokemon/:id", (req, res) => {
    poke.splice(req.params.id, 1)
    res.redirect("/pokemon")
});

//U(pdate)

//C(reate)
app.post("/pokemon", (req, res) => {
    poke.push({
        name: req.body.name,
        type: req.body.type,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
        },
    });
    // console.log(req.body)
    res.redirect("/pokemon");
});

app.post("/products", (req, res) => {
    res.send(req.body)
})

//E(dit)

//S(how)
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
});

app.get("/pokemon/:id", (req, res) => {
    res.render('show.ejs', {
        poke: poke[req.params.id],
    });
        console.log(poke)
});

// tell application to listen for requests

app.listen(port, () => {
    console.log(`Listening on port`, port)
});

