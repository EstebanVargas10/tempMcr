const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/crypto', (req, res) => {
  res.sendFile(__dirname + '/pages/crypto.html');
});

app.get('/buymeacoffee', (req, res) => {
  res.sendFile(__dirname + '/pages/buymeacoffee.html');
});

app.get('/donaciones', (req, res) => {
  res.sendFile(__dirname + '/pages/donaciones.html');
});

app.get('/insta', (req, res) => {
  res.sendFile(__dirname + '/pages/insta.html');
});

app.get('/patreon', (req, res) => {
  res.sendFile(__dirname + '/pages/patreon.html');
});

app.get('/playlists', (req, res) => {
  res.sendFile(__dirname + '/pages/playlists.html');
});

app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/pages/registro.html');
});

app.get('/sinpe', (req, res) => {
  res.sendFile(__dirname + '/pages/sinpe.html');
});

// 404
app.all('*', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});
