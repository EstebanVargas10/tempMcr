const express = require('express');
const app = express();
var git = require('git-rev-sync');

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

const gitHash = git.short();
console.log(`Git hash: ${gitHash}`);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/playlists', (req, res) => {
  res.sendFile(__dirname + '/pages/playlists.html');
});

// Social
app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/pages/registro.html');
});

app.get('/insta', (req, res) => {
  res.sendFile(__dirname + '/pages/insta.html');
});

// 404
app.all('*', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});
