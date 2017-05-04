var http = require('http')
let obj = {}

// function countObj(ob) {
//   if (Object.keys(ob).length >= 3){
//     for (let i = 1; i < 4; i++) {
//       console.log(ob[i])
//     }
//   } else {
//     // console.log('keep waiting')
//   }
// }

// http.get(process.argv[2], response => {
//   response.setEncoding('utf8')
//   let dude = []
//   response.on('data', data => dude.push(data))
//   response.on('end', () => {
//     obj['1'] = dude.join('')
//     countObj(obj)
//   })
// })
// http.get(process.argv[3], response => {
//   response.setEncoding('utf8')
//   let dude = []
//   response.on('data', data => dude.push(data))
//   response.on('end', () => {
//     obj['2'] = dude.join('')
//     countObj(obj)
//   })
// })
// http.get(process.argv[4], response => {
//   response.setEncoding('utf8')
//   let dude = []
//   response.on('data', data => dude.push(data))
//   response.on('end', () => {
//     obj['3'] = dude.join('')
//     countObj(obj)
//   })
// })



///////////////////

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }









