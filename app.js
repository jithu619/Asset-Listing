const express = require('express');
const app = express();
const port = 3000;

let assets=[];
let next=1;

app.use(express.json);


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

app.get('/assets',(req,res) => { const location = req.query;

  let results=assets;
  if(location)
    results=assets.filter(assets.location.toLowerCase === location.toLowerCase());

    res.json(results);

}
);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });