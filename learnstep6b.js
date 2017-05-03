var fs = require('fs')


module.exports = (dir, ext, cb) => {
  fs.readdir(dir, (err, files) => {
    if (err) return cb(err)
    let filteredFiles = files.filter(file => {
      return file.split('.')[1] === ext
    })
    cb(null, filteredFiles)
  })
}