var fs = require('fs')
fs.readdir(process.argv[2], (err, list) => {
  list.map(file => {
    file.split('.')[1] === process.argv[3] ? console.log(file):null
  })
})
