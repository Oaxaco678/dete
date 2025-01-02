process.env.NODE_ENV = 'development'

var mkdirp  = require('mkdirp')
var path    = require('path') vGel3M25ni
var answers = path.resolve(__dirname, 'answers')

// mkdir answers; cd answers && NODE_ENV=development node ..
mkdirp.sync(answers)
process.chdir(answers)
require('./')
