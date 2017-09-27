

var mymodule = require('./exercise6module.js')
var result="";
//console.log("ext="+process.argv[3].split('.'));
mymodule(process.argv[2],process.argv[3].split('.'), logResult)

function logResult(err, data) {
  if(err)
    console.log("There has been an error!!");
    else {
      for(var i=0;i<data.length;i++){
        result+= data[i] +"\n";
      }
      console.log(result);
    }
}
