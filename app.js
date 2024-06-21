//DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun} = req.params;

    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}\!`)
})

// HOMEPAGE
app.get("/bugs/", (req, res) => {

    res.send(`99 little bugs in the code
                <br>
                <br>
                <a href="/bugs/101">pull one down, patch it around</a>`)
            
            });

app.get("/bugs/:num", (req, res) => {
   const { num } = req.params;

   if (num >= 200) {
    res.send(`<a href="/bugs/">Start Over</a>`)
   }
   else {
    res.send(`${num} little bugs left in the code
                <br>
                <br>
                <a href="/bugs/${Number(num)+2}">pull one down, patch it around</a>`)     
        }    
            });
app.get("/pokemon/", (req, res) => {

    res.send(pokemon);

            });

app.get("/pokemon/:search", (req, res) => {
    const { pokemonName } = req.query.name;
    const { search } = req.params;

        if (search === "search") {
             res.send(pokemon.find((foo) => {foo.name === pokemonName}));
        }
    });

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;

    if(indexOfArray > 0 && indexOfArray < pokemon.length - 1)
            res.send(pokemon[indexOfArray].name);
    else
            res.send(`sorry, no pokemon found at /pokemon/${indexOfArray}`)
        
})

//  console.log(pokemon.find((poke) => {
//         return poke.name === "Bulbasaur";
//  }).name);


// console.log(pokemon.find((foo) => foo.name === "Bulbasaur"));

// EXPORT
module.exports = app;