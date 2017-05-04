var net = require('net')
var strftime = require('strftime')

let server = net.createServer((socket) => {

  var d = strftime('%F %H:%M', new Date())
  socket.end(`${d}\n`)
})

server.listen(process.argv[2])