const express = require('express');
const app = express();
const port = 3000;

let assets=[];
let next=1;

app.use(express.json);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });