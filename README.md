# 参考記事
・socket.ioの公式サイトドキュメント(v4)<br>
https://socket.io/docs/v4

・chatを作るtutorial<br>
https://socket.io/get-started/chat


# 事前知識
Node.jsまたはsocket.ioの基本的な予備知識はほとんど必要がない。

# Socket.ioとは?
Socket.IOは、ブラウザとサーバー間のリアルタイム、双方向、イベントベースの通信を可能にするライブラリ

# Start
1. node.jsがインストールされていることを確認する
```
node -v
```
2. package.jsonを追加
```
touch package.json
vi package.json
#貼り付け
{
    "name": "socket-chat-example",
    "version": "0.0.1",
    "description": "my first socket.io app",
    "dependencies": {}
}
#確認
cat package.json

```
3. expressのインストール

```
npm install express@4
```

4. サーバの作成
5. htmlを外部ファイルから読み込み(index.js)
```
res.sendFile
```

6. socket.ioのインストール
```
npm install socket.io
```



# その他参考記事
1. チャットを作りながら学ぶSocket.IO〈Node.jsシリーズ vol.4〉<br>
=>日本語で解説してくれていてわかりやすい<br>
https://engineer.recruit-lifestyle.co.jp/techblog/2015-07-29-node4/

2. window.scrollTo(index.html)<br>
https://developer.mozilla.org/ja/docs/Web/API/Window/scrollTo