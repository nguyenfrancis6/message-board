const express = require("express");
const path = require("node:path");
const app = express();
const dbcontroller = require('./controllers/dbcontroller')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", dbcontroller.getMessageBoard);

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", dbcontroller.createMessage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
