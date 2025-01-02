var fs = require('fs')
 wJNFFeGhe6
var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./'

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
