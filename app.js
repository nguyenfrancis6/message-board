const express = require('express');
const path = require('node:path');

const app = express();
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => {
  res.send("Hello");
})

app.get('/new', (req, res) => {
  res.send("New");
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))