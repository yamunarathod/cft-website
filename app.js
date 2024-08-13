// const express = require("express");
// const app = express();
// const path = require("path");
// const cors = require('cors');
// const port = 3000;

// const corsOptions = {
//   origin: '*', 
//   credentials: true 
// };

// app.use(cors(corsOptions));
// app.use(express.static(path.join(__dirname, 'public')));

// // Define a route for the home page
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });


// app.get("/contact-us", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "contact-us.html"));
//   });

//   app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "about.html"));
//   });

  
//   app.get("/showcase-new", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "showcase-new.html"));
//   });
  

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


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
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define routes to render EJS templates
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/showcase-new", (req, res) => {
  res.render("showcase-new");
});




// Handle 404 errors
app.use((req, res) => {
  res.status(404).render("404", { url: req.url });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
