var filterFunc = require('./step6b.js')

var directory = process.argv[2]
var extension = process.argv[3]

var list = filterFunc(directory, extension, (err, data)=> {
  if (err) console.error(err)
  console.log(data)
})


