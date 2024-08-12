const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const port = 3000;

const corsOptions = {
  origin: '*', // Replace with your allowed origin
  credentials: true // Allow credentials to be sent
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/contact-us", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact-us.html"));
  });

  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
  });

  
  app.get("/showcase-new", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "showcase-new.html"));
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
