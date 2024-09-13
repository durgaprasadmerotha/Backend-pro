const { Socket } = require('engine.io')
const express = require('express')
const http = require('http')
const SocketIo = require('socket.io')
const port = 3000




const app = express()
const server = http.createServer(app)
const io = new SocketIo.Server(server)

app.set('view engine','ejs')

io.on('connection', (Socket) => {
    console.log('user connected')

    Socket.on("message", (msg) => {
        // console.log(msg);
        io.emit("message","hello from server")
    })
    
})




app.get('/', (req, res) => {
  res.render('index')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})