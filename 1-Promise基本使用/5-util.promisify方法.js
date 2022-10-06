const util = require('util')

const fs = require('fs')

let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./resource/context.txt').then(
    value => console.log(value.toString()),
    reason => console.log(reason)
)