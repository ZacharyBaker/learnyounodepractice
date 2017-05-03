let myModule = require('./learnstep6b.js')

let myCallback = (err, data) => {
  if (err) return console.log(err)
  data.forEach(d=>console.log(d))
}

myModule(process.argv[2], process.argv[3], myCallback)