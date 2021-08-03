const express = require('express');//express読み込み
const app = express();
const http = require('http'); //httpモジュール読み込み
const server = http.createServer(app);
const { Server } = require("socket.io");//socket.io読み込み
const io = new Server(server);

//ルートディレクトリにアクセスした時に呼び出される
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  //接続確立後の処理
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
  });
  

//3000portでhttpサーバーを立てる
server.listen(3000, () => {
  console.log('listening on *:3000');
});