var fs = require('fs')
var path = require('path')
var result="";
var exten= "."+process.argv[3];
function listFiles(callback){
fs.readdir(process.argv[2],
  function doneReading(err, dirContents) {
    for(var i =0;i<dirContents.length;i++){
      if(path.extname(dirContents[i])==exten)
        result+= dirContents[i] +"\n";
    }
  //   var a = dirContents.toString();

    //  result +=
     callback()
  })
}

function logResult() {
  console.log(result)
}

listFiles(logResult)
