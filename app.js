
const express = require('express');
const app = express();
const port = 5000;

let assets=[];
let next=1;

app.use(express.json());


//Code - POST

app.post('/assets', (req,res) => {const {name,location, value} = req.body;

if(!name || !location || typeof value !== 'number'){

  return res.status(400).json({ error:"Something wrong with the inserted data, please verify ."})
}

const newAsset = {id:next , name , location, value};
assets.push(newAsset);
next++;

res.status(201).json(newAsset);
});


//Code - GET
app.get('/', (req, res) => {
  console.log('Received GET / at', new Date());
  res.send('API is running! Try /assets for endpoints.');
});

app.get('/assets',(req,res) => { const {location} = req.query;

  let results=assets;
  if(location){
    console.log(location);
    results=assets.filter(asset=>asset.location.toLowerCase() === location.toLowerCase());
  }
    res.json(results);

}
);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });