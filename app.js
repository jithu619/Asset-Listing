
const express = require('express');
const app = express();
const port = 5000;

const assetsRouter = require('./routes/assets');
let assets=[];
let next=1;



app.use(express.json());
app.use('/assets',assetsRouter);

app.get('/', (req, res) => {
  console.log('Received GET / at', new Date());
  res.send('API is running! Try /assets for endpoints.');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });