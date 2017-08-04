

var fs = require('fs')
var path = require('path')
var  result = [];
var j = 0;
 module.exports = function readDirectory (directoryName, extension, callbackFunction ) {

  // console.log("ext arg="+directoryName+ " "+extension);
  fs.readdir(directoryName,
    function doneReading(err, dirContents) {
      if (err)
        return callbackFunction(err)

      if(extension.includes('.'))
        return callbackFunction("Second argument contains a dot")
        var ext= "."+extension
      for(var i =0;i<dirContents.length;i++){
        //console.log("here for!!"+ path.extname(dirContents[i]) + " "+ ext);
        if(path.extname(dirContents[i])==ext){
          //console.log("here!!");
          result[j]= dirContents[i];
          //console.log("res="+result[j]);
          j++;
        }
      }
       callbackFunction(null, result)
    })
}
