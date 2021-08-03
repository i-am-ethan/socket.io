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
      //メッセージを受信した時にconsole.logに出力する
    socket.on('chat message', (msg) => {
        console.log('message:'+ msg);
        io.emit('chat message', msg);//参加者全員にメッセージを送る
    })
    console.log('a user connected');
    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
  });
  

//3000portでhttpサーバーを立てる
server.listen(3000, () => {
  console.log('listening on *:3000');
});