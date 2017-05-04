var http = require('http')
let arr = []
http.get(process.argv[2], response => {
  response.setEncoding('utf8')
  response.on('data', data => arr.push(data))
  response.on('end', () => {
    let num = arr.join('').length
    let str = arr.join('')
    console.log(num)
    console.log(str)
  })
})