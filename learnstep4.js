var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data)=>{
  if (err) return
  if (data) {
    console.log(data.split('\n').length-1)
  }
})

