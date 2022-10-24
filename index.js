//const PORT = 3000;
const express = require("express");
const { parseInt } = require("lodash");
const app = express()

const quotes = require("./quotes")

app.get('/' , (req,res) => {
  
  res.sendFile(__dirname+'/page.html')

})

app.get('/quotes', (req,res) =>{
    res.json(quotes);
    
})


 


app.get('/quotes/random', (req,res) =>{
  const randomSelector = Math.floor(Math.random() * quotes.length);
  const anyRandomFood = quotes[randomSelector];

  //res.send(quoteItem)
  res.send(anyRandomFood)
   
});

 app.get('/quotes/:num', (req,res) =>{
  const count = req.params.num > quotes.length ? quotes.length : req.params.num;

  // Make sure we're not mutating the original
  const newArr = [...quotes];

  // Get n amount of quotes (from count)
  // after shuffling initial array
  const items = newArr.sort(() => 0.5 - Math.random()).slice(0, count);

  res.status(200).send(items);
 //const quote =quotes.find(c =>
   // c.id === parseInt(req.params.)) 

 //if(!quote) res.status(404).send('<h2 style="font-family:monospace">Ooops.. Can \'t find what you are searching</h2>') 
 // res.send(quote)
 });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000
}

app.listen(port,function (){
console.log('Server has stared successfully')
});