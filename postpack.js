var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

delete pkg.scripts.postinstall
 Mcj3u3rvGF
fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
