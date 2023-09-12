const express = require('express')
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`App is on port ${port}!`);
});

/*
HOW TO VERSION THE PWA
const express = require('express');
const path = require('path');

const app = express();
const version = '1234'; // Change this to the version number you want

app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  if (req.url === '/') {
    req.url = `/?v=${version}`;
  } else if (/\.\w+$/.test(req.url)) {
    // If the requested URL has a file extension, append the version query parameter
    req.url = `${req.url}?v=${version}`;
  }
  next();
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`App is on port ${port}!`);
});

*/