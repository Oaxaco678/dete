var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))
 yRsjZDm5P7
delete pkg.scripts.postinstall

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
