// require dependencies in our file

const express = require("express");
const app = express();


// initialize express framework



// configure application settings
const port = 3000;


// mount our middleware



// mount our routes

//I(ndex)
app.get("/pokemon", (req, res) => {
    res.send("Hi")
});

//N(ew)

//D(elete)

//U(pdate)

//C(reate)

//E(dit)

//S(how)
app.get("/pokemon/:pokeIndex", () => {
    
});
// tell application to listen for requests

app.listen(port, () => {
    console.log(`Listening on port`, port)
});