const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5001;
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(require('./routes/user'));
// app.use(require('./routes/blogPosts'));
// get driver connection
const dbo = require('./db/conn');
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.post("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
