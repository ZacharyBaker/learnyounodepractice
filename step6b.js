var fs = require('fs')


module.exports = (dir, fileExt, callback) => {
  var list = fs.readdir(dir, callback)
  return list.filter()
}