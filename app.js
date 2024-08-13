const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const port = 3000;

const corsOptions = {
  origin: '*',
  credentials: true
};

app.use(cors(corsOptions));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the directory for EJS files

app.use(express.static(path.join(__dirname, 'public')));

// Define routes and render EJS templates
app.get("/", (req, res) => {
  res.render("index"); // render index.ejs
});

app.get("/contact-us", (req, res) => {
  res.render("contact-us"); // render contact-us.ejs
});

app.get("/about", (req, res) => {
  res.render("about"); // render about.ejs
});

app.get("/showcase-new", (req, res) => {
  res.render("showcase-new"); // render showcase-new.ejs
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
