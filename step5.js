var fs = require('fs')

fs.readdir(process.argv[2], (err, data) => {
  var newList = data.map((item) => {
    if (item.split('.')[1] === process.argv[3]) {
      console.log(item)
    }
  })
})




// offical solution

    // var fs = require('fs')
    // var path = require('path')
    
    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]
    
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })


