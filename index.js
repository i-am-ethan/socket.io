const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//ルートディレクトリにアクセスした時に呼び出される
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

//3000portで呼び出す
server.listen(3000, () => {
  console.log('listening on *:3000');
});