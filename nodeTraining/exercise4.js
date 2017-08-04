var fs = require('fs')
var numb = undefined

function countLines(callback){
fs.readFile(process.argv[2],
  function doneReading(err, fileContents) {
     var a = fileContents.toString().split('\n');
     numb = a.length - 1
    callback()
  })
}

function logResult() {
  console.log(numb)
}

countLines(logResult)
