const express = require('express');
const router = express.Router();

let assets=[];
let next=1;


//Code - POST

router.post('/', (req,res) => {const {name,location, value} = req.body;

if(!name || !location || typeof value !== 'number'){

  return res.status(400).json({ error:"Something wrong with the inserted data, please verify ."})
}

const newAsset = {id:next , name , location, value};
assets.push(newAsset);
next++;

res.status(201).json(newAsset);
});


//Code - GET


router.get('/',(req,res) => { const {location} = req.query;

  let results=assets;
  if(location){
    console.log(location);
    results=assets.filter(asset=>asset.location.toLowerCase() === location.toLowerCase());
  }
    res.json(results);

}
);

module.exports = router;
